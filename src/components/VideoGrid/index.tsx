import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import content, {
  Youtube as YoutubeType,
  Video as VideoType,
  Instagram as InstagramType,
} from "@/data/videos";
import Video from "@/components/Video";
import LinkWrapper from "@/components/LinkWrapper";
import styles from "./styles.module.scss";

// https://naver.github.io/egjs-infinitegrid/

const Content = () => {
  const [unmutedId, setUnmutedId] = useState<string | null>(null);

  return (
    <div className={styles.Videos}>
      {content.map((video, index) => (
        <VideoContent
          {...video}
          unmutedId={unmutedId}
          setUnmutedId={setUnmutedId}
          key={`${video.id}-${index}`}
        />
      ))}
    </div>
  );
};

const VideoContent: React.FC<
  (VideoType | YoutubeType | InstagramType) & {
    unmutedId: string | null;
    setUnmutedId: Dispatch<SetStateAction<string | null>>;
  }
> = (video) => {
  const { id, size, unmutedId, setUnmutedId } = video;

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

  if (video.__type === "instagram") {
    return (
      <div className={styles.Video} data-size={size}>
        <Video video={video} />
      </div>
    );
  }

  const { caption, date } = video;

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
