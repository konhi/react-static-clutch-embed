<div align="center">

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

| Name | API | React Component | Image |
|-----|------|-----------------|-------|
| Customer Reviews | ✅ | ✅ | ![](https://github.com/konhi/react-static-clutch-embed/assets/61631665/ed718776-9dc6-441a-9f56-7550c88001cc) |
| Badge | ✅ | ✅ | ![](https://github.com/konhi/react-static-clutch-embed/assets/61631665/01e68bc1-d6e1-45fa-9d2c-bdec05335568) |

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

## 📜 License

- Distributed under the MIT License. See [`LICENSE.txt`](https://github.com/konhi/react-static-clutch-embed/blob/main/LICENSE) for more information.
