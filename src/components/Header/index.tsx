import Logo from "@/icons/dist/Logo";
import styles from "./styles.module.scss";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Logo}>
        <Logo />
      </div>
      <div className={styles.Com}>.com</div>
    </div>
  );
};

export default Header;
