import { blockBank } from "./bankBlocker";
import { insertBetterTooltips } from "./betterTooltips";
import { displayExternalCityLinks } from "./externalCityLink";
import { displayUpdateButton } from "./externalSiteUpdater";
import { offHover } from "./hooks/offHover";
import { onClick } from "./hooks/onClick";
import { onHover } from "./hooks/onHover";
import { onMount } from "./hooks/onMount";
import { displayMapPreview, insertMapPreview, openBBHCityPage, removeMapPreview } from "./mapPreview";
import { listenToBackgroundMessages } from "./messageListener";
import { displayShamanSoulsButton } from "./shamanSoulsButton";
import { initStore } from "./store";
import { insertWiki, displayWikiButton } from "./wiki";

// Initialize the store
await initStore();
// TODO: wrong % for staff break chance
// TODO: Differentiate Open action from OpenWithOpener
// TODO: Implement rotating items in tooltips (repairable items, etc)
// TODO: Add an onsite wiki (items/buildings/ruins)
// TODO: Display infection chances on items
// TODO: Display decoration points on items
// TODO: Add better tooltips toggle to settings
// TODO: Reset first water ration on death page display
// TODO: Add a list of items to bring back, with priorities (1-5)
// TODO: Add custom tags to players

// Listen for messages from the background script
listenToBackgroundMessages();

// Actions that can be performed immediately
// should be handled here
insertMapPreview();
insertWiki();

// Actions that need to wait for specific elements
// to be added to the DOM should be handled here
onMount((node) => {
  blockBank(node);
  displayExternalCityLinks(node);
  displayUpdateButton(node);
  insertBetterTooltips(node);
  displayShamanSoulsButton(node);
  displayWikiButton(node);
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
