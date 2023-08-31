import type { DOMWindow } from "jsdom";

function isTruthy<T>(value?: T | undefined | null | false): value is T {
  return !!value
}

export const getElements = (window: DOMWindow, selectors: string[]): Element[] => {
  return selectors.map((selector) => window.document.querySelector(selector)).filter(isTruthy);
};

export const getAllElements = (window: DOMWindow, selectors: string[]): NodeListOf<Element>[] => {
  return selectors.map((selector) =>
    window.document.querySelectorAll(selector)
  );
};
