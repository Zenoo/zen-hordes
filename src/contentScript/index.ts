import { onItemTransfer, trackBank } from "./bankTracker";
import {
  displayMissingPointsTitlesButton,
  displayMissingTitles,
  displayRewardTitlePoints,
} from "./betterRewardTitles";
import {
  insertBetterItemTooltips,
  insertBetterMapZoneTooltips,
  rebuildZoneTooltipAfterClear,
  toggleItemActions,
  updateBetterItemTooltips,
  updateItemBankCountPeriodically,
} from "./betterTooltips";
import {
  displayCampingCalculator,
  triggerCampingCalculatorUpdateOnJobLoad,
  updateCampingCalculatorWithCurrentParams,
  updatePreviousCampings,
} from "./campingCalculator";
import {
  displayClairvoyanceAnalysis,
  displayClairvoyanceInstructions,
} from "./clairvoyance";
import { displayExternalCityLinks } from "./externalCityLink";
import { displayUpdateButton } from "./externalSiteUpdater";
import { offKey } from "./hooks/offKey";
import { onClick } from "./hooks/onClick";
import { onEvent } from "./hooks/onEvent";
import { onImgSrcChange } from "./hooks/onImgSrcChange";
import { onKey } from "./hooks/onKey";
import { onMount } from "./hooks/onMount";
import {
  displayInternalMapButton,
  updateTownDataPeriodically,
  updateZHMap,
} from "./internalMap";
import { displayFullLogs } from "./logEntries";
import { displayMapPreview, enableMapPreview } from "./mapPreview";
import { prefillApPromptWithMaxAp } from "./maxApInvestment";
import { listenToBackgroundMessages } from "./messageListener";
import { displayPlayerTag, insertPlayerInfo } from "./playerInfo";
import { displayRuinDetails, insertBetterMapRuinTooltips } from "./ruins";
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
  displayPossibleBuriedRuin,
  displayRuinBuryCount,
  displayRuinDropsOnHover,
  enhanceUI,
} from "./UIEnhancer";
import { insertWiki, openItemInWiki } from "./wiki";

// TODO: Add more detailed instructions to the guide
// ex: drag & drop, images, etc
// TODO: Add distinctions linked to some action tooltips (throw out someone, etc)

(async () => {
  // Do nothing on asset URLs
  if (
    location.href.includes("/build/images/") ||
    location.href.includes("/cdn/avatars/")
  ) {
    return;
  }

  // Initialize the store
  await initStore();
  // Listen for messages from the background script
  listenToBackgroundMessages();

  // Actions that can be performed immediately
  // should be handled here
  enhanceUI();
  enableMapPreview();
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
    insertBetterMapRuinTooltips(node);
    insertBetterMapZoneTooltips(node);
    displayShamanSoulsButton(node);
    displayCampingCalculator(node);
    resetOnDeath(node);
    autoSelectGlobalMapSetting(node);
    autoOpenBagOutside(node);
    autoOpenBagWhenMovingItems(node);
    updatePreviousCampings(node);
    displayMapPreview(node);
    insertPlayerInfo(node);
    displayPlayerTag(node);
    insertShoppingListUpdateButton(node);
    updateCampingCalculatorWithCurrentParams(node);
    displayRuinBuryCount(node);
    displayMissingTitles(node);
    displayRewardTitlePoints(node);
    displayMissingPointsTitlesButton(node);
    prefillApPromptWithMaxAp(node);
    displayPossibleBuriedRuin(node);
    displayFullLogs(node);
    displayRuinDropsOnHover(node);
    displayRuinDetails(node);
    displayClairvoyanceInstructions(node);
    displayClairvoyanceAnalysis(node);
    displayInternalMapButton(node);
    updateTownDataPeriodically(node);
    updateZHMap(node);
  });

  // Actions that need to be performed on img src change
  // should be handled here
  onImgSrcChange((img, oldSrc, newSrc) => {
    updateBetterItemTooltips(img, oldSrc, newSrc);
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

  // Actions that need to be performed after an event
  // should be handled here
  onEvent("sig-item-transfer", onItemTransfer);
  onEvent("sig-horror-message-cleared", rebuildZoneTooltipAfterClear);
  onEvent("vaultUpdate", triggerCampingCalculatorUpdateOnJobLoad);
})();
