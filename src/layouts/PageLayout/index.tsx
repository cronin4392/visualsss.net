import Background from "@/components/Background";
import React from "react";
import styles from "./styles.module.scss";

const PageLayout: React.FC<{
  header: React.ReactNode;
  content: React.ReactNode;
}> = ({ header, content }) => {
  return (
    <>
      <main className={styles.Container}>
        <div className={styles.Header}>{header}</div>
        <div className={styles.Content}>{content}</div>
      </main>
      <Background />
    </>
  );
};

export default PageLayout;
