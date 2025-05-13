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

let tooltip: HTMLImageElement | null = null;

export const insertMapPreviewTooltip = () => {
  if (!store["map-preview"]) return;

  document.body.classList.add("zen-map-preview-enabled");

  if (tooltip) return;

  tooltip = document.createElement("img");
  tooltip.id = "zen-map-preview-tooltip";
  tooltip.setAttribute("alt", t(T, "unavailable"));
  document.body.append(tooltip);
};

export const displayMapPreview = (node: HTMLElement) => {
  if (!store["map-preview"]) return;
  if (!node.classList.contains("language")) return;
  if (location.pathname !== "/jx/ghost/welcome") return;

  const townId = node.closest(".town-row")?.getAttribute("data-town-id");

  if (!townId) return;

  // Show tooltip on hover
  node.addEventListener("mouseover", (event) => {
    if (!tooltip) return;

    tooltip.classList.add("visible");

    // Stick to node position
    tooltip.style.left = `${(event.clientX + 20).toFixed(2)}px`;
    tooltip.style.top = `${event.clientY.toFixed(2)}px`;

    // Add map link
    if (!tooltip.getAttribute("src")) {
      tooltip.setAttribute(
        "src",
        `https://bbh.fred26.fr/gfx/map/5/${townId}/s.png`
      );
    }
  });

  // Hide tooltip on mouseout
  node.addEventListener("mouseout", () => {
    if (!tooltip) return;

    tooltip.classList.remove("visible");
    tooltip.setAttribute("src", "");
  });

  // Open map link on click
  node.addEventListener("click", () => {
    if (!tooltip) return;

    window.open(`https://bbh.fred26.fr/?cid=5-${townId}`, "_blank");
  });
};
