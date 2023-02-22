import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

type Video = {
  file: string;
  caption: string;
  date: string;
};

const newVideo = (relFile: string, caption: string, date: string): Video => {
  const useAws = true;
  const baseUrl = useAws
    ? "https://visualsssssssss-site.s3.amazonaws.com/content/social-50mb-720p/"
    : "/videos/";

  const file = `${baseUrl}${relFile}`;

  return { file, caption, date };
};

const videos = [
  newVideo("IMG_1242.mp4", "Elements", "Feb 2023"),
  newVideo("IMG_1244.mp4", "Elements", "Feb 2023"),
  newVideo("IMG_1222.mp4", "Infra x Av_rsion", "Feb 2023"),
  newVideo("IMG_1168.mp4", "Flavours Above Ground", "Nov 2022"),
  newVideo("IMG_0885.mp4", "Flavours Above Ground", "Nov 2022"),
  newVideo("IMG_0771.mp4", "Paplin Presents", "Oct 2022"),
  newVideo("IMG_0262.mp4", "Elements", "Jul 2020"),
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
> = ({ file, caption, date, playing, setPlaying }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const muted = playing !== file;

  useEffect(() => {
    if (videoRef.current) {
      console.log("muted", muted);
      videoRef.current.muted = muted;
    }
  }, [muted]);

  return (
    <div
      className={styles.Video}
      onClick={() => {
        setPlaying(file !== playing ? file : null);
      }}
    >
      <video autoPlay muted={false} loop playsInline ref={videoRef}>
        <source src={file} type="video/mp4"></source>
      </video>
      <div className={styles.Text}>
        <span>{caption}</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default Videos;
