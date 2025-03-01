export enum Lang {
  En = "en",
  Fr = "fr",
  Es = "es",
  De = "de",
}

export const store = {
  "enhance-css": true,
  "bank-blocker": true,
  "bank-items-taken": 0,
  "last-bank-item-taken": Date.now(),
  lang: document.documentElement.lang as Lang,
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
  chrome.storage.sync.get((data) => {
    Object.assign(store, data);

    // UI enhancements handled by injected CSS
    if (store["enhance-css"]) {
      document.body.classList.add("zen-enhanced");
    }
  });
};
