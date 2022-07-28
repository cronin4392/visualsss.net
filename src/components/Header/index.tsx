import Link from "next/link";
import Logo from "@/icons/dist/Logo";
import { useSssState } from "@/context/SssContextProvider";
import styles from "./styles.module.scss";

type HeaderProps = {
  showCom?: boolean;
};

const Header: React.FC<HeaderProps> = ({ showCom = true }) => {
  const { setSss } = useSssState();

  return (
    <div className={styles.Container}>
      <div className={styles.Logo}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </div>
      {showCom && (
        <button
          className={styles.Com}
          onClick={() => {
            setSss(true);
          }}
        >
          <span className="all-caps-adjust">.net</span>
        </button>
      )}
    </div>
  );
};

export default Header;
