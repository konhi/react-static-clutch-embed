export const getReviewId = (url: string) => {
  return Number(url.split("-").pop());
}