import { ReactElement } from "react";
import Logo from "@/icons/dist/Logo";
import { useSssState } from "@/context/SssContextProvider";
import { useTouchContext } from "@/context/TouchContextProvider";
import LinkWrapper from "@/components/LinkWrapper";
import styles from "./styles.module.scss";

const warningMessages = [
  "Don't do that",
  "No scroll zone",
  "Please stop",
  "ok...",
  "Getting out of hand",
];

type HeaderProps = {
  subLine?: string | ReactElement | false;
  link?: {
    text: string;
    href: string;
    download?: boolean;
  };
};

const subLineText = (
  text: string | ReactElement | false,
  count: number,
  warning: boolean
) => {
  if (text !== false && warning) {
    return warningMessages[count % warningMessages.length];
  }

  return text;
};

const Header: React.FC<HeaderProps> = ({ subLine = ".net", link }) => {
  const { setSClicks, sClicks } = useSssState();
  const { warning, showWarning } = useTouchContext();
  const subText = subLineText(subLine, warning, showWarning);

  return (
    <div className={styles.Container}>
      <div className={styles.Logo} data-s-clicks={sClicks}>
        <LinkWrapper
          href={sClicks === 5 ? "/system-malfunction" : "/"}
          linkProps={{
            onClick: (event) => {
              setSClicks(Math.min(sClicks + 1, 6));

              if (sClicks === 6) {
                event.preventDefault();
              }
            },
          }}
        >
          <Logo />
        </LinkWrapper>
      </div>
      <div className={styles.SubLines}>
        {subText && (
          <div className={styles.SubLine} data-text={subText}>
            <span className="caps">{subText}</span>
          </div>
        )}
        {link && (
          <LinkWrapper
            linkProps={{ className: styles.SubLine, download: link.download }}
            href={link.href}
          >
            <span className="caps">{link.text}</span>
          </LinkWrapper>
        )}
      </div>
    </div>
  );
};

export default Header;
