import { blockBank, handleItemTaken } from "./bankBlocker";
import { initStore } from "./store";

initStore();

// TODO: Handle language changes

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === Action.TakeItem) {
    handleItemTaken();
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
