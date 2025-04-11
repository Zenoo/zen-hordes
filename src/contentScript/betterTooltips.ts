import { Item, ItemId, items } from "../data/items";
import { PictoId, pictos } from "../data/pictos";
import { Recipe, recipes } from "../data/recipes";
import { ruins } from "../data/ruins";
import { ASSETS } from "../utils/constants";
import { store } from "./store";
import { t } from "./translate";

const T: Translations = {
  en: {
    [`action-type.${ItemActionType.Eat}`]: "Eat",
    [`action-type.${ItemActionType.Drink}`]: "Drink",
    [`action-type.${ItemActionType.Open}`]: "Open",
    [`action-type.${ItemActionType.Use}`]: "Use",
    [`action-type.${ItemActionType.Death}`]: "Death",
    [`action-type.${ItemActionType.Steal}`]: "Steal",
    [`recipe-type.${RecipeType.ManualAnywhere}`]: "Assemble",
    [`recipe-type.${RecipeType.ManualInside}`]: "Assemble (inside)",
    [`recipe-type.${RecipeType.ManualOutside}`]: "Assemble (outside)",
    [`recipe-type.${RecipeType.Workshop}`]: "Workshop",
    [`recipe-type.${RecipeType.WorkshopShaman}`]: "Workshop (shaman)",
    [`recipe-type.${RecipeType.WorkshopTech}`]: "Workshop (technician)",
    [`recipe-type.${RecipeType.ExplorableRuinDoor}`]: "Explorable Ruin Door",
    [`event.${GameEvent.StPatrick}`]: "St. Patrick's Day",
    [`event.${GameEvent.AprilFools}`]: "April Fool's Day",
    [`event.${GameEvent.Easter}`]: "Easter",
    [`event.${GameEvent.Halloween}`]: "Halloween",
    [`event.${GameEvent.Christmas}`]: "Christmas",
    [`event.${GameEvent.NewYear}`]: "New Year",
    [`condition.${ItemActionCondition.Ghoul}`]: "Ghoul",
    [`condition.${ItemActionCondition.Technician}`]: "Technician",
    [`condition.${ItemActionCondition.OnARuin}`]: "On a ruin",
    [`condition.${ItemActionCondition.Thirsty}`]: "Thirsty",
    [`condition.${ItemActionCondition.Dehydrated}`]: "Dehydrated",
    [`condition.${ItemActionCondition.Shaman}`]: "Shaman",
    foundIn: "Found in",
    unavailable: "Not available anymore",
    privateTownOnly: "Can only be found in private towns",
  },
  fr: {
    [`action-type.${ItemActionType.Eat}`]: "Manger",
    [`action-type.${ItemActionType.Drink}`]: "Boire",
    [`action-type.${ItemActionType.Open}`]: "Ouvrir",
    [`action-type.${ItemActionType.Use}`]: "Utiliser",
    [`action-type.${ItemActionType.Death}`]: "Mort",
    [`action-type.${ItemActionType.Steal}`]: "Voler",
    [`recipe-type.${RecipeType.ManualAnywhere}`]: "Assembler",
    [`recipe-type.${RecipeType.ManualInside}`]: "Assembler (intérieur)",
    [`recipe-type.${RecipeType.ManualOutside}`]: "Assembler (extérieur)",
    [`recipe-type.${RecipeType.Workshop}`]: "Atelier",
    [`recipe-type.${RecipeType.WorkshopShaman}`]: "Atelier (chaman)",
    [`recipe-type.${RecipeType.WorkshopTech}`]: "Atelier (technicien)",
    [`recipe-type.${RecipeType.ExplorableRuinDoor}`]: "Porte de ruine",
    [`event.${GameEvent.StPatrick}`]: "Saint Patrick",
    [`event.${GameEvent.AprilFools}`]: "Poisson d'Avril",
    [`event.${GameEvent.Easter}`]: "Pâques",
    [`event.${GameEvent.Halloween}`]: "Halloween",
    [`event.${GameEvent.Christmas}`]: "Noël",
    [`event.${GameEvent.NewYear}`]: "Nouvel An",
    [`condition.${ItemActionCondition.Ghoul}`]: "Ghoul",
    [`condition.${ItemActionCondition.Technician}`]: "Technicien",
    [`condition.${ItemActionCondition.OnARuin}`]: "Sur un bâtiment",
    [`condition.${ItemActionCondition.Thirsty}`]: "Assoiffé",
    [`condition.${ItemActionCondition.Dehydrated}`]: "Déshydraté",
    [`condition.${ItemActionCondition.Shaman}`]: "Chaman",
    foundIn: "Trouvé dans",
    unavailable: "N'est plus disponible",
    privateTownOnly: "Peut uniquement être trouvé dans les villes privées",
  },
  es: {
    [`action-type.${ItemActionType.Eat}`]: "Comer",
    [`action-type.${ItemActionType.Drink}`]: "Beber",
    [`action-type.${ItemActionType.Open}`]: "Abrir",
    [`action-type.${ItemActionType.Use}`]: "Usar",
    [`action-type.${ItemActionType.Death}`]: "Muerte",
    [`action-type.${ItemActionType.Steal}`]: "Robar",
    [`recipe-type.${RecipeType.ManualAnywhere}`]: "Ensamblar",
    [`recipe-type.${RecipeType.ManualInside}`]: "Ensamblar (interior)",
    [`recipe-type.${RecipeType.ManualOutside}`]: "Ensamblar (exterior)",
    [`recipe-type.${RecipeType.Workshop}`]: "Taller",
    [`recipe-type.${RecipeType.WorkshopShaman}`]: "Taller (chamán)",
    [`recipe-type.${RecipeType.WorkshopTech}`]: "Taller (técnico)",
    [`recipe-type.${RecipeType.ExplorableRuinDoor}`]: "Puerta de ruina",
    [`event.${GameEvent.StPatrick}`]: "Día de San Patricio",
    [`event.${GameEvent.AprilFools}`]: "Día de los Inocentes",
    [`event.${GameEvent.Easter}`]: "Pascua",
    [`event.${GameEvent.Halloween}`]: "Halloween",
    [`event.${GameEvent.Christmas}`]: "Navidad",
    [`event.${GameEvent.NewYear}`]: "Año Nuevo",
    [`condition.${ItemActionCondition.Ghoul}`]: "Ghoul",
    [`condition.${ItemActionCondition.Technician}`]: "Técnico",
    [`condition.${ItemActionCondition.OnARuin}`]: "En un edificio",
    [`condition.${ItemActionCondition.Thirsty}`]: "Sediento",
    [`condition.${ItemActionCondition.Dehydrated}`]: "Deshidratado",
    [`condition.${ItemActionCondition.Shaman}`]: "Chaman",
    foundIn: "Encontrado en",
    unavailable: "Ya no disponible",
    privateTownOnly: "Solo se puede encontrar en ciudades privadas",
  },
  de: {
    [`action-type.${ItemActionType.Eat}`]: "Essen",
    [`action-type.${ItemActionType.Drink}`]: "Trinken",
    [`action-type.${ItemActionType.Open}`]: "Öffnen",
    [`action-type.${ItemActionType.Use}`]: "Benutzen",
    [`action-type.${ItemActionType.Death}`]: "Tod",
    [`action-type.${ItemActionType.Steal}`]: "Stehlen",
    [`recipe-type.${RecipeType.ManualAnywhere}`]: "Zusammenbauen",
    [`recipe-type.${RecipeType.ManualInside}`]: "Zusammenbauen (innen)",
    [`recipe-type.${RecipeType.ManualOutside}`]: "Zusammenbauen (außen)",
    [`recipe-type.${RecipeType.Workshop}`]: "Werkstatt",
    [`recipe-type.${RecipeType.WorkshopShaman}`]: "Werkstatt (Schamane)",
    [`recipe-type.${RecipeType.WorkshopTech}`]: "Werkstatt (Techniker)",
    [`recipe-type.${RecipeType.ExplorableRuinDoor}`]: "Erforschen Ruine Tür",
    [`event.${GameEvent.StPatrick}`]: "St. Patrick's Tag",
    [`event.${GameEvent.AprilFools}`]: "Aprilscherz",
    [`event.${GameEvent.Easter}`]: "Ostern",
    [`event.${GameEvent.Halloween}`]: "Halloween",
    [`event.${GameEvent.Christmas}`]: "Weihnachten",
    [`event.${GameEvent.NewYear}`]: "Neujahr",
    [`condition.${ItemActionCondition.Ghoul}`]: "Ghoul",
    [`condition.${ItemActionCondition.Technician}`]: "Techniker",
    [`condition.${ItemActionCondition.OnARuin}`]: "Auf einem Gebäude",
    [`condition.${ItemActionCondition.Thirsty}`]: "Durstig",
    [`condition.${ItemActionCondition.Dehydrated}`]: "Dehydriert",
    [`condition.${ItemActionCondition.Shaman}`]: "Schamane",
    foundIn: "Gefunden in",
    unavailable: "Nicht mehr verfügbar",
    privateTownOnly: "Kann nur in privaten Städten gefunden werden",
  },
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "tg_meta_wound":
      return "status/status_wound1.gif";
    case "tg_april_ooze":
      return "status/status_infection.gif";
    case "tg_shaman_immune":
      return "icons/item/item_soul_red.gif";
    default:
      return `status/status_${status}.gif`;
  }
};

const findItem = (node: HTMLElement) => {
  if (
    node.classList.contains("zen-wiki-item") &&
    node.getAttribute("data-type") === "item"
  ) {
    const itemId = node.getAttribute("data-id") as ItemId;
    return items[itemId];
  }

  return Object.values(items).find((item) => {
    return (
      item.name[store["hordes-lang"]] ===
        node.querySelector("h1")?.textContent?.trim() &&
      (/item\/(.+)\..+\.gif/.exec(
        (node.querySelector("h1 img") as HTMLImageElement | undefined)?.src ??
          ""
      )?.[1] ?? "") === item.icon
    );
  });
};

const findRecipes = (item: Item) => {
  return recipes.filter((recipe) => {
    return (
      recipe.in.some((inItem) => inItem.item === item.id) ||
      recipe.out.some((outItem) => outItem.item === item.id)
    );
  });
};

const findItemsWithRelatedActions = (item: Item) => {
  return Object.values(items)
    .filter((otherItem) => {
      // Ignore the current item
      if (otherItem.id === item.id) {
        return false;
      }

      return otherItem.actions.some((action) => {
        return action.effects.some((effect) => {
          return (
            effect.type === ItemActionEffectType.CreateItem &&
            effect.value === item.id
          );
        });
      });
    })
    .map((otherItem) => {
      return {
        ...otherItem,
        actions: otherItem.actions.filter((action) => {
          return action.effects.some((effect) => {
            return (
              effect.type === ItemActionEffectType.CreateItem &&
              effect.value === item.id
            );
          });
        }),
      };
    });
};

const findRuinDrops = (item: Item) => {
  return Object.values(ruins).filter((ruin) => {
    return ruin.drops.some((drop) => {
      return drop.item === item.id;
    });
  });
};

const getRecipeTypeIcon = (type: RecipeType) => {
  switch (type) {
    case RecipeType.ManualAnywhere:
    case RecipeType.ManualOutside:
      return "icons/small_next.gif";
    case RecipeType.ManualInside:
      return "icons/small_home.gif";
    case RecipeType.Workshop:
    case RecipeType.WorkshopShaman:
    case RecipeType.WorkshopTech:
      return "icons/small_refine.gif";
    case RecipeType.ExplorableRuinDoor:
      return "icons/small_enter.gif";
  }
};

const getActionTypeIcon = (action: ItemAction) => {
  switch (action.type) {
    case ItemActionType.Eat:
      return "icons/actions/eat.gif";
    case ItemActionType.Drink:
      return "icons/actions/drink.gif";
    case ItemActionType.Open:
      if (action.conditions.includes(ItemActionCondition.BoxOpener)) {
        return "icons/item/item_can_opener.gif";
      }
      return "icons/small_next.gif";
    case ItemActionType.Death:
      return "icons/death.gif";
    case ItemActionType.Use:
      return "icons/small_next.gif";
    case ItemActionType.Steal:
      return "emotes/thief.gif";
    default:
      return "icons/item/item_broken.gif";
  }
};

type DisplayedIcon = {
  id?: ItemId;
  icon: string;
  amount?: number | string;
  text?: string;
  crossed?: boolean;
  checked?: boolean;
  infected?: boolean;
  title?: string;
  classList?: string[];
};

const convertEffectToDisplayedItem = (effect: ItemActionEffect) => {
  const displayedIcon: DisplayedIcon = {
    icon: "",
  };

  switch (effect.type) {
    case ItemActionEffectType.AP: {
      displayedIcon.icon = `icons/ap_small${
        store["hordes-lang"] !== Lang.DE ? `_${store["hordes-lang"]}` : ""
      }.gif`;
      displayedIcon.amount = Number(effect.value);
      break;
    }
    case ItemActionEffectType.SP: {
      displayedIcon.icon = `icons/sp_small${
        store["hordes-lang"] !== Lang.DE ? `_${store["hordes-lang"]}` : ""
      }.gif`;
      displayedIcon.amount = effect.value?.toString();
      break;
    }
    case ItemActionEffectType.MP: {
      displayedIcon.icon = `icons/pm_small${
        store["hordes-lang"] !== Lang.DE ? `_${store["hordes-lang"]}` : ""
      }.gif`;
      displayedIcon.amount = effect.value?.toString();
      break;
    }
    case ItemActionEffectType.CP: {
      displayedIcon.icon = `icons/pc_small${
        store["hordes-lang"] !== Lang.DE ? `_${store["hordes-lang"]}` : ""
      }.gif`;
      displayedIcon.amount = effect.value?.toString();
      break;
    }
    case ItemActionEffectType.Ghoulify: {
      displayedIcon.icon = "role/ghoul.gif";
      break;
    }
    case ItemActionEffectType.UnGhoulify: {
      displayedIcon.icon = "role/ghoul.gif";
      displayedIcon.crossed = true;
      break;
    }
    case ItemActionEffectType.Infect: {
      displayedIcon.icon = "status/status_infection.gif";
      break;
    }
    case ItemActionEffectType.CreateItem: {
      if (!effect.value) {
        throw new Error("CreateItem effect must have a value");
      }
      const item = items[effect.value as ItemId];

      if (!item) {
        throw new Error(`Item not found: ${effect.value}`);
      }

      displayedIcon.id = item.id;
      displayedIcon.icon = `icons/item/${item.icon}.gif`;
      break;
    }
    case ItemActionEffectType.ReduceGhoulHunger: {
      displayedIcon.icon = "role/ghoul.gif";
      displayedIcon.amount = effect.value;
      break;
    }
    case ItemActionEffectType.GetPicto: {
      const picto = pictos[effect.value as PictoId];
      if (!picto) {
        throw new Error(`Picto not found: ${effect.value}`);
      }

      displayedIcon.icon = `pictos/${picto.icon}.gif`;
      displayedIcon.classList = ["picto"];
      displayedIcon.title = picto.name[store["hordes-lang"]];
      break;
    }
    case ItemActionEffectType.AddWaterToWell: {
      displayedIcon.icon = "icons/small_well.gif";
      displayedIcon.amount = effect.value;
      break;
    }
    case ItemActionEffectType.Defense: {
      displayedIcon.icon = "icons/small_def.gif";
      displayedIcon.amount = effect.value;
      break;
    }
    case ItemActionEffectType.UnlockBuilding: {
      displayedIcon.icon = `building/${effect.value}.gif`;
      break;
    }
    case ItemActionEffectType.RemoveRuinDebris: {
      displayedIcon.icon = "building/small_dig.gif";
      displayedIcon.amount = effect.value;
      break;
    }
    case ItemActionEffectType.GetEscapeTime: {
      displayedIcon.icon = "professions/stranger.gif";
      break;
    }
    case ItemActionEffectType.Kill: {
      displayedIcon.icon = "icons/small_zombie.gif";
      displayedIcon.amount = effect.value;
      break;
    }
    case ItemActionEffectType.HomeDefense: {
      displayedIcon.icon = "icons/small_homedef.gif";
      displayedIcon.amount = effect.value;
      break;
    }
    case ItemActionEffectType.HomeStorage: {
      displayedIcon.icon = "icons/small_homeup.gif";
      displayedIcon.amount = effect.value;
      break;
    }
    case ItemActionEffectType.RemoveStatus: {
      displayedIcon.icon = getStatusIcon(effect.value?.toString() ?? "");
      displayedIcon.crossed = true;
      break;
    }
    case ItemActionEffectType.AddStatus: {
      displayedIcon.icon = getStatusIcon(effect.value?.toString() ?? "");

      // Add checked icon for shaman immunity
      if (effect.value === "tg_shaman_immune") {
        displayedIcon.checked = true;
      }

      if (effect.count) {
        displayedIcon.amount = effect.count.toString().split("-")[0];
      }
      break;
    }
    case ItemActionEffectType.Death: {
      displayedIcon.icon = "icons/death.gif";
      break;
    }
    case ItemActionEffectType.EP: {
      displayedIcon.icon = `icons/ep_small${
        store["hordes-lang"] !== Lang.DE ? `_${store["hordes-lang"]}` : ""
      }.gif`;
      displayedIcon.amount = Number(effect.value);
      break;
    }
    default:
      console.log("Unknown effect type:", effect.type);
      throw new Error("Unknown effect type");
  }

  if (!displayedIcon.text) {
    displayedIcon.text = effect.odds ? `${effect.odds}%` : undefined;
  }

  return displayedIcon;
};

const createLine = (
  currentItemId: ItemId,
  item: Item,
  data: Recipe | ItemAction
) => {
  const line = document.createElement("tr");

  // Inputs
  const inputCell = document.createElement("td");
  inputCell.classList.add("input");

  let inputIcons: DisplayedIcon[] = [];

  if ("in" in data) {
    // Recipe
    inputIcons = data.in.map((inItem) => ({
      id: items[inItem.item].id,
      icon: `icons/item/${items[inItem.item].icon}.gif`,
      text: inItem.odds?.toString(),
      infected: inItem.infected,
    }));
  } else {
    // Item action
    inputIcons.push(
      ...data.conditions
        .filter((condition) => condition !== ItemActionCondition.BoxOpener)
        .map((condition) => {
          const displayedIcon: DisplayedIcon = {
            icon: "icons/item/item_broken.gif",
            title: t(T, `condition.${condition}`),
          };

          switch (condition) {
            case ItemActionCondition.Technician:
              displayedIcon.icon = "professions/tech.gif";
              break;
            case ItemActionCondition.Ghoul:
              displayedIcon.icon = "roles/ghoul.gif";
              break;
            case ItemActionCondition.OnARuin:
              displayedIcon.icon = "emotes/ruin.gif";
              break;
            case ItemActionCondition.Thirsty:
              displayedIcon.icon = "status/status_thirst1.gif";
              break;
            case ItemActionCondition.Dehydrated:
              displayedIcon.icon = "status/status_thirst2.gif";
              break;
            case ItemActionCondition.HaveBattery:
              displayedIcon.icon = "icons/item/item_pile.gif";
              displayedIcon.id = ItemId.PILE;
              displayedIcon.title = undefined;
              break;
            case ItemActionCondition.Shaman:
              displayedIcon.icon = "roles/shaman.gif";
              break;
          }

          return displayedIcon;
        })
    );

    inputIcons.push({
      id: items[item.id].id,
      icon: `icons/item/${items[item.id].icon}.gif`,
    });
  }

  inputIcons.forEach((inputIcon) => {
    const wrapper = document.createElement("div");
    inputCell.append(wrapper);
    const inputImg = document.createElement("img");
    inputImg.src = `${ASSETS}/${inputIcon.icon}`;
    inputImg.title =
      inputIcon.title ??
      (inputIcon.id ? items[inputIcon.id].name[store["hordes-lang"]] : "");
    if (inputIcon.id) {
      inputImg.setAttribute("data-type", "item");
      inputImg.setAttribute("data-id", inputIcon.id);
      inputImg.setAttribute(
        "title",
        items[inputIcon.id].name[store["hordes-lang"]]
      );
    }

    // Highlight the item if it's the current item
    if (inputIcon.id === currentItemId) {
      inputImg.classList.add("highlight");
    }

    if (inputIcon.text) {
      wrapper.setAttribute("data-text", inputIcon.text);
    }

    if (inputIcon.amount) {
      wrapper.setAttribute("data-zen-amount", inputIcon.amount.toString());
    }

    if (inputIcon.crossed) {
      wrapper.classList.add("crossed");
    }

    if (inputIcon.checked) {
      wrapper.classList.add("checked");
    }

    if (inputIcon.infected) {
      wrapper.classList.add("infected");
    }

    wrapper.append(inputImg);
  });

  line.append(inputCell);

  // Action
  const actionCell = document.createElement("td");
  actionCell.classList.add("action");
  line.append(actionCell);
  const icon = document.createElement("img");
  let actionIcon = "";
  if ("in" in data) {
    // Recipe
    actionIcon = getRecipeTypeIcon(data.type);
    icon.alt = t(T, `recipe-type.${data.type}`);
    icon.title = t(T, `recipe-type.${data.type}`);
  } else {
    // Item action
    actionIcon = getActionTypeIcon(data);
    icon.alt = t(T, `action-type.${data.type}`);
    icon.title = t(T, `action-type.${data.type}`);
  }
  icon.src = `${ASSETS}/${actionIcon}`;
  actionCell.append(icon);

  // Outputs
  const outputCell = document.createElement("td");
  outputCell.classList.add("output");

  let outputIcons: DisplayedIcon[] = [];

  if ("out" in data) {
    // Recipe
    const total = data.out.reduce(
      (acc, outItem) => acc + (outItem.odds ?? 0),
      0
    );

    outputIcons = data.out.map((outItem) => ({
      id: items[outItem.item].id,
      icon: `icons/item/${items[outItem.item].icon}.gif`,
      text: outItem.odds
        ? `${Math.round((outItem.odds / total) * 100)}%`
        : undefined,
      infected: outItem.infected,
    }));

    // Add recipe pictos
    if (data.pictos?.length) {
      outputIcons.push(
        ...data.pictos.map((picto) => {
          const pictoItem = pictos[picto];
          return {
            icon: `pictos/${pictoItem.icon}.gif`,
            classList: ["picto"],
            title: pictoItem.name[store["hordes-lang"]],
          };
        })
      );
    }
  } else {
    // Item action
    outputIcons = data.effects.map((effect) =>
      convertEffectToDisplayedItem(effect)
    );
  }

  outputIcons.forEach((outputIcon) => {
    const wrapper = document.createElement("div");
    outputCell.append(wrapper);
    const output = document.createElement("img");
    output.src = `${ASSETS}/${outputIcon.icon}`;
    output.title =
      outputIcon.title ??
      (outputIcon.id ? items[outputIcon.id].name[store["hordes-lang"]] : "");
    if (outputIcon.id) {
      output.setAttribute("data-type", "item");
      output.setAttribute("data-id", outputIcon.id);
      output.setAttribute(
        "title",
        items[outputIcon.id].name[store["hordes-lang"]]
      );
    }

    // Highlight the ingredient if it's the current item
    if (outputIcon.id === currentItemId) {
      output.classList.add("highlight");
    }

    if (outputIcon.text) {
      wrapper.setAttribute("data-text", outputIcon.text);
    }

    if (outputIcon.amount) {
      wrapper.setAttribute("data-zen-amount", outputIcon.amount.toString());
    }

    if (outputIcon.crossed) {
      wrapper.classList.add("crossed");
    }

    if (outputIcon.checked) {
      wrapper.classList.add("checked");
    }

    if (outputIcon.infected) {
      wrapper.classList.add("infected");
    }

    wrapper.classList.add(...(outputIcon.classList ?? []));

    wrapper.append(output);
    outputCell.append(wrapper);
  });

  line.append(outputCell);

  return line;
};

const getIconSource = (icon: string) => {
  switch (icon) {
    case "EP":
      return `icons/ep_small${
        store["hordes-lang"] !== Lang.DE ? `_${store["hordes-lang"]}` : ""
      }.gif`;
    case "AP":
      return `icons/ap_small${
        store["hordes-lang"] !== Lang.DE ? `_${store["hordes-lang"]}` : ""
      }.gif`;
    case "SP":
      return `icons/sp_small${
        store["hordes-lang"] !== Lang.DE ? `_${store["hordes-lang"]}` : ""
      }.gif`;
    case "CP":
      return `icons/pc_small${
        store["hordes-lang"] !== Lang.DE ? `_${store["hordes-lang"]}` : ""
      }.gif`;
    case "MP":
      return `icons/sp_small${
        store["hordes-lang"] !== Lang.DE ? `_${store["hordes-lang"]}` : ""
      }.gif`;
  }

  return icon;
};

/**
 * @param content Can include icon tags like {{icon}}
 */
const setTextWithIcons = (node: HTMLElement, content: string) => {
  const iconRegex = /{{([^}]+)}}/g;
  const textParts = content.split(iconRegex);

  textParts.forEach((part, index) => {
    if (index % 2 === 0) {
      // Text part
      node.append(document.createTextNode(part));
    } else {
      // Icon part
      const img = document.createElement("img");
      img.src = `${ASSETS}/${getIconSource(part)}`;
      img.alt = part;
      node.append(img);
    }
  });
};

export const insertBetterTooltips = (node: HTMLElement) => {
  if (!store["better-tooltips"]) return;

  if (
    node.classList.contains("zen-wiki-item") ||
    (node.classList.contains("tooltip") &&
      node.classList.contains("item") &&
      node.querySelector("h1 img"))
  ) {
    const processed = node.classList.contains("zen-better-tooltip");
    if (processed) return;

    node.classList.add("zen-better-tooltip");

    const item = findItem(node);
    if (!item) {
      console.error("Item not found in tooltip:", node);
      return;
    }

    // Additional info
    if (item.info) {
      // Create an info tag
      const infoTag = document.createElement("div");
      infoTag.classList.add("item-tag", "item-tag-info");
      setTextWithIcons(infoTag, item.info[store["hordes-lang"]]);
      node.append(infoTag);
    }

    // Unavailable items
    if (item.available === false) {
      // Create an info tag
      const tag = document.createElement("div");
      tag.classList.add("item-tag", "item-tag-info");
      tag.textContent = t(T, "unavailable");
      node.append(tag);
    }

    // Private town only
    if (item.categories.includes(ItemCategory.PrivateTown)) {
      // Create an info tag
      const tag = document.createElement("div");
      tag.classList.add("item-tag", "item-tag-private");
      tag.textContent = t(T, "privateTownOnly");
      node.append(tag);
    }

    // Decoration
    if (item.decoration) {
      const decorationNode = node.querySelector(".item-tag-deco");

      if (!decorationNode) {
        console.error(`Decoration node not found for item: ${item.id}`);
        return;
      }

      const span = document.createElement("span");
      span.classList.add("zen-item-decoration");
      const startText = document.createTextNode(`(${item.decoration} `);
      const icon = document.createElement("img");
      icon.src = `${ASSETS}/icons/deco.gif`;
      const endText = document.createTextNode(")");
      span.append(startText, icon, endText);
      decorationNode.append(span);
    }

    // Event
    if (typeof item.event !== "undefined") {
      // Create an event tag
      const eventTag = document.createElement("div");
      eventTag.classList.add("item-tag", "item-tag-event");
      eventTag.setAttribute("data-event", item.event.toString());
      eventTag.textContent = t(T, `event.${item.event}`);
      node.append(eventTag);
    }

    // Ruin drops
    const ruinDrops = findRuinDrops(item);
    if (ruinDrops.length) {
      // Create an ruin drop tag
      const ruinDropTag = document.createElement("div");
      ruinDropTag.classList.add("item-tag", "item-tag-ruin-drop");

      const foundIn = document.createElement("span");
      foundIn.textContent = `${t(T, `foundIn`)}: `;
      ruinDropTag.append(foundIn);

      ruinDrops
        .sort((a, b) => {
          const aTotal = a.drops.reduce((acc, drop) => acc + drop.odds, 0);
          const bTotal = b.drops.reduce((acc, drop) => acc + drop.odds, 0);
          const aOdds =
            a.drops.find((drop) => drop.item === item.id)?.odds ?? 0;
          const bOdds =
            b.drops.find((drop) => drop.item === item.id)?.odds ?? 0;
          return bOdds / bTotal - aOdds / aTotal;
        })
        .forEach((ruin) => {
          const span = document.createElement("span");
          span.setAttribute("data-type", "ruin");
          span.setAttribute("data-id", ruin.id.toString());

          // 0 = unknown
          const odds =
            ruin.drops.find((drop) => drop.item === item.id)?.odds ?? 0;
          if (odds === 0) {
            span.textContent = `${ruin.name[store["hordes-lang"]]} (?%)`;
          } else {
            const total = ruin.drops.reduce((acc, drop) => acc + drop.odds, 0);

            span.textContent = `${
              ruin.name[store["hordes-lang"]]
            } (${Math.round((odds / total) * 100)}%)`;
          }

          ruinDropTag.append(span);
          ruinDropTag.append(", ");
        });

      // Remove the last comma and space
      ruinDropTag.childNodes[ruinDropTag.childNodes.length - 1]?.remove();

      node.append(ruinDropTag);
    }

    // Recipes/Actions
    const itemRecipes = findRecipes(item);
    const relatedItems = findItemsWithRelatedActions(item);
    if (!itemRecipes.length && !item.actions.length && !relatedItems.length) {
      return;
    }

    const table = document.createElement("table");
    const tbody = document.createElement("tbody");
    table.append(tbody);

    // Add a row for each recipe
    itemRecipes.forEach((recipe) => {
      tbody.append(createLine(item.id, item, recipe));
    });

    // Add a row for each action
    item.actions.forEach((action) => {
      tbody.append(createLine(item.id, item, action));
    });

    // Add a row for each related action
    relatedItems.forEach((otherItem) => {
      otherItem.actions.forEach((action) => {
        tbody.append(createLine(item.id, otherItem, action));
      });
    });

    node.append(table);
  }
};
