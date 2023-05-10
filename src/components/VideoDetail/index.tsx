import { useRef, useState } from "react";
import type { Video as VideoType, Youtube as YoutubeType } from "@/data/videos";
import Video from "@/components/Video";
import { useFirstLoadState } from "@/context/FirstLoadContextProvider";
import styles from "./styles.module.scss";

type VideoDetailProps = {
  video: YoutubeType | VideoType;
};

const VideoDetail: React.FC<VideoDetailProps> = ({ video }) => {
  const { firstLoad } = useFirstLoadState();

  return (
    <div className={styles.Container} data-size={video.size}>
      <div>
        <Video video={video} audioOn={!firstLoad} controls={true} />
      </div>
      <div className={styles.Text}>
        <div>
          <h1>{video.caption}</h1>
          <p>{video.date}</p>
        </div>
        <div
          className={styles.Description}
          dangerouslySetInnerHTML={{ __html: video.description }}
        />
      </div>
    </div>
  );
};

export default VideoDetail;
