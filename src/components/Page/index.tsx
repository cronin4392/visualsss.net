import React from "react";
import styles from "./styles.module.scss";

const SectionDepth = React.createContext(-1);

const Page: React.FC<{ content: React.ReactNode }> = ({ content }) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Container}>
        <div className="caps">{content}</div>
      </div>
    </div>
  );
};

export default Page;
