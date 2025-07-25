import { buildings } from "../data/buildings";
import { items } from "../data/items";
import { ruins } from "../data/ruins";
import { Building, BuildingId, Item, Ruin } from "../data/types";
import { ASSETS, DEFAULT_SHOPPING_LIST } from "../utils/constants";
import { tooltip } from "../utils/tooltip";
import { insertBetterItemTooltips } from "./betterTooltips";
import { notify, Severity } from "./notify";
import {
  generateShoppingListMessage,
  getShoppingList,
  setShoppingList,
} from "./shoppingList";
import { setStore, store } from "./store";
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
    shoppingList: "Shopping list",
    items: "Items",
    buildings: "Buildings",
    ruins: "Ruins",
    search: "Search",
    all: "All items",
    nothingFound: "Nothing matches your search",
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
    "priority.1": "Important",
    "priority.2": "Useful",
    "priority.3": "Supplementary",
    others: "Others",
    copyForForum: "Copy as a forum message",
    setAsDefault: "Set as default",
    restoreDefault: "Restore default",
    restoreInitialDefault: "Restore initial default",
    copyForForumSuccess: "Shopping list copied to clipboard",
    setAsDefaultSuccess: "Default shopping list set",
    restoreDefaultSuccess: "Default shopping list restored",
    restoreInitialDefaultSuccess: "Initial default shopping list restored",
    "shortcut.openItemInWiki":
      "(While hovering over an item) Show item details in the wiki",
    "shortcut.hideItemActions":
      "(Hold while hovering over an item) Hide item actions (useful when the tooltip gets too big)",
    "shortcut.highlightShoppingList":
      "(Hold on the shopping cart in the bottom right of the page) Highlight the items from the shopping list",
    temporaryBuilding: "Temporary building",
  },
  fr: {
    wiki: "Wiki",
    close: "Fermer",
    wikiMissing: "Impossible d'atteindre le wiki",
    menu: "Menu",
    shoppingList: "Liste de courses",
    items: "Objets",
    buildings: "Chantiers",
    ruins: "Bâtiments",
    search: "Rechercher",
    all: "Tous les objets",
    nothingFound: "Rien ne correspond à votre recherche",
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
    "priority.1": "Important",
    "priority.2": "Utile",
    "priority.3": "Supplémentaire",
    others: "Autres",
    setAsDefault: "Définir par défaut",
    copyForForum: "Copier en message de forum",
    restoreDefault: "Restaurer par défaut",
    restoreInitialDefault: "Restaurer le défaut initial",
    copyForForumSuccess: "Liste de courses copiée dans le presse-papiers",
    setAsDefaultSuccess: "Liste de courses par défaut définie",
    restoreDefaultSuccess: "Liste de courses par défaut restaurée",
    restoreInitialDefaultSuccess:
      "Liste de courses par défaut initiale restaurée",
    "shortcut.openItemInWiki":
      "(En survolant un objet) Afficher les détails de l'objet dans le wiki",
    "shortcut.hideItemActions":
      "(Maintenir en survolant un objet) Masquer les actions de l'objet (utile lorsque l'info-bulle devient trop grande)",
    "shortcut.highlightShoppingList":
      "(Maintenir sur le chariot en bas à droite de la page) Mettre en surbrillance les objets de la liste de courses",
    temporaryBuilding: "Bâtiment temporaire",
  },
  de: {
    wiki: "Wiki",
    close: "Schließen",
    wikiMissing: "Wiki nicht erreichbar",
    menu: "Menü",
    shoppingList: "Einkaufsliste",
    items: "Gegenstände",
    buildings: "Bauten",
    ruins: "Ruinen",
    search: "Suche",
    all: "Alle Gegenstände",
    nothingFound: "Nichts gefunden",
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
    "priority.1": "Wichtig",
    "priority.2": "Nützlich",
    "priority.3": "Ergänzend",
    others: "Andere",
    copyForForum: "Als Forenbeitrag kopieren",
    setAsDefault: "Als Standard festlegen",
    restoreDefault: "Restaurieren Sie die Standardeinstellungen",
    restoreInitialDefault:
      "Stellen Sie die ursprünglichen Standardeinstellungen wieder her",
    copyForForumSuccess: "Einkaufsliste in die Zwischenablage kopiert",
    setAsDefaultSuccess: "Einkaufsliste als Standard festgelegt",
    restoreDefaultSuccess: "Einkaufsliste auf Standard zurückgesetzt",
    restoreInitialDefaultSuccess:
      "Einkaufsliste auf ursprünglichen Standard zurückgesetzt",
    "shortcut.openItemInWiki":
      "(Beim Überfahren eines Gegenstands) Zeigt die Einzelheiten des Gegenstands im Wiki an",
    "shortcut.hideItemActions":
      "(Halten Sie die Maus über einen Gegenstand) Blenden Sie die Aktionen des Gegenstands aus (nützlich, wenn das Tooltip zu groß wird)",
    "shortcut.highlightShoppingList":
      "(Halten Sie den Einkaufswagen in der unteren rechten Ecke der Seite) Mettre en surbrillance les éléments de la liste de courses",
    temporaryBuilding: "Temporäres Gebäude",
  },
  es: {
    wiki: "Wiki",
    close: "Cerrar",
    wikiMissing: "No se pudo acceder a la wiki",
    menu: "Menú",
    shoppingList: "Lista de compras",
    items: "Objetos",
    buildings: "Edificios",
    ruins: "Ruinas",
    search: "Buscar",
    all: "Todos los objetos",
    nothingFound: "Nada coincide con tu búsqueda",
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
    "priority.1": "Importante",
    "priority.2": "Útil",
    "priority.3": "Suplementario",
    others: "Otros",
    copyForForum: "Copiar como mensaje de foro",
    setAsDefault: "Establecer como predeterminado",
    restoreDefault: "Restaurar por defecto",
    restoreInitialDefault: "Restaurar el defecto inicial",
    copyForForumSuccess: "Lista de compras copiada al portapapeles",
    setAsDefaultSuccess: "Lista de compras predeterminada establecida",
    restoreDefaultSuccess: "Lista de compras por defecto restaurada",
    restoreInitialDefaultSuccess:
      "Lista de compras por defecto inicial restaurada",
    "shortcut.openItemInWiki":
      "(Al pasar el ratón sobre un objeto) Mostrar los detalles del objeto en la wiki",
    "shortcut.hideItemActions":
      "(Mantener mientras se pasa el ratón sobre un objeto) Ocultar acciones del objeto (útil cuando la información se vuelve demasiado grande)",
    "shortcut.highlightShoppingList":
      "(Halten Sie den Einkaufswagen in der unteren rechten Ecke der Seite) Mettre en surbrillance les éléments de la liste de courses",
    temporaryBuilding: "Edificio temporal",
  },
};

const closeWiki = (backdrop: HTMLElement) => {
  backdrop.classList.remove("visible");
};

const wikiTabs = [
  {
    type: "guide",
    icon: "roles/guide.gif",
  },
  {
    type: "shoppingList",
    icon: "icons/item/item_cart.gif",
  },
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

  // Toggle search visibility
  const searchInput = document.querySelector("#zen-wiki-search");

  if (searchInput) {
    if (WIKI_STATE.tab === "guide") {
      searchInput.classList.add("hidden");
    } else {
      searchInput.classList.remove("hidden");
    }
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
    WIKI_STATE.tab === "items" || WIKI_STATE.tab === "shoppingList"
      ? items
      : WIKI_STATE.tab === "buildings"
      ? buildings
      : WIKI_STATE.tab === "ruins"
      ? ruins
      : [];

  // Filter items
  let visibleCount = 0;
  Object.values(targets).forEach((target: Item | Building | Ruin) => {
    const li = tab.querySelector(
      WIKI_STATE.tab === "shoppingList"
        ? `.zen-priority-item[data-id="${target.id}"]:not(.persistent)`
        : `.zen-wiki-item[data-id="${target.id}"]:not(.persistent)`
    );

    if (!li) {
      return;
    }

    let visible = false;
    let filteredOut = false;

    // Filter items based on category
    if (WIKI_STATE.tab === "items" && "categories" in target) {
      if (WIKI_STATE.category === "all") {
        visible = true;
      } else {
        if (WIKI_STATE.category === ItemCategory.Heavy && target.heavy) {
          visible = true;
        } else if (target.categories.includes(WIKI_STATE.category)) {
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
        target.name[store["hordes-lang"]]
          .toLowerCase()
          .normalize("NFD")
          .replace(/\p{Diacritic}/gu, "")
          .includes(search.normalize("NFD").replace(/\p{Diacritic}/gu, "")))
    ) {
      visible = true;
      visibleCount++;
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

  if (WIKI_STATE.tab === "buildings" && WIKI_STATE.search) {
    // Show parent buildings if they have visible children
    tab
      .querySelectorAll(".zen-wiki-item[data-type='building'].visible")
      .forEach((building) => {
        let childId = (building.getAttribute("data-id") ?? "") as BuildingId;
        let parent = null;

        while (parent === null || parent) {
          parent = buildings[childId].parent;

          if (parent) {
            const li = tab.querySelector(`.zen-wiki-item[data-id="${parent}"]`);
            if (li) {
              li.classList.add("visible");
            }

            childId = parent;
          }
        }
      });

    // Hide building wrappers that have no visible children
    tab.querySelectorAll(".buildings").forEach((wrapper) => {
      const children = wrapper.querySelectorAll(".zen-wiki-item.visible");
      if (children.length === 0) {
        wrapper.classList.add("hidden");
      } else {
        wrapper.classList.remove("hidden");
      }
    });
  }

  // Show empty item if no items are visible
  const emptyItem = tab.querySelector(".zen-wiki-item.empty");
  if (visibleCount === 0) {
    emptyItem?.classList.add("visible");
  } else {
    emptyItem?.classList.remove("visible");
  }
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

export const updateShoppingList = () => {
  const shoppingList = getShoppingList();
  const priorities = document.querySelectorAll(".zen-wiki-shopping-list-items");

  // Empty the lists
  priorities.forEach((list) => {
    list.innerHTML = "";
  });

  Object.values(items).forEach((item) => {
    const priorityIndex = shoppingList.findIndex((p) =>
      p.includes(item.numericalId)
    );
    const priority = priorityIndex === -1 ? 4 : priorityIndex + 1;

    const li = document.createElement("li");
    li.classList.add("zen-priority-item", "visible");
    li.setAttribute("data-id", item.id);
    li.setAttribute("data-numerical-id", item.numericalId.toString());
    li.draggable = true;

    if (priority !== 4) {
      li.classList.add("persistent");
    }

    const image = document.createElement("img");
    image.src = `${ASSETS}/icons/item/${item.icon}.gif`;
    image.title = item.name[store["hordes-lang"]];
    image.alt = item.name[store["hordes-lang"]];
    li.appendChild(image);

    li.addEventListener("dragstart", (event) => {
      const dataTransfer = event.dataTransfer;
      if (!dataTransfer) return;

      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.setData("text/plain", item.id);
    });

    priorities[priority - 1]?.appendChild(li);
  });
};

const buildBuildingRow = (building: Building, indent: number) => {
  const elements: HTMLElement[] = [];

  // Wrapper
  const wrapper = document.createElement("div");
  wrapper.classList.add("building", "zen-wiki-item", "zen-wiki-building");
  wrapper.setAttribute("data-type", "building");
  wrapper.setAttribute("data-id", building.id);
  elements.push(wrapper);

  if (indent === 0) {
    wrapper.classList.add("root");
  } else {
    wrapper.classList.add(`lv-${indent}`);
  }

  // Row color tag
  const indicator = document.createElement("div");
  indicator.classList.add("type_indicator");
  wrapper.appendChild(indicator);

  // Row
  const row = document.createElement("div");
  row.classList.add("building_row");
  wrapper.appendChild(row);

  // Building info
  const info = document.createElement("div");
  info.classList.add("building_info", "cell");
  row.appendChild(info);

  tooltip({
    target: info,
    content: building.description[store["hordes-lang"]],
  });

  // Indents
  if (indent >= 1) {
    const indent = document.createElement("img");
    indent.src = `${ASSETS}/building/small_parent2.gif`;
    info.appendChild(indent);
  }

  if (indent >= 2) {
    const indent = document.createElement("img");
    indent.src = `${ASSETS}/building/small_parent.gif`;
    info.appendChild(indent);
  }

  // Icon
  const icon = document.createElement("img");
  icon.src = `${ASSETS}/building/${building.icon}.gif`;
  icon.alt = building.name[store["hordes-lang"]];
  icon.classList.add("building_icon");
  info.appendChild(icon);

  // Name
  const nameWrapper = document.createElement("div");
  nameWrapper.classList.add("flex", "gap", "zen-wiki-building-name");
  info.appendChild(nameWrapper);

  const name = document.createElement("span");
  name.classList.add("building_name");
  name.textContent = building.name[store["hordes-lang"]];
  nameWrapper.appendChild(name);

  // Temporary building
  if (building.temporary) {
    const temporary = document.createElement("img");
    temporary.src = `${ASSETS}/icons/small_warning.gif`;
    temporary.alt = t(T, "temporaryBuilding");
    nameWrapper.appendChild(temporary);
  }

  // Defense
  if (building.defense) {
    const defense = document.createElement("div");
    defense.classList.add("defense");
    defense.textContent = building.defense.toString();
    info.appendChild(defense);
  }

  // Resources
  const resources = document.createElement("div");
  resources.classList.add("building_resources", "padded", "cell");
  row.appendChild(resources);

  // AP required
  const apWrapper = document.createElement("div");
  apWrapper.classList.add("build-req");
  resources.appendChild(apWrapper);

  const ap = document.createElement("div");
  ap.classList.add("ap");
  ap.textContent = building.apNeeded.toString();
  apWrapper.appendChild(ap);

  // Items required
  const itemsWrapper = document.createElement("div");
  itemsWrapper.classList.add("build-req-items");
  resources.appendChild(itemsWrapper);

  building.resources.forEach((item) => {
    const itemWrapper = document.createElement("div");
    itemWrapper.classList.add("build-req");
    itemsWrapper.appendChild(itemWrapper);

    const icon = document.createElement("img");
    icon.src = `${ASSETS}/icons/item/${items[item.id].icon}.gif`;
    icon.alt = items[item.id].name[store["hordes-lang"]];
    icon.title = items[item.id].name[store["hordes-lang"]];
    icon.setAttribute("data-type", "item");
    icon.setAttribute("data-id", item.id);
    itemWrapper.appendChild(icon);

    const quantity = document.createElement("span");
    quantity.classList.add("resource", "needed");
    quantity.textContent = item.amount.toString();
    itemWrapper.appendChild(quantity);
  });

  // Actions
  const actions = document.createElement("div");
  actions.classList.add("building_action", "cell");
  row.appendChild(actions);

  // Child buildings
  const childBuildings = Object.values(buildings)
    .filter((b) => b.parent === building.id)
    .sort((a, b) => a.order - b.order);

  childBuildings.forEach((child) => {
    const childElements = buildBuildingRow(child, indent + 1);
    elements.push(...childElements);
  });

  return elements;
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
    // Close on backdrop click (don't close if search is focused)
    if (event.target === backdrop && search !== document.activeElement) {
      closeWiki(backdrop);
      return;
    }

    const target = event.target as HTMLElement;

    // Click on item
    if (
      target.tagName === "IMG" &&
      target.getAttribute("data-type") === "item"
    ) {
      updateWiki(
        {
          search: "",
          tab: "items",
          category: "all",
        },
        true
      );

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
      return;
    }

    // Click on ruin
    if (
      target.tagName === "SPAN" &&
      target.getAttribute("data-type") === "ruin"
    ) {
      updateWiki(
        {
          search: "",
          tab: "ruins",
        },
        true
      );

      // Scroll to the item
      const scrollable = target.closest(".zen-wiki") as HTMLElement | null;
      const item = scrollable?.querySelector(
        `.zen-wiki-item[data-type="ruin"][data-id="${target.getAttribute(
          "data-id"
        )}"]`
      ) as HTMLElement | null;
      if (!item) {
        console.error("Ruin not found in wiki", target.getAttribute("data-id"));
        return;
      }

      item.classList.add("clicked");

      scrollable?.scrollTo({
        top: item.offsetTop - scrollable.offsetTop,
        behavior: "smooth",
      });
    }

    // Click on building
    if (
      target.tagName === "IMG" &&
      target.getAttribute("data-type") === "building"
    ) {
      updateWiki(
        {
          search: "",
          tab: "buildings",
        },
        true
      );

      // Scroll to the item
      const scrollable = target.closest<HTMLElement>(".zen-wiki");
      const item = scrollable?.querySelector<HTMLElement>(
        `.zen-wiki-item[data-type="building"][data-id="${target.getAttribute(
          "data-id"
        )}"]`
      );
      if (!item) {
        console.error(
          "Building not found in wiki",
          target.getAttribute("data-id")
        );
        return;
      }

      item.classList.add("clicked");

      const buildingContainer = item.closest<HTMLElement>(".buildings");

      scrollable?.scrollTo({
        top:
          item.offsetTop -
          scrollable.offsetTop +
          (buildingContainer?.offsetTop ?? 0),
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
  search.id = "zen-wiki-search";
  leftMenu.appendChild(search);

  search.addEventListener("input", (event) => {
    updateWiki({
      search: (event.target as HTMLInputElement).value,
    });
  });

  const list = document.createElement("ul");
  leftMenu.appendChild(list);
  wikiContent.appendChild(leftMenu);

  wikiTabs.forEach((tab) => {
    const li = document.createElement("li");
    li.classList.add("zen-wiki-menu-item");
    li.setAttribute("data-type", tab.type);

    if (tab.type === "shoppingList" && !store["shopping-list"]) {
      li.classList.add("hidden");
    }

    const icon = document.createElement("img");
    icon.src = `${ASSETS}/${tab.icon}`;
    icon.alt = t(T, tab.type);

    const text = document.createElement("span");
    text.textContent = t(T, tab.type);
    li.appendChild(icon);
    li.appendChild(text);
    list.appendChild(li);

    li.addEventListener("click", () => {
      updateWiki(
        {
          search: "",
          tab: tab.type,
          category: "all",
        },
        true
      );
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
      updateWiki(
        {
          search: "",
          tab: "items",
          category: category.type,
        },
        true
      );
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

        // Empty item
        const emptyItem = document.createElement("li");
        emptyItem.classList.add("zen-wiki-item", "empty");

        const emptyText = document.createElement("p");
        emptyText.textContent = t(T, "nothingFound");
        emptyItem.appendChild(emptyText);
        itemList.appendChild(emptyItem);

        Object.values(items)
          .sort((a, b) =>
            a.name[store["hordes-lang"]].localeCompare(
              b.name[store["hordes-lang"]]
            )
          )
          .forEach((item) => {
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

            const description = document.createElement("div");
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

            insertBetterItemTooltips(li, true);

            itemList.appendChild(li);
          });
        break;
      }
      case "buildings": {
        // Find base buildings
        const baseBuildings = Object.values(buildings)
          .filter((building) => typeof building.parent === "undefined")
          .sort((a, b) => a.order - b.order);

        baseBuildings.forEach((building) => {
          const wrapper = document.createElement("div");
          wrapper.classList.add("buildings", `type_${building.icon}`);

          // Header
          const header = document.createElement("div");
          header.classList.add(
            "row-flex",
            "wrap",
            "stretch",
            "buildings_header"
          );
          wrapper.appendChild(header);

          const indicator = document.createElement("div");
          indicator.classList.add("type_indicator");
          header.appendChild(indicator);

          const headerImage = document.createElement("div");
          headerImage.classList.add("stretch", "buildings_header_image");
          header.appendChild(headerImage);

          const elements = buildBuildingRow(building, 0);
          elements.forEach((element) => {
            wrapper.appendChild(element);
          });

          tab.appendChild(wrapper);
        });
        break;
      }
      case "ruins": {
        // Ruin list
        const ruinList = document.createElement("ul");
        ruinList.classList.add("zen-wiki-item-list");
        tab.appendChild(ruinList);

        Object.values(ruins)
          .sort((a, b) =>
            a.name[store["hordes-lang"]].localeCompare(
              b.name[store["hordes-lang"]]
            )
          )
          .forEach((ruin) => {
            const li = document.createElement("li");
            li.classList.add("zen-wiki-item", "visible", "zen-better-tooltip");
            li.setAttribute("data-type", "ruin");
            li.setAttribute("data-id", ruin.id.toString());

            const title = document.createElement("h4");
            li.appendChild(title);

            const icon = document.createElement("img");
            icon.src = `${ASSETS}/ruin/${ruin.icon}.gif`;
            icon.alt = ruin.name[store["hordes-lang"]];
            title.appendChild(icon);

            const name = document.createElement("span");
            name.textContent = ruin.name[store["hordes-lang"]];
            title.appendChild(name);

            const description = document.createElement("p");
            setTextContent(description, ruin.description[store["hordes-lang"]]);
            li.appendChild(description);

            // TODO: Add ruin stats

            // Drops
            const table = document.createElement("table");
            const tbody = document.createElement("tbody");
            table.append(tbody);
            const line = document.createElement("tr");
            tbody.append(line);
            const cell = document.createElement("td");
            cell.classList.add("output");
            line.append(cell);

            const totalOdds = ruin.drops.reduce((acc, d) => acc + d.odds, 0);

            ruin.drops
              .sort((a, b) => b.odds / totalOdds - a.odds / totalOdds)
              .forEach((drop) => {
                const wrapper = document.createElement("div");

                // Icon
                const dropImg = document.createElement("img");
                dropImg.src = `${ASSETS}/icons/item/${
                  items[drop.item].icon
                }.gif`;
                dropImg.title = items[drop.item].name[store["hordes-lang"]];
                dropImg.setAttribute("data-type", "item");
                dropImg.setAttribute("data-id", drop.item);

                // Odds
                wrapper.setAttribute(
                  "data-text",
                  drop.odds
                    ? `${Math.round((drop.odds / totalOdds) * 100)}%`
                    : "?%"
                );

                wrapper.append(dropImg);
                cell.append(wrapper);
              });

            li.append(table);

            ruinList.appendChild(li);
          });
        break;
      }
      case "shoppingList": {
        // Shopping list
        const shoppingList = document.createElement("ul");
        shoppingList.classList.add("zen-wiki-shopping-list");
        tab.appendChild(shoppingList);

        // 3 priorities + unsorted (all items start in unsorted)
        for (let i = 1; i <= 4; i++) {
          const li = document.createElement("li");
          li.setAttribute("data-priority", i.toString());

          const title = document.createElement("h4");
          li.appendChild(title);

          if (i !== 4) {
            const example = document.createElement("div");
            example.setAttribute("data-zen-amount", i.toString());
            title.appendChild(example);
          }

          const name = document.createElement("span");
          name.textContent = t(T, i === 4 ? "others" : `priority.${i}`);
          title.appendChild(name);

          const list = document.createElement("ul");
          list.classList.add(
            "zen-wiki-shopping-list-items",
            "inventory",
            "desert"
          );
          list.setAttribute("data-priority", i.toString());
          li.appendChild(list);
          shoppingList.appendChild(li);

          list.addEventListener("dragover", (event) => {
            event.preventDefault();

            if (!event.dataTransfer) return;
            event.dataTransfer.dropEffect = "move";
          });

          list.addEventListener("drop", (event) => {
            event.preventDefault();

            if (!event.dataTransfer) return;
            const id = event.dataTransfer.getData("text/plain");
            const item = document.querySelector(
              `.zen-priority-item[data-id="${id}"]`
            );

            if (!item) return;

            const numericalId = +(item.getAttribute("data-numerical-id") ?? 0);

            const target = event.target as HTMLElement;

            // Don't do anything if dropped on the same list
            if (target.closest("ul") === item.closest("ul")) {
              return;
            }

            target.closest("ul")?.appendChild(item);

            // Update persistent class
            if (i === 4) {
              item.classList.remove("persistent");
            } else {
              item.classList.add("persistent");
            }

            // Update shopping list
            setShoppingList(
              getShoppingList().map((list, j) => {
                if (list.includes(numericalId) && j !== i - 1) {
                  return list.filter((item) => item !== numericalId);
                }

                if (j === i - 1) {
                  return [...list, numericalId];
                }

                return list;
              })
            );
          });
        }

        // Buttons
        const buttonWrapper = document.createElement("div");
        buttonWrapper.classList.add("zen-wiki-shopping-list-actions");
        tab.appendChild(buttonWrapper);

        // Copy for forum button
        const copyForForum = document.createElement("button");
        copyForForum.textContent = t(T, "copyForForum");

        copyForForum.addEventListener("click", () => {
          navigator.clipboard.writeText(generateShoppingListMessage());
          notify(t(T, "copyForForumSuccess"));
        });

        buttonWrapper.appendChild(copyForForum);

        // Set as default button
        const setAsDefault = document.createElement("button");
        setAsDefault.textContent = t(T, "setAsDefault");

        setAsDefault.addEventListener("click", () => {
          if (!store["shopping-list"]) return;

          setStore("default-shopping-list", store["shopping-list"]);
          notify(t(T, "setAsDefaultSuccess"));
        });

        buttonWrapper.appendChild(setAsDefault);

        // Restore default button
        const restoreDefault = document.createElement("button");
        restoreDefault.textContent = t(T, "restoreDefault");

        restoreDefault.addEventListener("click", () => {
          if (!store["shopping-list"]) return;
          const defaultList = store["default-shopping-list"];

          setStore("shopping-list", defaultList);
          notify(t(T, "restoreDefaultSuccess"));
          updateShoppingList();
        });

        buttonWrapper.appendChild(restoreDefault);

        // Restore initial default button
        const restoreInitialDefault = document.createElement("button");
        restoreInitialDefault.textContent = t(T, "restoreInitialDefault");

        restoreInitialDefault.addEventListener("click", () => {
          setStore("shopping-list", DEFAULT_SHOPPING_LIST);
          setStore("default-shopping-list", DEFAULT_SHOPPING_LIST);
          notify(t(T, "restoreInitialDefaultSuccess"));
          updateShoppingList();
        });

        buttonWrapper.appendChild(restoreInitialDefault);

        updateShoppingList();
        break;
      }
      case "guide": {
        const shortcuts = document.createElement("ul");
        shortcuts.classList.add("zen-wiki-shortcuts");

        // Open item in wiki
        const openItem = document.createElement("li");
        const openItemKey = document.createElement("kbd");
        const openItemText = document.createElement("span");

        openItemKey.textContent = "H";
        openItemText.textContent = t(T, "shortcut.openItemInWiki");

        openItem.appendChild(openItemKey);
        openItem.appendChild(openItemText);
        shortcuts.appendChild(openItem);

        // Hide item tooltip actions
        const hideItemActions = document.createElement("li");
        const hideItemActionsKey = document.createElement("kbd");
        const hideItemActionsText = document.createElement("span");

        hideItemActionsKey.textContent = "Q";
        hideItemActionsText.textContent = t(T, "shortcut.hideItemActions");

        hideItemActions.appendChild(hideItemActionsKey);
        hideItemActions.appendChild(hideItemActionsText);
        shortcuts.appendChild(hideItemActions);

        // Highlight shopping list items
        const highlightShoppingList = document.createElement("li");
        const highlightShoppingListKey = document.createElement("kbd");
        const highlightShoppingListText = document.createElement("span");

        highlightShoppingListKey.textContent = "Click";
        highlightShoppingListText.textContent = t(
          T,
          "shortcut.highlightShoppingList"
        );

        highlightShoppingList.appendChild(highlightShoppingListKey);
        highlightShoppingList.appendChild(highlightShoppingListText);
        shortcuts.appendChild(highlightShoppingList);

        tab.appendChild(shortcuts);
        break;
      }
      default: {
        break;
      }
    }
  });

  updateWiki(WIKI_STATE);
};

export const openItemInWiki = (node: HTMLElement) => {
  if (!store["wiki"]) return;
  if (!node.closest(".item-icon")) return;

  // Open wiki
  const backdrop = document.querySelector(".zen-wiki-backdrop");

  if (!backdrop) {
    notify(t(T, "wikiMissing"), Severity.ERROR);
    return;
  }
  backdrop.classList.add("visible");

  // Open items tab
  updateWiki(
    {
      tab: "items",
      category: "all",
      search: "",
    },
    true
  );

  // Find item
  const item = Object.values(items).find((item) => {
    return (
      item.name[store["hordes-lang"]] === node.getAttribute("alt")?.trim() &&
      (/item\/(.+)\..+\.gif/.exec(node.getAttribute("src") ?? "")?.[1] ??
        "") === item.icon
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
