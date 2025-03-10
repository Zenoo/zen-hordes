import { blockBank, cleanupBankBlocker, handleItemTaken } from "./bankBlocker";
import { offHover } from "./hooks/offHover";
import { onClick } from "./hooks/onClick";
import { onHover } from "./hooks/onHover";
import { onMount } from "./hooks/onMount";
import { displayMapPreview, insertMapPreview, openBBHCityPage, removeMapPreview } from "./mapPreview";
import { listenToBackgroundMessages } from "./messageListener";
import { initStore, setStore, store } from "./store";

// Initialize the store
initStore();

// TODO: Auto publish on Chrome on version release
// TODO: Add Firefox support
// TODO: Auto publish on Firefox on version release
// TODO: Add a list of items to bring back, with priorities (1-5)
// TODO: Add custom tags to players

// Listen for messages from the background script
listenToBackgroundMessages();

// Actions that can be performed immediately
// should be handled here
insertMapPreview();

// Actions that need to wait for specific elements
// to be added to the DOM should be handled here
onMount((node) => {
  blockBank(node);
});

// Actions that need to be performed on hover
// should be handled here
onHover((event) => {
  displayMapPreview(event);
});

// Actions that need to be performed off hover
// should be handled here
offHover((_event) => {
  removeMapPreview();
});

// Actions that need to be performed on a click
// should be handled here
onClick((node) => {
  openBBHCityPage(node);
});
