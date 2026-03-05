import { websiteUrls } from "../constants";

export const sendMessage = async (message: Message) => {
  try {
    const tabs = await chrome.tabs.query({
      url: websiteUrls,
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
