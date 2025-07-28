export const onEvent = (
  eventName: string,
  callback: (event: Event) => void
) => {
  document.documentElement.addEventListener(eventName, callback);
};
