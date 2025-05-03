import { resetBankState } from "./betterTooltips";
import { setStore, store } from "./store";
import { t } from "./translate";

const MAX_ITEMS_TAKEN = 5;
const MAX_ITEMS_TAKEN_CHAOS = 10;
const BLOCK_DURATION = 15 * 60 * 1000; // 15 minutes

const T: Translations = {
  en: {
    "items-taken": `You have taken {{count}} items from the bank in the last 15 minutes. You can take {{more}} more items before the limit is reached.`,
    "limit-reached": `You reached the maximum number of items you can take from the bank ({{max}}) in a 15-minute period. Please wait a bit before taking more items.`,
  },
  fr: {
    "items-taken": `Vous avez pris {{count}} objets de la banque au cours des 15 dernières minutes. Vous pouvez prendre encore {{more}} objets avant d'atteindre la limite.`,
    "limit-reached": `Vous avez atteint le nombre maximum d'objets que vous pouvez prendre dans la banque ({{max}}) en 15 minutes. Veuillez attendre un peu avant de prendre plus d'objets.`,
  },
  de: {
    "items-taken": `Sie haben {{count}} Gegenstände aus der Bank in den letzten 15 Minuten entnommen. Sie können noch {{more}} Gegenstände entnehmen, bevor die Grenze erreicht ist.`,
    "limit-reached": `Sie haben die maximale Anzahl von Gegenständen erreicht, die Sie in einem Zeitraum von 15 Minuten aus der Bank entnehmen können ({{max}}). Bitte warten Sie einen Moment, bevor Sie weitere Gegenstände entnehmen.`,
  },
  es: {
    "items-taken": `Has tomado {{count}} objetos del banco en los últimos 15 minutos. Puedes tomar {{more}} más objetos antes de alcanzar el límite.`,
    "limit-reached": `Ha alcanzado la cantidad máxima de objetos que puede tomar del banco ({{max}}) en un período de 15 minutos. Espere un poco antes de tomar más objetos.`,
  },
};

export const cleanupBankNotification = () => {
  document.querySelector("#bank-blocked-notification")?.remove();
  setStore("bank-items-taken", 0);
};

export const handleItemTaken = (waterFromWell?: boolean) => {
  if (waterFromWell) {
    // First water ration per day doesn't count towards the bank limit
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    if (store["last-water-ration-taken"] < startOfDay.getTime()) {
      setStore("last-water-ration-taken", Date.now());
      return;
    }
  }

  const endTime = store["last-bank-item-taken"] + BLOCK_DURATION;
  const timeRemaining = endTime - Date.now();

  // Reset the counter if the time has expired
  if (timeRemaining <= 0) {
    cleanupBankNotification();
  }

  setStore("bank-items-taken", store["bank-items-taken"] + 1);
  setStore("last-bank-item-taken", Date.now());
};

const formatTime = (milliseconds: number) => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

const updateTimer = (timerElement: Element) => {
  const interval = setInterval(() => {
    const timeRemaining =
      store["last-bank-item-taken"] + BLOCK_DURATION - Date.now();

    // Clear everything if the timer has expired
    if (timeRemaining <= 0) {
      cleanupBankNotification();
      clearInterval(interval);
    } else {
      const formattedTime = formatTime(timeRemaining);
      timerElement.textContent = formattedTime;
    }
  }, 1000);
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

      const item = target.closest(".item");
      if (!item) return;

      handleItemTaken();
      trackBank(node);
    });
  }

  const timeRemaining =
    store["last-bank-item-taken"] + BLOCK_DURATION - Date.now();

  // Reset the counter if the time has expired
  if (timeRemaining <= 0) {
    cleanupBankNotification();
    return;
  }

  const isChaos = !!document.querySelector(
    "body[data-theme-secondary-modifier='chaos']"
  );
  const maxItems = isChaos ? MAX_ITEMS_TAKEN_CHAOS : MAX_ITEMS_TAKEN;

  // Bank displayed, check if we need to display the notification
  if (store["bank-items-taken"] !== 0) {
    let notification = document.querySelector("#bank-blocked-notification");
    let title;

    if (!notification) {
      // Create the notification if it doesn't exist
      notification = document.createElement("div");
      notification.id = "bank-blocked-notification";
      notification.classList.add("note", "note-critical");

      title = document.createElement("span");
      notification.append(title);

      const timer = document.createElement("p");
      timer.classList.add("time-remaining");
      timer.textContent = formatTime(timeRemaining);
      notification.append(timer);

      node.parentElement?.insertBefore(notification, node);

      updateTimer(timer);
    } else {
      title = notification.querySelector("span");
      if (!title) {
        throw new Error("Title element not found");
      }
    }

    if (store["bank-items-taken"] < maxItems) {
      const more = maxItems - store["bank-items-taken"];
      title.textContent = t(T, "items-taken", {
        count: store["bank-items-taken"],
        more,
      });
    } else {
      title.textContent = t(T, "limit-reached", { max: maxItems });
    }
  }
};

export const resetOnDeath = (node: HTMLElement) => {
  if (node.classList.contains("death_header")) {
    // Only reset for own death, not for history views
    if (!location.href.includes("/welcomeToNowhere")) return;

    setStore("last-water-ration-taken", new Date(0).getTime());
    setStore("bank-items-taken", 0);
    setStore("last-bank-item-taken", Date.now());
    setStore("town-id", 0);

    // Reset bank state
    resetBankState();
    localStorage.removeItem("bankStateTimestamp");
  }
};
