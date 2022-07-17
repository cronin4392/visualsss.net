import { ReactNode } from "react";
import { AppProps } from "next/app";

import "./_app.scss";

function App({ Component, pageProps }: AppProps): ReactNode {
  return <Component {...pageProps} />;
}

export default App;
