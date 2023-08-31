import { WidgetParams } from "../../types/widgets";
import { getUrl } from "../../utils/url";
import { BASE_BADGE_WIDGET_URL } from "../constants/badge-urls";

export const getBadgeWidgetFrameUrl = (params: WidgetParams) => {
  const widgetUrl = getUrl(BASE_BADGE_WIDGET_URL, {
    ...params,
  });

  return widgetUrl;
};
