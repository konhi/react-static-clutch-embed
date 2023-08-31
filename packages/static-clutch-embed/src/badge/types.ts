import { z } from "zod"

export const badgeWidgetDataSchema = z.strictObject({
  rating: z.number().gte(1).lte(5),
  reviewsCount: z.number(),
  links: z.strictObject({
    stars: z.string().nonempty().url(),
    logo: z.string().nonempty().url(),
    reviewsCount: z.string().nonempty().url(),
  })
})

export type BadgeWidgetData = z.infer<typeof badgeWidgetDataSchema>;