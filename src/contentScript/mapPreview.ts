import { store } from "./store";
import { t } from "./translate";

const T: Translations = {
  en: {
    unavailable: "Unavailable",
  },
  fr: {
    unavailable: "Indisponible",
  },
  de: {
    unavailable: "Nicht verfügbar",
  },
  es: {
    unavailable: "No disponible",
  },
};

export const insertMapPreview = () => {
  if (!store["map-preview"]) return;

  // Insert map preview tooltip
  const existing = document.getElementById("zen-map-preview-tooltip");
  if (existing) return;

  const tooltip = document.createElement("img");
  tooltip.id = "zen-map-preview-tooltip";
  tooltip.setAttribute("alt", t(T, "unavailable"));
  document.body.append(tooltip);
};

export const displayMapPreview = (event: MouseEvent) => {
  if (!store["map-preview"]) return;
  const node = event.target;
  if (!(node instanceof HTMLElement)) return;

  if (node.matches(".town-row > .cell:first-child img")) {
    const tooltip = document.getElementById("zen-map-preview-tooltip");
    if (!tooltip) return;

    // Show tooltip
    tooltip.classList.add("visible");

    // Stick to node position
    tooltip.style.left = `${event.clientX + 20}px`;
    tooltip.style.top = `${event.clientY}px`;

    // Add map link
    if (!tooltip.getAttribute("src")) {
      const mapId = node
        .closest(".town-row")
        ?.querySelector("[x-town-id]")
        ?.getAttribute("x-town-id");
      if (!mapId) return;
      tooltip.setAttribute(
        "src",
        `https://bbh.fred26.fr/gfx/map/5/${mapId}/s.png`
      );
    }
  }
};

export const removeMapPreview = () => {
  const tooltip = document.getElementById("zen-map-preview-tooltip");
  if (!tooltip) return;

  tooltip.classList.remove("visible");
  tooltip.setAttribute("src", "");
};

export const openBBHCityPage = (node: HTMLElement) => {
  if (!store["map-preview"]) return;
  if (!node.matches(".town-row > .cell:first-child img")) return;

  const mapId = node
    .closest(".town-row")
    ?.querySelector("[x-town-id]")
    ?.getAttribute("x-town-id");
  if (!mapId) return;

  window.open(`https://bbh.fred26.fr/?cid=5-${mapId}`, "_blank");
};
