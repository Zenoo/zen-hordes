import { ruins } from "../data/ruins";
import { ASSETS } from "../utils/constants";
import { tooltip } from "../utils/tooltip";
import {
  buildRuinTooltip,
  buildRuinCampingStats,
  buildRuinDrops,
} from "./ruins";
import { store } from "./store";
import { t } from "./translate";
import { setTextContent } from "./wiki";

const T: Translations = {
  en: {
    possibleRuins: "Possible ruins",
  },
  fr: {
    possibleRuins: "Bâtiments possibles",
  },
  de: {
    possibleRuins: "Mögliche Ruinen",
  },
  es: {
    possibleRuins: "Ruinas posibles",
  },
};

export const enhanceUI = () => {
  if (!store["enhance-css"]) return;

  // Add custom CSS
  document.body.classList.add("zen-enhanced");
};

export const autoSelectGlobalMapSetting = (node: HTMLElement) => {
  if (!store["enhance-css"]) return;
  if (!node.classList.contains("map_button")) return;
  if (!node.closest(".zonemap_controls")) return;

  node.addEventListener("click", () => {
    if (!store["enhance-css"]) return;

    const globalButton = document.querySelector<HTMLButtonElement>(
      ".tilemap_controls .float-left button:nth-of-type(3)"
    );
    if (!globalButton) return;

    // Check if the button is already selected
    if (globalButton.classList.contains("show-tags")) return;

    globalButton.click();
  });
};

export const autoOpenBagOutside = (node: HTMLElement) => {
  if (!store["enhance-css"]) return;
  if (node.getAttribute("x-load-from") !== "/jx/beyond/partial/desert/actions")
    return;

  // Only click on it if it's displayed
  if (node.parentElement?.id !== "wb-item-action-section") return;

  node.click();
};

export const autoOpenBagWhenMovingItems = (node: HTMLElement) => {
  if (!store["enhance-css"]) return;
  if (node.id !== "beyond-inventory") return;

  // Listen to items click
  node.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    const item = target.closest(".item:not(.locked)");
    if (!item) return;

    setTimeout(() => {
      // Open the bag
      const bagButton = document.querySelector<HTMLButtonElement>(
        "#wb-item-action-section button[x-load-from='/jx/beyond/partial/desert/actions']"
      );
      if (!bagButton) return;

      bagButton.click();
    }, 200);
  });
};

export const displayRuinBuryCount = (node: HTMLElement) => {
  if (!node.classList.contains("ruin-bury-desc")) return;

  const count = document.querySelectorAll(".ruin-bury-count .sand").length;

  node.textContent = node.textContent?.replace(":", ` (${count}):`) ?? "";
};

export const displayPossibleBuriedRuin = (node: HTMLElement) => {
  if (!node.classList.contains("ruin-bury-desc")) return;

  const distanceText = document
    .querySelector<HTMLElement>(".zone-dist b")
    ?.textContent?.replace(/[^\d]/g, "");
  if (!distanceText) {
    console.warn("Could not find distance for possible buried ruin");
    return;
  }

  const distance = +distanceText;

  const possibleRuins = Object.values(ruins).filter((ruin) => {
    return ruin.km.min <= distance && ruin.km.max >= distance;
  });

  if (possibleRuins.length === 0) {
    console.warn("Could not find possible buried ruins");
    return;
  }

  const title = document.createElement("p");
  title.classList.add("zen-possible-ruins-title");
  title.textContent = t(T, "possibleRuins");
  node.parentElement?.appendChild(title);

  const ruinsList = document.createElement("ul");
  ruinsList.classList.add("zen-possible-ruins-list");

  possibleRuins.forEach((ruin) => {
    const listItem = document.createElement("li");
    const icon = document.createElement("img");
    icon.src = `${ASSETS}/ruin/${ruin.icon}.gif`;
    listItem.appendChild(icon);

    // Tooltip

    // Ruin name
    const title = document.createElement("h1");
    title.textContent = ruin.name[store["hordes-lang"]];

    // Ruin description
    const description = document.createElement("p");
    setTextContent(description, ruin.description[store["hordes-lang"]]);

    // Camping stats
    const campingStats = buildRuinCampingStats(ruin);

    // Ruin drops
    const drops = buildRuinDrops(ruin);

    tooltip({
      target: icon,
      id: `possible-ruin-${ruin.id}`,
      content: [title, description, campingStats, drops],
      classes: ["zen-ruin-tooltip", "zen-better-tooltip", "item"],
    });

    ruinsList.appendChild(listItem);
  });

  node.parentElement?.appendChild(ruinsList);
};

export const displayRuinDropsOnHover = (node: HTMLElement) => {
  if (node.id !== "dig_ruin_button") return;
  if (node.hasAttribute("disabled")) return;

  // Get current ruin
  const ruin = node.querySelector("strong");
  if (!ruin) return;

  const ruinName = ruin.textContent?.trim();
  const ruinData = Object.values(ruins).find(
    (r) => r.name[store["hordes-lang"]] === ruinName
  );

  if (!ruinData) {
    console.error(`Ruin "${ruinName}" not found in ruins data.`);
    return;
  }

  const tooltipContent = document.createElement("div");

  buildRuinTooltip(tooltipContent, ruinData);

  tooltip({
    target: node,
    id: "ruin-dig-tooltip",
    content: [tooltipContent],
    classes: ["item", "zen-ruin-tooltip", "zen-better-tooltip"],
  });
};
