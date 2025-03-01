// Utils
const decodeRequestBody = (
  details: chrome.webRequest.WebRequestBodyDetails
) => {
  if (details.requestBody?.raw?.[0]?.bytes) {
    const raw = details.requestBody.raw[0].bytes;
    const decodedString = new TextDecoder().decode(raw);

    return JSON.parse(decodedString);
  }
};

const sendMessageToContentScript = (action: Action) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id ?? 0, { action });
  });
};

const queue: Partial<Record<string, Action>> = {};

// Listen to specific requests
chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    console.log("onBeforeRequest", details.url, details);

    if (details.url.endsWith("/api/town/bank/item")) {
      // Take item from the bank / Put item in the bank
      const requestBody = decodeRequestBody(details);

      // Take item
      if (requestBody.direction === "up") {
        queue[details.requestId] = Action.TakeItem;
      }
    } else if (details.url.endsWith("/rest/v1/town/facilities/well")) {
      // Take ration from the well
      queue[details.requestId] = Action.TakeItem;
    }
  },
  { urls: ["*://*/api/*", "*://*/rest/*"] },
  ["requestBody"]
);

chrome.webRequest.onErrorOccurred.addListener(
  (details) => {
    console.log("onErrorOccurred", details.url, details);

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
    console.log("onCompleted", details.url, details);

    // Take item from the bank
    if (queue[details.requestId] === Action.TakeItem) {
      queue[details.requestId] = undefined;

      sendMessageToContentScript(Action.TakeItem);
    }
  },
  { urls: ["*://*/api/*", "*://*/rest/*"] }
);
