import Link from "next/link";
import Logo from "@/icons/dist/Logo";
import { useSssState } from "@/context/SssContextProvider";
import styles from "./styles.module.scss";

type HeaderProps = {
  showCom?: boolean;
};

const Header: React.FC<HeaderProps> = ({ showCom = true }) => {
  const { setSClicks, sClicks } = useSssState();

  return (
    <div className={styles.Container}>
      <div className={styles.Logo} data-s-clicks={sClicks}>
        <Link href="/">
          <a
            onClick={() => {
              setSClicks(Math.min(sClicks + 1, 6));
            }}
          >
            <Logo />
          </a>
        </Link>
      </div>
      {showCom && (
        <div className={styles.Com}>
          <span className="all-caps-adjust">.net</span>
        </div>
      )}
    </div>
  );
};

export default Header;
