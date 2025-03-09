export const onHover = (callback: (event: MouseEvent) => void) => {
  document.addEventListener("mouseover", callback);
};
