export const onEvent = (
  eventName: string,
  callback: (event: Event) => void
) => {
  document.documentElement.addEventListener(eventName, callback);
};

export const logAllCustomEvents = () => {
  // Intercept addEventListener to wrap all listeners with logging
  const originalAddEventListener =
    document.documentElement.addEventListener.bind(document.documentElement);

  document.documentElement.addEventListener = function (
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ) {
    // Add our logging wrapper first
    const loggingWrapper: EventListener = (event: Event) => {
      console.log("[Custom Event Received]", {
        name: event.type,
        detail: (event as CustomEvent).detail,
        bubbles: event.bubbles,
        cancelable: event.cancelable,
        timestamp: new Date().toISOString(),
        target: event.target,
      });
    };

    // Add the logging wrapper
    originalAddEventListener(type, loggingWrapper, options);

    // Then add the original listener
    return originalAddEventListener(type, listener, options);
  };

  console.log(
    "[Event Logger] Now logging all custom events on documentElement"
  );
};
