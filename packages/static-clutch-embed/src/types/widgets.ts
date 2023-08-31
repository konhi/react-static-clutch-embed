/**
 * @example
 * // You can extract these from URL, in this case from: https://widget.clutch.co/widgets/get/8?ref_domain=appunite.com&uid=33218&ref_path=/
 const widgetParams: WidgetParams = {
    uid: 33218,
    ref_path: "/",
    ref_domain: "appunite.com",
  };
 */
export interface WidgetParams {
  uid: number;
  ref_domain: string;
  ref_path: string;
}
