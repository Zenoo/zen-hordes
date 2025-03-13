/**
 * Store values should never be changed directly,
 * use {@link setStore} instead
 */
export const store = {
  "enhance-css": true,
  "bank-blocker": true,
  "map-preview": true,
  "bank-items-taken": 0,
  "last-bank-item-taken": Date.now(),
  "last-water-ration-taken": new Date(0).getTime(),
  "hordes-lang": document.documentElement.lang as Lang,
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

  chrome.storage.sync.set({ [key]: value }).catch(console.error);
};

export const initStore = () => {
  // Clear old storage
  chrome.storage.sync.remove("lang").catch(console.error);

  // Update lang (don't update if tab is unloaded)
  if (store["hordes-lang"].length === 2) {
    setStore("hordes-lang", store["hordes-lang"]);
  }

  chrome.storage.sync.get((data) => {
    Object.assign(store, data);

    // UI enhancements handled by injected CSS
    if (store["enhance-css"]) {
      document.body.classList.add("zen-enhanced");
    }

    // Map preview styles
    if (store["map-preview"]) {
      document.body.classList.add("zen-map-preview-enabled");
    }
  });
};
