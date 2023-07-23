import { useEffect } from "react";
import Link from "next/link";
import { useCountdown } from "usehooks-ts";
import { useVideo, videos } from "@/context/VideoIndexContextProvider";
import styles from "./styles.module.scss";

type VideoLayoutProps = {
  header: React.ReactNode;
};

const VideoLayout: React.FC<VideoLayoutProps> = ({ header }) => {
  const { videoIndex, setVideoIndex } = useVideo();
  const [count, { startCountdown, resetCountdown }] = useCountdown({
    countStart: 2,
    intervalMs: 1000,
  });

  const hideUi = count === 0;

  useEffect(() => {
    startCountdown();
  });

  const resetFadeout = () => {
    resetCountdown();
  };

  return (
    <main
      className={styles.Container}
      onTouchStart={resetFadeout}
      onTouchMove={resetFadeout}
      onMouseMove={resetFadeout}
      onMouseDown={resetFadeout}
      data-hide-ui={hideUi}
    >
      <div className={styles.Header}>{header}</div>
      <div className={styles.Menu}>
        <div className={styles.VideoLinks} suppressHydrationWarning>
          {videos.map((video, index) => (
            <Link
              key={video.name}
              className={styles.VideoLink}
              data-active={index === videoIndex}
              href={`/video?v=${index}`}
              onClick={(event) => {
                event.preventDefault();
                setVideoIndex(index);
              }}
            >
              {video.name}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default VideoLayout;
