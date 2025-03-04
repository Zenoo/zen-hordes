declare global {
  const enum Action {
    TakeItem,
    ToggleFeature,
  }

  const enum Lang {
    En = "en",
    Fr = "fr",
    Es = "es",
    De = "de",
  }

  type Translations = Record<Lang, Partial<Record<string, string>>>

  type Message = {
    action: Action;
    value?: unknown;
  };
}

export {};
