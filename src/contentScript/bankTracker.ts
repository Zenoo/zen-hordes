import { items } from "../data/items";
import { ItemId } from "../data/types";
import { ASSETS } from "../utils/constants";
import { findItemFromInventory } from "../utils/itemUtils";
import { resetBankState } from "./betterTooltips";
import { setStore, store } from "./store";
import { t } from "./translate";

const MAX_ITEMS_TAKEN = 5;
const MAX_ITEMS_TAKEN_CHAOS = 10;
const BLOCK_DURATION = 15 * 60 * 1000; // 15 minutes

const T: Translations = {
  en: {
    "items-taken": "Items taken",
    "limit-reached":
      "You reached the maximum number of items you can take from the bank in the last 15 minutes. Please wait for a spot to become available before taking more items.",
  },
  fr: {
    "items-taken": "Objets pris",
    "limit-reached":
      "Vous avez atteint le nombre maximum d'objets que vous pouvez prendre dans la banque au cours des 15 dernières minutes. Veuillez attendre qu'une place se libère avant de prendre plus d'objets.",
  },
  de: {
    "items-taken": "Gegenstände entnommen",
    "limit-reached":
      "Sie haben die maximale Anzahl an Gegenständen erreicht, die Sie in den letzten 15 Minuten aus der Bank entnehmen können. Bitte warten Sie, bis ein Platz frei wird, bevor Sie weitere Gegenstände entnehmen.",
  },
  es: {
    "items-taken": "Objetos tomados",
    "limit-reached":
      "Has alcanzado el número máximo de objetos que puedes tomar del banco en los últimos 15 minutos. Por favor, espera a que haya un espacio disponible antes de tomar más objetos.",
  },
};

const getMaxItems = () => {
  const isChaos = !!document.querySelector(
    "body[data-theme-secondary-modifier='chaos']"
  );
  return isChaos ? MAX_ITEMS_TAKEN_CHAOS : MAX_ITEMS_TAKEN;
};

export const cleanupBankNotification = () => {
  document.querySelector("#zen-bank-notification")?.remove();
  setStore("bank-last-items-taken", []);
};

export const handleItemTaken = (itemId: ItemId, waterFromWell?: boolean) => {
  if (waterFromWell) {
    // First water ration per day doesn't count towards the bank limit
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    if (store["last-water-ration-taken"] < startOfDay.getTime()) {
      setStore("last-water-ration-taken", Date.now());
      return;
    }
  }

  // Check if the limit has been reached
  if (store["bank-last-items-taken"].length >= getMaxItems()) {
    // Reset all item timers
    setStore(
      "bank-last-items-taken",
      store["bank-last-items-taken"].map((item) => ({
        item: item.item,
        timestamp: Date.now(),
      }))
    );
    return;
  }

  // Add the item to the list of taken items
  setStore(
    "bank-last-items-taken",
    store["bank-last-items-taken"].concat({
      item: itemId,
      timestamp: Date.now(),
    })
  );
};

const formatTime = (milliseconds: number) => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

export const updateLastItemsNotification = (bank: HTMLElement) => {
  let notification = document.querySelector("#zen-bank-notification");

  if (store["bank-last-items-taken"].length === 0) {
    // Remove the notification if there are no items taken
    notification?.remove();
    return;
  }

  if (!notification) {
    // Create the notification if it doesn't exist
    notification = document.createElement("div");
    notification.id = "zen-bank-notification";
    notification.classList.add("note", "note-critical");

    const title = document.createElement("p");
    title.classList.add("bank-notification-title");
    title.textContent = t(T, "items-taken");
    notification.append(title);

    const list = document.createElement("ul");
    notification.append(list);

    bank.parentElement?.insertBefore(notification, bank);
  }

  const list = notification.querySelector("ul");
  if (!list) {
    throw new Error("List element not found in bank notification");
  }

  // Clear the list
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  // Add each item to the list
  store["bank-last-items-taken"].forEach(({ item, timestamp }) => {
    const listItem = document.createElement("li");

    const icon = document.createElement("img");
    icon.src = `${ASSETS}/icons/item/${items[item].icon}.gif`;
    icon.alt = items[item].name[store["hordes-lang"]];
    icon.title = items[item].name[store["hordes-lang"]];
    listItem.append(icon);

    const time = document.createElement("span");
    time.classList.add("time-remaining");
    time.textContent = formatTime(timestamp + BLOCK_DURATION - Date.now());
    listItem.append(time);

    // Update timer every second
    const timer = setInterval(() => {
      // Check if the item still exists in the DOM
      if (!listItem.isConnected) {
        clearInterval(timer);
        return;
      }

      const timeRemaining = timestamp + BLOCK_DURATION - Date.now();
      if (timeRemaining <= 0) {
        // Clear the timer
        clearInterval(timer);

        // Remove the item from the list
        listItem.remove();

        // Remove the alert
        const alert = notification?.querySelector(".bank-notification-alert");
        alert?.remove();

        // If the list is empty, remove the notification
        if (list.children.length === 0) {
          notification?.remove();
        }

        // Remove the item from the store
        setStore(
          "bank-last-items-taken",
          store["bank-last-items-taken"].filter(
            (i) => i.timestamp !== timestamp || i.item !== item
          )
        );
        return;
      }

      time.textContent = formatTime(timeRemaining);
    }, 1000);

    list.append(listItem);
  });

  // Alert when the limit is reached
  let alert = notification.querySelector(".bank-notification-alert");

  if (store["bank-last-items-taken"].length >= getMaxItems()) {
    if (!alert) {
      alert = document.createElement("span");
      alert.classList.add("bank-notification-alert");
      alert.textContent = t(T, "limit-reached");
      notification.append(alert);
    }
  } else {
    // Remove the alert if the limit is not reached
    alert?.remove();
  }
};

export const trackBank = (node: HTMLElement) => {
  if (!store["bank-tracker"]) return;
  if (node.id !== "bank-inventory") return;

  // Listen to item clicks
  if (node.getAttribute("data-zen-bank-listener") !== "true") {
    node.setAttribute("data-zen-bank-listener", "true");

    node.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;

      const bankElem = target.closest(".bank");
      if (!bankElem) return;

      const itemElem = target.closest<HTMLElement>(".item");
      if (!itemElem) return;

      const item = findItemFromInventory(itemElem);
      if (!item) return;

      handleItemTaken(item.id);
      updateLastItemsNotification(node);
    });
  }

  updateLastItemsNotification(node);
};

export const resetOnDeath = (node: HTMLElement) => {
  if (node.classList.contains("death_header")) {
    // Only reset for own death, not for history views
    if (!location.href.includes("/welcomeToNowhere")) return;

    setStore("last-water-ration-taken", new Date(0).getTime());
    setStore("bank-last-items-taken", []);

    // Reset bank state
    resetBankState();
    localStorage.removeItem("bankStateTimestamp");

    // Reset camping variables
    setStore("camping-day", null);
    setStore("previous-campings", 0);
  }
};
