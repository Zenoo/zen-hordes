import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Checkbox,
  CssBaseline,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  GlobalStyles,
  Switch,
  ThemeProvider,
  Typography
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { ExternalSite, ExternalSiteName } from "./contentScript/externalSites";
import { Version } from "./utils/Version";
import { theme } from "./utils/theme";

const T: Translations = {
  en: {
    "enhance-css": "UI Enhancements",
    "bank-blocker": "Bank Blocker",
    "map-preview": "Available cities map preview",
    "external-city-links": "External city history links",
  },
  fr: {
    "enhance-css": "Améliorations de l'interface",
    "bank-blocker": "Bloqueur de banque",
    "map-preview": "Aperçu de la carte des villes disponibles",
    "external-city-links": "Liens externes des historiques des villes",
  },
  de: {
    "enhance-css": "UI-Verbesserungen",
    "bank-blocker": "Bank Blocker",
    "map-preview": "Vorschau der verfügbaren Städte auf der Karte",
    "external-city-links": "Externe Stadtverlauf-Links",
  },
  es: {
    "enhance-css": "Mejoras de la interfaz de usuario",
    "bank-blocker": "Bloqueador de banco",
    "map-preview": "Vista previa del mapa de ciudades disponibles",
    "external-city-links": "Enlaces externos de historiales de ciudades",
  },
};

const Popup = () => {
  const [enhanceCss, setEnhanceCss] = useState(true);
  const [bankBlocker, setBankBlocker] = useState(true);
  const [mapPreview, setMapPreview] = useState(true);
  const [externalSiteLinks, setExternalSiteLinks] = useState([
    ExternalSiteName.BBH,
  ]);
  const [lang, setLang] = useState<Lang>(Lang.En);

  // Fetch lang
  useEffect(() => {
    chrome.storage.sync.get((data) => {
      setEnhanceCss(data["enhance-css"] ? !!data["enhance-css"] : true);
      setBankBlocker(data["bank-blocker"] ? !!data["bank-blocker"] : true);
      setMapPreview(data["map-preview"] ? !!data["map-preview"] : true);
      setExternalSiteLinks(
        (data["external-city-links"] as ExternalSiteName[] | undefined) ?? [
          ExternalSiteName.BBH,
        ]
      );
      setLang((data["hordes-lang"] as Lang | undefined) ?? Lang.En);
    });
  }, []);

  const t = (key: string, replacements?: Record<string, string>) => {
    let translation = T[lang]?.[key] ?? key;

    if (replacements) {
      for (const [placeholder, value] of Object.entries(replacements)) {
        translation = translation.replace(
          new RegExp(`{{${placeholder}}}`, "g"),
          value
        );
      }
    }

    return translation;
  };

  const setFeature = (feature: string, value: unknown) => {
    chrome.tabs.query(
      {
        url: [
          "https://myhordes.eu/*",
          "https://myhordes.fr/*",
          "https://myhordes.de/*",
          "https://myhord.es/*",
        ],
      },
      function (tabs) {
        tabs.forEach((tab) => {
          if (!tab.id) return;

          chrome.tabs.sendMessage<Message>(tab.id, {
            action: Action.ToggleFeature,
            value: { feature, enabled: value },
          });
        });
      }
    );
  };

  const handleEnhanceCssChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnhanceCss(event.target.checked);
    setFeature("enhance-css", event.target.checked);
  };

  const handleBankBlockerChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBankBlocker(event.target.checked);
    setFeature("bank-blocker", event.target.checked);
  };

  const handleMapPreviewChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMapPreview(event.target.checked);
    setFeature("map-preview", event.target.checked);
  };

  const handleExternalSiteLinksChange = (name: ExternalSiteName) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedExternalSiteLinks = event.target.checked
      ? [...externalSiteLinks, name]
      : externalSiteLinks.filter((link) => link !== name);

    setExternalSiteLinks(updatedExternalSiteLinks);
    setFeature("external-city-links", updatedExternalSiteLinks);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          "#root": {
            minWidth: 350,
          },
        }}
      />
      <Typography variant="h6" sx={{ textAlign: "center", mt: 1 }}>
        Zen Hordes
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={enhanceCss}
              onChange={handleEnhanceCssChange}
              size="small"
            />
          }
          label={
            <Typography variant="body2" sx={{ ml: 0.5 }}>
              {t("enhance-css")}
            </Typography>
          }
          sx={{ mx: 1 }}
        />
        <FormControlLabel
          control={
            <Switch
              checked={bankBlocker}
              onChange={handleBankBlockerChange}
              size="small"
            />
          }
          label={
            <Typography variant="body2" sx={{ ml: 0.5 }}>
              {t("bank-blocker")}
            </Typography>
          }
          sx={{ mx: 1 }}
        />
        <FormControlLabel
          control={
            <Switch
              checked={mapPreview}
              onChange={handleMapPreviewChange}
              size="small"
            />
          }
          label={
            <Typography variant="body2" sx={{ ml: 0.5 }}>
              {t("map-preview")}
            </Typography>
          }
          sx={{ mx: 1 }}
        />
        <Divider sx={{ my: 1 }} />
        <FormControl component="fieldset" size="small" sx={{ mx: 1 }}>
          <FormLabel component="legend" sx={{ typography: "body2" }}>
            {t("external-city-links")}
          </FormLabel>
          <FormGroup aria-label="position" row>
            {Object.values(ExternalSiteName).map((name) => !!ExternalSite[name].url && (
              <FormControlLabel
                key={name}
                value={name}
                control={
                  <Checkbox
                    checked={externalSiteLinks.includes(name)}
                    onChange={handleExternalSiteLinksChange(name)}
                    size="small"
                  />
                }
                label={name}
                labelPlacement="end"
                sx={{
                  '& .MuiFormControlLabel-label': { typography: "body2" },
                }}
              />
            ))}
          </FormGroup>
        </FormControl>
      </FormGroup>
      <Typography
        variant="caption"
        sx={{ display: "block", opacity: 0.8, textAlign: "center" }}
      >
        v{Version}
      </Typography>
    </ThemeProvider>
  );
};

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <Popup />
    </React.StrictMode>
  );
}
