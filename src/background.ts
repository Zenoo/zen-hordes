const CONFIG = {
  debug: false,
};

const log = (...args: unknown[]) => {
  if (CONFIG.debug) {
    console.log(...args);
  }
};

// Utils
const decodeRequestBody = (
  details: chrome.webRequest.WebRequestBodyDetails
): unknown => {
  if (details.requestBody?.raw?.[0]?.bytes) {
    const raw = details.requestBody.raw[0].bytes;
    const decodedString = new TextDecoder().decode(raw);

    return JSON.parse(decodedString);
  }
};

const sendMessageToContentScript = async (message: Message) => {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.tabs.sendMessage(tabs[0].id ?? 0, message);
};

const queue: Partial<Record<string, Message>> = {};

// Listen to specific requests
chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    log("onBeforeRequest", details.url, details);

    if (details.url.endsWith("/api/town/bank/item")) {
      // Take item from the bank / Put item in the bank
      const requestBody = decodeRequestBody(details);

      if (requestBody instanceof Object && "direction" in requestBody) {
        // Take item
        if (requestBody.direction === "up") {
          queue[details.requestId] = { action: Action.TakeItem };
        }
      }
    } else if (details.url.endsWith("/rest/v1/town/facilities/well")) {
      // Take ration from the well
      queue[details.requestId] = { action: Action.TakeItem, value: "water" };
    }
  },
  { urls: ["*://*/api/*", "*://*/rest/*"] },
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
  { urls: ["*://*/api/*", "*://*/rest/*"] }
);

// Take action after the request is completed
chrome.webRequest.onCompleted.addListener(
  (details) => {
    log("onCompleted", details.url, details);

    const message = queue[details.requestId];

    // Take item from the bank
    if (message?.action === Action.TakeItem) {
      queue[details.requestId] = undefined;

      sendMessageToContentScript(message).catch(console.error);
    }
  },
  { urls: ["*://*/api/*", "*://*/rest/*"] }
);
