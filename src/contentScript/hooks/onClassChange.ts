// Utility to observe changes to a class attribute for elements matching a selector.
// Calls the provided callback with the element, old class list, and new class list.

export const onClassChange = (
  targetClass: string,
  callback: (
    el: HTMLElement,
    oldClass: string | null,
    newClass: string | null
  ) => void
) => {
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (
        mutation.type === "attributes" &&
        mutation.target instanceof HTMLElement &&
        mutation.attributeName === "class" &&
        mutation.target.classList.contains(targetClass)
      ) {
        const el = mutation.target;
        const oldClass = mutation.oldValue ?? null;
        const newClass = el.getAttribute("class");
        callback(el, oldClass, newClass);
      }
    }
  });

  observer.observe(document.body, {
    subtree: true,
    attributes: true,
    attributeFilter: ["class"],
    attributeOldValue: true,
  });

  // Optionally return a disconnect function
  return () => observer.disconnect();
};
