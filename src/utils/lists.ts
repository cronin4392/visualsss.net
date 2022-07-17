import { Maybe } from "@/utils/types";

export function removeDuplicates<T, K extends keyof T>(
  baseItems: Array<T>,
  additionalItems: Array<T>,
  key: K
): Array<T> {
  const baseKeys = baseItems.map((item) => item[key]);
  const filteredItems = additionalItems.filter(
    (item) => baseKeys.indexOf(item[key]) < 0
  );
  return [...baseItems, ...filteredItems];
}

export function removeNulls<T>(list: Array<Maybe<T>>): Array<T> {
  return list.reduce<Array<T>>(
    (acc, item) => (item ? [...acc, item] : acc),
    []
  );
}

export function objectToArray(object: Record<string, unknown>): Array<string> {
  return Object.keys(object).map((key) => key);
}
