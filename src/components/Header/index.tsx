import Logo from "@/icons/dist/Logo";
import styles from "./styles.module.scss";

type HeaderProps = {
  showCom?: boolean;
};

const Header: React.FC<HeaderProps> = ({ showCom = true }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Logo}>
        <Logo />
      </div>
      {showCom && <div className={styles.Com}>.com</div>}
    </div>
  );
};

export default Header;
