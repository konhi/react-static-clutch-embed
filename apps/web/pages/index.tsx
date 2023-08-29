import { InferGetStaticPropsType } from "next/types";
import { getReviewsData, getBadgeData } from "static-clutch-embed";
import { ClutchBadge, ClutchReviews } from "react-static-clutch-embed";
import "react-static-clutch-embed/styles/reviews.css";
import "react-static-clutch-embed/styles/badge.css";

export default function Page({
  customerReviewsData,
  badgeData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      Reviews
      <ClutchReviews data={customerReviewsData} />
      Badge
      <ClutchBadge data={badgeData} />
    </>
  );
}

export const getStaticProps = async () => {
  const widgetParams = {
    uid: 33218,
    ref_path: "/",
    ref_domain: "appunite.com",
  };

  const customerReviewsData = await getReviewsData(widgetParams);
  const badgeData = await getBadgeData(widgetParams);

  return {
    props: {
      customerReviewsData,
      badgeData,
    },
  };
};
