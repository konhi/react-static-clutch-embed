import { WidgetParams } from "./types/widgets";
import { CustomerReviewsWidgetData } from "./customer-reviews/types";
import { getReviewsData } from "./customer-reviews/getReviewsData";
import { getBadgeData } from "./badge/getBadgeData";
import { BadgeWidgetData } from "./badge/badge-types";

export {
  getReviewsData,
  getBadgeData,
}

export type { WidgetParams, CustomerReviewsWidgetData, BadgeWidgetData }