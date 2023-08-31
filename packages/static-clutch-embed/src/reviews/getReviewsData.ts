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
import { ReviewsWidgetData, reviewsWidgetDataSchema } from "./types";
import { MAX_REVIEWS_PER_PAGE } from "./constants/other";

/**
 * @example
 * {
    company: {
      name: 'AppUnite',
      rating: 4.9,
      reviewsCount: 15,
      links: {
        title: 'https://clutch.co/profile/appunite?utm_source=widget&utm_medium=8&utm_campaign=widget&utm_content=title&utm_term=appunite.com#summary',
        logo: 'https://clutch.co/profile/appunite?utm_source=widget&utm_medium=3&utm_campaign=widget&utm_content=stars&utm_term=appunite.com#logo',
        stars: 'https://clutch.co/profile/appunite?utm_source=widget&utm_medium=8&utm_campaign=widget&utm_content=stars&utm_term=appunite.com#reviews',
        reviewsCount: 'https://clutch.co/profile/appunite?utm_source=widget&utm_medium=8&utm_campaign=widget&utm_content=num_reviews&utm_term=appunite.com#reviews'
      }
    },
    reviews: [
      {
        id: 1999329,
        rating: 5,
        text: "This was a very fruitful collaboration that we're fully satisfied with.",
        author: 'Director of Engineering, Contractbook',
        link: 'https://clutch.co/profile/appunite?utm_source=widget&utm_medium=8&utm_campaign=widget&utm_content=testimonial&utm_term=appunite.com#reviews#review-1999329'
      },
      {
        id: 1574954,
        rating: 5,
        text: 'They’re a team of very intelligent engineers.',
        author: 'CEO, Bamboo',
        link: 'https://clutch.co/profile/appunite?utm_source=widget&utm_medium=8&utm_campaign=widget&utm_content=testimonial&utm_term=appunite.com#reviews#review-1574954'
      },
      {
        id: 1503564,
        rating: 5,
        text: 'No complaints, we loved working with AppUnite 100%.',
        author: 'CEO, Solo ',
        link: 'https://clutch.co/profile/appunite?utm_source=widget&utm_medium=8&utm_campaign=widget&utm_content=testimonial&utm_term=appunite.com#reviews#review-1503564'
      },
      {
        id: 1113680,
        rating: 5,
        text: 'I needed smart people who cared about what we were doing, and they delivered.',
        author: 'CTO, Halftone Design',
        link: 'https://clutch.co/profile/appunite?utm_source=widget&utm_medium=8&utm_campaign=widget&utm_content=testimonial&utm_term=appunite.com#reviews#review-1113680'
      },
      {
        id: 1052297,
        rating: 5,
        text: 'Everything AppUnite does is gold.',
        author: 'CEO, Yogatrail',
        link: 'https://clutch.co/profile/appunite?utm_source=widget&utm_medium=8&utm_campaign=widget&utm_content=testimonial&utm_term=appunite.com#reviews#review-1052297'
      },
      {
        id: 951374,
        rating: 4,
        text: 'The team was open about everything. We could always have honest conversations with them.',
        author: 'CTO, ASSISTME',
        link: 'https://clutch.co/profile/appunite?utm_source=widget&utm_medium=8&utm_campaign=widget&utm_content=testimonial&utm_term=appunite.com#reviews#review-951374'
      }
    ]
}
 */
export const getReviewsData = async (
  params: WidgetParams
): Promise<ReviewsWidgetData> => {
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

  const data = reviewsWidgetDataSchema.parse({
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
      id: getReviewId(parseLink(link[index]) ?? ""),
      rating: parseReviewRating(ratings[index]),
      text: parseReviewText(texts[index]),
      author: parseReviewAuthor(authors[index]),
      link: parseLink(link[index]),
    })),
  });

  return data;
};
