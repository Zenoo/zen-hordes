import { ASSETS } from "../utils/constants";
import { SERVER_URL } from "../utils/server";

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
  logo: string;
}>;

export const ExternalSite: Readonly<
  Record<ExternalSiteName, ExternalSiteData>
> = {
  [ExternalSiteName.ZH]: {
    id: 43,
    name: "Zen Hordes",
    updateUrl: `${SERVER_URL}/update`,
    logo: `${ASSETS}/external/ZH.png`,
  },
  [ExternalSiteName.BBH]: {
    id: 1,
    name: "BigBroth'Hordes",
    townUrl: "https://bbh.fred26.fr/?cid=5-{{townId}}",
    updateUrl: "https://bbh.fred26.fr/update.php?sid=5",
    logo: `${ASSETS}/external/BBH.gif`,
  },
  [ExternalSiteName.FM]: {
    id: 11,
    name: "Fata Morgana",
    townUrl: "https://fatamorgana.md26.eu/spy/town/{{townId}}",
    updateUrl: "https://fatamorgana.md26.eu/mho",
    logo: `${ASSETS}/external/FM.png`,
  },
  [ExternalSiteName.GH]: {
    id: 4,
    name: "Gest'Hordes",
    townUrl: "https://gesthordes.fr/carte/{{townId}}",
    updateUrl: "https://gesthordes.fr/majScript",
    logo: `${ASSETS}/external/GH.gif`,
  },
  [ExternalSiteName.MHO]: {
    id: 22,
    name: "MyHordes Optimizer",
    updateUrl:
      "https://api.myhordesoptimizer.fr/externaltools/update?userKey={{userKey}}&userId={{userId}}",
    logo: `${ASSETS}/external/MHO.gif`,
  },
};
