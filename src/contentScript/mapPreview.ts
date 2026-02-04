import { createBatchFetcher } from "../utils/BatchFetch";
import { Server } from "../utils/server";
import { store } from "./store";

// Create a batch fetcher for map data
const mapBatcher = createBatchFetcher(Server.maps, (response, townId) => {
  return response.towns?.find((t) => t.id === townId) ?? null;
});

export const enableMapPreview = () => {
  if (!store["map-preview"]) return;

  document.body.classList.add("zen-map-preview-enabled");
};

export const displayMapPreview = async (node: HTMLElement) => {
  if (!store["map-preview"]) return;
  if (!node.classList.contains("language")) return;
  if (location.pathname !== "/jx/ghost/welcome") return;

  const townRow = node.closest(".town-row");
  const townId = townRow?.getAttribute("data-town-id");

  if (!townId) return;

  const tooltip = document.createElement("div");
  tooltip.classList.add("zen-map-preview-tooltip");
  townRow?.appendChild(tooltip);

  try {
    // Fetch map data using batched request
    const town = await mapBatcher.fetch(+townId);

    if (!town) {
      console.error("Town data not found for townId:", townId);
      return;
    }

    const mapWrapper = document.createElement("div");
    mapWrapper.classList.add("zen-simple-map", "react_map_area");

    const map = document.createElement("div");
    map.classList.add("map");
    mapWrapper.appendChild(map);

    const scrollPlane = document.createElement("div");
    scrollPlane.classList.add("scroll-plane", "auto-size");
    map.appendChild(scrollPlane);

    const zoneGrid = document.createElement("div");
    zoneGrid.classList.add("zone-grid");
    zoneGrid.style.gridTemplateColumns = `repeat(${town.width}, 1fr)`;
    zoneGrid.style.gridTemplateRows = `repeat(${town.height}, 1fr)`;
    scrollPlane.appendChild(zoneGrid);

    for (let x = 0; x < town.width; x++) {
      for (let y = 0; y < town.height; y++) {
        const zone = town.zones.find((z) => z.x === x && z.y === y);

        const zoneElement = document.createElement("div");
        zoneElement.classList.add("zone");
        zoneElement.style.gridArea = `${y + 1} / ${x + 1}`;

        if (x === town.x && y === town.y) {
          zoneElement.classList.add("town");
        } else if (!zone) {
          zoneElement.classList.add("unknown");
        } else if (!zone.visitedToday) {
          zoneElement.classList.add("past");
        } else {
          zoneElement.classList.add(`danger-${zone.dangerLevel}`);
        }

        if (zone?.buildingId) {
          zoneElement.classList.add("ruin");
        }

        const citizenHere = town.citizens.find((c) => c.x === x && c.y === y);
        if (citizenHere) {
          const citizenIcon = document.createElement("div");
          citizenIcon.classList.add("citizen-icon");
          zoneElement.appendChild(citizenIcon);
        }

        const icon = document.createElement("div");
        icon.classList.add("icon");
        zoneElement.appendChild(icon);

        zoneGrid.appendChild(zoneElement);
      }
    }

    tooltip.appendChild(mapWrapper);
  } catch (error) {
    console.error("Error fetching map data:", error);
  }

  // Show tooltip on hover
  node.addEventListener("mouseover", (event) => {
    tooltip.classList.add("visible");

    // Stick to node position
    tooltip.style.left = `${(event.clientX + 20).toFixed(2)}px`;
    tooltip.style.top = `${event.clientY.toFixed(2)}px`;
  });

  // Hide tooltip on mouseout
  node.addEventListener("mouseout", () => {
    tooltip.classList.remove("visible");
  });

  // Open map link on click
  node.addEventListener("click", () => {
    if (!tooltip) return;

    window.open(`https://bbh.fred26.fr/?cid=5-${townId}`, "_blank");
  });
};
