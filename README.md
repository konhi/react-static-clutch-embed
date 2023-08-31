<div align="center">

<img width="902" alt="image" src="https://github.com/konhi/react-static-clutch-embed/assets/61631665/88ef293f-5ab8-4dcb-861a-2fae93d00e70">
<img width="900" alt="image" src="https://github.com/konhi/react-static-clutch-embed/assets/61631665/494f5ede-8345-41ea-bc38-5d73c62db010">
<img width="907" alt="image" src="https://github.com/konhi/react-static-clutch-embed/assets/61631665/e05648a3-9caf-4d43-bd86-c4d20bbcc5fb">
<img width="907" alt="image" src="https://github.com/konhi/react-static-clutch-embed/assets/61631665/cf87e4c8-3258-4857-8ed1-bb839d7e846a">




<br>
<h1 align="center">▲ React Static Clutch Embed </h1>

  <p align="center">
      <b>Say goodbye to iframes! Save +400 KBs (network) & +250 ms (rendering) while embeding Clutch.co widgets.</b>
    <br>
    <br>
  </p>
</div>

## 🦄 Features

- **💨 Instant Performance Improvement** — get rid off network requests (incl. fonts, assets, iframe — +400 KBs) and rendering (+250 ms)
- **▲ Perfect for SSR** — data fetching & React components are modularized, in order to leverage things like Next.js' getStaticProps or Server-side Components
- **📦 Ready Out-of-the-box** — use pre-built React components to instantly optimize your site
- **✨ Fully Headless & Customizable** — use API to get JSON data for full control on styles & behavior
- **🛡️ Fully Type-Safe & Parsed with Zod** — no unexpected behavior due to runtime type checking
- **🔗 Respects Clutch Analytics** — links have same UTM & other params

## 🔗 Supported Widgets

| ID | Name | API | React Component | Image |
|-----|-----|------|-----------------|-------|
| 2 | Badge | ✅ | ✅ | ![](https://github.com/konhi/react-static-clutch-embed/assets/61631665/01e68bc1-d6e1-45fa-9d2c-bdec05335568) |
| 8 | Customer Reviews | ✅ | ✅ | ![](https://github.com/konhi/react-static-clutch-embed/assets/61631665/ed718776-9dc6-441a-9f56-7550c88001cc) |

## ❤️ Install
```
npm install react-static-clutch-embed static-clutch-embed
pnpm install react-static-clutch-embed static-clutch-embed
yarn install react-static-clutch-embed static-clutch-embed
```

## 📦 Packages 
| 📦 Package | 🌎 Environment | ? Description |
|----------|----------|--------------|
| [static-clutch-embed](https://www.npmjs.com/package/static-clutch-embed) | Node.js | API for widgets |
| [react-static-clutch-embed](https://www.npmjs.com/package/react-static-clutch-embed) | Browser | Pre-built React Components for widgets |

## 🤖 Example Uses

### ▲ Next.js with pre-made component and server-side fetching

👉 See the [working example.](https://react-static-clutch-embed-web.vercel.app/)

```tsx
import type { InferGetStaticPropsType } from "next/types";

import { getReviewsData, getBadgeData } from "static-clutch-embed";
import { ClutchBadge, ClutchReviews } from "react-static-clutch-embed";

/* Import styles for pre-made components */
import "react-static-clutch-embed/styles/reviews.css";
import "react-static-clutch-embed/styles/badge.css";

export default function Page({
  customerReviewsData,
  badgeData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  /* Use pre-made components for out-of-the-box widgets embeding, just like iframe from clutch.co */

  return (
    <>
      Reviews
      <ClutchReviews data={customerReviewsData} />
      Badge
      <ClutchBadge data={badgeData} />
    </>
  );
}

/* Fetch data on server side in order to render components statically */
export const getStaticProps = async () => {
  /* You can extract these from URL, in this case from: https://widget.clutch.co/widgets/get/8?ref_domain=appunite.com&uid=33218&ref_path=/ */
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
```

## ⭐️ Usage

### static-clutch-embed
#### interface WidgetParams
```ts
import type { WidgetParams } from "static-clutch-embed";

// You can extract these from URL, in this case from: https://widget.clutch.co/widgets/get/8?ref_domain=appunite.com&uid=33218&ref_path=/
const widgetParams: WidgetParams = {
 uid: 33218,
 ref_path: "/",
 ref_domain: "appunite.com",
};
```
#### const getReviewsData: (params: WidgetParams) => Promise<ReviewsWidgetData>

```ts
import { getReviewsData } from "static-clutch-embed";

const customerReviewsData = await getReviewsData(widgetParams);

/*
{
  company: {
    name: 'AppUnite',
    rating: 4.9,
    reviewsCount: 15,
    links: {
      title: 'https://clutch.co/profile/appunite?utm_source=widget&utm_medium=8&utm_campaign=widget&utm_content=title&utm_term=appunite.com#summary',
      logo: 'https://clutch.co/profile/appunite?utm_source=widget&utm_medium=3&utm_campaign=widget&utm_content=stars&utm_term=appunite.com#logo',
      stars: 'https://clutch.co/profile/appunite?utm_source=widget&utm_medium=8&utm_campaign=widget&utm_content=stars&utm_term=appunite.com#reviews',
      reviewsCount: 'https://clutch.co/profile/appunite?utm_source=widget&utm_medium=8&utm_campaign=widget&utm_content=num_reviews&utm_term=appunite.com#reviews'
    }
  },
  reviews: [
    {
      id: 1999329,
      rating: 5,
      text: "This was a very fruitful collaboration that we're fully satisfied with.",
      author: 'Director of Engineering, Contractbook',
      link: 'https://clutch.co/profile/appunite?utm_source=widget&utm_medium=8&utm_campaign=widget&utm_content=testimonial&utm_term=appunite.com#reviews#review-1999329'
    },
    {
      id: 1574954,
      rating: 5,
      text: 'They’re a team of very intelligent engineers.',
      author: 'CEO, Bamboo',
      link: 'https://clutch.co/profile/appunite?utm_source=widget&utm_medium=8&utm_campaign=widget&utm_content=testimonial&utm_term=appunite.com#reviews#review-1574954'
    },
    {
      id: 1503564,
      rating: 5,
      text: 'No complaints, we loved working with AppUnite 100%.',
      author: 'CEO, Solo ',
      link: 'https://clutch.co/profile/appunite?utm_source=widget&utm_medium=8&utm_campaign=widget&utm_content=testimonial&utm_term=appunite.com#reviews#review-1503564'
    },
    {
      id: 1113680,
      rating: 5,
      text: 'I needed smart people who cared about what we were doing, and they delivered.',
      author: 'CTO, Halftone Design',
      link: 'https://clutch.co/profile/appunite?utm_source=widget&utm_medium=8&utm_campaign=widget&utm_content=testimonial&utm_term=appunite.com#reviews#review-1113680'
    },
    {
      id: 1052297,
      rating: 5,
      text: 'Everything AppUnite does is gold.',
      author: 'CEO, Yogatrail',
      link: 'https://clutch.co/profile/appunite?utm_source=widget&utm_medium=8&utm_campaign=widget&utm_content=testimonial&utm_term=appunite.com#reviews#review-1052297'
    },
    {
      id: 951374,
      rating: 4,
      text: 'The team was open about everything. We could always have honest conversations with them.',
      author: 'CTO, ASSISTME',
      link: 'https://clutch.co/profile/appunite?utm_source=widget&utm_medium=8&utm_campaign=widget&utm_content=testimonial&utm_term=appunite.com#reviews#review-951374'
    }
  ]
}
*/
```

#### const getBadgeData: (params: WidgetParams) => Promise<BadgeWidgetData>
```ts
import { getBadgeData } from "static-clutch-embed";

const badgeData = await getBadgeData(widgetParams);

/*
{
  rating: 4.9,
  reviewsCount: 15,
  links: {
    stars: 'https://clutch.co/profile/appunite?utm_source=widget&utm_medium=2&utm_campaign=widget&utm_content=stars&utm_term=appunite.com#reviews',
    logo: 'https://clutch.co/profile/appunite?utm_source=widget&utm_medium=2&utm_campaign=widget&utm_content=logo&utm_term=appunite.com',
    reviewsCount: 'https://clutch.co/profile/appunite?utm_source=widget&utm_medium=2&utm_campaign=widget&utm_content=num_reviews&utm_term=appunite.com#reviews'
  }
}
*/
```

### react-static-clutch-embed

```tsx
import { ClutchBadge, ClutchReviews } from "react-static-clutch-embed";

import "react-static-clutch-embed/styles/reviews.css";
import "react-static-clutch-embed/styles/badge.css";

<ClutchReviews data={customerReviewsData} />
<ClutchBadge data={badgeData} />
```

## 📜 License

- Distributed under the MIT License. See [`LICENSE.txt`](https://github.com/konhi/react-static-clutch-embed/blob/main/LICENSE) for more information.
