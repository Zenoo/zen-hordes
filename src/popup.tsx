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
  TextField,
  ThemeProvider,
  Typography,
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
    "update-sites": "External sites to update",
    "user-key": "User key",
  },
  fr: {
    "enhance-css": "Améliorations de l'interface",
    "bank-blocker": "Bloqueur de banque",
    "map-preview": "Aperçu de la carte des villes disponibles",
    "external-city-links": "Liens externes des historiques des villes",
    "update-sites": "Sites externes à mettre à jour",
    "user-key": "Clé utilisateur",
  },
  de: {
    "enhance-css": "UI-Verbesserungen",
    "bank-blocker": "Bank Blocker",
    "map-preview": "Vorschau der verfügbaren Städte auf der Karte",
    "external-city-links": "Externe Stadtverlauf-Links",
    "update-sites": "Externe Sites aktualisieren",
    "user-key": "Benutzerschlüssel",
  },
  es: {
    "enhance-css": "Mejoras de la interfaz de usuario",
    "bank-blocker": "Bloqueador de banco",
    "map-preview": "Vista previa del mapa de ciudades disponibles",
    "external-city-links": "Enlaces externos de historiales de ciudades",
    "update-sites": "Sitios externos para actualizar",
    "user-key": "Clave de usuario",
  },
};

const sendMessage = async (message: Message) => {
  try {
    const tabs = await chrome.tabs.query({
      url: [
        "https://myhordes.eu/*",
        "https://myhordes.fr/*",
        "https://myhordes.de/*",
        "https://myhord.es/*",
      ],
    });

    tabs.forEach((tab) => {
      if (!tab.id) return;

      chrome.tabs.sendMessage<Message>(tab.id, message);
    });
  } catch (error) {
    console.error(error);

    // Interact with the store directly
    switch (message.action) {
      case Action.ToggleFeature: {
        const value = message.value as { feature: string; enabled: unknown };
        await chrome.storage.sync.set({ [value.feature]: value.enabled });
        break;
      }
      case Action.SetStorage: {
        const value = message.value as { name: string; value: unknown };
        await chrome.storage.sync.set({ [value.name]: value.value });
        break;
      }
      default: {
        console.error("Unknown action:", message.action);
      }
    }
  }
};

const Popup = () => {
  const [enhanceCss, setEnhanceCss] = useState(true);
  const [bankBlocker, setBankBlocker] = useState(true);
  const [mapPreview, setMapPreview] = useState(true);
  const [externalSiteLinks, setExternalSiteLinks] = useState([
    ExternalSiteName.BBH,
  ]);
  const [externalSitesToUpdate, setExternalSitesToUpdate] = useState([
    ExternalSiteName.BBH,
    ExternalSiteName.FM,
    ExternalSiteName.GH,
    ExternalSiteName.MHO,
  ]);
  const [userKey, setUserKey] = useState("");
  const [lang, setLang] = useState<Lang>(Lang.En);

  // Fetch lang
  useEffect(() => {
    const syncStorage = async () => {
      const data = await chrome.storage.sync.get();
      setEnhanceCss(data["enhance-css"] ? !!data["enhance-css"] : true);
      setBankBlocker(data["bank-blocker"] ? !!data["bank-blocker"] : true);
      setMapPreview(data["map-preview"] ? !!data["map-preview"] : true);
      setExternalSiteLinks(
        (data["external-city-links"] as ExternalSiteName[] | undefined) ?? [
          ExternalSiteName.BBH,
        ]
      );
      setExternalSitesToUpdate(
        (data["external-sites-to-update"] as ExternalSiteName[] | undefined) ?? [
          ExternalSiteName.BBH,
          ExternalSiteName.FM,
          ExternalSiteName.GH,
          ExternalSiteName.MHO,
        ]
      );
      setUserKey(data["user-key"] ? String(data["user-key"]) : "");
      setLang((data["hordes-lang"] as Lang | undefined) ?? Lang.En);
    };

    syncStorage().catch(console.error);
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

  const setFeature = async (feature: string, value: unknown) => {
    await sendMessage({ action: Action.ToggleFeature, value: { feature, enabled: value } });
  };

  const handleEnhanceCssChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnhanceCss(event.target.checked);
    await setFeature("enhance-css", event.target.checked);
  };

  const handleBankBlockerChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBankBlocker(event.target.checked);
    await setFeature("bank-blocker", event.target.checked);
  };

  const handleMapPreviewChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMapPreview(event.target.checked);
    await setFeature("map-preview", event.target.checked);
  };

  const handleExternalSiteLinksChange =
    (name: ExternalSiteName) =>
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const updatedExternalSiteLinks = event.target.checked
        ? [...externalSiteLinks, name]
        : externalSiteLinks.filter((link) => link !== name);

      setExternalSiteLinks(updatedExternalSiteLinks);
      await setFeature("external-city-links", updatedExternalSiteLinks);
    };

  const handleExternalSitesToUpdateChange =
    (name: ExternalSiteName) =>
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const updatedExternalSitesToUpdate = event.target.checked
        ? [...externalSitesToUpdate, name]
        : externalSitesToUpdate.filter((site) => site !== name);

      setExternalSitesToUpdate(updatedExternalSitesToUpdate);
      await setFeature("external-sites-to-update", updatedExternalSitesToUpdate);
    };

  const handleUserKeyChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserKey(event.target.value);
    await sendMessage({ action: Action.SetStorage, value: { name: "user-key", value: event.target.value } });
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
            {Object.values(ExternalSiteName).map(
              (name) =>
                !!ExternalSite[name].townUrl && (
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
                      "& .MuiFormControlLabel-label": { typography: "body2" },
                    }}
                  />
                )
            )}
          </FormGroup>
        </FormControl>
        <FormControl component="fieldset" size="small" sx={{ mx: 1 }}>
          <FormLabel component="legend" sx={{ typography: "body2" }}>
            {t("update-sites")}
          </FormLabel>
          <FormGroup aria-label="position" row>
            {Object.values(ExternalSiteName).map(
              (name) =>
                !!ExternalSite[name].updateUrl && (
                  <FormControlLabel
                    key={name}
                    value={name}
                    control={
                      <Checkbox
                        checked={externalSitesToUpdate.includes(name)}
                        onChange={handleExternalSitesToUpdateChange(name)}
                        size="small"
                      />
                    }
                    label={name}
                    labelPlacement="end"
                    sx={{
                      "& .MuiFormControlLabel-label": { typography: "body2" },
                    }}
                  />
                )
            )}
          </FormGroup>
        </FormControl>
        <Divider sx={{ my: 1 }} />
        <TextField
          label={t("user-key")}
          value={userKey}
          onChange={handleUserKeyChange}
          size="small"
          sx={{ m: 1 }}
        />
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
