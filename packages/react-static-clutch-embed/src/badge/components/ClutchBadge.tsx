import { BadgeWidgetData } from "static-clutch-embed";
import { StarsRating } from "../../components/StarsRating";
import { ClutchLogo } from "../../assets/ClutchLogo";

interface ClutchBadgeProps {
  data: BadgeWidgetData;
  style?: {
    theme?: "light" | "dark";
  };
}

export const ClutchBadge = ({
  data,
  style = { theme: "light" },
}: ClutchBadgeProps) => {
  return (
    <div className={`clutch-badge clutch-badge--${style.theme}`}>
      <div className="clutch-reviewed-on">
        <a href={data.links.logo} target="_blank">
          Reviewed on
          <ClutchLogo
            theme={style.theme}
            style={{
              width: "82px",
            }}
          />
        </a>
      </div>
      <div className="clutch-reviews-count">
        <div>
          <a href={data.links.stars} target="_blank">
            <StarsRating
              rating={data.rating}
              starProps={{
                width: "16px",
              }}
            />
          </a>
        </div>
        <div>
          <a href={data.links.reviewsCount} target="_blank">
            {data.reviewsCount} reviews
          </a>
        </div>
      </div>
    </div>
  );
};
