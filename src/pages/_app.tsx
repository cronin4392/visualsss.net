import { ReactNode, useEffect, useState } from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useRandomInt } from "@/hooks/useRandomItem";
import { SssContext } from "@/context/SssContextProvider";
import { TouchContext } from "@/context/TouchContextProvider";
import { VideoIndexContext, videos } from "@/context/VideoIndexContextProvider";
import Background from "@/components/Background";
import TouchWrapper from "@/components/TouchWrapper";
import "./_app.scss";

function App({ Component, pageProps }: AppProps): ReactNode {
  const router = useRouter();
  const [sss, setSss] = useState(false);
  const [sClicks, setSClicks] = useState(0);
  const [videoIndex, setVideoIndex] = useState(useRandomInt(videos.length));
  const [warning, setWarning] = useState(-1);
  const [showWarning, setShowWarning] = useState(false);
  const [warningTimeout, setWarningTimeout] = useState<NodeJS.Timeout | null>();

  useEffect(() => {
    if (showWarning && !warningTimeout) {
      const timeout = setTimeout(() => {
        setShowWarning(false);
        setWarningTimeout(null);
      }, 3000);

      setWarningTimeout(timeout);
    }
  }, [showWarning, setShowWarning, warningTimeout]);

  useEffect(() => {
    if (sClicks === 6) {
      setSss(true);
    }
  }, [sClicks, setSss, router]);

  useEffect(() => {
    const onRouteChange = (url: string) => {
      if (url === "/" && sClicks === 6) {
        setSClicks(0);
      }
    };
    router.events.on("routeChangeStart", onRouteChange);

    return () => {
      router.events.off("routeChangeStart", onRouteChange);
    };
  }, [router]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <SssContext.Provider
      value={{ sss, setSss, sClicks, setSClicks, sLink: null }}
    >
      <VideoIndexContext.Provider value={{ videoIndex, setVideoIndex }}>
        <TouchContext.Provider
          value={{ warning, setWarning, showWarning, setShowWarning }}
        >
          <TouchWrapper>
            <Component {...pageProps} />
            <Background />
          </TouchWrapper>
        </TouchContext.Provider>
      </VideoIndexContext.Provider>
    </SssContext.Provider>
  );
}

export default App;
