import type { SVGProps } from "react-html-props";
import { StarIconEmpty, StarIconFilled } from "../assets/StarIcons";
import { CustomerReviewsWidgetData } from "static-clutch-embed";
import { STAR_RATINGS_STEPS } from "../constants";

interface StarIconProps extends SVGProps {
  filled?: boolean;
}

interface StarsRatingProps
  extends Pick<CustomerReviewsWidgetData["company"], "rating"> {
  starProps?: StarIconProps;
}

const StarIcon = ({ filled = true, ...props }: StarIconProps) =>
  filled ? <StarIconFilled {...props} /> : <StarIconEmpty {...props} />;

export const StarsRating = ({ rating, starProps }: StarsRatingProps) => {
  return (
    <>
      {STAR_RATINGS_STEPS.map((num) => (
        <StarIcon key={num} filled={num <= Math.round(rating)} {...starProps} />
      ))}
    </>
  );
};
