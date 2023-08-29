import type { DOMWindow } from "jsdom";

export const getElements = (window: DOMWindow, selectors: string[]): Element[] => {
  return selectors.map((selector) => window.document.querySelector(selector));
};

export const getAllElements = (window: DOMWindow, selectors: string[]): NodeListOf<Element>[] => {
  return selectors.map((selector) =>
    window.document.querySelectorAll(selector)
  );
};
