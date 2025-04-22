import { setStore, store } from "./store";
import { t } from "./translate";

const MAX_ITEMS_TAKEN = 5;
const MAX_ITEMS_TAKEN_CHAOS = 10;
const BLOCK_DURATION = 15 * 60 * 1000; // 15 minutes

const T: Translations = {
  en: {
    "limit-reached": `You reached the maximum number of items you can take from the bank ({{max}}) in a 15-minute period. Please wait a bit before taking more items.`,
  },
  fr: {
    "limit-reached": `Vous avez atteint le nombre maximum d'objets que vous pouvez prendre dans la banque ({{max}}) en 15 minutes. Veuillez attendre un peu avant de prendre plus d'objets.`,
  },
  de: {
    "limit-reached": `Sie haben die maximale Anzahl von Gegenständen erreicht, die Sie in einem Zeitraum von 15 Minuten aus der Bank entnehmen können ({{max}}). Bitte warten Sie einen Moment, bevor Sie weitere Gegenstände entnehmen.`,
  },
  es: {
    "limit-reached": `Ha alcanzado la cantidad máxima de objetos que puede tomar del banco ({{max}}) en un período de 15 minutos. Espere un poco antes de tomar más objetos.`,
  },
};

export const cleanupBankBlocker = () => {
  document.querySelector(".bank-blocker")?.remove();
  document.querySelector("#bank-blocked-notification")?.remove();
  setStore("bank-items-taken", 0);
};

export const handleItemTaken = (data: unknown) => {
  if (data === "water") {
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
    cleanupBankBlocker();
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

const updateTimer = (timerElement: Element | null, endTime: number) => {
  if (!timerElement) return;

  const interval = setInterval(() => {
    const timeRemaining = endTime - Date.now();

    // Clear everything if the timer has expired
    if (timeRemaining <= 0) {
      cleanupBankBlocker();
      clearInterval(interval);
    } else {
      const formattedTime = formatTime(timeRemaining);
      timerElement.textContent = formattedTime;
    }
  }, 1000);
};

export const blockBank = (node: HTMLElement) => {
  if (!store["bank-blocker"]) return;
  if (node.id !== "bank-inventory") return;

  const endTime = store["last-bank-item-taken"] + BLOCK_DURATION;
  const timeRemaining = endTime - Date.now();

  // Reset the counter if the time has expired
  if (timeRemaining <= 0) {
    cleanupBankBlocker();
    return;
  }

  const isChaos = !!document.querySelector(
    "body[data-theme-secondary-modifier='chaos']"
  );
  const maxItems = isChaos ? MAX_ITEMS_TAKEN_CHAOS : MAX_ITEMS_TAKEN;

  // Bank displayed, check if we need to display the blocker
  if (store["bank-items-taken"] >= maxItems) {
    // Visual blocker
    const existingBlocker = document.querySelector(".bank-blocker");
    if (existingBlocker) return;

    const blocker = document.createElement("div");
    blocker.classList.add("bank-blocker");
    node.append(blocker);

    // Notification
    const formattedTime = formatTime(timeRemaining);
    const notification = document.createElement("div");
    notification.id = "bank-blocked-notification";
    notification.classList.add("note", "note-critical");

    const title = document.createElement("span");
    title.textContent = t(T, "limit-reached", { max: maxItems });
    notification.append(title);

    const timer = document.createElement("p");
    timer.classList.add("time-remaining");
    timer.textContent = formattedTime;
    notification.append(timer);

    node.parentElement?.insertBefore(notification, node);

    const timerElement = notification.querySelector(".time-remaining");
    updateTimer(timerElement, endTime);
  }
};
