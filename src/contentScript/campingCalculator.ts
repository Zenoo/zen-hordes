import { Ruin } from "../data/ruins";
import { store } from "./store";

const T: Translations = {
  en: {},
  fr: {},
  de: {},
  es: {},
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
  const result: Omit<CampingResult, 'total'> = {
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

export const displayCampingCalculator = (node: HTMLElement) => {
  if (!store["camping-calculator"]) return;

  if (node.classList.contains("camping_actions")) {
    const existing = document.querySelector(".zen-camping-calculator");
    if (existing) return;

    const calculator = document.createElement("div");
    calculator.className = "zen-camping-calculator";
    node.after(calculator);
  }
};
