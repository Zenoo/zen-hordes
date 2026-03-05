import { sendMessage } from "./sendMessage";

export const setFeature = async (feature: string, value: unknown) => {
  await sendMessage({
    action: Action.ToggleFeature,
    value: { feature, enabled: value },
  });
};
