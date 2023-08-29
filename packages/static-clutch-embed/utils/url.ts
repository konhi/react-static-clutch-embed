type ParamsObject = {
  [key: string]: string | number | boolean;
};

export function getUrl(url: string, params: ParamsObject): string {
  const urlObj = new URL(url);

  for (const key in params) {
      urlObj.searchParams.set(key, params[key].toString());
  }

  return urlObj.toString();
}
