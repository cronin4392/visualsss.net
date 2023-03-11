import { ParsedUrlQuery } from "querystring";

export const getParam = (
  params: ParsedUrlQuery | undefined,
  key: string
): string | null => {
  if (params) {
    const param = params[key];
    if (param !== undefined) {
      if (Array.isArray(param)) {
        return param[0];
      }
      return param;
    }
  }
  return null;
};
