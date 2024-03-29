import { useRef, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { scale } from "@/utils/math";
import { useVideo } from "@/context/VideoIndexContextProvider";
import styles from "./styles.module.scss";

const ReactHlsPlayer = dynamic(() => import("react-hls-player"), {
  ssr: false,
});

type BackgroundProps = {};

const Background: React.FC<BackgroundProps> = () => {
  const router = useRouter();
  const { video } = useVideo();
  const [loading, setLoading] = useState(true);
  const playerRef = useRef<HTMLVideoElement | null>(null);
  const videoFaded = !["/video"].includes(router.asPath);

  return (
    <div className={styles.Container} data-loading={loading}>
      <div className={styles.VideoContainer} data-video-faded={videoFaded}>
        <ReactHlsPlayer
          className={styles.Video}
          playerRef={playerRef}
          src={video.url}
          autoPlay={true}
          controls={false}
          muted={true}
          loop={true}
          playsInline={true}
          onLoadStart={() => {
            setLoading(true);
          }}
          onPlaying={() => {
            setLoading(false);
          }}
          onLoadedMetadata={(_event) => {
            if (playerRef.current) {
              const video = playerRef.current;
              const { duration } = video;
              const randomTime = scale(Math.random(), 0, 1, 0, duration);
              video.currentTime = randomTime;
            }
          }}
        />
      </div>
      <div className={styles.LoadingContainer}>
        <div className={styles.Loading}></div>
      </div>
    </div>
  );
};

export default Background;
