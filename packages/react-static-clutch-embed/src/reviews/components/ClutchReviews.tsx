import type { ReviewsWidgetData } from "static-clutch-embed";
import { ClutchLogo } from "../../assets/ClutchLogo";
import { StarsRating } from "../../components/StarsRating";
import { VerifiedLogo } from "../../assets/VerifiedLogo";
import { ArrowLeftIcon } from "../../assets/ArrowLeftIcon";
import { useCarousel } from "../hooks/use-carousel";

interface CustomerReviewsProps {
  data: ReviewsWidgetData;
}

const MOBILE_CAROUSEL_REVIEWS_PER_SCREEN = 2 as const;

export const ClutchReviews = ({ data }: CustomerReviewsProps) => {
  const screensAmount = Math.ceil(
    data.reviews.length / MOBILE_CAROUSEL_REVIEWS_PER_SCREEN
  );

  const { carouselRef, currentScreen, handleScrollLeft, handleScrollRight } =
    useCarousel({
      screensAmount,
    });

  return (
    <div className="clutch-customer-reviews">
      <div className="clutch-company-info">
        <div className="clutch-company-reviews">
          <a href={data.company.links.title} className="clutch-company-name" target="_blank">
            {data.company.name} Reviews
          </a>
          <div className="clutch-rating">
            <div className="clutch-company-stars">
              {data.company.rating.toFixed(1)}{" "}
              <a href={data.company.links.stars} target="_blank">
                <div className="clutch-review-stars-rating">
                  <StarsRating
                    rating={data.company.rating}
                    starProps={{
                      width: "16px",
                    }}
                  />
                </div>
              </a>
            </div>
            <div className="clutch-company-review-count">
              <a href={data.company.links.reviewsCount} target="_blank">
                {data.company.reviewsCount} reviews
              </a>
            </div>
          </div>
        </div>
        <div className="clutch-powered-by clutch-powered-by--desktop">
          <a href={data.company.links.logo} target="_blank">
            Powered by <ClutchLogo style={{ width: "64px" }} theme="light" />
          </a>
        </div>
      </div>
      <div className="clutch-reviews" ref={carouselRef}>
        {data.reviews.map((review) => (
          <a href={review.link} key={review.id} className="clutch-review-card" target="_blank">
            <article className="cluth-review-card-wrapper">
              <div>
                <div className="cluth-review-card-rating">
                  {review.rating.toFixed(1)}
                  <div className="clutch-review-stars-rating">
                    <StarsRating
                      rating={review.rating}
                      starProps={{
                        width: "16px",
                      }}
                    />
                  </div>
                </div>
                <p className="clutch-review-card-text">{review.text}</p>
              </div>
              <div className="clutch-review-card-meta">
                <span className="clutch-review-card-author">
                  {review.author}
                </span>
                <span className="clutch-review-card-verified">
                  <VerifiedLogo
                    style={{
                      width: "14px",
                    }}
                  />
                  Verified Review
                </span>
              </div>
            </article>
          </a>
        ))}
      </div>
      <div className="clutch-carousel-buttons">
        <button onClick={handleScrollLeft} className="clutch-carousel-button">
          <ArrowLeftIcon className="clutch-carousel-arrow" />
        </button>
        {currentScreen + 1} of {screensAmount}
        <button
          onClick={handleScrollRight}
          className="clutch-carousel-button clutch-carousel-button-right"
        >
          <ArrowLeftIcon className="clutch-carousel-arrow" />
        </button>
      </div>
      <div className="clutch-powered-by clutch-powered-by--mobile">
        <a href={data.company.links.logo} target="_blank">
          Powered by <ClutchLogo style={{ width: "48px" }} theme="light" />
        </a>
      </div>
    </div>
  );
};
