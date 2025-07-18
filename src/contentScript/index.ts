import { trackBank } from "./bankTracker";
import {
  insertBetterItemTooltips,
  insertBetterMapZoneTooltips,
  insertBetterRuinTooltips,
  storeBankState,
  toggleItemActions,
  updateItemBankCountPeriodically,
} from "./betterTooltips";
import {
  displayCampingCalculator,
  updateCampingCalculatorWithCurrentParams,
  updatePreviousCampings,
} from "./campingCalculator";
import { displayExternalCityLinks } from "./externalCityLink";
import { displayUpdateButton } from "./externalSiteUpdater";
import { offKey } from "./hooks/offKey";
import { onClick } from "./hooks/onClick";
import { onKey } from "./hooks/onKey";
import { onMount } from "./hooks/onMount";
import { displayMapPreview, insertMapPreviewTooltip } from "./mapPreview";
import { listenToBackgroundMessages } from "./messageListener";
import { displayPlayerTag, insertPlayerInfo } from "./playerInfo";
import { displayShamanSoulsButton } from "./shamanSoulsButton";
import {
  insertShoppingListToggle,
  insertShoppingListUpdateButton,
} from "./shoppingList";
import { initStore, resetOnDeath } from "./store";
import {
  autoOpenBagOutside,
  autoOpenBagWhenMovingItems,
  autoSelectGlobalMapSetting,
  enhanceUI,
} from "./UIEnhancer";
import { insertWiki, openItemInWiki } from "./wiki";

// TODO: Add spy links on current city page
// TODO: Listen to html event for items taken
// TODO: Search doesn't work in the shopping list
// TODO: Add a way to store/share camping calculations
// TODO: Add more detailed instructions to the guide
// ex: drag & drop, images, etc
// TODO: Add a note-taking feature
// TODO: Add the camping calculator in the wiki to be accessible even when not out

(async () => {
  // Do nothing on asset URLs
  if (location.href.includes("/build/images/")) {
    return;
  }

  // Initialize the store
  await initStore();
  // Listen for messages from the background script
  listenToBackgroundMessages();

  // Actions that can be performed immediately
  // should be handled here
  enhanceUI();
  insertMapPreviewTooltip();
  insertWiki();
  insertShoppingListToggle();
  updateItemBankCountPeriodically();

  // Actions that need to wait for specific elements
  // to be added to the DOM should be handled here
  onMount((node) => {
    trackBank(node);
    displayExternalCityLinks(node);
    displayUpdateButton(node);
    insertBetterItemTooltips(node);
    insertBetterRuinTooltips(node);
    insertBetterMapZoneTooltips(node);
    displayShamanSoulsButton(node);
    displayCampingCalculator(node);
    resetOnDeath(node);
    storeBankState(node);
    autoSelectGlobalMapSetting(node);
    autoOpenBagOutside(node);
    autoOpenBagWhenMovingItems(node);
    updatePreviousCampings(node);
    displayMapPreview(node);
    insertPlayerInfo(node);
    displayPlayerTag(node);
    insertShoppingListUpdateButton(node);
    updateCampingCalculatorWithCurrentParams(node);
  });

  // Actions that need to be performed on hover
  // should be handled here
  // onHover((_event) => {
  //   // Nothing yet
  // });

  // Actions that need to be performed off hover
  // should be handled here
  // offHover((_event) => {
  //   // Nothing yet
  // });

  // Actions that need to be performed on a click
  // should be handled here
  onClick((node) => {
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
})();
