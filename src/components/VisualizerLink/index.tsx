import LinkWrapper from "@/components/LinkWrapper";
import styles from "./styles.module.scss";

type VisualizerLinkProps = {};

const VisualizerLink: React.FC<VisualizerLinkProps> = () => {
  return (
    <div className={styles.Container}>
      <LinkWrapper
        href="/visualizer"
        linkProps={{ className: styles.PlayButton }}
      >
        <span className="all-caps-adjust">▶</span>
      </LinkWrapper>
    </div>
  );
};

export default VisualizerLink;
