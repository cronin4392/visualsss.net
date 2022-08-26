import { ReactNode, useEffect, useState } from "react";
import { AppProps } from "next/app";
import { useRandomInt } from "@/hooks/useRandomItem";
import { SssContext } from "@/context/SssContextProvider";
import { VideoIndexContext, videos } from "@/context/VideoIndexContextProvider";
import Background from "@/components/Background";
import "./_app.scss";

function App({ Component, pageProps }: AppProps): ReactNode {
  const [sss, setSss] = useState(false);
  const [sClicks, setSClicks] = useState(0);
  const [videoIndex, setVideoIndex] = useState(useRandomInt(videos.length));

  useEffect(() => {
    if (sClicks === 6) {
      setSss(true);
    }
  }, [sClicks, setSss]);

  return (
    <SssContext.Provider
      value={{ sss, setSss, sClicks, setSClicks, sLink: null }}
    >
      <VideoIndexContext.Provider value={{ videoIndex, setVideoIndex }}>
        <Component {...pageProps} />
        <Background />
      </VideoIndexContext.Provider>
    </SssContext.Provider>
  );
}

export default App;
