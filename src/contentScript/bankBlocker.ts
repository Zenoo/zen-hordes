import { Lang, setStore, store, Store } from "./store";
import { t, Translations } from "./translate";

// TODO: Handle chaos
const MAX_ITEMS_TAKEN = 5;
const BLOCK_DURATION = 15 * 60 * 1000; // 15 minutes

const T: Translations = {
  en: {
    "limit-reached": `You reached the maximum number of items you can take from the bank (${MAX_ITEMS_TAKEN}) in a 15-minute period. Please wait a bit before taking more items.`,
  },
  fr: {
    "limit-reached": `Vous avez atteint le nombre maximum d'objets que vous pouvez prendre dans la banque (${MAX_ITEMS_TAKEN}) en 15 minutes. Veuillez attendre un peu avant de prendre plus d'objets.`,
  },
  de: {
    "limit-reached": `Sie haben die maximale Anzahl von Gegenständen erreicht, die Sie in einem Zeitraum von 15 Minuten aus der Bank entnehmen können (${MAX_ITEMS_TAKEN}). Bitte warten Sie einen Moment, bevor Sie weitere Gegenstände entnehmen.`,
  },
  es: {
    "limit-reached": `Ha alcanzado la cantidad máxima de objetos que puede tomar del banco (${MAX_ITEMS_TAKEN}) en un período de 15 minutos. Espere un poco antes de tomar más objetos.`,
  },
};

export const handleItemTaken = () => {
  setStore("bank-items-taken", store["bank-items-taken"] + 1);
  setStore("last-bank-item-taken", Date.now());
};

const formatTime = (milliseconds: number) => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

const updateTimer = (timerElement: Element | null, endTime: number) => {
  if (!timerElement) return;

  const interval = setInterval(() => {
    const timeRemaining = endTime - Date.now();

    // Clear everything if the timer has expired
    if (timeRemaining <= 0) {
      timerElement.closest(".bank-blocker")?.remove();
      document.querySelector("#bank-blocked-notification")?.remove();
      clearInterval(interval);
    } else {
      const formattedTime = formatTime(timeRemaining);
      timerElement.textContent = formattedTime;
    }
  }, 1000);
};

export const blockBank = (node: HTMLElement) => {
  if (!store["bank-blocker"]) return;

  if (node.id === "bank-inventory") {
    // Bank displayed, check if we need to display the blocker
    if (store["bank-items-taken"] >= MAX_ITEMS_TAKEN) {
      const endTime = store["last-bank-item-taken"] + BLOCK_DURATION;
      const timeRemaining = endTime - Date.now();

      if (timeRemaining <= 0) {
        setStore("bank-items-taken", 0);
        return;
      };

      // Visual blocker
      const existingBlocker = document.querySelector(".bank-blocker");
      if (existingBlocker) {
        existingBlocker.remove();
      }

      const blocker = document.createElement("div");
      blocker.classList.add("bank-blocker");
      node.append(blocker);

      // Notification
      const existingNotification = document.querySelector("#bank-blocked-notification");
      if (existingNotification) {
        existingNotification.remove();
      }

      const formattedTime = formatTime(timeRemaining);
      const notification = document.createElement("div");
      notification.id = "bank-blocked-notification";
      notification.classList.add("note", "note-critical");

      notification.innerHTML = /* html */ `
        ${t(T, "limit-reached")}
        <p class="time-remaining">${formattedTime}</p>
      `;

      node.parentElement?.insertBefore(notification, node);

      const timerElement = notification.querySelector(".time-remaining");
      updateTimer(timerElement, endTime);
    }
  }
};
