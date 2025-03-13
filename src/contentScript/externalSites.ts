export enum ExternalSiteName {
  BBH = "BBH",
  FM = "FM",
  GH = "GH",
  MHO = "MHO",
}

export type ExternalSiteData = Readonly<{
  id: number;
  url?: string;
}>;

export const ExternalSite: Readonly<Record<ExternalSiteName, ExternalSiteData>> = {
  [ExternalSiteName.BBH]: {
    id: 1,
    url: "https://bbh.fred26.fr/?cid=5-{{townId}}",
  },
  [ExternalSiteName.FM]: {
    id: 11,
    url: "https://fatamorgana.md26.eu/spy/town/{{townId}}",
  },
  [ExternalSiteName.GH]: {
    id: 4,
    url: "https://gest-hordes2.eragaming.fr/carte/{{townId}}",
  },
  [ExternalSiteName.MHO]: {
    id: 22,
  },
};
