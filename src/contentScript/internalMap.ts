import { items } from "../data/items";
import { ASSETS } from "../utils/constants";
import { Server } from "../utils/server";
import { getRelativeTime } from "./betterTooltips";
import { getTownId } from "./externalSiteUpdater";
import { memory, store } from "./store";
import { t } from "./translate";

const T: Translations = {
  en: {
    ZHMap: "ZH Map",
    lastUpdate: "Updated {{relativeTime}}",
  },
  fr: {
    ZHMap: "Carte ZH",
    lastUpdate: "Mis à jour {{relativeTime}}",
  },
  de: {
    ZHMap: "ZH-Karte",
    lastUpdate: "Aktualisiert {{relativeTime}}",
  },
  es: {
    ZHMap: "Mapa ZH",
    lastUpdate: "Actualizado {{relativeTime}}",
  },
};

export const updateZHMap = (node?: HTMLElement) => {
  if (!memory.town) return;
  if (node && !node.classList.contains("zone-grid")) return;

  const zones = (node ?? document).querySelectorAll<HTMLElement>(".zone");

  // Citizen locations
  const hasCitizens = memory.town.citizens.reduce((map, citizen) => {
    if (!memory.town) return map;
    if (citizen.dead) return map;

    const key = `${citizen.x - memory.town.x},${-citizen.y + memory.town.y}`;
    map.set(key, [...(map.get(key) ?? []), citizen.name]);
    return map;
  }, new Map<string, string[]>());

  for (const zone of zones) {
    const [_y, _x] = zone.style.gridArea.replace(/ /g, "").split("/");

    if (!_x || !_y) continue;

    const x = +_x - memory.town.x - 1;
    const y = -(+_y - memory.town.y - 1);

    const zoneData = memory.town.zones.find((z) => z.x === x && z.y === y);
    if (!zoneData) continue;

    // Depleted
    if (zoneData.depleted) {
      zone.classList.add("zen-depleted");
    }

    // Danger color
    zone.classList.add(`zen-danger-${zoneData.dangerLevel}`);

    // Citizens
    const key = `${x},${y}`;
    const citizenList = hasCitizens.get(key) ?? [];

    if (citizenList.length > 0) {
      // Add citizen_marker if not already present
      if (
        !zone.querySelector(".citizen_marker") &&
        !zone.querySelector(".zen-citizen_marker")
      ) {
        const marker = document.createElement("div");
        marker.classList.add("zen-citizen_marker");
        zone.appendChild(marker);
      }
    }

    // Zombies
    const zombiesCount =
      zoneData.zombies || zoneData.dangerLevel === 3
        ? "6+"
        : zoneData.dangerLevel === 2
        ? "3-5"
        : zoneData.dangerLevel === 1
        ? "1-2"
        : "0";

    // TODO: Update items, last update in tooltip
    // Update tooltip data
    const tooltip = document.querySelector<HTMLElement>(
      `.zen-better-zone-tooltip[data-x="${x}"][data-y="${y}"]`
    );

    if (!tooltip) continue;

    let tooltipMapDataWrapper = tooltip.querySelector<HTMLElement>(
      ".zen-tooltip-map-data"
    );
    if (tooltipMapDataWrapper) {
      tooltipMapDataWrapper.remove();
    }

    tooltipMapDataWrapper = document.createElement("div");
    tooltipMapDataWrapper.classList.add("zen-tooltip-map-data");

    const header = document.createElement("div");
    header.classList.add("zen-tooltip-map-data-header");

    // Citizens
    const citizenCountWrapper = document.createElement("div");
    citizenCountWrapper.classList.add("zen-citizen-count-wrapper");

    const citizenCountText = document.createElement("span");
    citizenCountText.classList.add("zen-citizen-count");
    citizenCountText.textContent = `${citizenList.length}`;
    citizenCountWrapper.appendChild(citizenCountText);

    const citizenIcon = document.createElement("img");
    citizenIcon.classList.add("zen-citizen-icon");
    citizenIcon.src = `${ASSETS}/icons/map/map_icon_citizen.png`;
    citizenCountWrapper.appendChild(citizenIcon);
    header.appendChild(citizenCountWrapper);

    // Zombies
    const zombieCountWrapper = document.createElement("div");
    zombieCountWrapper.classList.add("zen-zombie-count-wrapper");

    const zombieCountText = document.createElement("span");
    zombieCountText.classList.add("zen-zombie-count");
    zombieCountText.textContent = `${zombiesCount}`;
    zombieCountWrapper.appendChild(zombieCountText);

    const zombieIcon = document.createElement("img");
    zombieIcon.classList.add("zen-zombie-icon");
    zombieIcon.src = `${ASSETS}/icons/map/map_icon_zombie.png`;
    zombieCountWrapper.appendChild(zombieIcon);
    header.appendChild(zombieCountWrapper);

    tooltipMapDataWrapper.appendChild(header);

    // Citizen names
    if (citizenList.length > 0) {
      const names = document.createElement("div");
      names.classList.add("zen-citizen-names");
      names.textContent = citizenList.join(", ");
      tooltipMapDataWrapper.appendChild(names);
    }

    // Items
    if (zoneData.items && zoneData.items.length > 0) {
      const itemsWrapper = document.createElement("div");
      itemsWrapper.classList.add("zen-items-wrapper");

      for (const item of zoneData.items) {
        for (let i = 0; i < item.quantity; i++) {
          const itemData = Object.values(items).find(
            (it) => it.numericalId === item.id
          );

          if (!itemData) continue;

          const itemIcon = document.createElement("img");
          itemIcon.classList.add("zen-item-icon");
          itemIcon.src = `${ASSETS}/icons/item/${itemData.icon}.gif`;
          itemsWrapper.appendChild(itemIcon);
        }
      }

      tooltipMapDataWrapper.appendChild(itemsWrapper);
    }

    // Last update
    if (zoneData.updatedAt) {
      const lastUpdate = document.createElement("div");
      lastUpdate.classList.add("zen-last-update");
      const date = new Date(zoneData.updatedAt);
      lastUpdate.textContent = t(T, "lastUpdate", {
        relativeTime: getRelativeTime(date.getTime()),
      });
      tooltipMapDataWrapper.appendChild(lastUpdate);
    }

    tooltip.appendChild(tooltipMapDataWrapper);
  }
};

export const displayInternalMapButton = (_node: HTMLElement) => {
  if (!_node.classList.contains("tilemap_controls")) return;

  const node = _node.querySelector<HTMLDivElement>(".float-left");
  if (!node) return;

  const existing = node.querySelector(".zen-internal-map-button");
  if (existing) return;

  const button = document.createElement("button");
  button.classList.add(
    "zen-internal-map-button",
    "small",
    "inline",
    "map_button",
    "map_button_left",
    "hide-tags"
  );
  node.appendChild(button);

  const text = document.createElement("div");
  text.textContent = t(T, "ZHMap");
  button.appendChild(text);

  button.addEventListener("click", async () => {
    const mapWrapper = node.closest("hordes-map");
    if (!mapWrapper) return;

    // Disable map markers if enabled
    const markerLabel: Record<Lang, string> = {
      [Lang.EN]: "Mark.",
      [Lang.FR]: "Marqu.",
      [Lang.DE]: "Mark.",
      [Lang.ES]: "Marca.",
    };
    const mapButtons = document.querySelectorAll<HTMLButtonElement>(
      ".map_button.show-tags"
    );
    const mapMarkersButton = Array.from(mapButtons).find(
      (btn) => btn.textContent?.trim() === markerLabel[store["hordes-lang"]]
    );

    if (mapMarkersButton) {
      mapMarkersButton.click();
    }

    mapWrapper.classList.toggle("zen-internal-map-active");
    // |  This one is to increase the weight of the CSS selector
    // V  to avoid using !important
    mapWrapper.classList.toggle("selector-weight");
    button.classList.toggle("hide-tags");
    button.classList.toggle("show-tags");
  });
};

let townUpdaterInitialized = false;

export const fetchTownData = async () => {
  try {
    const townId = getTownId();
    if (!townId) return;

    const townData = await Server.town();
    if (!townData.success) {
      console.error("Failed to fetch town data:", townData.error);
      return;
    }

    localStorage.setItem("zen-hordes-town-data", JSON.stringify(townData.town));
    memory.town = townData.town;

    updateZHMap();
  } catch (error) {
    console.error("Failed to update town data:", error);
  }
};

export const updateTownDataPeriodically = (node: HTMLElement) => {
  if (townUpdaterInitialized) return;
  if (!node.classList.contains("town-name")) return;

  townUpdaterInitialized = true;

  memory.town = JSON.parse(
    localStorage.getItem("zen-hordes-town-data") || "null"
  );

  setInterval(fetchTownData, 5 * 60 * 1000);
  fetchTownData();
};
