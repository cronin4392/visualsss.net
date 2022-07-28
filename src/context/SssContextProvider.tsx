import { createContext, useContext } from "react";
import { noop } from "@/utils/noop";

export type SssContextType = {
  sss: boolean;
  setSss: (value: boolean) => void;
};

export const SssContext = createContext<SssContextType>({
  sss: false,
  setSss: (_value) => noop,
});

export const useSssState = (): SssContextType => useContext(SssContext);
