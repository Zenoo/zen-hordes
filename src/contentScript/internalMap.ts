import { ASSETS } from "../utils/constants";
import { Server } from "../utils/server";
import { getTownId } from "./externalSiteUpdater";
import { memory } from "./store";
import { t } from "./translate";

const T: Translations = {
  en: {
    ZHMap: "ZH Map",
  },
  fr: {
    ZHMap: "Carte ZH",
  },
  de: {
    ZHMap: "ZH-Karte",
  },
  es: {
    ZHMap: "Mapa ZH",
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
    map.set(key, (map.get(key) ?? 0) + 1);
    return map;
  }, new Map<string, number>());

  for (const zone of zones) {
    const [_y, _x] = zone.style.gridArea.replace(/ /g, "").split("/");

    if (!_x || !_y) continue;

    const x = +_x - memory.town.x - 1;
    const y = -(+_y - memory.town.y - 1);

    const zoneData = memory.town.zones.find(
      (z) =>
        z.x - (memory.town?.x ?? 0) === x && -z.y + (memory.town?.y ?? 0) === y
    );
    if (!zoneData) continue;

    // Depleted
    if (zoneData.depleted) {
      zone.classList.add("zen-depleted");
    }

    // Danger color
    zone.classList.add(`zen-danger-${zoneData.dangerLevel}`);

    // Citizens
    const key = `${x},${y}`;
    const citizenCount = hasCitizens.get(key) ?? 0;

    if (citizenCount > 0) {
      const existingCitizenCount = zone.querySelector(".zen-citizen-count");
      if (existingCitizenCount) {
        existingCitizenCount.textContent = citizenCount.toString();
      } else {
        const citizenCountWrapper = document.createElement("div");
        citizenCountWrapper.classList.add("zen-citizen-count-wrapper");

        const citizenCountDiv = document.createElement("div");
        citizenCountDiv.classList.add("zen-citizen-count");
        citizenCountDiv.textContent = citizenCount.toString();
        citizenCountWrapper.appendChild(citizenCountDiv);

        const citizenIcon = document.createElement("img");
        citizenIcon.classList.add("zen-citizen-icon");
        citizenIcon.src = `${ASSETS}/icons/map/map_icon_citizen.png`;
        citizenCountWrapper.appendChild(citizenIcon);
        zone.appendChild(citizenCountWrapper);
      }
    }

    // Zombies
    if (zoneData.dangerLevel || zoneData.zombies) {
      const count =
        zoneData.zombies || zoneData.dangerLevel === 3
          ? "6+"
          : zoneData.dangerLevel === 2
          ? "3-5"
          : "1-2";

      const existingZombieCount = zone.querySelector(".zen-zombie-count");
      if (existingZombieCount) {
        existingZombieCount.textContent = count;
      } else {
        const zombieCountWrapper = document.createElement("div");
        zombieCountWrapper.classList.add("zen-zombie-count-wrapper");

        const zombieCountDiv = document.createElement("div");
        zombieCountDiv.classList.add("zen-zombie-count");
        zombieCountDiv.textContent = count;
        zombieCountWrapper.appendChild(zombieCountDiv);

        const zombieIcon = document.createElement("img");
        zombieIcon.classList.add("zen-zombie-icon");
        zombieIcon.src = `${ASSETS}/icons/map/map_icon_zombie.png`;
        zombieCountWrapper.appendChild(zombieIcon);
        zone.appendChild(zombieCountWrapper);
      }
    }
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
    const mapMarkersButton = document.querySelector<HTMLButtonElement>(
      ".map_button.show-tags:not(.zen-internal-map-button,.zen-shaman-souls-button)"
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

const fetchTownData = async () => {
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
