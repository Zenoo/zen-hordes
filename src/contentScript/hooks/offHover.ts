export const offHover = (callback: (event: MouseEvent) => void) => {
  document.addEventListener("mouseout", callback);
};
