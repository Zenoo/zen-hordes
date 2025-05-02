export const offKey = (
  key: string,
  callback: (event: KeyboardEvent) => void
) => {
  // Listen for the keyup event
  document.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === key.toLowerCase()) {

      // Trigger the callback
      callback(event);
    }
  });
};
