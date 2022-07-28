import { ReactNode, useEffect, useState } from "react";
import { AppProps } from "next/app";
import Background from "@/components/Background";
import { SssContext } from "@/context/SssContextProvider";

import "./_app.scss";

function App({ Component, pageProps }: AppProps): ReactNode {
  const [sss, setSss] = useState(false);

  useEffect(() => {
    if (!sss) {
      return;
    }
    fetch("/api/sss").then(async (response) => {
      const data = await response.json();
      if (data.redirect) {
        window.open(data.redirect);
        setSss(false);
      }
    });
  }, [sss]);

  return (
    <SssContext.Provider value={{ sss, setSss }}>
      <Component {...pageProps} />
      <Background />
    </SssContext.Provider>
  );
}

export default App;
