export const scrollElement = (
  element: HTMLElement | null,
  direction: "left" | "right",
  byPx = 100,
): void => {
  if (!element) {
    return;
  }

  element.scrollBy({
    left: direction === "left" ? -byPx : byPx,
    behavior: "smooth",
  });
};
