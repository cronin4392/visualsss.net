import Link from "next/link";
import Logo from "@/icons/dist/Logo";
import styles from "./styles.module.scss";

type HeaderProps = {
  showCom?: boolean;
};

const Header: React.FC<HeaderProps> = ({ showCom = true }) => {
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
        <div className={styles.Com}>
          <span className="all-caps-adjust">.net</span>
        </div>
      )}
    </div>
  );
};

export default Header;
