import { useVideo, videos } from "@/context/VideoIndexContextProvider";
import styles from "./styles.module.scss";

type VideoLayoutProps = {
  header: React.ReactNode;
};

const VideoLayout: React.FC<VideoLayoutProps> = ({ header }) => {
  const { video, videoIndex, setVideoIndex } = useVideo();

  return (
    <main className={styles.Container}>
      <div className={styles.Header}>{header}</div>
      <div className={styles.Menu}>
        <div className={styles.VideoLinks}>
          {videos.map((video, index) => (
            <button
              key={video.name}
              className={styles.VideoLink}
              data-active={index === videoIndex}
              onClick={() => {
                setVideoIndex(index);
              }}
            >
              {video.name}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
};

export default VideoLayout;
