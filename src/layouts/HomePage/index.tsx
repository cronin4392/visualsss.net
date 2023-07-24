import React from "react";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import styles from "./styles.module.scss";

const HomePage: React.FC = () => {
  return (
    <main className={styles.Container}>
      <div className={styles.Header}>
        <Header />
      </div>
      <div className={styles.Menu}>
        <Menu />
      </div>
    </main>
  );
};

export default HomePage;
