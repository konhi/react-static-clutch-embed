import { WidgetParams } from "./types/widgets";
import { ReviewsWidgetData } from "./reviews/types";
import { getReviewsData } from "./reviews/getReviewsData";
import { getBadgeData } from "./badge/getBadgeData";
import { BadgeWidgetData } from "./badge/types";

export {
  getReviewsData,
  getBadgeData,
}

export type { WidgetParams, ReviewsWidgetData, BadgeWidgetData }