// These overwrites are needed since
// the source does not contain accurate data

import { Item } from "./generateData";

export const overwriteItemData = (items: Record<string, Item>) => {
  for (const item of Object.values(items)) {
    switch (item.id) {
      case 'lpoint_#00': {
        // The action to fill it up is added as a recipe instead
        item.actions = [];
      }
    }
  }
};
