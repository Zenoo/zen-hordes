import { blockBank, cleanupBankBlocker, handleItemTaken } from "./bankBlocker";
import { setStore } from "./store";

export const listenToBackgroundMessages = () => {
  chrome.runtime.onMessage.addListener(
    (message: Message, _sender, _sendResponse) => {
      switch (message.action) {
        case Action.TakeItem: {
          handleItemTaken(message.value);
          break;
        }
        case Action.ToggleFeature: {
          const value = message.value as { feature: string; enabled: boolean };
          switch (value.feature) {
            case "enhance-css": {
              setStore("enhance-css", value.enabled);

              if (value.enabled) {
                document.body.classList.add("zen-enhanced");
              } else {
                document.body.classList.remove("zen-enhanced");
              }
              break;
            }
            case "bank-blocker": {
              setStore("bank-blocker", value.enabled);

              if (!value.enabled) {
                cleanupBankBlocker();
              } else {
                const bank = document.getElementById("bank-inventory");
                if (bank) {
                  blockBank(bank);
                }
              }
              break;
            }
            case "map-preview": {
              setStore("map-preview", value.enabled);

              if (value.enabled) {
                document.body.classList.add("zen-map-preview-enabled");
              } else {
                document.body.classList.remove("zen-map-preview-enabled");
              }
              break;
            }
            default: {
              console.error("Unknown feature:", value.feature);
            }
          }
          break;
        }
        default: {
          console.error("Unknown action:", message.action);
        }
      }
    }
  );
};
