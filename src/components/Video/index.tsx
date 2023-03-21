import LinkWrapper from "@/components/LinkWrapper";
import styles from "./styles.module.scss";

type VideoProps = {};

const Video: React.FC<VideoProps> = () => {
  return (
    <div className={styles.Container}>
      <LinkWrapper href="/video" linkProps={{ className: styles.Video }}>
        <span className="caps">▶</span>
      </LinkWrapper>
    </div>
  );
};

export default Video;
