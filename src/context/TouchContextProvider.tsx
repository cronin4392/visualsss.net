import { createContext, useContext } from "react";
import { noop } from "@/utils/noop";

type TouchContextType = {
  warning: number;
  setWarning: (value: number) => void;
  showWarning: boolean;
  setShowWarning: (value: boolean) => void;
};

export const TouchContext = createContext<TouchContextType>({
  warning: -1,
  setWarning: (_value) => noop,
  showWarning: false,
  setShowWarning: (_value) => noop,
});

export const useTouchContext = (): TouchContextType => useContext(TouchContext);
