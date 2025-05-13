import { DEFAULT_SHOPPING_LIST } from "../utils/constants";
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
  "external-city-links": [
    ExternalSiteName.BBH,
    ExternalSiteName.FM,
    ExternalSiteName.GH,
  ],
  "external-sites-to-update": [
    ExternalSiteName.BBH,
    ExternalSiteName.FM,
    ExternalSiteName.GH,
    ExternalSiteName.MHO,
  ],
  "better-tooltips": true,
  "shaman-souls-button": true,
  "wiki": true,
  "camping-calculator": true,
  // Bank tracker state
  "bank-items-taken": 0,
  "last-bank-item-taken": Date.now(),
  "last-water-ration-taken": new Date(0).getTime(),
  // Camping state
  "camping-day": null as number | null,
  "previous-campings": 0,
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

  Object.assign(store, data);
};
