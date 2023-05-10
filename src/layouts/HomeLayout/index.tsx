import React from "react";
import styles from "./styles.module.scss";

const HomeLayout: React.FC<{
  header: React.ReactNode;
  menu: React.ReactNode;
}> = ({ header, menu }) => {
  return (
    <main className={styles.Container}>
      <div className={styles.Header}>{header}</div>
      <div className={styles.Menu}>{menu}</div>
    </main>
  );
};

export default HomeLayout;
