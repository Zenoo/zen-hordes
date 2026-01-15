import { store } from "./store";

export enum LogEntryType {
  NEW_CITIZEN = 216,
  TAKE_ITEM = 2,
  DEPOSIT_ITEM = 281,
  DOG_DEPOSIT_ITEM = 282,
  DOG_TAKE_ITEM = 296,
  TAKE_WATER_RATION = 5,
  TAKE_ADDITIONAL_RATION = 6,
  STEAL_BANK = 201,
  STEAL_HOUSE = 67,
  LOOT_HOUSE = 139,
  UPGRADE_HOUSE = 30,
  DISCOVER_BUILDING = 12,
  BUILD_BUILDING = 14,
  BUILDING_GENERATE_ITEM = 16,
  WORK_ON_BUILDING = 168,
  REPAIRED_BUILDING = 169,
  USE_WORKSHOP = 31,
  RESCUE_CITIZEN = 254,
  OPEN_CLOSE_DOOR = 17,
  ENTER_LEAVE_TOWN = 19,
  CAMPING_UPGRADE_MANUAL = 75,
  CAMPING_UPGRADE_OBJECT = 76,
  ATTACK_CITIZEN = 86,
  DEATH_BY_DEHYDRATION = 23,
  DEATH_BY_CYANIDE = 26,
  THROW_OUT_CORPSE = 62,
  CLEAR_CORPSE_WITH_WATER = 63,
}

export const displayFullLogs = (node: HTMLElement) => {
  if (!store["full-logs"]) return;
  if (!node.classList.contains("log-complete-link")) return;

  node.click();
};
