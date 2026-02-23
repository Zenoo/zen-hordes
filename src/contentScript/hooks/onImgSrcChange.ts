// Utility to observe changes to the 'src' attribute of all <img> elements in the DOM.
// Calls the provided callback with the affected <img> element and the old/new src values.

export const onImgSrcChange = (
  callback: (
    img: HTMLImageElement,
    oldSrc: string | null,
    newSrc: string | null
  ) => void
) => {
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (
        mutation.type === "attributes" &&
        mutation.target instanceof HTMLImageElement &&
        mutation.attributeName === "src"
      ) {
        const img = mutation.target;
        const oldSrc = mutation.oldValue ?? null;
        const newSrc = img.getAttribute("src");
        callback(img, oldSrc, newSrc);
      }
    }
  });

  observer.observe(document.body, {
    subtree: true,
    attributes: true,
    attributeFilter: ["src"],
    attributeOldValue: true,
  });

  // Optionally return a disconnect function
  return () => observer.disconnect();
};
