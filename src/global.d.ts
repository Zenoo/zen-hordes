declare global {
  // Extension types
  const enum Action {
    TakeItem,
    ToggleFeature,
    Logout,
    SetStorage,
  }

  const enum Lang {
    EN = "en",
    FR = "fr",
    ES = "es",
    DE = "de",
  }

  type Translations = Partial<Record<Lang, Partial<Record<string, string>>>>;

  type Message = {
    action: Action;
    value?: unknown;
  };

  // Item categories
  const enum ItemCategory {
    Food,
    Resources,
    Armoury,
    Containers_and_boxes,
    Miscellaneous,
    Pharmacy,
    Furniture,
    Defences,
    Heavy,
    GuardWeapon,
    Decoration,
    BagExtension,
    ChestExtension,
    APSource,
    Water,
    Drug,
    Alcohol,
    Animal,
    Blueprint,
    RP,
    CampingBoost,
    ShunnedItem,
    Event,
    Breakable,
    Poisonable,
  }

  // Item actions
  const enum ItemActionType {
    Eat,
    Drink,
    Open,
    Use,
  }

  const enum ItemActionCondition {
    Ghoul,
    BrokenItem,
    Technician,
  }

  const enum ItemActionEffectType {
    AP,
    SP,
    MP,
    CP,
    Ghoulify,
    UnGhoulify,
    Infect,
    CreateItem,
    ReduceGhoulHunger,
    GetPicto,
    AddWaterToWell,
    Defense,
    UnlockBuilding,
    RemoveRuinDebris,
    GetEscapeTime,
    Kill,
    HomeDefense,
    HomeStorage,
    RemoveStatus,
    AddStatus,
    Death,
  }

  type ItemActionEffect = {
    type: ItemActionEffectType;
    value?: number | string;
    odds?: number;
  };

  type ItemAction = {
    type: ItemActionType;
    conditions: ItemActionCondition[];
    effects: ItemActionEffect[];
  };

  // Event
  const enum GameEvent {
    StPatrick,
    Infective,
    Christmas,
    AprilFools,
    Easter,
    Halloween,
    NewYear,
  }

  // Recipe
  const enum RecipeType {
    Workshop = 1,
    WorkshopShaman = 2,
    WorkshopTech = 3,
    ManualOutside = 11,
    ManualInside = 12,
    ManualAnywhere = 13,
  }
}

export {};
