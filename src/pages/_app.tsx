import { ReactNode, useEffect, useState } from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";
import { useRandomInt } from "@/hooks/useRandomItem";
import { SssContext } from "@/context/SssContextProvider";
import { FirstLoadContext } from "@/context/FirstLoadContextProvider";
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
  const [firstLoad, setFirstLoad] = useState(true);

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
      setFirstLoad(false);
      setShowWarning(false);

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
    <>
      {process.env.NODE_ENV === "production" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          />
          <Script id="google-analytics">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
          </Script>
        </>
      )}
      <FirstLoadContext.Provider value={{ firstLoad }}>
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
      </FirstLoadContext.Provider>
    </>
  );
}

export default App;
