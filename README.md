<div align="center">

<br>
<h1 align="center">▲ React Static Clutch Embed </h1>

  <p align="center">
      <b>Save +400 KBs (network) & +250 ms (rendering) while embeding Clutch.co widgets.</b>
    <br>
    <br>
    <a href="#-lets-talk">💬 Let's talk</a>
    ·
    <a href="https://github.com/konhi/poland-public-transport-api/blob/main/CONTRIBUTING.MD">🖥 Contribute & Use</a>
    ·
    <a href="https://github.com/konhi/poland-public-transport-api/issues">✨ Request Feature</a>
  </p>
</div>

## 🤖 Example Uses

### ▲ Next.js with pre-made component and server-side fetching

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
