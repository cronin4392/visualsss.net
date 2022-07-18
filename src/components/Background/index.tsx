import dynamic from "next/dynamic";
import { useRef } from "react";
// import ReactHlsPlayer from "react-hls-player/dist";
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
      />
    </div>
  );
};

export default Background;
