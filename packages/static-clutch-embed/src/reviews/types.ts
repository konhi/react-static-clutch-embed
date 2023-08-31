import { z } from "zod";

export const reviewsWidgetDataSchema = z.object({
  company: z.strictObject({
    name: z.string().nonempty(),
    rating: z.number().gte(1).lte(5),
    reviewsCount: z.number(),
    links: z.strictObject({
      title: z.string().nonempty().url(),
      logo: z.string().nonempty().url(),
      stars: z.string().nonempty().url(),
      reviewsCount: z.string().nonempty().url(),
    }),
  }),
  reviews: z.array(
    z.strictObject({
      id: z.number(),
      rating: z.number().gte(1).lte(5),
      text: z.string().nonempty(),
      author: z.string().nonempty(),
      link: z.string().nonempty().url(),
    })
  ),
});


export type ReviewsWidgetData = z.infer<typeof reviewsWidgetDataSchema>