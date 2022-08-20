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

  useEffect(() => {
    if (!sss) {
      return;
    }
    window.open("https://www.visualsssssssss.net/?sssecret=visualsssssssss");
    // fetch("/api/sss").then(async (response) => {
    //   const data = await response.json();
    //   if (data.redirect) {
    //     window.open(data.redirect);
    //     setSss(false);
    //   }
    // });
  }, [sss]);

  return (
    <SssContext.Provider value={{ sss, setSss, sClicks, setSClicks }}>
      <VideoIndexContext.Provider value={{ videoIndex, setVideoIndex }}>
        <Component {...pageProps} />
        <Background />
      </VideoIndexContext.Provider>
    </SssContext.Provider>
  );
}

export default App;
