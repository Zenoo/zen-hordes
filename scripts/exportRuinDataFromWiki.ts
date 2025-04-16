import * as fs from "fs";
import * as path from "path";
import { JSDOM } from "jsdom";

export const exportRuinDataFromWiki = async () => {
  // Get HTML content from the wiki page
  const response = await fetch(
    "https://en.mhwiki.org/wiki/Ruins"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch the wiki page");
  }
  const htmlContent = await response.text();

  // Build a DOM parser
  const dom = new JSDOM(htmlContent);
  const doc = dom.window.document;
  const ruins = doc.querySelectorAll("table+table.wikitable tbody tr");

  const ruinData = Array.from(ruins).map((row) => {
    const columns = row.querySelectorAll("td");
    const kmData = /(\d+)(?:–(\d+)\s+km)?/.exec(columns[2]?.textContent ?? "");

    return {
      name: columns[1]?.textContent?.trim(),
      km: {
        min: +(kmData?.[1] ?? 0),
        max: kmData && kmData[2] ? +(kmData[2] ?? 0) : +(kmData?.[1] ?? 0),
      },
      camping: {
        baseValue: +(columns[3]?.textContent?.replace('%', '')?.trim() ?? 0),
        slots: +(columns[5]?.textContent?.trim() ?? 0),
      }
    };
  });

  // Skip the first row (header)
  ruinData.shift();

  fs.writeFileSync(path.join(__dirname, "wikiRuins.json"), JSON.stringify(ruinData, null, 2), "utf-8");
  console.log("Ruin data exported to wikiRuins.json");

  return ruinData;
};
