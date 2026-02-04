import { ItemId } from "../data/types";
import { DEFAULT_SHOPPING_LIST } from "../utils/constants";
import { TownResponse } from "../utils/server";
import { ExternalSiteName } from "./externalSites";

/**
 * Store values should never be changed directly,
 * use {@link setStore} instead
 */
export const store = {
  // Feature toggles
  "enhance-css": true,
  "bank-tracker": true,
  "map-preview": true,
  "external-city-links": [ExternalSiteName.FM, ExternalSiteName.GH],
  "external-sites-to-update": [
    ExternalSiteName.ZH,
    ExternalSiteName.FM,
    ExternalSiteName.GH,
    ExternalSiteName.MHO,
  ],
  "better-tooltips": true,
  "shaman-souls-button": true,
  wiki: true,
  "camping-calculator": true,
  "better-reward-titles": true,
  "max-ap-investment": true,
  "full-logs": true,
  "auto-open-bag": true,
  // Bank tracker state
  "bank-last-items-taken": [] as {
    item: ItemId;
    timestamp: number;
  }[],
  "last-water-ration-taken": new Date(0).getTime(),
  // Camping state
  "camping-day": null as number | null,
  "previous-campings": 0,
  "calculator-selected-slot": 1,
  "calculator-slots": [null, null, null] as (string | null)[],
  // Shopping list
  "shopping-list": DEFAULT_SHOPPING_LIST as string | null,
  "default-shopping-list": DEFAULT_SHOPPING_LIST,
  // Game state
  "hordes-lang": (document.documentElement.lang ?? Lang.EN) as Lang,
  // Updater settings
  "user-key": "",
};

export type Store = typeof store;

/**
 * Update a store value and sync it with the storage API
 */
export const setStore = <K extends keyof Store>(
  key: K,
  value: (typeof store)[K]
) => {
  // eslint-disable-next-line no-restricted-syntax
  store[key] = value;

  // We don't await to prevent unnecessary delays
  chrome.storage.sync.set({ [key]: value }).catch(console.error);
};

export const initStore = async () => {
  // Update lang (don't update if wrong format)
  if (store["hordes-lang"].length === 2) {
    setStore("hordes-lang", store["hordes-lang"]);
  }

  const data = await chrome.storage.sync.get();

  // Clear old storage
  if (typeof data["lang"] !== "undefined") {
    await chrome.storage.sync.remove("lang");
    delete data["lang"];
  }
  if (typeof data["bank-blocker"] !== "undefined") {
    await chrome.storage.sync.remove("bank-blocker");
    delete data["bank-blocker"];
  }
  if (typeof data["town-id"] !== "undefined") {
    await chrome.storage.sync.remove("town-id");
    delete data["town-id"];
  }
  if (typeof data["bank-items-taken"] === "undefined") {
    await chrome.storage.sync.remove("bank-items-taken");
    delete data["bank-items-taken"];
  }
  if (typeof data["last-bank-item-taken"] === "undefined") {
    await chrome.storage.sync.remove("last-bank-item-taken");
    delete data["last-bank-item-taken"];
  }

  Object.assign(store, data);
};

export const resetOnDeath = (node: HTMLElement) => {
  if (node.classList.contains("death_header")) {
    // Only reset for own death, not for history views
    if (!location.href.includes("/welcomeToNowhere")) return;

    setStore("last-water-ration-taken", new Date(0).getTime());
    setStore("bank-last-items-taken", []);

    // Reset town data
    memory.town = null;

    // Reset camping variables
    setStore("camping-day", null);
    setStore("previous-campings", 0);
  }
};

/** Memory storage to avoid redundant JSON.parse calls on localStorage */
export const memory: {
  town: TownResponse["town"];
} = {
  town: null,
};
