import React from "react";
import PlayButton from "@/components/PlayButton";
import styles from "./styles.module.scss";

const HomeLayout: React.FC<{
  header: React.ReactNode;
  menu: React.ReactNode;
}> = ({ header, menu }) => {
  return (
    <main className={styles.Container}>
      <div className={styles.Header}>{header}</div>
      <div className={styles.Menu}>{menu}</div>
      <div className={styles.PlayButton}>
        <PlayButton />
      </div>
    </main>
  );
};

export default HomeLayout;
