import { Ruin, ruins } from "../data/ruins";
import { ASSETS } from "../utils/constants";
import { store } from "./store";
import { t } from "./translate";

const T: Translations = {
  en: {
    campingCalculator: "Camping Calculator",
    more: "More",
    less: "Less",
    noRuin: "No ruin",
    alreadyHiddenCitizens: "Already hidden citizens",
  },
  fr: {
    campingCalculator: "Calculateur de camping",
    more: "Plus",
    less: "Moins",
    noRuin: "Aucun bâtiment",
    alreadyHiddenCitizens: "Citoyens déjà cachés",
  },
  de: {
    campingCalculator: "Camping Rechner",
    more: "Mehr",
    less: "Weniger",
    noRuin: "Keine Ruine",
    alreadyHiddenCitizens: "Bereits versteckte Bürger",
  },
  es: {
    campingCalculator: "Calculadora de Camping",
    more: "Más",
    less: "Menos",
    noRuin: "No hay ruina",
    alreadyHiddenCitizens: "Ciudadanos ya ocultos",
  },
};

enum Job {
  Resident,
  Guardian,
  Scavenger,
  Scout,
  Survivalist,
  Tamer,
  Technician,
}

type CampingParams = {
  ruin?: Ruin;
  alreadyHiddenCitizens: number;
  defenseObjects: number;
  manualImprovements: number;
  kmDistance: number;
  zombies: number;
  camouflaged: boolean;
  night: boolean;
  lighthouseBuilt: boolean;
  devastatedTown: boolean;
  reclusiveLevel: number;
  pandemonium: boolean;
  previousCampings: number;
  campingItems: number;
  tomb: boolean;
  job: Job;
};

export type CampingResult = {
  total: number;
  unlimitedTotal: number;
  ruin: number;
  alreadyHiddenCitizens: number;
  defenseObjects: number;
  manualImprovements: number;
  distance: number;
  zombies: number;
  night: number;
  lighthouse: number;
  devastatedTown: number;
  previousCampings: number;
  campingItems: number;
  tomb: number;
};

const getCampingChances = ({
  ruin,
  alreadyHiddenCitizens,
  defenseObjects,
  manualImprovements,
  kmDistance,
  zombies,
  camouflaged,
  night,
  lighthouseBuilt,
  devastatedTown,
  reclusiveLevel,
  pandemonium,
  previousCampings,
  campingItems,
  tomb,
  job,
}: CampingParams): CampingResult => {
  let total = 0;
  const result: Omit<CampingResult, "total"> = {
    unlimitedTotal: 0,
    ruin: 0,
    alreadyHiddenCitizens: 0,
    defenseObjects: 0,
    manualImprovements: 0,
    distance: 0,
    zombies: 0,
    night: 0,
    lighthouse: 0,
    devastatedTown: 0,
    previousCampings: 0,
    campingItems: 0,
    tomb: 0,
  };

  // Camping spots
  const spots = ruin ? ruin.camping.spots : 0;

  // Campsite base value (-25% without a ruin)
  // Only applied if a spot is available
  const ruinBaseValue = ruin ? ruin.camping.baseValue : -25;
  result.ruin = ruinBaseValue;
  if (alreadyHiddenCitizens < spots) {
    total += ruinBaseValue;
  } else {
    result.alreadyHiddenCitizens = -ruinBaseValue;
  }

  // Campsite upgrades

  // 9% per defense object
  const defenseObjectsValue = defenseObjects * 9;
  result.defenseObjects = defenseObjectsValue;
  total += defenseObjectsValue;

  // 5% per manual improvement
  const manualImprovementsValue = manualImprovements * 5;
  result.manualImprovements = manualImprovementsValue;
  total += manualImprovementsValue;

  // Distance
  const distanceValue = (() => {
    switch (kmDistance) {
      case 1:
        return 5;
      case 2:
        return 30;
      case 3:
        return 55;
      case 4:
        return 70;
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
        return 80;
      case 12:
        return 85;
      case 13:
        return 87;
      case 14:
        return 90;
      case 15:
        return 95;
      default:
        return 100;
    }
  })();
  result.distance = distanceValue;
  total += distanceValue;

  // Zombies
  // -7% per zombie (-3% if camouflaged)
  const zombiesValue = zombies * (camouflaged ? 3 : 7);
  result.zombies = -zombiesValue;
  total -= zombiesValue;

  // Night bonus
  const nightValue = night ? 10 : 0;
  result.night = nightValue;
  total += nightValue;

  // Lighthouse bonus
  const lighthouseValue = lighthouseBuilt ? 25 : 0;
  result.lighthouse = lighthouseValue;
  total += lighthouseValue;

  // Devastated town malus
  const devastatedTownValue = devastatedTown ? -50 : 0;
  result.devastatedTown = devastatedTownValue;
  total += devastatedTownValue;

  // Previous campings
  const previousCampingsValue = (() => {
    switch (previousCampings) {
      case 0:
        return pandemonium ? 60 : 0;
      case 1:
        return pandemonium
          ? reclusiveLevel
            ? 65
            : 80
          : reclusiveLevel
          ? 10
          : 20;
      case 2:
        return pandemonium
          ? reclusiveLevel
            ? 70
            : 90
          : reclusiveLevel
          ? 20
          : 45;
      case 3:
        return pandemonium
          ? reclusiveLevel
            ? 80
            : 100
          : reclusiveLevel
          ? 40
          : 65;
      case 4:
        return pandemonium
          ? reclusiveLevel
            ? 90
            : 110
          : reclusiveLevel
          ? 50
          : 80;
      case 5:
        return pandemonium
          ? reclusiveLevel
            ? 100
            : 160
          : reclusiveLevel
          ? 60
          : 130;
      case 6:
        return pandemonium
          ? reclusiveLevel > 1
            ? 110
            : 210
          : reclusiveLevel > 1
          ? 80
          : 180;
      case 7:
        return pandemonium
          ? reclusiveLevel > 1
            ? 160
            : 310
          : reclusiveLevel > 1
          ? 130
          : 280;
      default:
        return pandemonium ? 510 : 480;
    }
  })();
  result.previousCampings = -previousCampingsValue;
  total -= previousCampingsValue;

  // Position
  const positionValue = (() => {
    switch (alreadyHiddenCitizens) {
      case 0:
      case 1:
        return 0;
      case 2:
        return 10;
      case 3:
        return 30;
      case 4:
        return 50;
      default:
        return 70;
    }
  })();
  result.alreadyHiddenCitizens -= positionValue;
  total -= positionValue;

  // Camping items
  // 5% per item
  const campingItemsValue = campingItems * 5;
  result.campingItems = campingItemsValue;
  total += campingItemsValue;

  // Tomb bonus
  const tombValue = tomb ? 8 : 0;
  result.tomb = tombValue;
  total += tombValue;

  result.unlimitedTotal = total;

  // Limit chances to 99% or 90% depending on the job and reclusiveLevel
  const max = job === Job.Survivalist ? 999 : reclusiveLevel === 4 ? 99 : 90;

  total = Math.min(max, total);

  return {
    total,
    ...result,
  };
};

const getCurrentCampingParams = () => {
  const params: CampingParams = {
    ruin: undefined,
    alreadyHiddenCitizens: 0,
    defenseObjects: 0,
    manualImprovements: 0,
    kmDistance: 0,
    zombies: 0,
    camouflaged: false,
    night: false,
    lighthouseBuilt: false,
    devastatedTown: false,
    reclusiveLevel: 0,
    pandemonium: false,
    previousCampings: 0,
    campingItems: 0,
    tomb: false,
    job: Job.Resident, // Default job
  };

  // Ruin
  const ruin = document.querySelector(
    ".ambiant-zone-desc .ruin-info .ruin-name b"
  );
  if (ruin) {
    const ruinName = ruin.textContent?.trim();
    const ruinData = Object.values(ruins).find(
      (r) => r.name[store["hordes-lang"]] === ruinName
    );

    if (ruinData) {
      params.ruin = ruinData;
    } else {
      console.error(`Ruin "${ruinName}" not found in ruins data.`);
    }
  }
  return params;
};

type NumericKeys<T> = Exclude<
  {
    [K in keyof T]: T[K] extends number ? K : never;
  }[keyof T],
  undefined
>;

type AddButtonProps = {
  params: CampingParams;
  type: "more" | "less";
  key: NumericKeys<CampingParams>;
  min?: number;
  max?: number;
  target: HTMLElement;
};

const addButton = ({ params, type, key, min, max, target }: AddButtonProps) => {
  const icon = document.createElement("img");
  icon.src = `${ASSETS}/icons/small_${type}.gif`;
  icon.classList.add(type);

  const label = t(T, type);
  icon.title = label;
  icon.alt = label;
  icon.setAttribute("aria-label", label);

  icon.addEventListener("click", () => {
    if (type === "more" && (typeof max === "undefined" || params[key] < max)) {
      params[key]++;
      target.setAttribute("data-zen-amount", params[key].toString());
    }

    if (type === "less" && (typeof min === "undefined" || params[key] > min)) {
      params[key]--;
      target.setAttribute("data-zen-amount", params[key].toString());
    }
  });

  return icon;
};

export const displayCampingCalculator = (node: HTMLElement) => {
  if (!store["camping-calculator"]) return;

  if (node.classList.contains("camping_actions")) {
    const existing = document.querySelector(".zen-camping-calculator");
    if (existing) return;

    const calculator = document.createElement("div");
    calculator.classList.add("zen-camping-calculator");

    // Title
    const title = document.createElement("h3");
    title.innerText = t(T, "campingCalculator");
    title.classList.add("emphasis");
    calculator.appendChild(title);

    // Params
    const list = document.createElement("ul");
    let params = getCurrentCampingParams();

    // Ruin
    const ruin = document.createElement("li");
    ruin.setAttribute("data-param", "ruin");
    const ruinIconWrapper = document.createElement("span");
    const ruinIcon = document.createElement("img");
    let ruinTitle = t(T, "noRuin");
    if (params.ruin) {
      ruinIcon.src = `${ASSETS}/ruin/${params.ruin.icon}.gif`;
      ruinTitle = params.ruin.name[store["hordes-lang"]];
    } else {
      ruinIcon.src = `${ASSETS}/emotes/ruin.gif`;
      ruinIconWrapper.classList.add("zen-utils", "crossed");
    }
    ruinIconWrapper.title = ruinTitle;
    ruinIcon.alt = ruinTitle;
    ruinIcon.setAttribute("aria-label", ruinTitle);

    ruinIconWrapper.appendChild(ruinIcon);
    ruin.appendChild(ruinIconWrapper);
    list.appendChild(ruin);

    // Already hidden citizens
    const alreadyHiddenCitizens = document.createElement("li");
    alreadyHiddenCitizens.setAttribute("data-param", "alreadyHiddenCitizens");

    const citizenIconWrapper = document.createElement("span");
    citizenIconWrapper.setAttribute(
      "data-zen-amount",
      params.alreadyHiddenCitizens.toString()
    );
    const citizenIcon = document.createElement("img");
    citizenIcon.src = `${ASSETS}/emotes/human.gif`;
    const citizenTitle = t(T, "alreadyHiddenCitizens");
    citizenIconWrapper.title = citizenTitle;
    citizenIcon.alt = citizenTitle;
    citizenIcon.setAttribute("aria-label", citizenTitle);
    citizenIconWrapper.appendChild(citizenIcon);

    alreadyHiddenCitizens.appendChild(
      addButton({
        params,
        type: "less",
        key: "alreadyHiddenCitizens",
        min: 0,
        target: citizenIconWrapper,
      })
    );
    alreadyHiddenCitizens.appendChild(citizenIconWrapper);
    alreadyHiddenCitizens.appendChild(
      addButton({
        params,
        type: "more",
        key: "alreadyHiddenCitizens",
        target: citizenIconWrapper,
      })
    );
    list.appendChild(alreadyHiddenCitizens);

    calculator.appendChild(list);

    node.after(calculator);
  }
};
