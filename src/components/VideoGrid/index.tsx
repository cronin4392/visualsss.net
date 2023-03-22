import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import content, {
  Youtube as YoutubeType,
  Video as VideoType,
} from "@/data/videos";
import Video from "@/components/Video";
import LinkWrapper from "@/components/LinkWrapper";
import styles from "./styles.module.scss";

const Content = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <div className={styles.Videos}>
      {content.map((video) => (
        <VideoContent
          {...video}
          playingId={playingId}
          setPlayingId={setPlayingId}
          key={video.id}
        />
      ))}
    </div>
  );
};

const VideoContent: React.FC<
  (VideoType | YoutubeType) & {
    playingId: string | null;
    setPlayingId: Dispatch<SetStateAction<string | null>>;
  }
> = (video) => {
  const { id, caption, date, size, playingId, setPlayingId } = video;

  const [scrollRef, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (!inView) {
      if (playingId === id) {
        setPlayingId(null);
      }
    }
  }, [inView, playingId, id, setPlayingId]);

  return (
    <LinkWrapper
      linkProps={{
        className: styles.Video,
        ref: scrollRef,
        ["data-size"]: size,
      }}
      href={`/content/${id}`}
    >
      <Video video={video} playing={inView} muted={playingId !== id} />
      <div className={styles.Text}>
        <span>{caption}</span>
        <span>{date}</span>
      </div>
    </LinkWrapper>
  );
};

export default Content;
