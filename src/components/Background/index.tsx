import { useRef } from "react";
import dynamic from "next/dynamic";
import { scale } from "@/utils/math";
import styles from "./styles.module.scss";

const ReactHlsPlayer = dynamic(() => import("react-hls-player"), {
  ssr: false,
});

type BackgroundProps = {};

const Background: React.FC<BackgroundProps> = () => {
  const playerRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div className={styles.Container}>
      <ReactHlsPlayer
        className={styles.Video}
        playerRef={playerRef}
        src="https://visualsssssssss-site.s3.amazonaws.com/holy-mountain/playlist.m3u8"
        autoPlay={true}
        controls={false}
        muted={true}
        playsInline={true}
        onLoadedMetadata={(event) => {
          if (playerRef.current) {
            const video = playerRef.current;
            const { duration } = video;
            const randomTime = scale(Math.random(), 0, 1, 0, duration);
            video.currentTime = randomTime;
          }
        }}
      />
    </div>
  );
};

export default Background;
