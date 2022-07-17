import { ParsedUrlQuery } from 'querystring';

export const getParam = (
  params: ParsedUrlQuery | undefined,
  key: string,
  index = 0
): string | null => {
  if (params) {
    const param = params[key];
    if (param !== undefined) {
      if (Array.isArray(param)) {
        return param[index];
      }
      return param;
    }
  }
  return null;
};

export const isLocalUrl = (url: string): boolean => url.slice(0, 1) === '/';
