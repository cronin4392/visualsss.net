import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import content, { Youtube, Video } from "@/data/videos";
import styles from "./styles.module.scss";

const Content = () => {
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <div className={styles.Videos}>
      {content.map((video, index) =>
        video.__type === "video" ? (
          <Video
            {...video}
            playing={playing}
            setPlaying={setPlaying}
            key={video.file}
          />
        ) : (
          <Youtube {...video} key={video.id} />
        )
      )}
    </div>
  );
};

const Video: React.FC<
  Video & {
    playing: string | null;
    setPlaying: Dispatch<SetStateAction<string | null>>;
  }
> = ({ file, caption, date, size, playing, setPlaying }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const muted = playing !== file;

  const [scrollRef, inView, entry] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = muted;
    }
  }, [muted]);

  useEffect(() => {
    if (videoRef.current) {
      if (inView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        if (playing === file) {
          setPlaying(null);
        }
      }
    }
  }, [inView]);

  return (
    <div
      className={styles.Container}
      onClick={() => {
        setPlaying(file !== playing ? file : null);
      }}
      data-size={size}
      ref={scrollRef}
    >
      <div className={styles.Video}>
        <video muted={muted} loop playsInline ref={videoRef}>
          <source src={file} type="video/mp4"></source>
        </video>
      </div>
      <div className={styles.Text}>
        <span>{caption}</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

const Youtube: React.FC<Youtube> = ({ id, caption, date, size }) => {
  return (
    <div className={styles.Container} data-size={size}>
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
      <div className={styles.Text}>
        <span>{caption}</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default Content;
