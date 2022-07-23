import React from "react";

export const useRandomItem = <T>(array: Array<T>): T => {
  const randomValue = React.useMemo(() => Math.random(), []);
  return array[Math.floor(randomValue * array.length)];
};
