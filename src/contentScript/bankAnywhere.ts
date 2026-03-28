import { items } from "../data/items";
import { Item } from "../data/types";
import { ASSETS } from "../utils/constants";
import { t } from "../utils/translate";
import { getRelativeTime } from "./betterTooltips";
import { memory, store } from "./store";

const T: Translations = {
  en: {
    "item.category.1": "Resources",
    "item.category.6": "Furniture",
    "item.category.2": "Armoury",
    "item.category.3": "Containers and Boxes",
    "item.category.7": "Defences",
    "item.category.5": "Pharmacy",
    "item.category.0": "Food",
    "item.category.other": "Miscellaneous",
    lastUpdate: "Last update",
  },
  fr: {
    "item.category.1": "Ressources",
    "item.category.6": "Aménagements",
    "item.category.2": "Armurerie",
    "item.category.3": "Conteneurs et Boîtes",
    "item.category.7": "Défenses",
    "item.category.5": "Pharmacie",
    "item.category.0": "Provisions",
    "item.category.other": "Divers",
    lastUpdate: "Dernière mise à jour",
  },
  de: {
    "item.category.1": "Baustoffe",
    "item.category.6": "Einrichtungen",
    "item.category.2": "Waffenarsenal",
    "item.category.3": "Taschen und Behälter",
    "item.category.7": "Verteidigung",
    "item.category.5": "Apotheke und Labor",
    "item.category.0": "Grundnahrungsmittel",
    "item.category.other": "Sonstiges",
    lastUpdate: "Letzte Aktualisierung",
  },
  es: {
    "item.category.1": "Recursos",
    "item.category.6": "Objetos caseros",
    "item.category.2": "Armería",
    "item.category.3": "Contenedores y cajas",
    "item.category.7": "Defensas",
    "item.category.5": "Farmacia",
    "item.category.0": "Provisiones",
    "item.category.other": "Varios",
    lastUpdate: "Última actualización",
  },
};

export const updateBankInWiki = () => {
  const bankTab = document.querySelector(
    ".zen-wiki-menu-item[data-type='bank']"
  );

  if (!bankTab) return;

  if (!memory.town) {
    bankTab.classList.add("hidden");
    return;
  }

  bankTab.classList.remove("hidden");

  const bank = document.querySelector(".zen-wiki-bank");
  if (!bank) return;

  // Clear the bank content
  bank.innerHTML = "";

  // Display last update time
  if (memory.town.bank.length) {
    const lastUpdate = document.createElement("li");
    lastUpdate.classList.add("zen-bank-last-update");
    const lastUpdateDate = new Date(memory.town.lastUpdate);
    lastUpdate.textContent = `${t(T, "lastUpdate")}: ${getRelativeTime(
      lastUpdateDate.getTime()
    )}`;
    bank.append(lastUpdate);
  }

  type BankItem = Item & {
    count: number;
    broken?: boolean;
  };

  // Sort the bank items by category
  const orderedBank: Partial<Record<ItemCategory, BankItem[]>> & {
    other: BankItem[];
  } = {
    other: [],
  };
  const categories = [
    ItemCategory.Resources,
    ItemCategory.Furniture,
    ItemCategory.Armoury,
    ItemCategory.Containers_and_boxes,
    ItemCategory.Defences,
    ItemCategory.Pharmacy,
    ItemCategory.Food,
  ];
  const itemList = Object.values(items);

  for (const bankItem of memory.town.bank) {
    const item = itemList.find((i) => i.numericalId === bankItem.id);
    if (!item) continue;

    let foundCategory = false;
    for (const category of categories) {
      if (item.categories?.includes(category)) {
        if (!orderedBank[category]) orderedBank[category] = [];
        orderedBank[category]?.push({
          ...item,
          count: bankItem.quantity,
          broken: bankItem.broken,
        });
        foundCategory = true;
        break;
      }
    }

    if (!foundCategory) {
      orderedBank.other.push({
        ...item,
        count: bankItem.quantity,
        broken: bankItem.broken,
      });
    }
  }

  // Display items by category
  for (const category of [...categories, "other" as const]) {
    if (!orderedBank[category]?.length) continue;

    const title = document.createElement("li");
    title.classList.add("category");
    title.textContent = t(T, `item.category.${category}`);
    bank.append(title);

    for (const item of orderedBank[category] ?? []) {
      const itemElement = document.createElement("li");
      itemElement.classList.add("item");
      itemElement.title = item.name[store["hordes-lang"]];
      itemElement.dataset.type = "item";
      itemElement.dataset.id = item.id;

      if (item.count > 1) {
        itemElement.classList.add("counted");
      }
      if (item.broken) {
        itemElement.classList.add("broken");
      }
      if (category === ItemCategory.Defences) {
        itemElement.classList.add("defense");
      }

      const iconWrapper = document.createElement("span");
      iconWrapper.classList.add("item-icon");
      const icon = document.createElement("img");
      icon.src = `${ASSETS}/icons/item/${item.icon}.gif`;
      icon.alt = item.name[store["hordes-lang"]];
      iconWrapper.append(icon);
      itemElement.append(iconWrapper);

      if (item.count > 1) {
        const count = document.createElement("span");
        count.textContent = item.count.toString();
        itemElement.append(count);
      }

      bank.append(itemElement);
    }
  }
};
