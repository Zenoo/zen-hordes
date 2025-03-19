declare global {
  const enum Action {
    TakeItem,
    ToggleFeature,
    Logout,
    SetStorage
  }

  const enum Lang {
    EN = "en",
    FR = "fr",
    ES = "es",
    DE = "de",
  }

  type Translations = Partial<Record<Lang, Partial<Record<string, string>>>>

  type Message = {
    action: Action;
    value?: unknown;
  };
}

export {};
