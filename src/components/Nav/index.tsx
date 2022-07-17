// import Link from "next/link";
// import { useRouter } from "next/router";
import styles from "./styles.module.scss";

const Nav: React.FC = () => {
  //   const router = useRouter();

  return (
    <nav className={styles.Nav}>
      <div className={styles.Inner}>Nav</div>
    </nav>
  );
};

export default Nav;
