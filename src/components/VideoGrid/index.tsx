import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import content, {
  Youtube as YoutubeType,
  Video as VideoType,
} from "@/data/videos";
import Video from "@/components/Video";
import styles from "./styles.module.scss";

const Content = () => {
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <div className={styles.Videos}>
      {content.map((video) => (
        <VideoContent
          {...video}
          playing={playing}
          setPlaying={setPlaying}
          key={video.id}
        />
      ))}
    </div>
  );
};

const VideoContent: React.FC<
  (VideoType | YoutubeType) & {
    playing: string | null;
    setPlaying: Dispatch<SetStateAction<string | null>>;
  }
> = (video) => {
  const { id, caption, date, size, playing, setPlaying } = video;

  const [scrollRef, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (!inView) {
      if (playing === id) {
        setPlaying(null);
      }
    }
  }, [inView, playing, id, setPlaying]);

  return (
    <div
      className={styles.Video}
      onClick={() => {
        setPlaying(id !== playing ? id : null);
      }}
      data-size={size}
      ref={scrollRef}
    >
      <Video video={video} playing={inView} muted={playing !== id} />
      <div className={styles.Text}>
        <span>{caption}</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default Content;
