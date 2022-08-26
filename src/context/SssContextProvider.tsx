import { createContext, useContext } from "react";
import { noop } from "@/utils/noop";

type SssContextType = {
  sLink: string | null;
  sss: boolean;
  setSss: (value: boolean) => void;
  sClicks: number;
  setSClicks: (value: number) => void;
};

export const SssContext = createContext<SssContextType>({
  sLink: null,
  sss: false,
  setSss: (_value) => noop,
  sClicks: 0,
  setSClicks: (_value) => noop,
});

export const useSssState = (): SssContextType => useContext(SssContext);
