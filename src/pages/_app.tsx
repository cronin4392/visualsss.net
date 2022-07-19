import { ReactNode } from "react";
import { AppProps } from "next/app";
import Background from "@/components/Background";

import "./_app.scss";

function App({ Component, pageProps }: AppProps): ReactNode {
  return (
    <>
      <Component {...pageProps} />
      <Background />
    </>
  );
}

export default App;
