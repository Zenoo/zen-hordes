export enum ExternalSiteName {
  BBH = "BBH",
  FM = "FM",
  GH = "GH",
  MHO = "MHO",
}

export type ExternalSiteData = Readonly<{
  id: number;
  townUrl?: string;
  udpateUrl?: string;
}>;

export const ExternalSite: Readonly<Record<ExternalSiteName, ExternalSiteData>> = {
  [ExternalSiteName.BBH]: {
    id: 1,
    townUrl: "https://bbh.fred26.fr/?cid=5-{{townId}}",
    udpateUrl: "https://bbh.fred26.fr/update.php?sid=5",
  },
  [ExternalSiteName.FM]: {
    id: 11,
    townUrl: "https://fatamorgana.md26.eu/spy/town/{{townId}}",
  },
  [ExternalSiteName.GH]: {
    id: 4,
    townUrl: "https://gest-hordes2.eragaming.fr/carte/{{townId}}",
  },
  [ExternalSiteName.MHO]: {
    id: 22,
  },
};
