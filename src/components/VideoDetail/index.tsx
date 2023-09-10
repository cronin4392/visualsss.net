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

  return (
    <div className={styles.Container} data-size={video.size}>
      <div className={styles.Video}>
        <Video video={video} audioOn={false} controls={true} />
      </div>
      <div className={styles.Info}>
        <div className={styles.Title}>
          <h1>{video.caption}</h1>
          <p>{video.date}</p>
        </div>
        <div className={styles.Details}>
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
                <Video video={v} playing={true} audioOn={false} />
                <div className={styles.PlayIcon}>
                  <IoMdPlay />
                </div>
              </LinkWrapper>
            ))}
          </div>
          <div
            className={styles.Description}
            dangerouslySetInnerHTML={{ __html: video.description }}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
