export enum ExternalSiteName {
  BBH = "BBH",
  FM = "FM",
  GH = "GH",
  MHO = "MHO",
}

export type ExternalSiteData = Readonly<{
  id: number;
  townUrl?: string;
  updateUrl?: string;
}>;

export const ExternalSite: Readonly<
  Record<ExternalSiteName, ExternalSiteData>
> = {
  [ExternalSiteName.BBH]: {
    id: 1,
    townUrl: "https://bbh.fred26.fr/?cid=5-{{townId}}",
    updateUrl: "https://bbh.fred26.fr/update.php?sid=5",
  },
  [ExternalSiteName.FM]: {
    id: 11,
    townUrl: "https://fatamorgana.md26.eu/spy/town/{{townId}}",
    updateUrl: "https://fatamorgana.md26.eu/mho",
  },
  [ExternalSiteName.GH]: {
    id: 4,
    townUrl: "https://gest-hordes2.eragaming.fr/carte/{{townId}}",
    updateUrl: "https://gest-hordes2.eragaming.fr/majScript?key={{userKey}}",
  },
  [ExternalSiteName.MHO]: {
    id: 22,
    updateUrl:
      "https://api.myhordesoptimizer.fr/externaltools/update?userKey={{userKey}}&userId={{userId}}",
  },
};
