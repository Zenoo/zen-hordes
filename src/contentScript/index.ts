import { blockBank } from "./bankBlocker";
import { insertBetterTooltips } from "./betterTooltips";
import { displayCampingCalculator } from "./campingCalculator";
import { displayExternalCityLinks } from "./externalCityLink";
import { displayUpdateButton } from "./externalSiteUpdater";
import { offHover } from "./hooks/offHover";
import { onClick } from "./hooks/onClick";
import { onHover } from "./hooks/onHover";
import { onKey } from "./hooks/onKey";
import { onMount } from "./hooks/onMount";
import { displayMapPreview, insertMapPreview, openBBHCityPage, removeMapPreview } from "./mapPreview";
import { listenToBackgroundMessages } from "./messageListener";
import { displayShamanSoulsButton } from "./shamanSoulsButton";
import { initStore } from "./store";
import { insertWiki, openItemInWiki } from "./wiki";

// Initialize the store
await initStore();
// TODO: Add a target update type to AddButtonProps (data-text / textContent)
// TODO: Add ruin drops in ruin map tooltips
// TODO: Read drop data from ItemGroupDataService.php and display it in items tooltips
// TODO: Implement rotating items in tooltips (repairable items, etc)
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
  displayCampingCalculator(node);
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

// Actions that need to be performed on a key press
// should be handled here
onKey("h", (node) => {
  openItemInWiki(node);
});
