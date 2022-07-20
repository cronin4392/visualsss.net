import React from "react";

export const getFontSize = (
  ref: React.MutableRefObject<any>
): number | null => {
  if (typeof window === "undefined" || !ref.current) {
    return null;
  }
  return parseInt(
    window.getComputedStyle(ref.current).getPropertyValue("font-size")
  );
};

export const getLineCount = (
  height: number,
  fontSize: number | null
): number => {
  if (!fontSize) {
    return 1;
  }
  return Math.ceil(height / fontSize);
};
