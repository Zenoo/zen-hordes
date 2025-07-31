import * as fs from "fs";
import * as path from "path";

export const exportTitles = async () => {
  // Get file from the main repo
  const response = await fetch(
    "https://gitlab.com/eternaltwin/myhordes/myhordes/-/raw/master/packages/myhordes-fixtures/src/templates/Service/AwardTitleDataService.php"
  );
  const text = await response.text();

  // Get titles
  // https://regex101.com/r/v07Wo8/1
  const titlesRegex =
    /(?<!# )\$container->add\(\)->title\('(.+)'\)->unlockquantity\((\d+)\)->associatedtag\('[^)]+'\)->associatedpicto\('(.+)'\)/gm;
  const titlesList = [...text.matchAll(titlesRegex)].reduce<
    Record<string, { quantity: number; points?: number }[]>
  >((acc, [, germanTitle, quantity, picto]) => {
    if (!germanTitle || !quantity || !picto) {
      throw new Error("Title, quantity or picto not found");
    }

    if (!acc[picto]) {
      acc[picto] = [];
    }
    acc[picto].push({ quantity: +quantity });
    return acc;
  }, {});

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

          if (!titlesList[picto]) {
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

          const title = titlesList[picto].find((t) => t.quantity === +quantity);

          if (!title) {
            throw new Error(
              `Title not found for picto ${picto} at index ${index}`
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
    JSON.stringify(titlesList, null, 2),
    "utf-8"
  );

  console.log("titles.json file has been generated.");

  return titlesList;
};
