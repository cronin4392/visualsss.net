import React from "react";

export const useRandomInt = (size: number): number => {
  const randomValue = React.useMemo(() => Math.random(), []);
  return Math.floor(randomValue * size);
};
