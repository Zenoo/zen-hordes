import { Building, buildings } from "../data/buildings";
import { Item, items } from "../data/items";
import { Ruin, RuinId, ruins } from "../data/ruins";
import { ASSETS } from "../utils/constants";
import { tooltip } from "../utils/tooltip";
import { insertBetterTooltips } from "./betterTooltips";
import { notify, Severity } from "./notify";
import { store } from "./store";
import { t } from "./translate";

const itemCategories = [
  { type: "all", icon: "icons/small_move.gif" },
  { type: ItemCategory.Heavy, icon: "icons/item/cat_heavy.gif" },
  { type: ItemCategory.Defences, icon: "icons/item/cat_def.gif" },
  { type: ItemCategory.GuardWeapon, icon: "icons/item/cat_weapon.gif" },
  { type: ItemCategory.Decoration, icon: "icons/item/cat_deco.gif" },
  { type: ItemCategory.Resources, icon: "pictos/r_buildr.gif" },
  { type: ItemCategory.Armoury, icon: "icons/item/item_cutcut.gif" },
  { type: ItemCategory.BagExtension, icon: "icons/item/item_bagxl.gif" },
  {
    type: ItemCategory.ChestExtension,
    icon: "icons/item/item_home_box_xl.gif",
  },
  { type: ItemCategory.APSource, icon: "PLACEHOLDER" },
  { type: ItemCategory.Water, icon: "icons/item/item_water.gif" },
  { type: ItemCategory.Food, icon: "icons/item/item_meat.gif" },
  { type: ItemCategory.Drug, icon: "pictos/r_drug.gif" },
  { type: ItemCategory.Alcohol, icon: "icons/item/item_vodka.gif" },
  { type: ItemCategory.Animal, icon: "icons/item/item_pet_cat.gif" },
  { type: ItemCategory.Blueprint, icon: "icons/item/item_bplan_r.gif" },
  { type: ItemCategory.Pharmacy, icon: "status/status_healed.gif" },
  { type: ItemCategory.RP, icon: "icons/small_rp.gif" },
  { type: ItemCategory.CampingBoost, icon: "pictos/r_camp.gif" },
  { type: ItemCategory.ShunnedItem, icon: "pictos/r_ban.gif" },
  { type: ItemCategory.Event, icon: "pictos/r_heroac.gif" },
  { type: ItemCategory.Breakable, icon: "icons/Small_broken.gif" },
  { type: ItemCategory.Poisonable, icon: "icons/item/item_poison.gif" },
] as const;

const T: Translations = {
  en: {
    wiki: "Wiki",
    close: "Close",
    wikiMissing: "Couldn't reach the wiki",
    menu: "Menu",
    items: "Items",
    buildings: "Buildings",
    ruins: "Ruins",
    search: "Search",
    all: "All items",
    "item.category.8": "Heavy items",
    "item.category.7": "Defense items",
    "item.category.9": "Guard weapons",
    "item.category.10": "Decorations",
    "item.category.1": "Resources",
    "item.category.2": "Weapons",
    "item.category.11": "Bag extensions",
    "item.category.12": "Chest extensions",
    "item.category.13": "AP sources",
    "item.category.14": "Water",
    "item.category.0": "Food",
    "item.category.15": "Drugs",
    "item.category.16": "Alcohols",
    "item.category.17": "Animals",
    "item.category.18": "Blueprints",
    "item.category.5": "Healing items",
    "item.category.19": "RP items",
    "item.category.20": "Camping boosts",
    "item.category.21": "Shunned items",
    "item.category.22": "Event items",
    "item.category.23": "Breakable items",
    "item.category.24": "Poisonable items",
    "item.tag.heavy": "Heavy item",
    "item.tag.deco": "Home decoration",
    "item.tag.defense": "Defense item",
    "item.tag.weapon": "Weapon",
    "item.tag.guard-weapon": "Guard weapon",
    "item.tag.guard-weapon.points": "({{value}} attack pts)",
  },
  fr: {
    wiki: "Wiki",
    close: "Fermer",
    wikiMissing: "Impossible d'atteindre le wiki",
    menu: "Menu",
    items: "Objets",
    buildings: "Chantiers",
    ruins: "Bâtiments",
    search: "Rechercher",
    all: "Tous les objets",
    "item.category.8": "Objets lourds",
    "item.category.7": "Objets de défense",
    "item.category.9": "Armes de garde",
    "item.category.10": "Décorations",
    "item.category.1": "Ressources",
    "item.category.2": "Armes",
    "item.category.11": "Extensions de sac",
    "item.category.12": "Extensions de coffre",
    "item.category.13": "Sources de PA",
    "item.category.14": "Eau",
    "item.category.0": "Nourriture",
    "item.category.15": "Drogues",
    "item.category.16": "Alcools",
    "item.category.17": "Animaux",
    "item.category.18": "Plans",
    "item.category.5": "Objets de soin",
    "item.category.19": "Objets RP",
    "item.category.20": "Boosts de camping",
    "item.category.21": "Objets de bannis",
    "item.category.22": "Objets d'événements",
    "item.category.23": "Objets cassables",
    "item.category.24": "Objets empoisonnables",
    "item.tag.heavy": "Objet encombrant",
    "item.tag.deco": "Aménagement de maison",
    "item.tag.defense": "Objet de défense",
    "item.tag.weapon": "Arme",
    "item.tag.guard-weapon": "Arme de veille",
    "item.tag.guard-weapon.points": "({{value}} pts attaque)",
  },
  de: {
    wiki: "Wiki",
    close: "Schließen",
    wikiMissing: "Wiki nicht erreichbar",
    menu: "Menü",
    items: "Gegenstände",
    buildings: "Bauten",
    ruins: "Ruinen",
    search: "Suche",
    all: "Alle Gegenstände",
    "item.category.8": "Schwere Gegenstände",
    "item.category.7": "Verteidigungsgegenstände",
    "item.category.9": "Wachwaffen",
    "item.category.10": "Dekorationen",
    "item.category.1": "Ressourcen",
    "item.category.2": "Waffen",
    "item.category.11": "Taschenverlängerungen",
    "item.category.12": "Truhenerweiterungen",
    "item.category.13": "AP-Quellen",
    "item.category.14": "Wasser",
    "item.category.0": "Essen",
    "item.category.15": "Drogen",
    "item.category.16": "Alkohol",
    "item.category.17": "Tiere",
    "item.category.18": "Baupläne",
    "item.category.5": "Heilungsgegenstände",
    "item.category.19": "RP-Gegenstände",
    "item.category.20": "Camping-Boosts",
    "item.category.21": "Verbotene Gegenstände",
    "item.category.22": "Event-Gegenstände",
    "item.category.23": "Zerbrechliche Gegenstände",
    "item.category.24": "Vergiftbare Gegenstände",
    "item.tag.heavy": "Schwerer Gegenstand",
    "item.tag.deco": "Hausdekoration",
    "item.tag.defense": "Verteidigungsgegenstand",
    "item.tag.weapon": "Waffe",
    "item.tag.guard-weapon": "Wachwaffe",
    "item.tag.guard-weapon.points": "({{value}} Angriffspunkte)",
  },
  es: {
    wiki: "Wiki",
    close: "Cerrar",
    wikiMissing: "No se pudo acceder a la wiki",
    menu: "Menú",
    items: "Objetos",
    buildings: "Edificios",
    ruins: "Ruinas",
    search: "Buscar",
    all: "Todos los objetos",
    "item.category.8": "Objetos pesados",
    "item.category.7": "Objetos de defensa",
    "item.category.9": "Armas de guardia",
    "item.category.10": "Decoraciones",
    "item.category.1": "Recursos",
    "item.category.2": "Armas",
    "item.category.11": "Extensiones de bolsa",
    "item.category.12": "Extensiones de cofre",
    "item.category.13": "Fuentes de PA",
    "item.category.14": "Agua",
    "item.category.0": "Comida",
    "item.category.15": "Drogas",
    "item.category.16": "Alcohol",
    "item.category.17": "Animales",
    "item.category.18": "Planos",
    "item.category.5": "Objetos de curación",
    "item.category.19": "Objetos de RP",
    "item.category.20": "Aumentos de camping",
    "item.category.21": "Objetos prohibidos",
    "item.category.22": "Objetos de evento",
    "item.category.23": "Objetos rompibles",
    "item.category.24": "Objetos envenenables",
    "item.tag.heavy": "Objeto pesado",
    "item.tag.deco": "Decoración del hogar",
    "item.tag.defense": "Objeto de defensa",
    "item.tag.weapon": "Arma",
    "item.tag.guard-weapon": "Arma de guardia",
    "item.tag.guard-weapon.points": "({{value}} puntos de ataque)",
  },
};

const closeWiki = (backdrop: HTMLElement) => {
  backdrop.classList.remove("visible");
};

const wikiTabs = [
  {
    type: "buildings",
    icon: "pictos/r_buildr.gif",
  },
  {
    type: "ruins",
    icon: "pictos/r_ruine.gif",
  },
  {
    type: "items",
    icon: "icons/item/item_repair_kit_part_raw.gif",
  },
] as const;

type WikiState = {
  search: string;
  tab: (typeof wikiTabs)[number]["type"];
  category: (typeof itemCategories)[number]["type"];
};

const WIKI_STATE: WikiState = {
  search: "",
  tab: "items",
  category: "all",
};

const updateWiki = (state: Partial<WikiState>, resetSearch?: boolean) => {
  // Update state
  Object.assign(WIKI_STATE, state);

  if (resetSearch) {
    const search = document.querySelector(
      ".zen-wiki-menu input[type='text']"
    ) as HTMLInputElement;

    search.value = WIKI_STATE.search;
  }

  // Remove clicked class from items
  const clicked = document.querySelectorAll(".zen-wiki-item.clicked");
  clicked.forEach((item) => {
    item.classList.remove("clicked");
  });

  // Update selected menu item
  if (WIKI_STATE.tab === "items") {
    const target = document.querySelector(
      `.zen-wiki-item-category[data-type="${WIKI_STATE.category}"]`
    );

    if (!target) {
      notify(t(T, "wikiMissing"), Severity.ERROR);
      return;
    }

    if (!target.classList.contains("selected")) {
      const selected = document.querySelector(".zen-wiki .selected");

      if (selected) {
        selected.classList.remove("selected");
      }

      target.classList.add("selected");
    }
  } else {
    const target = document.querySelector(
      `.zen-wiki-menu-item[data-type="${WIKI_STATE.tab}"]`
    );

    if (!target) {
      notify(t(T, "wikiMissing"), Severity.ERROR);
      return;
    }

    if (!target.classList.contains("selected")) {
      const selected = document.querySelector(".zen-wiki .selected");

      if (selected) {
        selected.classList.remove("selected");
      }

      target.classList.add("selected");
    }
  }

  const tab = document.querySelector(
    `.zen-wiki-tab[data-type="${WIKI_STATE.tab}"]`
  );

  if (!tab) {
    notify(t(T, "wikiMissing"), Severity.ERROR);
    return;
  }

  // Display the correct tab if not already visible
  if (!tab.classList.contains("visible")) {
    const tabs = document.querySelectorAll(".zen-wiki-tab");
    tabs.forEach((t) => {
      t.classList.remove("visible");
    });
    tab.classList.add("visible");
  }

  const search = WIKI_STATE.search.toLowerCase();
  const targets =
    WIKI_STATE.tab === "items"
      ? items
      : WIKI_STATE.tab === "buildings"
      ? buildings
      : ruins;

  // Filter items
  Object.values(targets).forEach((target: Item | Building | Ruin) => {
    const li = tab.querySelector(`li[data-id="${target.id}"]`);

    if (!li) {
      console.error("Target not found in wiki", target.id);
      return;
    }

    let visible = false;
    let filteredOut = false;

    // Filter items based on category
    if (WIKI_STATE.tab === "items" && "categories" in target) {
      if (WIKI_STATE.category === "all") {
        visible = true;
      } else {
        if (target.categories.includes(WIKI_STATE.category)) {
          visible = true;
        } else {
          filteredOut = true;
        }
      }
    }

    // Filter name
    if (
      !filteredOut &&
      (!search ||
        target.name[store["hordes-lang"]].toLowerCase().includes(search))
    ) {
      visible = true;
    } else {
      visible = false;
    }

    if (visible) {
      li.classList.add("visible");
    } else {
      li.classList.remove("visible");
    }

    if (filteredOut) {
      li.classList.add("filtered-out");
    } else {
      li.classList.remove("filtered-out");
    }
  });
};

/**
 * @param content Can include html tags like \<em\>...\</em\> or \<strong>...\</strong\>
 */
const setTextContent = (node: HTMLElement, content: string) => {
  // Split description by tags
  const regex = /(<([^>]+)>)/gi;
  const parts = content.split(regex);

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (!part) continue;
    if (i % 3 === 0) {
      // Check if the previous part was a tag
      if (parts[i - 1] && !parts[i - 1]?.startsWith("/")) {
        const tag = document.createElement(
          parts[i - 1]?.replace("/", "") ?? ""
        );
        tag.textContent = part;
        node.appendChild(tag);
      } else {
        // Text node
        const textNode = document.createTextNode(part);
        node.appendChild(textNode);
      }
    }
  }
};

export const insertWiki = () => {
  if (!store["wiki"]) return;

  const existing = document.querySelector(".zen-wiki-backdrop");
  if (existing) return;

  const backdrop = document.createElement("div");
  backdrop.classList.add("zen-wiki-backdrop");
  document.body.appendChild(backdrop);

  // Wiki button
  const button = document.createElement("img");
  button.classList.add("zen-wiki-button");
  button.src = `${ASSETS}/icons/zen-icon.png`;
  button.alt = t(T, "wiki");
  document.body.appendChild(button);

  tooltip({
    target: button,
    content: t(T, "wiki"),
    position: "topLeft",
  });

  button.addEventListener("click", () => {
    backdrop.classList.add("visible");
  });

  // Wiki
  const wiki = document.createElement("div");
  wiki.classList.add("zen-wiki");
  backdrop.appendChild(wiki);

  backdrop.addEventListener("click", (event) => {
    // Close on backdrop click
    if (event.target === backdrop) {
      closeWiki(backdrop);
      return;
    }

    // Click on item
    const target = event.target as HTMLElement;

    if (target.tagName === "IMG" && target.hasAttribute("data-id")) {
      WIKI_STATE.search = "";
      WIKI_STATE.tab = "items";
      WIKI_STATE.category = "all";
      updateWiki(WIKI_STATE, true);

      // Scroll to the item
      const scrollable = target.closest(".zen-wiki") as HTMLElement | null;
      const item = scrollable?.querySelector(
        `.zen-wiki-item[data-type="item"][data-id="${target.getAttribute(
          "data-id"
        )}"]`
      ) as HTMLElement | null;
      if (!item) {
        console.error("Item not found in wiki", target.getAttribute("data-id"));
        return;
      }

      item.classList.add("clicked");

      scrollable?.scrollTo({
        top: item.offsetTop - scrollable.offsetTop,
        behavior: "smooth",
      });
    }
  });

  // Close button
  const closeButton = document.createElement("img");
  closeButton.classList.add("zen-wiki-close");
  closeButton.src = `${ASSETS}/icons/b_close.png`;
  closeButton.alt = t(T, "close");

  closeButton.addEventListener("click", () => {
    closeWiki(backdrop);
  });
  wiki.appendChild(closeButton);

  // Title
  const title = document.createElement("h2");
  title.textContent = t(T, "wiki");
  wiki.appendChild(title);

  const wikiContent = document.createElement("div");
  wikiContent.classList.add("zen-wiki-content");
  wiki.appendChild(wikiContent);

  // Left menu
  const leftMenu = document.createElement("nav");
  leftMenu.classList.add("zen-wiki-menu");

  const menuTitle = document.createElement("h3");
  menuTitle.textContent = t(T, "menu");
  leftMenu.appendChild(menuTitle);

  // Search bar
  const search = document.createElement("input");
  search.type = "text";
  search.placeholder = t(T, "search");
  leftMenu.appendChild(search);

  search.addEventListener("input", (event) => {
    WIKI_STATE.search = (event.target as HTMLInputElement).value;
    updateWiki(WIKI_STATE);
  });

  const list = document.createElement("ul");
  leftMenu.appendChild(list);
  wikiContent.appendChild(leftMenu);

  wikiTabs.forEach((tab) => {
    const li = document.createElement("li");
    li.classList.add("zen-wiki-menu-item");
    li.setAttribute("data-type", tab.type);

    const icon = document.createElement("img");
    icon.src = `${ASSETS}/${tab.icon}`;
    icon.alt = t(T, tab.type);

    const text = document.createElement("span");
    text.textContent = t(T, tab.type);
    li.appendChild(icon);
    li.appendChild(text);
    list.appendChild(li);

    li.addEventListener("click", () => {
      WIKI_STATE.search = "";
      WIKI_STATE.tab = tab.type;
      WIKI_STATE.category = "all";
      updateWiki(WIKI_STATE, true);
    });
  });

  // Item categories
  const categoryList = document.createElement("ul");
  categoryList.classList.add("zen-wiki-item-category-list");
  leftMenu.appendChild(categoryList);

  itemCategories.forEach((category) => {
    const li = document.createElement("li");
    li.classList.add("zen-wiki-item-category");
    li.setAttribute("data-type", category.type.toString());
    const name = t(
      T,
      category.type === "all" ? "all" : `item.category.${category.type}`
    );

    const icon = document.createElement("img");
    icon.src = `${ASSETS}/${category.icon}`;
    icon.alt = name;

    // Different icon for APSource
    if (category.type === ItemCategory.APSource) {
      icon.src = `${ASSETS}/icons/ap_small${
        store["hordes-lang"] !== Lang.DE ? `_${store["hordes-lang"]}` : ""
      }.gif`;
    }

    const text = document.createElement("span");
    text.textContent = name;
    li.appendChild(icon);
    li.appendChild(text);
    categoryList.appendChild(li);

    li.addEventListener("click", () => {
      WIKI_STATE.search = "";
      WIKI_STATE.tab = "items";
      WIKI_STATE.category = category.type;
      updateWiki(WIKI_STATE, true);
    });
  });

  // Tab content
  const tabContent = document.createElement("div");
  tabContent.classList.add("zen-wiki-tab-content");
  wikiContent.appendChild(tabContent);

  wikiTabs.forEach((item) => {
    const tab = document.createElement("div");
    tab.classList.add("zen-wiki-tab");
    tab.setAttribute("data-type", item.type);

    const title = document.createElement("h3");
    title.textContent = t(T, item.type);
    tab.appendChild(title);
    tabContent.appendChild(tab);

    switch (item.type) {
      case "items": {
        // Item list
        const itemList = document.createElement("ul");
        itemList.classList.add("zen-wiki-item-list");
        tab.appendChild(itemList);

        Object.values(items).forEach((item) => {
          const li = document.createElement("li");
          li.classList.add("zen-wiki-item", "visible");
          li.setAttribute("data-id", item.id);
          li.setAttribute("data-type", "item");

          const title = document.createElement("h4");
          li.appendChild(title);

          const icon = document.createElement("img");
          icon.src = `${ASSETS}/icons/item/${item.icon}.gif`;
          icon.alt = item.name[store["hordes-lang"]];
          title.appendChild(icon);

          const name = document.createElement("span");
          name.textContent = item.name[store["hordes-lang"]];
          title.appendChild(name);

          const description = document.createElement("p");
          setTextContent(description, item.description[store["hordes-lang"]]);
          li.appendChild(description);

          // Item tags
          if (item.heavy) {
            const tag = document.createElement("div");
            tag.classList.add("item-tag", "item-tag-heavy");
            tag.textContent = t(T, "item.tag.heavy");
            li.appendChild(tag);
          }

          if (item.decoration) {
            const tag = document.createElement("div");
            tag.classList.add("item-tag", "item-tag-deco");
            tag.textContent = t(T, "item.tag.deco");
            li.appendChild(tag);
          }

          if (item.categories.includes(ItemCategory.Defences)) {
            const tag = document.createElement("div");
            tag.classList.add("item-tag", "item-tag-defense");
            tag.textContent = t(T, "item.tag.defense");
            li.appendChild(tag);
          }

          if (item.categories.includes(ItemCategory.Armoury)) {
            const tag = document.createElement("div");
            tag.classList.add("item-tag", "item-tag-weapon");
            tag.textContent = t(T, "item.tag.weapon");
            li.appendChild(tag);
          }

          if (item.categories.includes(ItemCategory.GuardWeapon)) {
            const tag = document.createElement("div");
            tag.classList.add("item-tag", "item-tag-weapon");
            tag.textContent = t(T, "item.tag.guard-weapon");

            const value = document.createElement("em");
            value.textContent = t(T, "item.tag.guard-weapon.points", {
              value: item.watchPoints,
            });
            tag.appendChild(value);
            li.appendChild(tag);
          }

          insertBetterTooltips(li);

          itemList.appendChild(li);
        });
        break;
      }
      case "buildings": {
        // Building list
        const buildingList = document.createElement("ul");
        buildingList.classList.add("zen-wiki-item-list");
        tab.appendChild(buildingList);

        Object.values(buildings).forEach((building) => {
          const li = document.createElement("li");
          li.classList.add("zen-wiki-item", "visible");
          li.setAttribute("data-id", building.id);

          const title = document.createElement("h4");
          li.appendChild(title);

          const icon = document.createElement("img");
          icon.src = `${ASSETS}/building/${building.icon}.gif`;
          icon.alt = building.name[store["hordes-lang"]];
          title.appendChild(icon);

          const name = document.createElement("span");
          name.textContent = building.name[store["hordes-lang"]];
          title.appendChild(name);

          const description = document.createElement("p");
          setTextContent(
            description,
            building.description[store["hordes-lang"]]
          );
          li.appendChild(description);

          // TODO: Add building stats

          buildingList.appendChild(li);
        });
        break;
      }
      case "ruins": {
        // Ruin list
        const ruinList = document.createElement("ul");
        ruinList.classList.add("zen-wiki-item-list");
        tab.appendChild(ruinList);

        Object.values(ruins).forEach((ruin) => {
          const li = document.createElement("li");
          li.classList.add("zen-wiki-item", "visible");
          li.setAttribute("data-id", ruin.id.toString());

          const title = document.createElement("h4");
          li.appendChild(title);

          // No icon for buried building
          if (ruin.id !== RuinId.BURIED_BUILDING) {
            const icon = document.createElement("img");
            icon.src = `${ASSETS}/ruin/${ruin.icon}.gif`;
            icon.alt = ruin.name[store["hordes-lang"]];
            title.appendChild(icon);
          }

          const name = document.createElement("span");
          name.textContent = ruin.name[store["hordes-lang"]];
          title.appendChild(name);

          const description = document.createElement("p");
          setTextContent(description, ruin.description[store["hordes-lang"]]);
          li.appendChild(description);

          // TODO: Add ruin stats

          ruinList.appendChild(li);
        });
        break;
      }
      default: {
        break;
      }
    }
  });

  updateWiki(WIKI_STATE);
};

export const openItemInWiki = (node: HTMLElement, event: MouseEvent) => {
  if (!store["wiki"]) return;
  if (!node.closest(".item-icon")) return;

  // Prevent default action
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();

  // Open wiki
  const backdrop = document.querySelector(".zen-wiki-backdrop");

  if (!backdrop) {
    notify(t(T, "wikiMissing"), Severity.ERROR);
    return;
  }
  backdrop.classList.add("visible");

  // Open items tab
  updateWiki({
    tab: "items",
    category: "all",
  }, true);

  // Find item
  const item = Object.values(items).find((item) => {
    return (
      item.name[store["hordes-lang"]] ===
        node.getAttribute('alt')?.trim() &&
      (/item\/(.+)\..+\.gif/.exec(
        node.getAttribute('src') ?? ""
      )?.[1] ?? "") === item.icon
    );
  });

  if (!item) {
    notify(t(T, "wikiMissing"), Severity.ERROR);
    return;
  }

  // Scroll to the item
  const scrollable = backdrop.querySelector(".zen-wiki") as HTMLElement | null;
  const itemElement = scrollable?.querySelector(
    `.zen-wiki-item[data-type="item"][data-id="${item.id}"]`
  ) as HTMLElement | null;
  if (!itemElement) {
    console.error("Item not found in wiki", item.id);
    return;
  }
  itemElement.classList.add("clicked");
  scrollable?.scrollTo({
    top: itemElement.offsetTop - scrollable.offsetTop,
    behavior: "auto",
  });

};
