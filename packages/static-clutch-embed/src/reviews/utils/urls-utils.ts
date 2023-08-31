import { WidgetParams } from "../../types/widgets";
import { getUrl } from "../../utils/url";
import { BASE_CUSTOMER_REVIEWS_WIDGET_URL } from "../constants/urls";

export const getCustomerReviewsWidgetFrameUrl = (params: WidgetParams): string => {
  const widgetUrl = getUrl(BASE_CUSTOMER_REVIEWS_WIDGET_URL, {
    ...params,
  });

  return widgetUrl;
};
