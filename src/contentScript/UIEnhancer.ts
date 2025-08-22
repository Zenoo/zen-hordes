import { items } from "../data/items";
import { ruins } from "../data/ruins";
import { ASSETS } from "../utils/constants";
import { tooltip } from "../utils/tooltip";
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

    // Spots
    const campingStats = document.createElement("div");
    campingStats.classList.add("zen-ruin-camping-stats");

    const spots = document.createElement("span");
    spots.classList.add("zen-ruin-camping-spots");

    const spotIcon = document.createElement("img");
    spotIcon.src = `${ASSETS}/icons/small_human.gif`;
    spots.appendChild(spotIcon);

    const spotText = document.createElement("span");
    spotText.textContent = ruin.camping.spots.toString();
    spots.appendChild(spotText);
    campingStats.appendChild(spots);

    // Camping chances
    const campingChances = document.createElement("span");
    campingChances.classList.add("zen-ruin-camping-chances");

    const campingIcon = document.createElement("img");
    campingIcon.src = `${ASSETS}/status/status_camper.gif`;
    campingChances.appendChild(campingIcon);

    const campingText = document.createElement("span");
    campingText.textContent = `${ruin.camping.baseValue >= 0 ? "+" : ""}${
      ruin.camping.baseValue
    }% `;
    campingChances.appendChild(campingText);
    campingStats.appendChild(campingChances);

    // Ruin drops
    const table = document.createElement("table");
    table.classList.add("zen-added");
    const tbody = document.createElement("tbody");
    table.append(tbody);
    const line = document.createElement("tr");
    tbody.append(line);
    const cell = document.createElement("td");
    cell.classList.add("output");
    line.append(cell);

    const totalOdds = ruin.drops.reduce((acc, d) => acc + d.odds, 0);

    ruin.drops
      .sort((a, b) => b.odds / totalOdds - a.odds / totalOdds)
      .forEach((drop) => {
        const wrapper = document.createElement("div");

        // Icon
        const dropImg = document.createElement("img");
        dropImg.src = `${ASSETS}/icons/item/${items[drop.item].icon}.gif`;
        dropImg.title = items[drop.item].name[store["hordes-lang"]];
        dropImg.setAttribute("data-type", "item");
        dropImg.setAttribute("data-id", drop.item);

        // Odds
        wrapper.setAttribute(
          "data-text",
          drop.odds ? `${Math.round((drop.odds / totalOdds) * 100)}%` : "?%"
        );

        wrapper.append(dropImg);
        cell.append(wrapper);
      });

    tooltip({
      target: icon,
      id: `possible-ruin-${ruin.id}`,
      content: [title, description, campingStats, table],
      classes: ["zen-better-tooltip", "item"],
    });

    ruinsList.appendChild(listItem);
  });

  node.parentElement?.appendChild(ruinsList);
};
