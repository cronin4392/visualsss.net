import { createContext, useContext } from "react";

type FirstLoadContextType = {
  firstLoad: boolean;
};

export const FirstLoadContext = createContext<FirstLoadContextType>({
  firstLoad: false,
});

export const useFirstLoadState = (): FirstLoadContextType =>
  useContext(FirstLoadContext);
