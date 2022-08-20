import { createContext, useContext } from "react";
import { noop } from "@/utils/noop";

type SssContextType = {
  sss: boolean;
  setSss: (value: boolean) => void;
  sClicks: number;
  setSClicks: (value: number) => void;
};

export const SssContext = createContext<SssContextType>({
  sss: false,
  setSss: (_value) => noop,
  sClicks: 0,
  setSClicks: (_value) => noop,
});

export const useSssState = (): SssContextType => useContext(SssContext);
