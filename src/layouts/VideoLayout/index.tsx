import Link from "next/link";
import { useVideo, videos } from "@/context/VideoIndexContextProvider";
import styles from "./styles.module.scss";

type VideoLayoutProps = {
  header: React.ReactNode;
};

const VideoLayout: React.FC<VideoLayoutProps> = ({ header }) => {
  const { videoIndex, setVideoIndex } = useVideo();

  return (
    <main className={styles.Container}>
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
