import { Video, Youtube } from "@/data/videos";
import { useState } from "react";
import styles from "./styles.module.scss";

type VideoDetailProps = {
  video: Youtube | Video;
};

const VideoDetail: React.FC<VideoDetailProps> = ({ video }) => {
  return (
    <div className={styles.Container}>
      <div>
        <VideoPlayer {...video} />
      </div>
      <div className={styles.Text}>
        <h1>{video.caption}</h1>
        <p>{video.date}</p>
      </div>
    </div>
  );
};

const VideoPlayer: React.FC<Video | Youtube> = (video) => {
  if (video.__type === "youtube") {
    return <Youtube {...video} />;
  }
  return <Video {...video} />;
};

const Video: React.FC<Video> = ({ id, file, caption, date, size }) => {
  const [muted, setMuted] = useState(false);

  return (
    <div
      onClick={() => {
        setMuted(!muted);
      }}
    >
      <div className={styles.Video}>
        <video muted={muted} loop playsInline autoPlay controls>
          <source src={file} type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
};

const Youtube: React.FC<Youtube> = ({ id, caption, date, size }) => {
  return (
    <div>
      <div className={styles.IFrame}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube-nocookie.com/embed/${id}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoDetail;
