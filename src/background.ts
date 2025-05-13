import { websiteUrls } from "./utils/constants";

const CONFIG = {
  debug: false,
};

const log = (...args: unknown[]) => {
  if (CONFIG.debug) {
    console.log(...args);
  }
};

// URLs to watch (all)
const urls = [
  "*://*/api/*",
  "*://*/rest/*",
  "*://*/logout",
  "*://*/jx/beyond/desert/cached",
];

// Decode WebRequest request body
export const decodeRequestBody = (
  details: chrome.webRequest.WebRequestBodyDetails
): unknown => {
  console.log("decodeRequestBody", details);
  if (details.requestBody?.raw?.[0]?.bytes) {
    const raw = details.requestBody.raw[0].bytes;
    const decodedString = new TextDecoder().decode(raw);

    return JSON.parse(decodedString);
  }
};

// Send message to the content script
const sendMessageToContentScript = async (message: Message) => {
  const tabs = await chrome.tabs.query({ url: websiteUrls });
  tabs.forEach((tab) => {
    if (tab.id) {
      chrome.tabs.sendMessage(tab.id, message);
    }
  });
};

// Watched requests queue (empties after the request is completed)
const queue: Partial<Record<string, Message>> = {};

// Listen to specific requests
chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    log("onBeforeRequest", details.url, details);

    if (
      details.url.endsWith("/rest/v1/town/facilities/well") &&
      details.method === "GET"
    ) {
      // Take ration from the well
      queue[details.requestId] = { action: Action.TakeWaterFromWell };
      return;
    }

    // Logout
    if (details.url.endsWith("/logout")) {
      sendMessageToContentScript({ action: Action.Logout }).catch(
        console.error
      );
      return;
    }

    // Camping
    if (details.url.endsWith("/api/beyond/desert/camping")) {
      const body = decodeRequestBody(details) as { action: string };
      if (body.action === "6") {
        // Set camping
        queue[details.requestId] = { action: Action.Camp, value: true };
      } else if (body.action === "9") {
        // Remove camping
        queue[details.requestId] = { action: Action.Camp, value: false };
      }
      return;
    }
  },
  { urls },
  ["requestBody"]
);

chrome.webRequest.onErrorOccurred.addListener(
  (details) => {
    log("onErrorOccurred", details.url, details);

    // Remove errored request from the queue
    if (queue[details.requestId]) {
      queue[details.requestId] = undefined;
    }
  },
  { urls }
);

// Take action after the request is completed
chrome.webRequest.onCompleted.addListener(
  (details) => {
    log("onCompleted", details.url, details);

    const message = queue[details.requestId];

    // Take item from the bank
    if (message?.action === Action.TakeWaterFromWell) {
      queue[details.requestId] = undefined;

      sendMessageToContentScript(message).catch(console.error);
      return;
    }

    // Desert refresh
    if (
      details.url.includes("/jx/beyond/desert/cached") ||
      details.url.includes("/rest/v1/game/inventory/")
    ) {
      sendMessageToContentScript({
        action: Action.RefreshDesert,
      }).catch(console.error);
      return;
    }

    // Camping
    if (message?.action === Action.Camp) {
      queue[details.requestId] = undefined;
      sendMessageToContentScript(message).catch(console.error);
      return;
    }
  },
  { urls },
  ["responseHeaders"]
);
