export const parseLink = (el: Element) => el.getAttribute("href");

export const parseReviewText = (el: Element) =>
  el.textContent?.trim().slice(1, -1);

export const parseReviewRating = (el: Element) => Number(el.textContent);

export const parseCompanyReviewsCount = (el: Element) =>
  Number(el.textContent?.split("reviews")[0]);

export const parseReviewAuthor = (el: Element) => el.textContent;

export const parseCompanyName = (el: Element) => el.textContent?.split("Reviews")[0].trim();

export const parseCompanyRating = (el: Element) => Number(el.textContent);