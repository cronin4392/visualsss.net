import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./styles.module.scss";

type Video = {
  __type: "video";
  file: string;
  caption: string;
  date: string;
  size?: "tall" | "wide";
};

type Youtube = {
  __type: "youtube";
  id: string;
  caption: string;
  date: string;
  size?: "tall" | "wide";
};

const newVideo = (
  relFile: string,
  caption: string,
  date: string,
  options?: { size?: "tall" | "wide" }
): Video => {
  const useAws = false;
  const baseUrl = useAws
    ? "https://visualsssssssss-site.s3.amazonaws.com/content/social-50mb-720p/"
    : "/videos/";

  const file = `${baseUrl}${relFile}`;

  return { __type: "video", file, caption, date, size: options?.size };
};

const newYoutube = (
  id: string,
  caption: string,
  date: string,
  options?: { size?: "tall" | "wide" }
): Youtube => {
  return { __type: "youtube", id, caption, date, size: options?.size };
};

const content: Array<Video | Youtube> = [
  newVideo("IMG_1242.mp4", "Elements", "Feb 2023", {
    size: "wide",
  }),
  newVideo("IMG_1244.mp4", "Elements", "Feb 2023"),
  newVideo("IMG_1222.mp4", "Infra x Av_rsion", "Feb 2023"),
  newVideo("IMG_1168.mp4", "Flavours Above Ground", "Nov 2022", {
    size: "tall",
  }),
  newVideo("IMG_0885.mp4", "Flavours Above Ground", "Nov 2022"),
  newVideo("IMG_0771.mp4", "Paplin Presents", "Oct 2022"),
  newVideo("IMG_0534.mp4", "Fraktal Fest", "Aug 2022", {
    size: "tall",
  }),
  newVideo("IMG_0262.mp4", "Elements", "Jul 2022"),
  newVideo("IMG_9810.mp4", "Elements", "Apr 2022"),
  newVideo("IMG_9544.mp4", "AFH x Kitauna Parker", "Mar 2022", {
    size: "wide",
  }),
  newYoutube("JbCZ4dFoG5s", "Sound Boy Ent", "Feb 2022", {
    size: "wide",
  }),
  newVideo("IMG_8838.mp4", "House", "Oct 2021"),
  newVideo("IMG_8885.mp4", "House", "Oct 2021"),
  newVideo("IMG_8886.mp4", "House", "Oct 2021"),
  newVideo("IMG_8578.mp4", "AFH Nokia Snake", "Sep 2021", {
    size: "tall",
  }),
  newVideo("IMG_8576.mp4", "AFH Nokia Snake", "Sep 2021", {
    size: "tall",
  }),
  newYoutube("TeHW-T7uc4Q", "Sound Boy Ent", "Jun 2020", {
    size: "wide",
  }),
];

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
