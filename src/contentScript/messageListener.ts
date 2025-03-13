import { blockBank, cleanupBankBlocker, handleItemTaken } from "./bankBlocker";
import { displayExternalCityLinks } from "./externalCityLink";
import { ExternalSiteName } from "./externalSites";
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
          const value = message.value as { feature: string; enabled: unknown };
          switch (value.feature) {
            case "enhance-css": {
              setStore("enhance-css", !!value.enabled);

              if (value.enabled) {
                document.body.classList.add("zen-enhanced");
              } else {
                document.body.classList.remove("zen-enhanced");
              }
              break;
            }
            case "bank-blocker": {
              setStore("bank-blocker", !!value.enabled);

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
              setStore("map-preview", !!value.enabled);

              if (value.enabled) {
                document.body.classList.add("zen-map-preview-enabled");
              } else {
                document.body.classList.remove("zen-map-preview-enabled");
              }
              break;
            }
            case "external-city-links": {
              const list = value.enabled as ExternalSiteName[];
              setStore("external-city-links", list);

              // Remove existing external links
              const existing = document.querySelectorAll(".zen-external-link");
              existing.forEach((node) => {
                node.remove();
              });

              // Display external links
              const anchor = document.querySelector<HTMLElement>(
                ".soul .view-town > .row .cell button:not(.zen-external-link)"
              );
              if (anchor) {
                displayExternalCityLinks(anchor);
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
