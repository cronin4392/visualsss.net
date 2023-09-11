import { IoMdPlay } from "react-icons/io";
import type { Video as VideoType, Youtube as YoutubeType } from "@/data/videos";
import { useFirstLoadState } from "@/context/FirstLoadContextProvider";
import Video from "@/components/Video";
import LinkWrapper from "@/components/LinkWrapper";
import styles from "./styles.module.scss";

type VideoDetailProps = {
  video: YoutubeType | VideoType;
  projectVideos: Array<VideoType>;
};

const VideoDetail: React.FC<VideoDetailProps> = ({ video, projectVideos }) => {
  const { firstLoad } = useFirstLoadState();
  const hasProjectVideos = projectVideos.length > 0;

  return (
    <div
      className={styles.Container}
      data-size={video.size}
      data-has-project-videos={hasProjectVideos}
    >
      <div className={styles.Video}>
        <Video video={video} audioOn={false} controls={true} />
      </div>
      <div className={styles.Title}>
        <h1>{video.caption}</h1>
        <p>{video.date}</p>
      </div>
      {hasProjectVideos && (
        <div className={styles.ProjectVideos}>
          {projectVideos.map((v) => (
            <LinkWrapper
              key={v.id}
              linkProps={{
                className: styles.ProjectVideo,
                scroll: false,
                replace: true,
              }}
              href={`/content/${v.id}`}
            >
              <Video
                videoClassname={styles.ProjectVideoElement}
                video={v}
                playing={true}
                audioOn={false}
              />
              <div className={styles.PlayIcon}>
                <IoMdPlay />
              </div>
            </LinkWrapper>
          ))}
        </div>
      )}
      <div
        className={styles.Description}
        dangerouslySetInnerHTML={{ __html: video.description }}
      />
    </div>
  );
};

export default VideoDetail;
