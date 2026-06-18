import * as fs from "fs";
import * as path from "path";
import { Lang, languages, Reward } from "./generateData";
import YAML from "yaml";

const getTitleName = (names: Record<Lang, string | string[]>, lang: Lang) => {
  const name = names[lang];

  if (typeof name === "string") {
    return name;
  }

  const lastName = name[name.length - 1];

  if (!lastName) {
    throw new Error(`${JSON.stringify(name)} has no last name`);
  }

  return lastName;
};

export const exportTitles = async () => {
  // Get file from the main repo
  const response = await fetch(
    "https://gitlab.com/eternaltwin/myhordes/myhordes/-/raw/master/packages/myhordes-fixtures/src/templates/Service/AwardTitleDataService.php"
  );
  const text = await response.text();

  // Get titles
  // https://regex101.com/r/v07Wo8/1
  const titlesRegex =
    /(?<!# |\/\/ )\$container->add\(\)->title\('(.+)'\)->unlockquantity\((\d+)\)->associatedtag\('[^)]+'\)->associatedpicto\('(.+)'\)/gm;
  const rewards = [...text.matchAll(titlesRegex)].reduce<
    Record<
      string,
      {
        pointsOnFirstUnlock?: number;
        titles: {
          name: Record<Lang, string | string[]>;
          quantity: number;
          points?: number;
        }[];
      }
    >
  >((acc, [, germanTitle, quantity, picto]) => {
    if (!germanTitle || !quantity || !picto) {
      throw new Error("Title, quantity or picto not found");
    }

    if (!acc[picto]) {
      acc[picto] = {
        titles: [],
      };
    }
    acc[picto].titles.push({
      name: {
        [Lang.DE]: germanTitle.replace(/\\'/g, "'"), // Replace escaped quotes
        [Lang.EN]: "",
        [Lang.FR]: "",
        [Lang.ES]: "",
      },
      quantity: +quantity,
    });
    return acc;
  }, {});

  // Get title translations from the main repo
  for (const lang of [Lang.EN, Lang.FR, Lang.ES]) {
    const titlesResponse = await fetch(
      `https://gitlab.com/eternaltwin/myhordes/myhordes/-/raw/master/translations/game+intl-icu.${lang}.yml`
    );
    const titlesText = await titlesResponse.text();
    const titlesData = YAML.parse(titlesText);

    Object.values(rewards).forEach((reward) => {
      reward.titles.forEach((title) => {
        const translatedTitle = titlesData[getTitleName(title.name, Lang.DE)];

        if (typeof translatedTitle === "string") {
          // Some titles include a query depending on the player gender
          if (translatedTitle.includes("ref__gender")) {
            title.name[lang] = Array.from(
              translatedTitle.matchAll(/\{([^{}]+)\}/g)
            ).map((m) => m[1] ?? "");
          } else {
            title.name[lang] = translatedTitle.trim();
          }
        } else {
          console.warn(
            `No translation found for ${getTitleName(
              title.name,
              Lang.DE
            )} in ${lang}. Using German title as fallback.`
          );
          title.name[lang] = getTitleName(title.name, Lang.DE);
        }
      });
    });
  }

  // Get points from the main repo
  const pointsResponse = await fetch(
    "https://gitlab.com/eternaltwin/myhordes/myhordes/-/raw/master/src/Service/User/PictoService.php"
  );
  const pointsText = await pointsResponse.text();
  const sanitizedPointsText = pointsText.replace(/\s+/gm, "");

  // Get points
  // https://regex101.com/r/e2AakP/1
  const pointsRegex =
    /(?:'([^']+)',?)?(?:'([^']+)')?(?:'([^']+)',?)?(?:'([^']+)',?)?(?:'([^']+)',?)?(?:'([^']+)',?)?(?:'([^']+)',?)?(?:'([^']+)',?)?(?:'([^']+)',?)?(?:'([^']+)',?)?(?:'([^']+)',?)?=>match\(true\){[^<]+(?:<(\d+)[^<}]+)?(?:<(\d+)[^<}]+)?(?:<(\d+)[^<}]+)?(?:<(\d+)[^<}]+)?(?:<(\d+)[^<}]+)?(?:<(\d+)[^<}]+)?[^}]+default=>([\d.]+)(?:\+([\d.]+))?(?:\+([\d.]+))?(?:\+([\d.]+))?(?:\+([\d.]+))?(?:\+([\d.]+))?/gm;
  [...sanitizedPointsText.matchAll(pointsRegex)].forEach(
    ([
      ,
      picto1,
      picto2,
      picto3,
      picto4,
      picto5,
      picto6,
      picto7,
      picto8,
      picto9,
      picto10,
      picto11,
      quantity1,
      quantity2,
      quantity3,
      quantity4,
      quantity5,
      quantity6,
      points1,
      points2,
      points3,
      points4,
      points5,
      points6,
    ]) => {
      [
        picto1,
        picto2,
        picto3,
        picto4,
        picto5,
        picto6,
        picto7,
        picto8,
        picto9,
        picto10,
        picto11,
      ].forEach((picto) => {
        if (!picto) return;

        [
          quantity1,
          quantity2,
          quantity3,
          quantity4,
          quantity5,
          quantity6,
        ].forEach((quantity, index) => {
          if (typeof quantity === "undefined") return;

          if (!rewards[picto]) {
            throw new Error(`Picto ${picto} not found in titles list`);
          }

          const points = [points1, points2, points3, points4, points5, points6][
            index
          ];

          if (typeof points === "undefined") {
            throw new Error(
              `Points not found for picto ${picto} at index ${index}`
            );
          }

          const title = rewards[picto].titles.find(
            (t) => t.quantity === +quantity
          );

          if (!title) {
            // If we didn't find a title for quantity 1,
            // it means it's the amount of points for the first unlock, so we can set it to the reward object
            if (+quantity === 1) {
              rewards[picto].pointsOnFirstUnlock = +points;
              return;
            }

            throw new Error(
              `Title not found for picto ${picto} at index ${index} for quantity ${quantity}`
            );
          }

          title.points = +points;
        });
      });
    }
  );

  // Save titles to a file
  fs.writeFileSync(
    path.join(__dirname, "data", "titles.json"),
    JSON.stringify(rewards, null, 2),
    "utf-8"
  );

  console.log("titles.json file has been generated.");

  return rewards;
};

const newReward = (reward: Reward, title: string, quantity: number) => {
  if (!reward.titles) {
    reward.titles = [];
  }
  reward.titles.push({
    name: languages.reduce((acc, lang) => {
      acc[lang] = title;
      return acc;
    }, {} as Record<Lang, string>),
    quantity,
  });
};

export const addHiddenRewardTitles = (rewards: Record<string, Reward>) => {
  for (const reward of Object.values(rewards)) {
    switch (reward.id) {
      case "r_decofeist_#00":
        newReward(reward, "Enguirlandé", 25);
        break;
      case "r_cburn_#00":
        newReward(reward, "Tout va bien", 50);
        newReward(reward, "Cendrier de l'Outre-Monde", 100);
        break;
      case "r_thermal_#00":
        newReward(reward, "Ils sont fous ces romains!", 5);
        newReward(reward, "Aqua ça sert ?", 10);
        newReward(reward, "Comme un poney dans l'eau", 15);
        newReward(reward, "Qui m'Hammam me suive!", 20);
        break;
      case "r_eventpart_#00":
        newReward(reward, "Veni, vidi, perdidi", 1);
        break;
      case "r_jbasic_#00":
        newReward(reward, "Aucun titre à débloquer", 10);
        newReward(reward, "Même gratuit, je ne paie pas.", 25);
        newReward(reward, "Moldu", 75);
        newReward(reward, "Norman Normal", 150);
        newReward(reward, "Point fort : trop faible.", 299);
        break;
      case "r_kohlmb_#00":
        newReward(reward, "Citoyen Koh-Lambdais", 1);
        break;
      case "r_nodrug_#00":
        newReward(reward, "Breaking Good", 1500);
        newReward(reward, "Trop clean pour être honnête", 2500);
        newReward(reward, "Garanti sans OGM", 3333);
        newReward(reward, "Antivax", 4500);
        newReward(reward, "La drogue c'est mal, m'voyez", 6666);
        newReward(reward, "Accro à mon point de contrôle", 8500);
        newReward(reward, "Prix Nobel de Santé", 10000);
        break;
      case "r_camp_#00":
        newReward(reward, "Je ne suis pas là", 400);
        newReward(reward, "Juste moi et les étoiles...", 450);
        newReward(reward, "Immunisé contre les moustiques", 499);
        newReward(reward, "Dormir en ville ? Pourquoi ?", 600);
        newReward(reward, "J'irai dormir chez vous", 700);
        newReward(reward, "Mieux seul que mal accompagné", 800);
        newReward(reward, "SDF", 900);
        newReward(reward, "Roi du désert", 1000);
        break;
      case "r_animal_#00":
        newReward(reward, "30 millions d'ennemis", 500);
        break;
    }
  }
};
