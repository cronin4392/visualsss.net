import React, { useContext } from "react";
import {
  PageType,
  SectionContentType,
  SectionType,
  ContentType,
  isSection,
  isContent,
} from "@/types/page";
import styles from "./styles.module.scss";

type PageProps = PageType;

const SectionDepth = React.createContext(-1);
const SectionIsLast = React.createContext(false);

const Page: React.FC<PageProps> = ({ content }) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Container}>
        {content.map((section, index) => (
          <SectionIsLast.Provider
            value={index === content.length - 1}
            key={index}
          >
            <SectionContent {...section} />
          </SectionIsLast.Provider>
        ))}
      </div>
    </div>
  );
};

const SectionContent: React.FC<SectionContentType> = (content) => {
  if (isSection(content)) {
    return <Section {...content} />;
  }
  if (isContent(content)) {
    return <Content {...content} />;
  }
  return null;
};

const Section: React.FC<SectionType> = ({ title, content }) => {
  const depth = useContext(SectionDepth);

  return (
    <SectionDepth.Provider value={depth + 1}>
      <div className={styles.Section}>
        <div>
          <SectionTitle>{title}</SectionTitle>
        </div>
        {content.map((c, index) => (
          <SectionIsLast.Provider
            value={index === content.length - 1}
            key={index}
          >
            <SectionContent {...c} />
          </SectionIsLast.Provider>
        ))}
      </div>
    </SectionDepth.Provider>
  );
};

const SectionTitle: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const depth = useContext(SectionDepth);

  return (
    <h2 className={styles.SectionTitle}>
      <Lines count={depth} />
      {children}
    </h2>
  );
};

const Content: React.FC<ContentType> = ({ content }) => {
  const depth = useContext(SectionDepth) + 1;

  return (
    <div className={styles.Content}>
      <div className={styles.ContentLines}>
        <Lines count={depth} />
      </div>
      <div>
        {content}
        <br />
      </div>
    </div>
  );
};

const Lines: React.FC<{ count: number }> = ({ count }) => {
  const mapCount = [...Array(count)];
  const isLast = useContext(SectionIsLast);
  const depth = useContext(SectionDepth);

  return (
    <span className={styles.Lines} data-depth={depth} data-is-last={isLast}>
      {mapCount.map((_, index) => (
        <span className={styles.LineStart} key={index} />
      ))}
      <span className={styles.LineEnd} />
    </span>
  );
};

export default Page;
