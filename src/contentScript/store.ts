export const store = {
  "enhance-css": true,
  "bank-blocker": true,
  "bank-items-taken": 0,
  "last-bank-item-taken": Date.now(),
  "hordes-lang": document.documentElement.lang as Lang,
};

export type Store = typeof store;

export const setStore = <K extends keyof typeof store>(
  key: K,
  value: (typeof store)[K]
) => {
  store[key] = value;

  chrome.storage.sync.set({ [key]: value });
};

export const initStore = () => {
  // Clear old storage
  chrome.storage.sync.remove("lang");

  // Update lang (don't update if tab is unloaded)
  if (store["hordes-lang"]?.length === 2) {
    setStore("hordes-lang", store["hordes-lang"]);
  }

  chrome.storage.sync.get((data) => {
    Object.assign(store, data);

    // UI enhancements handled by injected CSS
    if (store["enhance-css"]) {
      document.body.classList.add("zen-enhanced");
    }
  });
};
