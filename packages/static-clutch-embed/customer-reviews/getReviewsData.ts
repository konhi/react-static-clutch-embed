import { SELECTORS_CUSTOMER_REVIEWS } from "./constants/selectors";
import { getCustomerReviewsWidgetFrameUrl } from "./utils/urls-utils";
import { JSDOM } from "jsdom";
import { getElements, getAllElements } from "../utils/querying";
import { getReviewId } from "./utils/id-utils";
import { WidgetParams } from "../types/widgets";
import {
  parseReviewAuthor,
  parseLink,
  parseReviewRating,
  parseReviewText,
  parseCompanyReviewsCount,
  parseCompanyName,
  parseCompanyRating,
} from "./utils/parsing-utils";
import { CustomerReviewsWidgetData } from "./types";
import { MAX_REVIEWS_PER_PAGE } from "./constants/other";

export const getReviewsData = async (
  params: WidgetParams
): Promise<CustomerReviewsWidgetData> => {
  const url = getCustomerReviewsWidgetFrameUrl(params);

  const { window } = await JSDOM.fromURL(url);

  const [
    companyName,
    companyRating,
    companyReviewsCount,
    companyReviewsCountLink,
    clutchLogoLink,
    starsLink,
  ] = getElements(window, [
    SELECTORS_CUSTOMER_REVIEWS.companyName,
    SELECTORS_CUSTOMER_REVIEWS.companyRating,
    SELECTORS_CUSTOMER_REVIEWS.companyReviewsCount,
    SELECTORS_CUSTOMER_REVIEWS.companyReviewsCountLink,
    SELECTORS_CUSTOMER_REVIEWS.clutchLogoLink,
    SELECTORS_CUSTOMER_REVIEWS.starsLink,
  ]);

  const [ratings, texts, authors, link] = getAllElements(window, [
    SELECTORS_CUSTOMER_REVIEWS.reviewRating,
    SELECTORS_CUSTOMER_REVIEWS.reviewText,
    SELECTORS_CUSTOMER_REVIEWS.reviewAuthor,
    SELECTORS_CUSTOMER_REVIEWS.reviewLink,
  ]).map((el) => [...el]);

  const data: CustomerReviewsWidgetData = {
    company: {
      name: parseCompanyName(companyName),
      rating: parseCompanyRating(companyRating),
      reviewsCount: parseCompanyReviewsCount(companyReviewsCount),
      links: {
        title: parseLink(companyName),
        stars: parseLink(starsLink),
        logo: parseLink(clutchLogoLink),
        reviewsCount: parseLink(companyReviewsCountLink),
      },
    },
    reviews: [...Array(MAX_REVIEWS_PER_PAGE).keys()].map((index) => ({
      id: getReviewId(parseLink(link[index])),
      rating: parseReviewRating(ratings[index]),
      text: parseReviewText(texts[index]),
      author: parseReviewAuthor(authors[index]),
      link: parseLink(link[index]),
    })),
  };

  return data;
};
