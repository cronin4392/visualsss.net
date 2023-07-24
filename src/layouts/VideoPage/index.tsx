import { useEffect } from "react";
import Link from "next/link";
import { useCountdown } from "usehooks-ts";
import { useVideo, videos } from "@/context/VideoIndexContextProvider";
import Header from "@/components/Header";
import styles from "./styles.module.scss";

const VideoPage: React.FC = () => {
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
      <div className={styles.Header}>
        <Header subLine="visssualizer" />
      </div>
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
              {video.name}{" "}
              <span className={styles.VideoLinkType}>
                &#x5b;{video.type}&#x5d;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default VideoPage;
