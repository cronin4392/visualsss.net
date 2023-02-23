import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

type Video = {
  file: string;
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
  const useAws = true;
  const baseUrl = useAws
    ? "https://visualsssssssss-site.s3.amazonaws.com/content/social-50mb-720p/"
    : "/videos/";

  const file = `${baseUrl}${relFile}`;

  return { file, caption, date, size: options?.size };
};

const videos = [
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
  newVideo("IMG_0262.mp4", "Elements", "Jul 2022"),
  newVideo("IMG_9810.mp4", "Elements", "Apr 2022"),
  newVideo("IMG_8838.mp4", "House", "Oct 2021"),
  newVideo("IMG_8885.mp4", "House", "Oct 2021"),
  newVideo("IMG_8886.mp4", "House", "Oct 2021"),
  newVideo("IMG_8578.mp4", "AFH Nokia Snake", "Sep 2021", {
    size: "tall",
  }),
  newVideo("IMG_8576.mp4", "AFH Nokia Snake", "Sep 2021", {
    size: "tall",
  }),
];

const Videos = () => {
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <div className={styles.Videos}>
      {videos.map((video, index) => (
        <Video
          {...video}
          playing={playing}
          setPlaying={setPlaying}
          key={index}
        />
      ))}
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

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = muted;
    }
  }, [muted]);

  return (
    <div
      className={styles.Container}
      onClick={() => {
        setPlaying(file !== playing ? file : null);
      }}
      data-size={size}
    >
      <div className={styles.Video}>
        <video autoPlay muted={muted} loop playsInline ref={videoRef}>
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

export default Videos;
