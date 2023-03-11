import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { content } from "@/content/content";
import type { Video, Youtube } from "@/content/content";
import styles from "./styles.module.scss";

const VideoList = () => {
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <div className={styles.Videos}>
      {content.map((video) =>
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
> = ({ id, file, caption, date, size, playing, setPlaying }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const muted = playing !== file;

  const [scrollRef, inView] = useInView({
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
    <Link
      href={`/content/${id}`}
      className={styles.Container}
      data-size={size}
      ref={scrollRef}
    >
      <div className={styles.Video}>
        <video muted={muted} loop playsInline ref={videoRef}>
          <source src={file} type="video/mp4"></source>
        </video>
        <button
          type="button"
          onClick={() => {
            setPlaying(file !== playing ? file : null);
          }}
        >
          Volume
        </button>
      </div>
      <div className={styles.Text}>
        <span>{caption}</span>
        <span>{date}</span>
      </div>
    </Link>
  );
};

const Youtube: React.FC<Youtube> = ({ video_id, caption, date, size }) => {
  return (
    <div className={styles.Container} data-size={size}>
      <div className={styles.IFrame}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube-nocookie.com/embed/${video_id}`}
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

export default VideoList;
