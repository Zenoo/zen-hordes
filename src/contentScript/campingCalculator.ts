import { items } from "../data/items";
import { ruins } from "../data/ruins";
import { ItemId, Ruin, RuinId } from "../data/types";
import { ASSETS } from "../utils/constants";
import { findItemFromInventory } from "../utils/itemUtils";
import { positionElement } from "../utils/position";
import { tooltip } from "../utils/tooltip";
import { notify, Severity } from "./notify";
import { setStore, store } from "./store";
import { t } from "./translate";

const T: Translations = {
  en: {
    campingCalculator: "camping calculator",
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
    tomb: "Tomb",
    reclusiveLevel: "Reclusive level (SUPER)",
    pandemonium: "Pandemonium",
    previousCampings: "Number of nights already camped",
    campingItems: "Camping items",
    "job.0": "Resident",
    "job.1": "Guardian",
    "job.2": "Scavenger",
    "job.3": "Scout",
    "job.4": "Survivalist",
    "job.5": "Tamer",
    "job.6": "Technician",
    noRuin: "No ruin",
    total: "Total",
    "campingChances.0":
      "You reckon your chances of surviving here are hee haw... Might as well take some cyanide now.",
    "campingChances.11":
      "You reckon your chances of surviving here are really poor. Maybe you should play heads or tails?",
    "campingChances.31":
      "You reckon your chances of surviving here are poor. Difficult to say.",
    "campingChances.51":
      "You reckon your chances of surviving here are limited, but tempting. However, accidents happen...",
    "campingChances.66":
      "You reckon your chances of surviving here are largely satisfactory, as long as nothing unforeseen happens.",
    "campingChances.81":
      "You reckon your chances of surviving here are decent: you just have to hope for the best!",
    "campingChances.91":
      "You reckon your chances of surviving here are good, you should be able to spend the night here.",
    "campingChances.100":
      "You reckon your chances of surviving here are optimal. Nobody would see you, even if they were looking straight at you.",
    reset: "Reset",
    close: "Close",
    settings: "Settings",
    save: "Save current settings to this slot",
    saveSuccess: "Settings saved successfully.",
    slot1: "First save slot",
    slot2: "Second save slot",
    slot3: "Third save slot",
    import: "Import calculator settings",
    export: "Export calculator settings",
    importPrompt: "Paste your calculator code here...",
    importSuccess: "Calculator code imported successfully.",
    importError: "Failed to import calculator code.",
    exportSuccess: "Calculator code copied to clipboard.",
  },
  fr: {
    campingCalculator: "calculateur de camping",
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
    tomb: "Tombe",
    reclusiveLevel: "Niveau de reclus (SUPER)",
    pandemonium: "Pandémonium",
    previousCampings: "Nombre de nuits déjà campées",
    campingItems: "Objets de camping",
    "job.0": "Habitant",
    "job.1": "Gardien",
    "job.2": "Fouineur",
    "job.3": "Éclaireur",
    "job.4": "Ermite",
    "job.5": "Apprivoiseur",
    "job.6": "Technicien",
    noRuin: "Aucun bâtiment",
    total: "Total",
    "campingChances.0":
      "Vous estimez que vos chances de survie ici sont quasi nulles… Autant gober du cyanure tout de suite.",
    "campingChances.11":
      "Vous estimez que vos chances de survie ici sont très faibles. Peut-être que vous aimez jouer à pile ou face ?",
    "campingChances.31":
      "Vous estimez que vos chances de survie ici sont faibles. Difficile à dire.",
    "campingChances.51":
      "Vous estimez que vos chances de survie ici sont limitées, bien que ça puisse se tenter. Mais un accident est vite arrivé…",
    "campingChances.66":
      "Vous estimez que vos chances de survie ici sont à peu près satisfaisantes, pour peu qu’aucun imprévu ne vous tombe dessus.",
    "campingChances.81":
      "Vous estimez que vos chances de survie ici sont correctes : il ne vous reste plus qu’à croiser les doigts !",
    "campingChances.91":
      "Vous estimez que vos chances de survie ici sont élevées : vous devriez pouvoir passer la nuit ici.",
    "campingChances.100":
      "Vous estimez que vos chances de survie ici sont optimales : personne ne vous verrait même en vous pointant du doigt.",
    reset: "Réinitialiser",
    close: "Fermer",
    settings: "Paramètres",
    save: "Sauvegarder les paramètres actuels dans cet emplacement",
    saveSuccess: "Paramètres sauvegardés avec succès.",
    slot1: "Premier emplacement de sauvegarde",
    slot2: "Second emplacement de sauvegarde",
    slot3: "Troisième emplacement de sauvegarde",
    import: "Importer les paramètres du calculateur",
    export: "Exporter les paramètres du calculateur",
    importPrompt: "Collez votre code de calculateur ici…",
    importSuccess: "Code du calculateur importé avec succès.",
    importError: "Échec de l'importation du code du calculateur.",
    exportSuccess: "Code du calculateur copié dans le presse-papiers.",
  },
  de: {
    campingCalculator: "camping rechner",
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
    tomb: "Grab",
    reclusiveLevel: "Zurückgezogene Stufe (SUPER)",
    pandemonium: "Pandämonium",
    previousCampings: "Anzahl der bereits gecampten Nächte",
    campingItems: "Campingartikel",
    "job.0": "Bewohner",
    "job.1": "Wächter",
    "job.2": "Plünderer",
    "job.3": "Späher",
    "job.4": "Überlebenskünstler",
    "job.5": "Dompteur",
    "job.6": "Techniker",
    noRuin: "Keine Ruine",
    total: "Gesamt",
    "campingChances.0":
      "Du schätzt, dass deine Überlebenschancen hier quasi Null sind... Besser gleich 'ne Zyanidkapsel schlucken.",
    "campingChances.11":
      "Du schätzt, dass deine Überlebenschancen hier sehr gering sind. Vielleicht hast du ja Bock 'ne Runde Kopf oder Zahl zu spielen?",
    "campingChances.31":
      "Du schätzt, dass deine Überlebenschancen hier gering sind. Hmmm... schwer zu sagen, wie das hier ausgeht.",
    "campingChances.51":
      "Du schätzt, dass deine Überlebenschancen hier mittelmäßig sind. Ist allerdings einen Versuch wert.. obwohl, Unfälle passieren schnell...",
    "campingChances.66":
      "Du schätzt, dass deine Überlebenschancen hier zufriedenstellend sind - vorausgesetzt du erlebst keine böse Überraschung.",
    "campingChances.81":
      "Du schätzt, dass deine Überlebenschancen hier korrekt sind. Jetzt heißt's nur noch Daumen drücken!",
    "campingChances.91":
      "Du schätzt, dass deine Überlebenschancen hier gut sind. Du müsstest hier problemlos die Nacht verbringen können.",
    "campingChances.100":
      "Du schätzt, dass deine Überlebenschancen hier optimal sind. Niemand wird dich sehen - selbst wenn man mit dem Finger auf dich zeigt.",
    reset: "Zurücksetzen",
    close: "Schließen",
    settings: "Einstellungen",
    save: "Aktuelle Einstellungen in diesem Slot speichern",
    saveSuccess: "Einstellungen erfolgreich gespeichert.",
    slot1: "Erster Speicherplatz",
    slot2: "Zweiter Speicherplatz",
    slot3: "Dritter Speicherplatz",
    import: "Importieren des Rechner-Codes",
    export: "Exportieren des Rechner-Codes",
    importPrompt: "Füge hier deinen Rechner-Code ein...",
    importSuccess: "Import des Rechner-Codes erfolgreich.",
    importError: "Import des Rechner-Codes fehlgeschlagen.",
    exportSuccess: "Rechner-Code in die Zwischenablage kopiert.",
  },
  es: {
    campingCalculator: "calculadora de camping",
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
    tomb: "Tumba",
    reclusiveLevel: "Nivel de recluso (SUPER)",
    pandemonium: "Pandemonium",
    previousCampings: "Número de noches ya acampadas",
    campingItems: "Artículos de camping",
    "job.0": "Habitante",
    "job.1": "Guardián",
    "job.2": "Merodeador",
    "job.3": "Explorador",
    "job.4": "Superviviente",
    "job.5": "Domador",
    "job.6": "Técnico",
    noRuin: "No hay ruina",
    total: "Total",
    "campingChances.0":
      "Crees que tus posibilidades de sobrevivir aquí son casi nulas... ¿Cianuro?",
    "campingChances.11":
      "Crees que tus posibilidades de sobrevivir aquí son muy pocas. ¿Apostamos?",
    "campingChances.31":
      "Crees que tus posibilidades de sobrevivir aquí son pocas. Quién sabe...",
    "campingChances.51":
      "Crees que tus posibilidades de sobrevivir aquí son reducidas, aunque se puede intentar. Tú sabes, podrías sufrir un accidente...",
    "campingChances.66":
      "Crees que tus posibilidades de sobrevivir aquí son aceptables, esperando que no suceda ningún imprevisto.",
    "campingChances.81":
      "Crees que tus posibilidades de sobrevivir aquí son buenas. ¡Cruza los dedos!",
    "campingChances.91":
      "Crees que tus posibilidades de sobrevivir aquí son altas. Podrías pasar la noche aquí.",
    "campingChances.100":
      "Crees que tus posibilidades de sobrevivir aquí son óptimas. Nadie te verá, ni señalándote con el dedo",
    reset: "Reiniciar",
    close: "Cerrar",
    settings: "Ajustes",
    save: "Guardar los ajustes actuales en esta ranura",
    saveSuccess: "Ajustes guardados con éxito.",
    slot1: "Primer espacio de guardado",
    slot2: "Segundo espacio de guardado",
    slot3: "Tercer espacio de guardado",
    import: "Importar los parámetros del calculador",
    export: "Exportar los parámetros del calculador",
    importPrompt: "Pega tu código de la calculadora aquí...",
    importSuccess: "Código de la calculadora importado con éxito.",
    importError: "Error al importar el código de la calculadora.",
    exportSuccess: "Código de la calculadora copiado al portapapeles.",
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

const paramOrder: (keyof CampingParams)[] = [
  "alreadyHiddenCitizens",
  "defenseObjects",
  "manualImprovements",
  "kmDistance",
  "zombies",
  "previousCampings",
  "campingItems",
  "reclusiveLevel",
  "ruin",
  "camouflaged",
  "night",
  "lighthouseBuilt",
  "devastatedTown",
  "tomb",
  "pandemonium",
  "job",
];

/**
 * Generate a unique code representing the current camping parameters.
 * @param params Current camping parameters
 * @returns Unique code as a string
 */
const getCalculatorCode = (params: CampingParams) => {
  const decodedString = paramOrder
    .map((key) => {
      const val = params[key];
      // For booleans, use T/F
      if (typeof val === "boolean") return val ? "T" : "F";

      // For ruin, use R<ID> or R0 for undefined
      if (key === "ruin") return val ? `R${(val as Ruin).id}` : "R0";

      // Shouldn't happen, but just in case
      return String(val ?? "");
    })
    .join(",");

  return btoa(decodedString);
};

const decodeCalculatorCode = (code: string): CampingParams | null => {
  try {
    const decodedString = atob(code.trim());
    const values = decodedString.split(",").map((val) => {
      // For booleans, use T/F
      if (val === "T") return true;
      if (val === "F") return false;

      // For ruin, use R<ID> or R0 for undefined
      if (/^R(\d+)$/.test(val)) {
        const match = val.match(/^R(\d+)$/);
        const value = match ? +(match[1] ?? 0) : 0;

        if (value === 0) return undefined;
        return ruins[value as RuinId] ?? undefined;
      }

      // Shouldn't happen, but just in case
      return Number(val);
    });

    return paramOrder.reduce((acc, key, index) => {
      acc[key] = values[index];
      return acc;
    }, {} as Record<string, unknown>) as CampingParams;
  } catch {
    return null;
  }
};

const updateCampingResult = () => {
  let total = 0;

  // Camping spots
  const spots = params.ruin ? params.ruin.camping.spots : 0;

  // Campsite base value (-25% without a ruin)
  // Only applied if a spot is available
  const ruinBaseValue = params.ruin ? params.ruin.camping.baseValue : -25;
  result.ruin = ruinBaseValue;
  result.alreadyHiddenCitizens = 0;
  if (params.alreadyHiddenCitizens < spots) {
    total += ruinBaseValue;
  } else if (params.ruin) {
    result.alreadyHiddenCitizens = -ruinBaseValue;
  } else {
    total += ruinBaseValue;
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

const jobItems: Record<Job, ItemId[]> = {
  [Job.Resident]: [ItemId.BASIC_SUIT, ItemId.BASIC_SUIT_DIRT],
  [Job.Guardian]: [ItemId.SHIELD],
  [Job.Scavenger]: [ItemId.PELLE],
  [Job.Scout]: [ItemId.VEST_ON, ItemId.VEST_OFF],
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
    const item = findItemFromInventory(itemElement);

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
  calculator: HTMLElement;
  params: CampingParams;
  type: "more" | "less";
  key: NumericKeys<CampingParams>;
  min?: number;
  max?: number;
};

const addButton = ({
  calculator,
  params,
  type,
  key,
  min,
  max,
}: AddButtonProps) => {
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

    // Update previous campings in the store
    if (key === "previousCampings") {
      setStore("previous-campings", params.previousCampings);
    }

    updateView(calculator);
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

const updateView = (calculator: HTMLElement) => {
  const list = calculator.querySelector("ul");
  if (!list) return;

  updateCampingResult();

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
          ruinIcon.setAttribute("src", `${ASSETS}/emotes/ruin.gif`);
        }
      }

      // Update job
      if (paramKey === "job") {
        const jobIcon = li.querySelector("span img");
        if (jobIcon) {
          const jobItemId = jobItems[params.job][0] ?? ItemId.BASIC_SUIT;
          jobIcon.setAttribute(
            "src",
            `${ASSETS}/icons/item/${items[jobItemId].icon}.gif`
          );
          const jobTitle = t(T, `job.${params.job}`);
          jobIcon.setAttribute("title", jobTitle);
          jobIcon.setAttribute("aria-label", jobTitle);
        }
      }

      // Update camouflaged visibility based on job
      if (paramKey === "camouflaged") {
        const job = getJob();
        if (job !== Job.Scout) {
          li.classList.add("hidden");
        } else {
          li.classList.remove("hidden");
        }
      }
    }
  });

  // Update total
  const total = calculator.querySelector(".total-value");
  const unlimitedTotal = calculator.querySelector(".unlimited-total-value");
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

  // Update total description
  const totalDesc = calculator.querySelector(".total-desc");
  if (totalDesc) {
    if (result.total >= 100) {
      totalDesc.textContent = t(T, "campingChances.100");
    } else if (result.total >= 91) {
      totalDesc.textContent = t(T, "campingChances.91");
    } else if (result.total >= 81) {
      totalDesc.textContent = t(T, "campingChances.81");
    } else if (result.total >= 66) {
      totalDesc.textContent = t(T, "campingChances.66");
    } else if (result.total >= 51) {
      totalDesc.textContent = t(T, "campingChances.51");
    } else if (result.total >= 31) {
      totalDesc.textContent = t(T, "campingChances.31");
    } else if (result.total >= 11) {
      totalDesc.textContent = t(T, "campingChances.11");
    } else {
      totalDesc.textContent = t(T, "campingChances.0");
    }
  }
};

const createLine = (
  calculator: HTMLElement,
  key: keyof CampingParams,
  inWiki: boolean
) => {
  const li = document.createElement("li");
  li.setAttribute("data-param", key);

  switch (typeof params[key]) {
    case "number": {
      if (key === "job") break;

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
          calculator,
          params,
          type: "less",
          key: key as NumericKeys<CampingParams>,
          min: paramsData[key].min,
        })
      );
      icons.appendChild(iconWrapper);
      icons.appendChild(
        addButton({
          calculator,
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
        li.classList.add("hidden");
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
        updateView(calculator);
      });

      // Some params don't need the text
      if (key !== "reclusiveLevel" && key !== "job" && key !== "pandemonium") {
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

    // Ruin selector
    const ruinSelector = document.createElement("ul");
    ruinSelector.classList.add("zen-ruin-selector", "heroic_actions");

    // Close button
    const closeButton = document.createElement("li");
    closeButton.classList.add("zen-ruin-close", "help");

    const closeIcon = document.createElement("img");
    closeIcon.src = `${ASSETS}/icons/error.png`;
    closeIcon.alt = t(T, "close");
    closeIcon.title = t(T, "close");
    closeButton.appendChild(closeIcon);

    closeButton.addEventListener("click", () => {
      ruinSelector.classList.remove("active");
    });

    ruinSelector.appendChild(closeButton);

    [
      {
        id: 0,
        name: {
          [Lang.EN]: T[Lang.EN]?.noRuin ?? "",
          [Lang.FR]: T[Lang.FR]?.noRuin ?? "",
          [Lang.DE]: T[Lang.DE]?.noRuin ?? "",
          [Lang.ES]: T[Lang.ES]?.noRuin ?? "",
        },
        icon: "ruin",
        km: {
          min: 1,
          max: 100,
        },
      },
    ]
      .concat(
        Object.values(ruins).sort((a, b) =>
          a.name[store["hordes-lang"]].localeCompare(
            b.name[store["hordes-lang"]]
          )
        )
      )
      .forEach((ruin) => {
        const ruinLi = document.createElement("li");
        ruinLi.classList.add("zen-ruin-item", "heroic_action");
        ruinLi.setAttribute("data-ruin-id", ruin.id.toString());

        // Ruin icon
        const ruinIcon = document.createElement("img");
        ruinIcon.src =
          ruin.id === 0
            ? `${ASSETS}/emotes/ruin.gif`
            : `${ASSETS}/ruin/${ruin.icon}.gif`;
        ruinIcon.alt = ruin.name[store["hordes-lang"]];

        if (ruin.id === 0) {
          ruinIcon.classList.add("no-ruin");
        }

        ruinLi.appendChild(ruinIcon);

        // Ruin title
        const ruinTitle = document.createElement("span");
        ruinTitle.classList.add("label");
        ruinTitle.textContent = ruin.name[store["hordes-lang"]];
        ruinLi.appendChild(ruinTitle);

        // Ruin km
        const ruinKm = document.createElement("em");
        ruinKm.classList.add("em");
        ruinKm.textContent = `[${ruin.km.min} - ${ruin.km.max} km]`;
        ruinLi.appendChild(ruinKm);

        ruinSelector.appendChild(ruinLi);
      });

    li.appendChild(ruinSelector);

    // Open ruin selector on click
    ruinIcon.addEventListener("click", () => {
      const open = ruinSelector.classList.toggle("active");

      if (!open) return;

      // Position the selector (centered on top of the ruin icon)
      positionElement({
        element: ruinSelector,
        relativeTo: calculator,
        anchor: ruinIcon,
        yPosition: inWiki ? "bottom" : "top",
      });
    });

    // Handle ruin selection
    ruinSelector.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      const li = target.closest<HTMLElement>(".zen-ruin-item");
      if (!li) return;

      const ruinId = +(li.getAttribute("data-ruin-id") ?? "0");

      // Set the selected ruin
      params.ruin = ruinId === 0 ? undefined : ruins[ruinId as RuinId];

      updateView(calculator);

      // Close the selector
      ruinSelector.classList.remove("active");
    });
  }

  // Job
  if (key === "job") {
    const icons = document.createElement("div");
    const text = document.createElement("p");

    const jobIconWrapper = document.createElement("span");
    const jobIcon = document.createElement("img");
    jobIcon.classList.add("zen-job-icon");

    const jobItemId = jobItems[params.job][0] ?? ItemId.BASIC_SUIT;
    jobIcon.src = `${ASSETS}/icons/item/${items[jobItemId].icon}.gif`;
    const jobTitle = t(T, `job.${params.job}`);
    jobIconWrapper.title = jobTitle;
    jobIcon.alt = jobTitle;
    jobIcon.setAttribute("aria-label", jobTitle);

    jobIconWrapper.appendChild(jobIcon);
    icons.appendChild(jobIconWrapper);

    li.appendChild(icons);
    li.appendChild(text);

    // Job selector
    const jobSelector = document.createElement("ul");
    jobSelector.classList.add("zen-job-selector", "heroic_actions");

    // Close button
    const closeButton = document.createElement("li");
    closeButton.classList.add("zen-job-close", "help");

    const closeIcon = document.createElement("img");
    closeIcon.src = `${ASSETS}/icons/error.png`;
    closeIcon.alt = t(T, "close");
    closeIcon.title = t(T, "close");
    closeButton.appendChild(closeIcon);

    closeButton.addEventListener("click", () => {
      jobSelector.classList.remove("active");
    });

    jobSelector.appendChild(closeButton);

    [
      {
        id: Job.Resident,
        icon: items[ItemId.BASIC_SUIT].icon,
      },
      {
        id: Job.Guardian,
        icon: items[ItemId.SHIELD].icon,
      },
      {
        id: Job.Scavenger,
        icon: items[ItemId.PELLE].icon,
      },
      {
        id: Job.Scout,
        icon: items[ItemId.VEST_ON].icon,
      },
      {
        id: Job.Survivalist,
        icon: items[ItemId.SURV_BOOK].icon,
      },
      {
        id: Job.Tamer,
        icon: items[ItemId.TAMED_PET].icon,
      },
      {
        id: Job.Technician,
        icon: items[ItemId.KEYMOL].icon,
      },
    ].forEach((job) => {
      const jobLi = document.createElement("li");
      jobLi.classList.add("zen-job-item", "heroic_action");
      jobLi.setAttribute("data-job-id", job.id.toString());

      // Job icon
      const jobIcon = document.createElement("img");
      jobIcon.classList.add("job-icon");
      jobIcon.src = `${ASSETS}/icons/item/${job.icon}.gif`;
      jobIcon.alt = t(T, `job.${job.id}`);

      jobLi.appendChild(jobIcon);

      // Job title
      const jobTitle = document.createElement("span");
      jobTitle.classList.add("label");
      jobTitle.textContent = t(T, `job.${job.id}`);
      jobLi.appendChild(jobTitle);

      jobSelector.appendChild(jobLi);
    });

    li.appendChild(jobSelector);

    // Open job selector on click
    jobIcon.addEventListener("click", () => {
      const open = jobSelector.classList.toggle("active");

      if (!open) return;

      // Position the selector
      positionElement({
        element: jobSelector,
        relativeTo: calculator,
        anchor: jobIcon,
        yPosition: inWiki ? "bottom" : "top",
      });
    });

    // Handle job selection
    jobSelector.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      const li = target.closest<HTMLElement>(".zen-job-item");
      if (!li) return;

      const jobId = +(li.getAttribute("data-job-id") ?? "0");

      // Set the selected job
      params.job = jobId;

      updateView(calculator);

      // Close the selector
      jobSelector.classList.remove("active");
    });
  }

  return li;
};

export const displayCampingCalculator = (node: HTMLElement) => {
  if (!store["camping-calculator"]) return;

  const inWiki = node.classList.contains("zen-wiki-camping-calculator-anchor");

  if (!node.classList.contains("camping_actions") && !inWiki) return;

  const existing = node.nextElementSibling?.classList.contains(
    "zen-camping-calculator"
  );
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
    const line = createLine(calculator, paramKey, inWiki);
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

  // Total description
  const totalDesc = document.createElement("p");
  totalDesc.classList.add("total-desc");

  if (result.total >= 100) {
    totalDesc.textContent = t(T, "campingChances.100");
  } else if (result.total >= 91) {
    totalDesc.textContent = t(T, "campingChances.91");
  } else if (result.total >= 81) {
    totalDesc.textContent = t(T, "campingChances.81");
  } else if (result.total >= 66) {
    totalDesc.textContent = t(T, "campingChances.66");
  } else if (result.total >= 51) {
    totalDesc.textContent = t(T, "campingChances.51");
  } else if (result.total >= 31) {
    totalDesc.textContent = t(T, "campingChances.31");
  } else if (result.total >= 11) {
    totalDesc.textContent = t(T, "campingChances.11");
  } else {
    totalDesc.textContent = t(T, "campingChances.0");
  }
  calculator.appendChild(totalDesc);

  // Settings button
  const settingsButton = document.createElement("button");
  settingsButton.classList.add("zen-calculator-settings-button");

  const settingsIcon = document.createElement("img");
  settingsIcon.src = `${ASSETS}/icons/item/item_screw.gif`;
  const settingsLabel = t(T, "settings");
  settingsIcon.alt = settingsLabel;
  settingsButton.setAttribute("aria-label", settingsLabel);
  settingsButton.appendChild(settingsIcon);
  calculator.appendChild(settingsButton);

  tooltip({
    id: "zen-camping-calculator-settings-tooltip",
    target: settingsButton,
    content: settingsLabel,
  });

  // Settings section
  const settings = document.createElement("div");
  settings.classList.add("zen-calculator-settings");
  calculator.appendChild(settings);

  settingsButton.addEventListener("click", () => {
    settings.classList.toggle("visible");
  });

  // Slots
  for (let i = 1; i <= 3; i++) {
    const slot = document.createElement("button");
    slot.classList.add("zen-settings-button", "text");
    slot.textContent = String(i);
    settings.appendChild(slot);

    if (store["calculator-selected-slot"] === i) {
      slot.classList.add("active");
    }

    tooltip({
      id: `zen-camping-calculator-slot-${i}-tooltip`,
      target: slot,
      content: t(T, `slot${i}`),
    });

    slot.addEventListener("click", () => {
      // Update active class
      settings
        .querySelectorAll(".zen-settings-button.text")
        .forEach((button) => button.classList.remove("active"));
      slot.classList.add("active");

      // Update selected slot
      setStore("calculator-selected-slot", i);

      // Load params from the selected slot
      const newCode = store["calculator-slots"][i - 1];

      if (!newCode) {
        // Reset params
        params.ruin = undefined;
        updateCampingCalculatorWithCurrentParams(undefined, calculator);
        return;
      }

      const newParams = decodeCalculatorCode(newCode);
      if (newParams) {
        Object.assign(params, newParams);
      }

      updateView(calculator);
    });
  }

  // Save button
  const saveButton = document.createElement("button");
  saveButton.classList.add("zen-settings-button");
  const saveLabel = t(T, "save");
  saveButton.setAttribute("aria-label", saveLabel);

  const saveIcon = document.createElement("img");
  saveIcon.src = `${ASSETS}/forum/done.png`;
  saveIcon.alt = saveLabel;
  saveButton.appendChild(saveIcon);

  tooltip({
    id: "zen-camping-calculator-save-tooltip",
    target: saveButton,
    content: saveLabel,
  });

  saveButton.addEventListener("click", () => {
    // Save to slot
    const code = getCalculatorCode(params);
    setStore(
      "calculator-slots",
      store["calculator-slots"].map((slot, index) =>
        index + 1 === store["calculator-selected-slot"] ? code : slot
      )
    );
    notify(t(T, "saveSuccess"));
  });
  settings.appendChild(saveButton);

  // Import button
  const importButton = document.createElement("button");
  importButton.classList.add("zen-settings-button");
  const importLabel = t(T, "import");
  importButton.setAttribute("aria-label", importLabel);

  const importIcon = document.createElement("img");
  importIcon.src = `${ASSETS}/icons/small_caret_down.gif`;
  importIcon.alt = importLabel;
  importButton.appendChild(importIcon);

  tooltip({
    id: "zen-camping-calculator-import-tooltip",
    target: importButton,
    content: importLabel,
  });

  importButton.addEventListener("click", () => {
    // Get code from prompt
    const code = prompt(t(T, "importPrompt"));
    if (!code) return;

    const newParams = decodeCalculatorCode(code);
    if (newParams) {
      // Update params
      Object.assign(params, newParams);
      updateView(calculator);

      // Save to slot
      setStore(
        "calculator-slots",
        store["calculator-slots"].map((slot, index) =>
          index + 1 === store["calculator-selected-slot"] ? code : slot
        )
      );
      notify(t(T, "importSuccess"));
      return;
    }

    // Error
    notify(t(T, "importError"), Severity.ERROR);
  });
  settings.appendChild(importButton);

  // Export button
  const exportButton = document.createElement("button");
  exportButton.classList.add("zen-settings-button");

  const exportLabel = t(T, "export");
  exportButton.setAttribute("aria-label", exportLabel);

  const exportIcon = document.createElement("img");
  exportIcon.src = `${ASSETS}/icons/small_caret_up.gif`;
  exportIcon.alt = exportLabel;
  exportButton.appendChild(exportIcon);

  tooltip({
    id: "zen-camping-calculator-export-tooltip",
    target: exportButton,
    content: exportLabel,
  });

  exportButton.addEventListener("click", () => {
    const code = getCalculatorCode(params);
    navigator.clipboard.writeText(code).then(() => {
      notify(t(T, "exportSuccess"));
    });
  });
  settings.appendChild(exportButton);

  // Reset button
  const resetButton = document.createElement("button");
  resetButton.classList.add("zen-settings-button");

  const resetLabel = t(T, "reset");
  resetButton.setAttribute("aria-label", resetLabel);

  const resetIcon = document.createElement("img");
  resetIcon.src = `${ASSETS}/icons/small_prev.gif`;
  resetIcon.alt = resetLabel;
  resetButton.appendChild(resetIcon);

  tooltip({
    id: "zen-camping-calculator-reset-tooltip",
    target: resetButton,
    content: resetLabel,
  });

  resetButton.addEventListener("click", () => {
    // Reset params
    params.ruin = undefined;
    updateCampingCalculatorWithCurrentParams(undefined, calculator);
  });
  settings.appendChild(resetButton);

  node.after(calculator);
};

export const updateCampingCalculatorWithCurrentParams = (
  node?: HTMLElement,
  calculator?: HTMLElement
) => {
  if (!store["camping-calculator"]) return;
  if (
    node?.getAttribute("for") !== "zone-camp" &&
    !node?.classList.contains("zone-dist") &&
    !calculator
  )
    return;

  // Check if calculator was already updated
  const existing = node?.nextElementSibling?.classList.contains(
    "zen-camping-calculator"
  );
  if (existing && !calculator) return;

  const inventoryItems = document.querySelectorAll<HTMLElement>(
    "hordes-passive-inventory li.item"
  );

  // Already hidden citizens
  params.alreadyHiddenCitizens = 0;

  // Defense objects
  params.defenseObjects = 0;

  // Manual improvements
  params.manualImprovements = 0;

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

  // Previous campings
  params.previousCampings = store["previous-campings"];

  // Camping items
  const campingItems = [...inventoryItems].filter((itemElement) => {
    // Get item
    const item = findItemFromInventory(itemElement);

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
    const item = findItemFromInventory(itemElement);

    if (!item) return false;

    // Check if the item is VEST_ON
    if (item.id === ItemId.VEST_ON) {
      return true;
    }
  });

  // Night (assume the player is planning to camp at night)
  params.night = true;

  // Lighthouse built
  params.lighthouseBuilt = false;

  // Devastated town
  params.devastatedTown = false;

  // Tomb
  params.tomb = false;

  // Pandemonium
  params.pandemonium = !!document.querySelector(
    "body[data-theme-primary-modifier='panda']"
  );

  // Job
  params.job = getJob();

  console.log("current job:", Job[params.job]);

  const calculatorElements = calculator
    ? [calculator]
    : document.querySelectorAll<HTMLElement>(".zen-camping-calculator");

  for (const calculatorElement of calculatorElements) {
    // Update params
    updateView(calculatorElement);

    // Set calculator as updated
    calculatorElement.setAttribute("data-updated", "true");
  }
};

export const updatePreviousCampings = (node: HTMLElement) => {
  if (!node.classList.contains("town-name")) return;
  if (store["camping-day"] === null) return;

  const day = node.nextElementSibling?.textContent?.replace(/\D/g, "");
  if (!day) return;

  if (+day > store["camping-day"]) {
    setStore("previous-campings", store["previous-campings"] + 1);
    setStore("camping-day", null);
  }
};
