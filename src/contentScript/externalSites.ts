import { ASSETS } from "../utils/constants";

export enum ExternalSiteName {
  ZH = "ZH",
  BBH = "BBH",
  FM = "FM",
  GH = "GH",
  MHO = "MHO",
}

export type ExternalSiteData = Readonly<{
  id: number;
  name: string;
  townUrl?: string;
  updateUrl?: string;
  logo?: string;
}>;

export const ExternalSite: Readonly<
  Record<ExternalSiteName, ExternalSiteData>
> = {
  [ExternalSiteName.ZH]: {
    id: 43,
    name: "Zen Hordes",
    updateUrl: "https://zenhordes.eternaltwin.org/update",
    logo: `${ASSETS}/icons/zen-icon.png`,
  },
  [ExternalSiteName.BBH]: {
    id: 1,
    name: "BigBroth'Hordes",
    townUrl: "https://bbh.fred26.fr/?cid=5-{{townId}}",
    updateUrl: "https://bbh.fred26.fr/update.php?sid=5",
  },
  [ExternalSiteName.FM]: {
    id: 11,
    name: "Fata Morgana",
    townUrl: "https://fatamorgana.md26.eu/spy/town/{{townId}}",
    updateUrl: "https://fatamorgana.md26.eu/mho",
  },
  [ExternalSiteName.GH]: {
    id: 4,
    name: "Gest'Hordes",
    townUrl: "https://gesthordes.fr/carte/{{townId}}",
    updateUrl: "https://gesthordes.fr/majScript",
  },
  [ExternalSiteName.MHO]: {
    id: 22,
    name: "MyHordes Optimizer",
    updateUrl:
      "https://api.myhordesoptimizer.fr/externaltools/update?userKey={{userKey}}&userId={{userId}}",
  },
};
