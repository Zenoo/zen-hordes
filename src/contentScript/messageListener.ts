import { trackBank, cleanupBankNotification, handleItemTaken } from "./bankTracker";
import {
  insertBetterItemTooltips,
  insertBetterRuinTooltips,
} from "./betterTooltips";
import {
  displayCampingCalculator,
  updateCampingCalculatorWithCurrentParams,
} from "./campingCalculator";
import { displayExternalCityLinks } from "./externalCityLink";
import { ExternalSiteName } from "./externalSites";
import { displayUpdateButton } from "./externalSiteUpdater";
import { displayShamanSoulsButton } from "./shamanSoulsButton";
import { setStore, Store, store } from "./store";

export const listenToBackgroundMessages = () => {
  chrome.runtime.onMessage.addListener(
    (message: Message, _sender, _sendResponse) => {
      switch (message.action) {
        case Action.TakeItem: {
          // Check if we are in the bank first
          if (!location.href.endsWith("/jx/town/bank")) return;

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
            case "bank-tracker": {
              setStore("bank-tracker", !!value.enabled);

              if (!value.enabled) {
                cleanupBankNotification();
              } else {
                const bank = document.getElementById("bank-inventory");
                if (bank) {
                  trackBank(bank);
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
            case "external-sites-to-update": {
              const list = value.enabled as ExternalSiteName[];
              setStore("external-sites-to-update", list);

              // Refresh update button
              const button = document.querySelector(".zen-update-button");
              if (button) {
                button.remove();
              }

              const target =
                document.querySelector<HTMLElement>(".inventory.desert");
              if (target) {
                displayUpdateButton(target);
              }
              break;
            }
            case "shaman-souls-button": {
              setStore("shaman-souls-button", !!value.enabled);

              if (value.enabled) {
                const target = document.querySelector<HTMLElement>(
                  ".map+.controls .tilemap_controls .float-left"
                );
                if (target) {
                  displayShamanSoulsButton(target);
                }
              } else {
                const button = document.querySelector(
                  ".zen-shaman-souls-button"
                );
                if (button) {
                  button.remove();
                }
              }
              break;
            }
            case "better-tooltips": {
              setStore("better-tooltips", !!value.enabled);

              if (value.enabled) {
                // Get all item tooltips
                document
                  .querySelectorAll<HTMLElement>(".tooltip.item")
                  .forEach((target) => {
                    // Insert better tooltips
                    insertBetterItemTooltips(target);
                  });

                // Get all ruin tooltips
                document
                  .querySelectorAll<HTMLElement>(".tooltip-map")
                  .forEach((target) => {
                    // Insert better tooltips
                    insertBetterRuinTooltips(target);
                  });
              } else {
                // Get all item tooltips
                document
                  .querySelectorAll(".tooltip.item.zen-better-tooltip")
                  .forEach((node) => {
                    // Remove better tooltips parts
                    node.querySelectorAll(".zen-added").forEach((added) => {
                      added.remove();
                    });

                    // Remove better tooltips class
                    node.classList.remove("zen-better-tooltip");
                  });

                // Get all ruin tooltips
                document
                  .querySelectorAll(".tooltip-map.zen-better-tooltip")
                  .forEach((node) => {
                    // Remove better tooltips parts
                    node.querySelectorAll(".zen-added").forEach((added) => {
                      added.remove();
                    });

                    // Remove better tooltips class
                    node.classList.remove("zen-better-tooltip");
                  });
              }
              break;
            }
            case "camping-calculator": {
              setStore("camping-calculator", !!value.enabled);

              if (value.enabled) {
                const target =
                  document.querySelector<HTMLElement>(".camping_actions");
                if (target) {
                  displayCampingCalculator(target);

                  const clickTarget =
                    document.querySelector<HTMLElement>("[for='zone-camp']");
                  if (clickTarget) {
                    updateCampingCalculatorWithCurrentParams(clickTarget);
                  }
                }
              } else {
                document.querySelector(".zen-camping-calculator")?.remove();
              }
              break;
            }
            default: {
              console.error("Unknown feature:", value.feature);
            }
          }
          break;
        }
        case Action.Logout: {
          // Reset user key
          setStore("user-key", "");
          break;
        }
        case Action.SetStorage: {
          const value = message.value as { name: string; value: unknown };

          if (value.name in store) {
            if (store[value.name as keyof Store] !== value.value) {
              setStore(
                value.name as keyof Store,
                value.value as Store[keyof Store]
              );
            }
          } else {
            console.error("Unknown option:", value.name);
          }
          break;
        }
        case Action.RefreshDesert: {
          // Refresh external site updater
          const existing = document.querySelectorAll(
            ".zen-update-button, .zen-update-error"
          );

          existing.forEach((node) => {
            node.remove();
          });

          const inventory =
            document.querySelector<HTMLElement>(".inventory.desert");
          if (inventory) {
            displayUpdateButton(inventory);
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
