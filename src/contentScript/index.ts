import { resetOnDeath, trackBank } from "./bankTracker";
import { insertBetterItemTooltips, insertBetterRuinTooltips, storeBankState, toggleItemActions, updateItemBankCountPeriodically } from "./betterTooltips";
import { displayCampingCalculator, updateCampingCalculatorWithCurrentParams } from "./campingCalculator";
import { displayExternalCityLinks } from "./externalCityLink";
import { displayUpdateButton } from "./externalSiteUpdater";
import { offHover } from "./hooks/offHover";
import { offKey } from "./hooks/offKey";
import { onClick } from "./hooks/onClick";
import { onHover } from "./hooks/onHover";
import { onKey } from "./hooks/onKey";
import { onMount } from "./hooks/onMount";
import { displayMapPreview, insertMapPreview, openBBHCityPage, removeMapPreview } from "./mapPreview";
import { listenToBackgroundMessages } from "./messageListener";
import { displayShamanSoulsButton } from "./shamanSoulsButton";
import { initStore } from "./store";
import { autoOpenBagOutside, autoSelectGlobalMapSetting, enhanceUI } from "./UIEnhancer";
import { insertWiki, openItemInWiki } from "./wiki";

// Initialize the store
await initStore();
// TODO: store is-camping as a date, update whenever the user camps
// TODO: Check if is-camping < now (day), and set campings++ and unset is-camping
// TODO: Populate previousCampings with campings in calculator
// TODO: Change openBBHCityPage handler to not use matches
// TODO: Change displayMapPreview handler to not use matches
// (both can be solved by adding a mount listener that adds a custom class to the target imgs)
// TODO: Add a list of items to bring back, with priorities (1-5)
// TODO: Add custom tags to players

// Listen for messages from the background script
listenToBackgroundMessages();

// Actions that can be performed immediately
// should be handled here
enhanceUI();
insertMapPreview();
insertWiki();
updateItemBankCountPeriodically();

// Actions that need to wait for specific elements
// to be added to the DOM should be handled here
onMount((node) => {
  trackBank(node);
  displayExternalCityLinks(node);
  displayUpdateButton(node);
  insertBetterItemTooltips(node);
  insertBetterRuinTooltips(node);
  displayShamanSoulsButton(node);
  displayCampingCalculator(node);
  resetOnDeath(node);
  storeBankState(node);
  autoSelectGlobalMapSetting(node);
  autoOpenBagOutside(node);
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
  updateCampingCalculatorWithCurrentParams(node);
});

// Actions that need to be performed on a key press
// should be handled here
onKey("h", (node) => {
  openItemInWiki(node);
});
onKey("q", () => {
  toggleItemActions(false);
});
offKey("q", () => {
  toggleItemActions(true);
});
