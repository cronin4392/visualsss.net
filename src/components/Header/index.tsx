import Logo from "@/icons/dist/Logo";
import { useSssState } from "@/context/SssContextProvider";
import LinkWrapper from "@/components/LinkWrapper";
import styles from "./styles.module.scss";
import { useTouchContext } from "@/context/TouchContextProvider";

const warningMessages = [
  "Don't do that",
  "No scroll zone",
  "Please stop",
  "ok...",
  "Getting out of hand",
];

type HeaderProps = {
  subLine?: string | false;
};

const subLineText = (text: string | false, count: number, warning: boolean) => {
  if (text !== false && warning) {
    return warningMessages[count % warningMessages.length];
  }

  return text;
};

const Header: React.FC<HeaderProps> = ({ subLine = ".net" }) => {
  const { setSClicks, sClicks } = useSssState();
  const { warning, showWarning } = useTouchContext();
  const subText = subLineText(subLine, warning, showWarning);

  return (
    <div className={styles.Container}>
      <div className={styles.Logo} data-s-clicks={sClicks}>
        <LinkWrapper
          href={sClicks === 5 ? "/system-malfunction" : "/"}
          linkProps={{
            onClick: () => {
              setSClicks(Math.min(sClicks + 1, 6));
            },
          }}
        >
          <Logo />
        </LinkWrapper>
      </div>
      {subText && (
        <div className={styles.SubLine} data-text={subText}>
          <span className="all-caps-adjust">{subText}</span>
        </div>
      )}
    </div>
  );
};

export default Header;
