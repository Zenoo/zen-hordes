import { items } from "../data/items";
import { ruins } from "../data/ruins";
import { Ruin } from "../data/types";
import { ASSETS } from "../utils/constants";
import { tooltip } from "../utils/tooltip";
import {
  buildBaseItemTooltip,
  insertBetterItemTooltips,
} from "./betterTooltips";
import { store } from "./store";
import { t } from "./translate";
import { openItemInWiki, setTextContent } from "./wiki";

const T: Translations = {
  en: {
    spotsAvailable: "Available camping spots",
    campingChances: "Camping chances",
  },
  fr: {
    spotsAvailable: "Emplacements de camping disponibles",
    campingChances: "Chances de camping",
  },
  de: {
    spotsAvailable: "Verfügbare Campingplätze",
    campingChances: "Camping-Chancen",
  },
  es: {
    spotsAvailable: "Lugares de camping disponibles",
    campingChances: "Posibilidades de acampar",
  },
};

export const buildRuinCampingStats = (ruin: Ruin, node?: Element) => {
  const campingStats = document.createElement("div");
  campingStats.classList.add("zen-ruin-camping-stats");

  // Spots
  const spots = document.createElement("span");
  spots.classList.add("zen-ruin-camping-spots");
  spots.title = t(T, "spotsAvailable");

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
  campingChances.title = t(T, "campingChances");

  const campingIcon = document.createElement("img");
  campingIcon.src = `${ASSETS}/status/status_camper.gif`;
  campingChances.appendChild(campingIcon);

  const campingText = document.createElement("span");
  campingText.textContent = `${ruin.camping.baseValue >= 0 ? "+" : ""}${
    ruin.camping.baseValue
  }% `;
  campingChances.appendChild(campingText);
  campingStats.appendChild(campingChances);
  node?.appendChild(campingStats);

  return campingStats;
};

export const buildRuinDrops = (
  ruin: Ruin,
  node?: Element,
  clickable = false
) => {
  const table = document.createElement("table");
  table.classList.add("zen-table");
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

      if (clickable) {
        // Tooltip
        const tooltipWrapper = document.createElement("div");
        buildBaseItemTooltip(items[drop.item], tooltipWrapper);
        insertBetterItemTooltips(tooltipWrapper, true);

        tooltip({
          target: dropImg,
          id: `item-${drop.item}`,
          content: [tooltipWrapper],
          classes: ["zen-item-tooltip", "zen-better-tooltip", "item"],
        });

        // Open item in wiki on click
        dropImg.addEventListener("click", () => {
          openItemInWiki(dropImg);
        });
      }

      wrapper.append(dropImg);
      cell.append(wrapper);
    });

  node?.append(table);

  return table;
};

export const buildRuinTooltip = (element: HTMLElement, ruin: Ruin) => {
  element.classList.add("zen-better-tooltip");
  element.setAttribute("data-type", "ruin");
  element.setAttribute("data-id", ruin.id.toString());

  const title = document.createElement("h4");
  element.appendChild(title);

  const icon = document.createElement("img");
  icon.src = `${ASSETS}/ruin/${ruin.icon}.gif`;
  icon.alt = ruin.name[store["hordes-lang"]];
  title.appendChild(icon);

  const name = document.createElement("span");
  name.textContent = ruin.name[store["hordes-lang"]];
  title.appendChild(name);

  const description = document.createElement("p");
  setTextContent(description, ruin.description[store["hordes-lang"]]);
  element.appendChild(description);

  // Camping stats
  buildRuinCampingStats(ruin, element);

  // Drops
  buildRuinDrops(ruin, element);
};

export const insertBetterMapRuinTooltips = (
  node: HTMLElement,
  force?: boolean
) => {
  if (!store["better-tooltips"]) return;
  if (!node.classList.contains("tooltip-map")) return;

  // Check if the tooltip has already been processed
  const processed = node.classList.contains("zen-better-ruin-tooltip");
  if (!force && processed) return;

  // Check if the node is a ruin tooltip
  const ruinTitle = node.querySelector(".cell.bold");
  if (!ruinTitle) return;

  // Ignore city tooltip
  if (node.children[1]?.children[1]?.textContent === "[0 / 0]") return;

  // Find the ruin
  const ruin = Object.values(ruins).find(
    (ruin) => ruin.name[store["hordes-lang"]] === ruinTitle.textContent
  );
  if (!ruin) {
    // Probably a buried building
    return;
  }

  node.classList.add("zen-better-tooltip", "zen-better-ruin-tooltip");

  const target = node.children[0];
  if (!target) return;

  buildRuinCampingStats(ruin, target);
  const drops = buildRuinDrops(ruin, target);
  drops.classList.add("clear");
};

export const displayRuinDetails = (node: HTMLElement) => {
  if (!node.classList.contains("ruin-desc")) return;

  // Get current ruin
  const ruin = document.querySelector(
    ".ambiant-zone-desc .ruin-info .ruin-name b"
  );
  if (!ruin) return;

  const ruinName = ruin.textContent?.trim();
  const ruinData = Object.values(ruins).find(
    (r) => r.name[store["hordes-lang"]] === ruinName
  );

  if (!ruinData) {
    console.error(`Ruin "${ruinName}" not found in ruins data.`);
    return;
  }

  const target = node.parentElement;
  if (!target) return;

  buildRuinCampingStats(ruinData, target);
  buildRuinDrops(ruinData, target, true);
};
