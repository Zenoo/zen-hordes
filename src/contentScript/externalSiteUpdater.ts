import { ExternalSite } from "./externalSites";
import { store } from "./store";

export const displayUpdateButton = (node: HTMLElement) => {
  if (!store["external-sites-to-update"].length) return;

  if (node.matches(".inventory.desert")) {
    const existing = document.querySelector(".zen-update-button");
    if (existing) return;

    // Create update button
    const button = document.createElement("button");
    button.classList.add("zen-update-button", "center");

    // Add external sites logos
    for (const site of store["external-sites-to-update"]) {
      const siteData = ExternalSite[site];
      if (!siteData.udpateUrl) continue;

      const logo = document.querySelector(
        `.app-external[data-id="${siteData.id}"] img`
      );

      const siteWrapper = document.createElement("div");
      siteWrapper.classList.add("site");
      siteWrapper.setAttribute("data-id", site);

      const siteImage = document.createElement("img");
      siteImage.src = logo?.getAttribute("src") ?? "";
      siteImage.alt = site;

      const statusImage = document.createElement("img");
      statusImage.classList.add("status");
      statusImage.src = "https://via.placeholder.com/16";

      siteWrapper.appendChild(siteImage);
      siteWrapper.appendChild(statusImage);
      button.appendChild(siteWrapper);
    }

    // Click event
    button.addEventListener("click", async () => {
      for (const site of store["external-sites-to-update"]) {
        const wrapper = document.querySelector(
          `.zen-update-button div[data-id="${site}"]`
        );
        if (!wrapper) continue;

        try {
          console.log(`Updating ${site}...`);
        } catch (error) {
          console.log(`Error updating ${site}:`, error);
        }
      }
    });

    node.after(button);
  }
};
