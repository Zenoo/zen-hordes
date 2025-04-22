import { ItemId, items } from "../data/items";
import { Ruin, ruins } from "../data/ruins";
import { ASSETS } from "../utils/constants";
import { store } from "./store";
import { t } from "./translate";

const T: Translations = {
  en: {
    campingCalculator: "Camping Calculator",
    more: "More",
    less: "Less",
    alreadyHiddenCitizens: "Already hidden citizens",
    defenseObjects: "Defense objects",
    manualImprovements: "Manual improvements (-3 per night)",
    kmDistance: "Distance (km)",
    zombies: "Zombies",
    camouflaged: "Camouflaged (reduces zombies malus)",
    night: "Night",
    lighthouseBuilt: "Lighthouse built",
    devastatedTown: "Devastated town",
    reclusiveLevel: "Reclusive level (SUPER)",
    pandemonium: "Pandemonium",
    previousCampings: "Number of nights already camped",
    campingItems: "Camping items",
    noRuin: "No ruin",
    total: "Total",
  },
  fr: {
    campingCalculator: "Calculateur de camping",
    more: "Plus",
    less: "Moins",
    alreadyHiddenCitizens: "Citoyens déjà cachés",
    defenseObjects: "Objets de défense",
    manualImprovements: "Améliorations manuelles (-3 par nuit)",
    kmDistance: "Distance (km)",
    zombies: "Zombies",
    camouflaged: "Camouflé (réduit le malus zombies)",
    night: "Nuit",
    lighthouseBuilt: "Phare construit",
    devastatedTown: "Ville dévastée",
    reclusiveLevel: "Niveau de reclus (SUPER)",
    pandemonium: "Pandémonium",
    previousCampings: "Nombre de nuits déjà campées",
    campingItems: "Objets de camping",
    noRuin: "Aucun bâtiment",
    total: "Total",
  },
  de: {
    campingCalculator: "Camping Rechner",
    more: "Mehr",
    less: "Weniger",
    alreadyHiddenCitizens: "Bereits versteckte Bürger",
    defenseObjects: "Verteidigungsobjekte",
    manualImprovements: "Manuelle Verbesserungen (-3 pro Nacht)",
    kmDistance: "Entfernung (km)",
    zombies: "Zombies",
    camouflaged: "Getarnt (reduziert Zombies-Malus)",
    night: "Nacht",
    lighthouseBuilt: "Leuchtturm gebaut",
    devastatedTown: "Verwüstete Stadt",
    reclusiveLevel: "Zurückgezogene Stufe (SUPER)",
    pandemonium: "Pandämonium",
    previousCampings: "Anzahl der bereits gecampten Nächte",
    campingItems: "Campingartikel",
    noRuin: "Keine Ruine",
    total: "Gesamt",
  },
  es: {
    campingCalculator: "Calculadora de Camping",
    more: "Más",
    less: "Menos",
    alreadyHiddenCitizens: "Ciudadanos ya ocultos",
    defenseObjects: "Objetos de defensa",
    manualImprovements: "Mejoras manuales (-3 por noche)",
    kmDistance: "Distancia (km)",
    zombies: "Zombis",
    camouflaged: "Camuflado (reduce el malus de zombis)",
    night: "Noche",
    lighthouseBuilt: "Faro construido",
    devastatedTown: "Ciudad devastada",
    reclusiveLevel: "Nivel de recluso (SUPER)",
    pandemonium: "Pandemonium",
    previousCampings: "Número de noches ya acampadas",
    campingItems: "Artículos de camping",
    noRuin: "No hay ruina",
    total: "Total",
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

const params = {
  alreadyHiddenCitizens: 0,
  defenseObjects: 0,
  manualImprovements: 0,
  kmDistance: 1,
  zombies: 0,
  previousCampings: 0,
  campingItems: 0,
  reclusiveLevel: 1,
  ruin: undefined as Ruin | undefined,
  camouflaged: false,
  night: true,
  lighthouseBuilt: false,
  devastatedTown: false,
  tomb: false,
  pandemonium: false,
  job: Job.Resident, // Default job
};

type CampingParams = typeof params;

const result = {
  total: 0,
  unlimitedTotal: 0,
  alreadyHiddenCitizens: 0,
  defenseObjects: 0,
  manualImprovements: 0,
  kmDistance: 0,
  zombies: 0,
  previousCampings: 0,
  campingItems: 0,
  ruin: 0,
  camouflaged: 0,
  night: 0,
  lighthouseBuilt: 0,
  devastatedTown: 0,
  tomb: 0,
};

const updateCampingResult = () => {
  let total = 0;

  // Camping spots
  const spots = params.ruin ? params.ruin.camping.spots : 0;

  // Campsite base value (-25% without a ruin)
  // Only applied if a spot is available
  const ruinBaseValue = params.ruin ? params.ruin.camping.baseValue : -25;
  result.ruin = ruinBaseValue;
  if (params.alreadyHiddenCitizens < spots) {
    total += ruinBaseValue;
    result.alreadyHiddenCitizens = 0;
  } else {
    result.alreadyHiddenCitizens = -ruinBaseValue;
  }

  // Campsite upgrades

  // 9% per defense object
  const defenseObjectsValue = params.defenseObjects * 9;
  result.defenseObjects = defenseObjectsValue;
  total += defenseObjectsValue;

  // 5% per manual improvement
  const manualImprovementsValue = params.manualImprovements * 5;
  result.manualImprovements = manualImprovementsValue;
  total += manualImprovementsValue;

  // Distance
  const distanceValue = (() => {
    switch (params.kmDistance) {
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
  result.kmDistance = distanceValue;
  total += distanceValue;

  // Zombies
  // -7% per zombie
  const zombiesValue = params.zombies * 7;
  result.zombies = -zombiesValue;
  total -= zombiesValue;

  // Camouflaged means each zombie is only -3%, making it +4% per zombie
  const camouflagedValue = params.camouflaged ? params.zombies * 4 : 0;
  result.camouflaged = camouflagedValue;
  total += camouflagedValue;

  // Night bonus
  const nightValue = params.night ? 10 : 0;
  result.night = nightValue;
  total += nightValue;

  // Lighthouse bonus
  const lighthouseValue = params.lighthouseBuilt ? 25 : 0;
  result.lighthouseBuilt = lighthouseValue;
  total += lighthouseValue;

  // Devastated town malus
  const devastatedTownValue = params.devastatedTown ? -50 : 0;
  result.devastatedTown = devastatedTownValue;
  total += devastatedTownValue;

  // Previous campings
  const previousCampingsValue = (() => {
    switch (params.previousCampings) {
      case 0:
        return params.pandemonium ? 60 : 0;
      case 1:
        return params.pandemonium
          ? params.reclusiveLevel
            ? 65
            : 80
          : params.reclusiveLevel
          ? 10
          : 20;
      case 2:
        return params.pandemonium
          ? params.reclusiveLevel
            ? 70
            : 90
          : params.reclusiveLevel
          ? 20
          : 45;
      case 3:
        return params.pandemonium
          ? params.reclusiveLevel
            ? 80
            : 100
          : params.reclusiveLevel
          ? 40
          : 65;
      case 4:
        return params.pandemonium
          ? params.reclusiveLevel
            ? 90
            : 110
          : params.reclusiveLevel
          ? 50
          : 80;
      case 5:
        return params.pandemonium
          ? params.reclusiveLevel
            ? 100
            : 160
          : params.reclusiveLevel
          ? 60
          : 130;
      case 6:
        return params.pandemonium
          ? params.reclusiveLevel > 1
            ? 110
            : 210
          : params.reclusiveLevel > 1
          ? 80
          : 180;
      case 7:
        return params.pandemonium
          ? params.reclusiveLevel > 1
            ? 160
            : 310
          : params.reclusiveLevel > 1
          ? 130
          : 280;
      default:
        return params.pandemonium ? 510 : 480;
    }
  })();
  result.previousCampings = -previousCampingsValue;
  total -= previousCampingsValue;

  // Position
  const positionValue = (() => {
    switch (params.alreadyHiddenCitizens) {
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
  const campingItemsValue = params.campingItems * 5;
  result.campingItems = campingItemsValue;
  total += campingItemsValue;

  // Tomb bonus
  const tombValue = params.tomb ? 8 : 0;
  result.tomb = tombValue;
  total += tombValue;

  result.unlimitedTotal = total;

  // Limit chances to 99% or 90% depending on the job and reclusiveLevel
  const max =
    params.job === Job.Survivalist
      ? 999
      : params.reclusiveLevel === 4
      ? 99
      : 90;

  total = Math.min(max, total);
  result.total = total;
};

const findItem = (node: HTMLElement) => {
  return Object.values(items).find((item) => {
    const img = node.querySelector<HTMLImageElement>(".item-icon img");
    if (!img) return false;

    // Check if the item name matches the icon alt
    const itemName = item.name[store["hordes-lang"]];
    const iconAlt = img.alt;

    if (itemName !== iconAlt) {
      return false;
    }

    // Check if the item icon matches the icon src
    const imgSrc = img.src;
    const iconMatch = imgSrc
      ? /item\/(.+)\..+\.gif/.exec(imgSrc)?.[1] ?? ""
      : "";

    if (iconMatch !== item.icon) {
      return false;
    }

    return true;
  });
};

const jobItems: Record<Job, ItemId[]> = {
  [Job.Resident]: [ItemId.BASIC_SUIT, ItemId.BASIC_SUIT_DIRT],
  [Job.Guardian]: [ItemId.SHIELD],
  [Job.Scavenger]: [ItemId.PELLE],
  [Job.Scout]: [ItemId.VEST_OFF, ItemId.VEST_ON],
  [Job.Survivalist]: [ItemId.SURV_BOOK],
  [Job.Tamer]: [
    ItemId.TAMED_PET,
    ItemId.TAMED_PET_DRUG,
    ItemId.TAMED_PET_GONE,
    ItemId.TAMED_PET_OFF,
  ],
  [Job.Technician]: [ItemId.KEYMOL],
};

const getJob = () => {
  let job: Job = Job.Resident;
  const items = [
    ...document.querySelectorAll<HTMLElement>(
      "hordes-passive-inventory li.item"
    ),
  ].reverse();

  for (const itemElement of items) {
    // Get item
    const item = findItem(itemElement);

    if (!item) {
      throw new Error("Item not found");
    }

    // Check if the item is a job item
    let found = false;
    for (const [currentJob, items] of Object.entries(jobItems)) {
      if (items.includes(item.id)) {
        job = +currentJob as Job;
        found = true;
        break;
      }
    }

    // If a job is found, break the loop
    if (found) {
      break;
    }
  }

  return job;
};

type NumericKeys<T> = Exclude<
  {
    [K in keyof T]: T[K] extends number ? K : never;
  }[keyof T],
  undefined
>;

type BooleanKeys<T> = Exclude<
  {
    [K in keyof T]: T[K] extends boolean ? K : never;
  }[keyof T],
  undefined
>;

type AddButtonProps = {
  params: CampingParams;
  type: "more" | "less";
  key: NumericKeys<CampingParams>;
  min?: number;
  max?: number;
};

const addButton = ({ params, type, key, min, max }: AddButtonProps) => {
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
    }

    if (type === "less" && (typeof min === "undefined" || params[key] > min)) {
      params[key]--;
    }

    updateView();
  });

  return icon;
};

const paramsData: Record<
  keyof CampingParams,
  {
    icon: string;
    min?: number;
    max?: number;
  }
> = {
  ruin: {
    icon: "",
  },
  alreadyHiddenCitizens: {
    icon: "emotes/human.gif",
    min: 0,
  },
  defenseObjects: {
    icon: "icons/item/cat_def.gif",
    min: 0,
  },
  manualImprovements: {
    icon: "icons/small_refine.gif",
    min: 0,
  },
  kmDistance: {
    icon: "emotes/explo.gif",
    min: 1,
  },
  zombies: {
    icon: "icons/small_zombie.gif",
    min: 0,
  },
  camouflaged: {
    icon: "emotes/proscout.gif",
  },
  night: {
    icon: "pictos/r_doutsd.gif",
  },
  lighthouseBuilt: {
    icon: "building/small_lighthouse.gif",
  },
  devastatedTown: {
    icon: "icons/item/item_out_def_broken.gif",
  },
  reclusiveLevel: {
    icon: "icons/actions/hero.gif",
    min: 0,
    max: 4,
  },
  pandemonium: {
    icon: "emotes/pande.gif",
  },
  previousCampings: {
    icon: "emotes/sleep.gif",
    min: 0,
  },
  campingItems: {
    icon: "icons/item/item_smelly_meat.gif",
    min: 0,
  },
  tomb: {
    icon: "building/small_cemetery.gif",
  },
  job: {
    icon: "",
  },
};

const updateView = () => {
  const list = document.querySelector(".zen-camping-calculator ul");
  if (!list) return;

  console.log(params);

  updateCampingResult();

  console.log(result);

  // Update param values
  Object.keys(params).forEach((key) => {
    const paramKey = key as keyof CampingParams;
    const li = list.querySelector(`[data-param="${paramKey}"]`);
    if (li) {
      // Some params don't need the text
      if (
        paramKey !== "job" &&
        paramKey !== "reclusiveLevel" &&
        paramKey !== "pandemonium"
      ) {
        const text = li.querySelector("p");
        if (text) {
          text.textContent = `${result[paramKey]}%`;
        }
      }

      // Update numerical params
      const icon = li.querySelector("[data-zen-amount]");
      if (icon) {
        icon.setAttribute(
          "data-zen-amount",
          params[paramKey]?.toString() || ""
        );
      }

      // Update boolean params
      const booleanIcon = li.querySelector(".zen-boolean-icon");
      if (booleanIcon) {
        if (params[paramKey]) {
          booleanIcon.classList.add("active");
        } else {
          booleanIcon.classList.remove("active");
        }
      }

      // Update ruin
      const ruinIcon = li.querySelector(".zen-ruin-icon");
      if (ruinIcon) {
        if (params.ruin) {
          ruinIcon.parentElement?.classList.remove("crossed");
          ruinIcon.setAttribute(
            "src",
            `${ASSETS}/ruin/${params.ruin.icon}.gif`
          );
          const ruinTitle = params.ruin.name[store["hordes-lang"]];
          ruinIcon.setAttribute("title", ruinTitle);
          ruinIcon.setAttribute("aria-label", ruinTitle);
        } else {
          ruinIcon.parentElement?.classList.add("crossed");
          ruinIcon.setAttribute(
            "src",
            `${ASSETS}/emotes/ruin.gif`
          );
        }
      }
    }
  });

  // Update total
  const total = document.querySelector(".zen-camping-calculator .total-value");
  const unlimitedTotal = document.querySelector(
    ".zen-camping-calculator .unlimited-total-value"
  );
  if (total) {
    total.textContent = `${result.total}%`;
  }
  if (unlimitedTotal) {
    unlimitedTotal.textContent = ` (${result.unlimitedTotal}%)`;
    // Hide unlimited total if it's the same as total
    if (result.unlimitedTotal === result.total) {
      unlimitedTotal.classList.add("hidden");
    } else {
      unlimitedTotal.classList.remove("hidden");
    }
  }
};

const createLine = (key: keyof CampingParams) => {
  const li = document.createElement("li");
  li.setAttribute("data-param", key);

  switch (typeof params[key]) {
    case "number": {
      // Don't display job
      if (key === "job") {
        return;
      }

      const icons = document.createElement("div");
      const text = document.createElement("p");

      // Main icon
      const iconWrapper = document.createElement("span");
      iconWrapper.setAttribute(
        "data-zen-amount",
        params[key]?.toString() || ""
      );
      const icon = document.createElement("img");

      // Set the icon source based on the key
      icon.src = `${ASSETS}/${paramsData[key].icon}`;

      const title = t(T, key);
      iconWrapper.title = title;
      icon.alt = title;
      icon.setAttribute("aria-label", title);
      iconWrapper.appendChild(icon);

      // Less and more buttons
      icons.appendChild(
        addButton({
          params,
          type: "less",
          key: key as NumericKeys<CampingParams>,
          min: paramsData[key].min,
        })
      );
      icons.appendChild(iconWrapper);
      icons.appendChild(
        addButton({
          params,
          type: "more",
          key: key as NumericKeys<CampingParams>,
          max: paramsData[key].max,
        })
      );

      // Some params don't need the text
      if (key !== "reclusiveLevel" && key !== "pandemonium") {
        // Text
        text.textContent = `${result[key]}%`;
      }

      li.appendChild(icons);
      li.appendChild(text);
      break;
    }
    case "boolean": {
      // Don't display camouflaged if not scout
      const job = getJob();
      if (key === "camouflaged" && job !== Job.Scout) {
        return;
      }

      const icons = document.createElement("div");
      const text = document.createElement("p");

      // Main icon
      const iconWrapper = document.createElement("span");
      const icon = document.createElement("img");
      icon.classList.add("zen-boolean-icon");

      // Status
      if (params[key]) {
        icon.classList.add("active");
      }

      // Set the icon source based on the key
      icon.src = `${ASSETS}/${paramsData[key].icon}`;

      const title = t(T, key);
      iconWrapper.title = title;
      icon.alt = title;
      icon.setAttribute("aria-label", title);
      iconWrapper.appendChild(icon);
      icons.appendChild(iconWrapper);

      // Toggle
      iconWrapper.addEventListener("click", () => {
        params[key as BooleanKeys<CampingParams>] =
          !params[key as BooleanKeys<CampingParams>];
        updateView();
      });

      // Some params don't need the text
      if (key !== "reclusiveLevel" && key !== "pandemonium" && key !== "job") {
        // Text
        text.textContent = `${result[key]}%`;
      }

      li.appendChild(icons);
      li.appendChild(text);
      break;
    }
  }

  // Ruin
  if (key === "ruin") {
    const icons = document.createElement("div");
    const text = document.createElement("p");

    const ruinIconWrapper = document.createElement("span");
    const ruinIcon = document.createElement("img");
    ruinIcon.classList.add("zen-ruin-icon");
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
    icons.appendChild(ruinIconWrapper);

    // Text
    text.textContent = `${result.ruin}%`;
    li.appendChild(icons);
    li.appendChild(text);
  }

  return li;
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
    updateCampingResult();

    // Add params
    Object.keys(params).forEach((key) => {
      const paramKey = key as keyof CampingParams;
      const line = createLine(paramKey);
      if (line) {
        list.appendChild(line);
      }
    });

    calculator.appendChild(list);

    // Total
    const totalWrapper = document.createElement("p");
    totalWrapper.classList.add("total");

    const totalText = document.createElement("span");
    totalText.classList.add("total-text");
    totalText.textContent = `${t(T, "total")}: `;
    totalWrapper.prepend(totalText);

    const total = document.createElement("span");
    total.classList.add("total-value");
    total.textContent = `${result.total}%`;
    totalWrapper.appendChild(total);

    const unlimitedTotal = document.createElement("span");
    unlimitedTotal.classList.add("unlimited-total-value");
    unlimitedTotal.textContent = ` (${result.unlimitedTotal}%)`;

    // Hide unlimited total if it's the same as total
    if (result.unlimitedTotal === result.total) {
      unlimitedTotal.classList.add("hidden");
    }

    totalWrapper.appendChild(unlimitedTotal);
    calculator.appendChild(totalWrapper);

    node.after(calculator);
  }
};

export const updateCampingCalculatorWithCurrentParams = (node: HTMLElement) => {
  if (!store["camping-calculator"]) return;

  if (node.getAttribute("for") !== "zone-camp") return;

  // Check if calculator was already updated
  const existing = document.querySelector(
    ".zen-camping-calculator[data-updated]"
  );
  if (existing) return;

  const inventoryItems = document.querySelectorAll<HTMLElement>(
    "hordes-passive-inventory li.item"
  );

  // Distance
  const distance = document.querySelector(".zone-dist .center b");
  const distanceText = distance?.textContent?.replace(/[^\d]/g, "");
  if (distanceText) {
    params.kmDistance = +distanceText;
  }

  // Zombies
  params.zombies = document.querySelectorAll(
    ".zone-subplane.center .actor.zombie"
  ).length;

  // Camping items
  const campingItems = [...inventoryItems].filter((itemElement) => {
    // Get item
    const item = findItem(itemElement);

    if (!item) return false;

    // Check if the item is a camping item
    if (item.id === ItemId.SMELLY_MEAT || item.id === ItemId.SHEET) {
      return true;
    }

    return false;
  });

  params.campingItems = campingItems.length;

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

  // Camouflaged
  params.camouflaged = [...inventoryItems].some((itemElement) => {
    // Get item
    const item = findItem(itemElement);

    if (!item) return false;

    // Check if the item is VEST_ON
    if (item.id === ItemId.VEST_ON) {
      return true;
    }
  });

  // Pandemonium
  params.pandemonium = !!document.querySelector(
    "body[data-theme-primary-modifier='panda']"
  );

  // Job
  params.job = getJob();

  // Update params
  updateView();

  // Set calculator as updated
  const calculator = document.querySelector(".zen-camping-calculator");
  if (calculator) {
    calculator.setAttribute("data-updated", "true");
  }
};
