import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import content, {
  Youtube as YoutubeType,
  Video as VideoType,
} from "@/data/videos";
import Video from "@/components/Video";
import LinkWrapper from "@/components/LinkWrapper";
import styles from "./styles.module.scss";

// https://naver.github.io/egjs-infinitegrid/

const Content = () => {
  const [unmutedId, setUnmutedId] = useState<string | null>(null);
  const video = content[0];
  return (
    <div className={styles.Videos}>
      {content.map((video) => (
        <VideoContent
          {...video}
          unmutedId={unmutedId}
          setUnmutedId={setUnmutedId}
          key={video.id}
        />
      ))}
    </div>
  );
};

const VideoContent: React.FC<
  (VideoType | YoutubeType) & {
    unmutedId: string | null;
    setUnmutedId: Dispatch<SetStateAction<string | null>>;
  }
> = (video) => {
  const { id, caption, date, size, unmutedId, setUnmutedId } = video;

  const [scrollRef, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (!inView) {
      if (unmutedId === id) {
        setUnmutedId(null);
      }
    }
  }, [inView, unmutedId, id, setUnmutedId]);

  return (
    <LinkWrapper
      linkProps={{
        className: styles.Video,
        ref: scrollRef,
        ["data-size"]: size,
      }}
      href={`/content/${id}`}
    >
      <Video video={video} playing={inView} audioOn={unmutedId === id} />
      <div className={styles.Text}>
        <span className="caps">{caption}</span>
        <span className="caps">{date}</span>
      </div>
    </LinkWrapper>
  );
};

export default Content;
