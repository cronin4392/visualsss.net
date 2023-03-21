import { useEffect, useRef } from "react";
import type { Youtube, Video as VideoType } from "@/data/videos";
import styles from "./styles.module.scss";

type VideoProps = { video: Youtube | VideoType } & VideoElProps;

type VideoElProps = {
  muted?: boolean;
  playing?: boolean;
};

const Video: React.FC<VideoProps> = ({ video, muted, playing }) => {
  return (
    <div className={styles.Container}>
      {video.__type === "youtube" ? (
        <Youtube {...video} />
      ) : (
        <VideoElement {...video} muted={muted} playing={playing} />
      )}
    </div>
  );
};

const Youtube: React.FC<Youtube> = ({ id, size }) => {
  return (
    <div className={styles.YoutubeContainer} data-size={size}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

const VideoElement: React.FC<VideoType & VideoElProps> = ({
  file,
  muted,
  size,
  playing,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Mute video
  useEffect(() => {
    if (videoRef.current && muted !== undefined) {
      videoRef.current.muted = muted;
    }
  }, [muted]);

  // Play/Pause video
  useEffect(() => {
    if (videoRef.current && playing !== undefined) {
      if (playing) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [playing]);

  return (
    <div className={styles.VideoContainer} data-size={size}>
      <video muted={muted} loop playsInline ref={videoRef}>
        <source src={file} type="video/mp4"></source>
      </video>
    </div>
  );
};

export default Video;
