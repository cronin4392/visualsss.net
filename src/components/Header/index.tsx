import Logo from "@/icons/dist/Logo";
import { useSssState } from "@/context/SssContextProvider";
import LinkWrapper from "@/components/LinkWrapper";
import styles from "./styles.module.scss";

type HeaderProps = {
  subLine?: string | false;
};

const Header: React.FC<HeaderProps> = ({ subLine = ".net" }) => {
  const { sss, setSClicks, sClicks } = useSssState();

  return (
    <div className={styles.Container}>
      <div className={styles.Logo} data-s-clicks={sClicks}>
        <LinkWrapper
          href={sClicks === 6 ? "/system-malfunction" : "/"}
          linkProps={{
            onClick: () => {
              setSClicks(Math.min(sClicks + 1, 6));
            },
          }}
        >
          <Logo />
        </LinkWrapper>
      </div>
      {subLine && (
        <div className={styles.SubLine} data-text={subLine}>
          <span className="all-caps-adjust">{subLine}</span>
        </div>
      )}
    </div>
  );
};

export default Header;
