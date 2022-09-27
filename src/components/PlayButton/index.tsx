import LinkWrapper from "@/components/LinkWrapper";
import styles from "./styles.module.scss";

type PlayButtonProps = {};

const PlayButton: React.FC<PlayButtonProps> = () => {
  return (
    <div className={styles.Container}>
      <LinkWrapper
        href="/video"
        linkProps={{ className: styles.PlayButton }}
      >
        <span className="caps">▶</span>
      </LinkWrapper>
    </div>
  );
};

export default PlayButton;
