import { buildings } from "../data/buildings";
import { BuildingId } from "../data/types";
import { ASSETS } from "../utils/constants";
import { LogEntryType } from "./logEntries";
import { store } from "./store";
import { t } from "./translate";

const T: Translations = {
  en: {
    "loggedIn.0": "Did not log in today",
    "loggedIn.1": "Logged in today",
    "leftTown.0": "Did not leave town",
    "leftTown.1": "Left town at least once",
    "usedWorkshop.0": "Did not use the workshop",
    "usedWorkshop.1": "Used the workshop at least once",
    "workedOnBuildings.0": "Did not work on buildings",
    "workedOnBuildings.1": "Worked on buildings",
    "workedOnBuildings.2": "Might have worked on buildings",
    "lookedAtForum.2": "Might have looked at the forum",
    warning: "This citizen seems suspicious...",
    inaccurate: "You have not enabled full logs, analysis may be inaccurate.",
    instructions:
      "Please scroll down to load the citizen logs needed for clairvoyance analysis.",
  },
  fr: {
    "loggedIn.0": "Ne s'est pas connecté aujourd'hui",
    "loggedIn.1": "S'est connecté aujourd'hui",
    "leftTown.0": "N'a pas quitté la ville",
    "leftTown.1": "A quitté la ville au moins une fois",
    "usedWorkshop.0": "N'a pas utilisé l'atelier",
    "usedWorkshop.1": "A utilisé l'atelier au moins une fois",
    "workedOnBuildings.0": "N'a pas travaillé sur les bâtiments",
    "workedOnBuildings.1": "A travaillé sur les bâtiments",
    "workedOnBuildings.2": "Peut avoir travaillé sur les bâtiments",
    "lookedAtForum.2": "Peut avoir regardé le forum",
    warning: "Ce citoyen semble suspect...",
    inaccurate:
      "Vous n'avez pas activé les journaux complets, l'analyse peut être inexacte.",
    instructions:
      "Veuillez scroller vers le bas pour charger les journaux du citoyen nécessaires à l'analyse de clairvoyance.",
  },
  de: {
    "loggedIn.0": "Heute nicht eingeloggt",
    "loggedIn.1": "Heute eingeloggt",
    "leftTown.0": "Die Stadt nicht verlassen",
    "leftTown.1": "Die Stadt mindestens einmal verlassen",
    "usedWorkshop.0": "Die Werkstatt nicht benutzt",
    "usedWorkshop.1": "Die Werkstatt mindestens einmal benutzt",
    "workedOnBuildings.0": "Nicht an Gebäuden gearbeitet",
    "workedOnBuildings.1": "An Gebäuden gearbeitet",
    "workedOnBuildings.2": "Eventuell an Gebäuden gearbeitet",
    "lookedAtForum.2": "Eventuell im Forum nachgesehen",
    warning: "Dieser Bürger scheint verdächtig zu sein...",
    inaccurate:
      "Sie haben keine vollständigen Protokolle aktiviert, die Analyse kann ungenau sein.",
    instructions:
      "Bitte scrollen Sie nach unten, um die für die Analyse der Clairvoyance erforderlichen Bürgerprotokolle zu laden.",
  },
  es: {
    "loggedIn.0": "No ha iniciado sesión hoy",
    "loggedIn.1": "Ha iniciado sesión hoy",
    "leftTown.0": "No ha salido de la ciudad",
    "leftTown.1": "Ha salido de la ciudad al menos una vez",
    "usedWorkshop.0": "No ha usado el taller",
    "usedWorkshop.1": "Ha usado el taller al menos una vez",
    "workedOnBuildings.0": "No ha trabajado en edificios",
    "workedOnBuildings.1": "Ha trabajado en edificios",
    "workedOnBuildings.2": "Podría haber trabajado en edificios",
    "lookedAtForum.2": "Podría haber mirado el foro",
    warning: "Este ciudadano parece sospechoso...",
    inaccurate:
      "No has activado los registros completos, el análisis puede ser inexacto.",
    instructions:
      "Desplázate hacia abajo para cargar los registros de ciudadanos necesarios para el análisis de clarividencia.",
  },
};

enum ClairvoyanceStatus {
  NO,
  YES,
  MAYBE,
}

const hasLogEntry = (type: LogEntryType) => {
  return document.querySelector(`.log-entry[data-template-id='${type}']`)
    ? ClairvoyanceStatus.YES
    : ClairvoyanceStatus.NO;
};

const checkers = {
  loggedIn: () => {
    const lastLogin = document
      .querySelector(".gossips li[data-at]")
      ?.getAttribute("data-at");
    if (!lastLogin) return ClairvoyanceStatus.MAYBE;

    const lastLoginDate = new Date(parseInt(lastLogin) * 1000);

    return lastLoginDate.toDateString() === new Date().toDateString()
      ? ClairvoyanceStatus.YES
      : ClairvoyanceStatus.NO;
  },
  leftTown: () => {
    const usedTownDoors = hasLogEntry(LogEntryType.ENTER_LEAVE_TOWN);

    if (usedTownDoors === ClairvoyanceStatus.YES) {
      return usedTownDoors;
    }

    // Check if the citizen is outside
    const outside = !document.querySelector(
      '.page-head img[src*="icons/home."]'
    );

    return outside ? ClairvoyanceStatus.YES : ClairvoyanceStatus.NO;
  },
  usedWorkshop: () => {
    return hasLogEntry(LogEntryType.USE_WORKSHOP);
  },
  workedOnBuildings: () => {
    // Check if the registry is built
    const registryBuilt = !!document.querySelector(
      `.town-buildings li img[alt='${
        buildings[BuildingId.ITEM_RP_BOOK2].name[store["hordes-lang"]]
      }']`
    );
    if (!registryBuilt) return ClairvoyanceStatus.MAYBE;

    return hasLogEntry(LogEntryType.WORK_ON_BUILDING) || hasLogEntry(LogEntryType.REPAIRED_BUILDING);
  },
  lookedAtForum: () => {
    return ClairvoyanceStatus.MAYBE;
  },
};

export const displayClairvoyanceInstructions = (node: HTMLElement) => {
  if (!node.classList.contains("clairvoyance")) return;

  const existingInstructions = node.querySelector(".clairvoyance-instructions");
  if (existingInstructions) return;

  const instructions = document.createElement("div");
  instructions.classList.add("clairvoyance-instructions", "note", "note-info");
  instructions.textContent = t(T, "instructions");
  node.appendChild(instructions);
};

export const displayClairvoyanceAnalysis = async (node: HTMLElement) => {
  // We need to wait for the logs to be fully loaded to retrieve data from them
  // So we attach this to log entries instead of the clairvoyance element directly
  const isEmptyLogMessage =
    node.tagName === "I" &&
    node.previousElementSibling?.classList.contains("log-day-header");
  const isLogEntry = node.classList.contains("log-entry");

  if (!isEmptyLogMessage && !isLogEntry) return;

  // Check if we need to wait for the full logs
  if (store["full-logs"] && document.querySelector(".log-complete-link")) {
    return;
  }

  const clairvoyance = document.querySelector(".clairvoyance");
  if (!clairvoyance) return;

  if (clairvoyance.classList.contains("clairvoyance-analysis-done")) return;
  clairvoyance.classList.add("clairvoyance-analysis-done");

  // Remove instructions if present
  const existingInstructions = clairvoyance.querySelector(
    ".clairvoyance-instructions"
  );
  if (existingInstructions) {
    existingInstructions.remove();
  }

  const displayedClairvoyanceCount =
    clairvoyance.querySelectorAll("img[alt='*']").length;
  const checks = [
    "loggedIn",
    "leftTown",
    "usedWorkshop",
    "workedOnBuildings",
    "lookedAtForum",
  ] as const;
  const results = checks.map((check) => checkers[check]());

  const analysisWrapper = document.createElement("ul");
  analysisWrapper.classList.add("clairvoyance-analysis");

  checks.forEach((check, index) => {
    const result = results[index];
    const line = document.createElement("li");

    const icon = document.createElement("img");

    switch (result) {
      case ClairvoyanceStatus.YES:
        icon.src = `${ASSETS}/icons/small_new.gif`;
        break;
      case ClairvoyanceStatus.NO:
        icon.src = `${ASSETS}/icons/player_offline.gif`;
        break;
      case ClairvoyanceStatus.MAYBE:
        icon.src = `${ASSETS}/emotes/middot.gif`;
        break;
    }
    line.appendChild(icon);

    const text = document.createElement("span");
    text.textContent = t(T, `${check}.${result}`);
    line.appendChild(text);

    analysisWrapper.appendChild(line);
  });

  clairvoyance.appendChild(analysisWrapper);

  // Check that the number of clairvoyance icons matches
  const possibleClairvoyanceCount = results.filter(
    (result) => result !== ClairvoyanceStatus.NO
  ).length;

  if (displayedClairvoyanceCount > possibleClairvoyanceCount) {
    const warning = document.createElement("div");
    warning.classList.add("clairvoyance-warning", "note", "note-critical");
    warning.textContent = t(T, "warning");
    clairvoyance.appendChild(warning);
  }

  // Warn about possible inaccuracy if full logs are not enabled
  if (!store["full-logs"]) {
    const inaccuracyWarning = document.createElement("div");
    inaccuracyWarning.classList.add(
      "clairvoyance-inaccuracy-warning",
      "note",
      "note-warning"
    );
    inaccuracyWarning.textContent = t(T, "inaccurate");
    clairvoyance.appendChild(inaccuracyWarning);
  }
};
