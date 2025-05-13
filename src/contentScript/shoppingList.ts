import { items } from "../data/items";
import { ASSETS } from "../utils/constants";
import { tooltip } from "../utils/tooltip";
import { setStore, store } from "./store";
import { t } from "./translate";

const T: Translations = {
  en: {
    shoppingList: "Shopping list",
    "priority.1": "Important",
    "priority.2": "Useful",
    "priority.3": "Supplementary",
    zenHordesCode: "Zen Hordes Code",
    codeDesc:
      "This code is used by Zen Hordes to synchronize its shopping list.",
    toggleShoppingList: "Toggle shopping list",
  },
  fr: {
    shoppingList: "Liste de courses",
    "priority.1": "Important",
    "priority.2": "Utile",
    "priority.3": "Supplémentaire",
    zenHordesCode: "Code Zen Hordes",
    codeDesc:
      "Ce code est utilisé par Zen Hordes pour synchroniser sa liste de courses.",
    toggleShoppingList: "Utiliser la liste de courses",
  },
  de: {
    shoppingList: "Einkaufsliste",
    "priority.1": "Wichtig",
    "priority.2": "Nützlich",
    "priority.3": "Ergänzend",
    zenHordesCode: "Zen Hordes Code",
    codeDesc:
      "Dieser Code wird von Zen Hordes verwendet, um seine Einkaufsliste zu synchronisieren.",
    toggleShoppingList: "Einkaufsliste verwenden",
  },
  es: {
    shoppingList: "Lista de compras",
    "priority.1": "Importante",
    "priority.2": "Útil",
    "priority.3": "Suplementario",
    zenHordesCode: "Código Zen Hordes",
    codeDesc:
      "Este código es utilizado por Zen Hordes para sincronizar su lista de compras.",
    toggleShoppingList: "Usar lista de compras",
  },
};

export const getShoppingList = () => {
  const shoppingList = store["shopping-list"]?.split("|") ?? [];

  return shoppingList.map((priority) => {
    const items = priority.split(",").map((item) => +item);
    return items;
  });
};

export const setShoppingList = (list: number[][]) => {
  const shoppingList = list
    .map((priority) => {
      const items = priority.map((item) => item.toString());
      return items.join(",");
    })
    .join("|");

  setStore("shopping-list", shoppingList);
};

export const generateShoppingListMessage = () => `[big][b][i]${t(
  T,
  "shoppingList"
)}[/i][/b][/big]

${[1, 2, 3]
  .map(
    (priority) => `[lang_${store["hordes-lang"]}=${t(
      T,
      `priority.${priority}`
    )}]
${(store["shopping-list"] ?? "||")
  .split("|")[priority - 1]?.split(",")
  .map((numericalId) => {
    const item = Object.values(items).find(
      (item) => item.numericalId === +numericalId
    );
    if (!item) return "";
    return `:middot:${item.name[store["hordes-lang"]]}`;
  })
  .join("\n")}
[/lang_${store["hordes-lang"]}]`
  )
  .join("\n\n")}

{hr}

[aparte]
[collapse=${t(T, "zenHordesCode")}]
${t(T, "codeDesc")}
[code]${store["shopping-list"]}[/code]
[/collapse]
[/aparte]`;

export const insertShoppingListToggle = () => {
  if (!store["shopping-list"]) return;

  const toggle = document.createElement("img");
  toggle.id = "zen-shopping-list-toggle";
  toggle.src = `${ASSETS}/icons/item/item_cart_part.gif`;
  toggle.setAttribute("alt", t(T, "toggleShoppingList"));
  toggle.classList.add("inactive");
  toggle.draggable = false;

  tooltip({
    target: toggle,
    content: t(T, "toggleShoppingList"),
    position: "topLeft",
  });

  toggle.addEventListener("mousedown", () => {
    toggle.classList.add("active");
    toggle.classList.remove("inactive");
    toggle.src = `${ASSETS}/icons/item/item_cart.gif`;

    const shoppingList = getShoppingList();

    // Nothing to do is the shopping list is empty
    if (shoppingList.every((priority) => priority.length === 0)) {
      return;
    }

    Object.values(items).forEach((item) => {
      // Check if the item is in the shopping list
      const priorityIndex = shoppingList.findIndex((priority) =>
        priority.includes(item.numericalId)
      );
      if (priorityIndex === -1) return;

      const priority = priorityIndex + 1;

      // Get items on the page
      document
        .querySelectorAll(
          `img[alt="${
            item.name[store["hordes-lang"]]
          }"][src^="/build/images/item/${item.icon}"]`
        )
        .forEach((element) => {
          const itemElement = element.closest(".item");
          if (!itemElement) return;

          // Add the priority class
          itemElement.classList.add("zen-priority");
          itemElement.classList.add(`zen-priority-${priority}`);
        });
    });
  });

  const disableShoppingList = () => {
    toggle.classList.remove("active");
    toggle.classList.add("inactive");

    toggle.src = `${ASSETS}/icons/item/item_cart_part.gif`;

    // Remove priority tags
    document.querySelectorAll(".zen-priority").forEach((el) => {
      el.classList.remove(
        "zen-priority",
        "zen-priority-1",
        "zen-priority-2",
        "zen-priority-3"
      );
    });
  };

  toggle.addEventListener("mouseup", disableShoppingList);
  toggle.addEventListener("mouseleave", disableShoppingList);

  document.body.appendChild(toggle);
};
