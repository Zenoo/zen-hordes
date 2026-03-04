import { ExternalSite, ExternalSiteData } from "./externalSites";
import { store } from "./store";
import { t } from "./translate";

const T: Translations = {
  en: {
    link: "{{site}} link",
  },
  fr: {
    link: "Lien {{site}}",
  },
  de: {
    link: "{{site}}-Link",
  },
  es: {
    link: "Enlace {{site}}",
  },
};

const buildButton = (
  siteData: ExternalSiteData,
  text: string,
  link: string
) => {
  const button = document.createElement("a");
  button.classList.add("button", "zen-external-link", "center");
  button.href = link;
  button.target = "_blank";

  const image = document.createElement("img");
  image.src = siteData.logo;
  image.alt = text;
  button.appendChild(image);

  const p = document.createElement("p");
  p.textContent = text;
  button.appendChild(p);

  return button;
};

export const displayExternalCityLinks = (node: HTMLElement) => {
  if (!store["external-city-links"].length) return;
  if (!node.classList.contains("view-town")) return;

  const townId = node.getAttribute("data-town-id");
  if (!townId) return;

  const existing = node.querySelector(".zen-external-link");
  if (existing) return;

  for (const site of store["external-city-links"]) {
    const siteData = ExternalSite[site];
    if (!siteData.townUrl) continue;

    const translation = t(T, "link", { site: siteData.name });
    const link = siteData.townUrl.replace("{{townId}}", townId);

    const button = buildButton(siteData, translation, link);

    node
      .querySelector('button[x-ajax-href="/jx/soul/game_history"]')
      ?.after(button);
  }
};
