export const onMount = (
  callback: (node: HTMLElement) => void
) => {
  const searchNodes = (node: Node) => {
    if (node instanceof HTMLElement) {
      callback(node);

      node.childNodes.forEach(searchNodes);
    }
  };

  // Listen for DOM changes
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        searchNodes(node);
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
};
