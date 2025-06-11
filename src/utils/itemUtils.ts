import { store } from "../contentScript/store";
import { items } from "../data/items";

export const findItemFromInventory = (node: HTMLElement) => {
  const img = node.querySelector<HTMLImageElement>(".item-icon img");
  if (!img) return;

  return Object.values(items).find((item) => {
    // Check if the item name matches the icon alt
    const itemName = item.name[store["hordes-lang"]];
    const iconAlt = img.alt;

    if (itemName !== iconAlt) {
      return false;
    }

    // Check if the item icon matches the icon src
    const imgSrc = img.src;
    const iconMatch = imgSrc
      ? /item\/(.+)\..+\.gif/.exec(imgSrc)?.[1] ?? ""
      : "";

    if (iconMatch !== item.icon) {
      return false;
    }

    return true;
  });
};
