import { useRef } from "react";
import dynamic from "next/dynamic";
import { scale } from "@/utils/math";
import { useVideo } from "@/context/VideoIndexContextProvider";
import styles from "./styles.module.scss";

const ReactHlsPlayer = dynamic(() => import("react-hls-player"), {
  ssr: false,
});

type BackgroundProps = {};

const Background: React.FC<BackgroundProps> = () => {
  const { video } = useVideo();
  const playerRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div className={styles.Container}>
      <ReactHlsPlayer
        className={styles.Video}
        playerRef={playerRef}
        src={video.url}
        autoPlay={true}
        controls={false}
        muted={true}
        loop={true}
        playsInline={true}
        onLoadedMetadata={(_event) => {
          if (playerRef.current) {
            const video = playerRef.current;
            const { duration } = video;
            const randomTime = scale(Math.random(), 0, 1, 0, duration);
            video.currentTime = randomTime;
          }
        }}
      />
      <div className={styles.LoadingContainer}>
        <div className={styles.Loading}></div>
      </div>
    </div>
  );
};

export default Background;
