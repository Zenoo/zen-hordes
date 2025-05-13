import { ExternalSite } from "./externalSites";
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
  logo: Element | null,
  text: string,
  link: string
) => {
  const button = document.createElement("a");
  button.classList.add("button", "zen-external-link", "center");
  button.href = link;
  button.target = "_blank";

  const image = document.createElement("img");
  image.src = logo?.getAttribute("src") ?? "";
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

    const translation = t(T, "link", { site });
    const logo = document.querySelector(
      `.app-external[data-id="${siteData.id}"] img`
    );
    const link = siteData.townUrl.replace("{{townId}}", townId);

    const button = buildButton(logo, translation, link);

    node.querySelector('button[x-ajax-href^="/jx/soul/obituary/"]')?.after(button);
  }
};
