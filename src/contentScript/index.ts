import { blockBank, cleanupBankBlocker, handleItemTaken } from "./bankBlocker";
import { initStore, setStore, store } from "./store";

initStore();

// TODO: Auto publish on Chrome on version release
// TODO: Add Firefox support
// TODO: Auto publish on Firefox on version release
// TODO: Add a list of items to bring back, with priorities (1-5)
// TODO: Add custom tags to players

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message: Message, sender, sendResponse) => {
  switch (message.action) {
    case Action.TakeItem: {
      handleItemTaken();
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
});

// Actions that need to wait for specific elements to be added to the DOM
// should be handled here
const searchNodes = (node: Node) => {
  if (node instanceof HTMLElement) {
    blockBank(node);

    node.childNodes.forEach(searchNodes);
  }
};

// Listen for DOM changes
const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      searchNodes(node);
    }
  }
});

observer.observe(document.body, { childList: true, subtree: true });
