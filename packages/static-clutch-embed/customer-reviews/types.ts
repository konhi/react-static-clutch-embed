export interface CustomerReviewsWidgetData {
  company: {
    name: string;
    rating: number;
    reviewsCount: number;
    links: {
      title: string;
      logo: string;
      stars: string;
      reviewsCount: string;
    }
  }
  reviews: {
    id: number;
    rating: number;
    text: string;
    author: string;
    link: string;
  }[]
}