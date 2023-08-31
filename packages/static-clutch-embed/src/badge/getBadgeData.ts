import { SELECTORS_BADGE } from "./constants/badge-selectors";
import { getBadgeWidgetFrameUrl } from "./utils/badge-urls-utils";
import { JSDOM } from "jsdom";
import { WidgetParams } from "../types/widgets";
import { badgeWidgetDataSchema, type BadgeWidgetData } from "./types";
import { getElements } from "../utils/querying";

/**
 * @example
    {
      rating: 4.9,
      reviewsCount: 15,
      links: {
        stars: 'https://clutch.co/profile/appunite?utm_source=widget&utm_medium=2&utm_campaign=widget&utm_content=stars&utm_term=appunite.com#reviews',
        logo: 'https://clutch.co/profile/appunite?utm_source=widget&utm_medium=2&utm_campaign=widget&utm_content=logo&utm_term=appunite.com',
        reviewsCount: 'https://clutch.co/profile/appunite?utm_source=widget&utm_medium=2&utm_campaign=widget&utm_content=num_reviews&utm_term=appunite.com#reviews'
      }
    }
*/
export const getBadgeData = async (
  params: WidgetParams
): Promise<BadgeWidgetData> => {
  const url = getBadgeWidgetFrameUrl(params);

  const { window } = await JSDOM.fromURL(url);

  const [
    reviewsCount, ratingNumber, linkLogo, linkStars
  ] = getElements(window, [
    SELECTORS_BADGE.reviewsCount,
    SELECTORS_BADGE.ratingNumber,
    SELECTORS_BADGE.linkLogo,
    SELECTORS_BADGE.linkStars,
  ]);

  const data = badgeWidgetDataSchema.parse({
    rating: Number(ratingNumber.textContent),
    reviewsCount: Number(reviewsCount.textContent?.split("reviews")[0]), 
    links: {
      reviewsCount: reviewsCount.getAttribute("href"),
      logo: linkLogo.getAttribute("href"),
      stars: linkStars.getAttribute("href"),
    }
  });

  return data;
};
