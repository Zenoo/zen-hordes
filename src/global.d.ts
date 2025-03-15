declare global {
  const enum Action {
    TakeItem,
    ToggleFeature,
    Logout
  }

  const enum Lang {
    En = "en",
    Fr = "fr",
    Es = "es",
    De = "de",
  }

  type Translations = Partial<Record<Lang, Partial<Record<string, string>>>>

  type Message = {
    action: Action;
    value?: unknown;
  };
}

export {};
