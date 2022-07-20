import React, { useContext } from "react";
import { useElementSize } from "@mantine/hooks";
import {
  PageType,
  SectionContentType,
  SectionType,
  ContentType,
  isSection,
  isContent,
} from "@/types/page";
import { getFontSize, getLineCount } from "@/utils/text";
import styles from "./styles.module.scss";

type PageProps = PageType;

const SectionDepth = React.createContext(-1);

const Page: React.FC<PageProps> = ({ content }) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Container}>
        {content.map((section, index) => (
          <SectionContent {...section} key={index} />
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
          <SectionContent {...c} key={index} />
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
      <Lines count={depth} start={true} />
      {children}
    </h2>
  );
};

const Content: React.FC<ContentType> = ({ content }) => {
  const { ref, height } = useElementSize();
  const depth = useContext(SectionDepth) + 1;
  const fontSize = getFontSize(ref);
  const lines = getLineCount(height, fontSize) - 1;

  return (
    <div className={styles.Content}>
      <div className={styles.ContentLines}>
        <Lines count={depth} start={true} />
        {lines > 0 && (
          <>
            {[...Array(lines)].map((_, index) => (
              <Lines
                count={depth}
                start={false}
                isLast={index === lines - 1}
                key={index}
              />
            ))}
            <Lines count={depth - 1} start={false} />
          </>
        )}
      </div>
      <div>
        <div ref={ref}>{content}</div>
        <br />
      </div>
    </div>
  );
};

const Lines: React.FC<{ count: number; start: boolean; isLast?: boolean }> = ({
  count,
  start,
  isLast = false,
}) => {
  const mapCount = [...Array(count)];
  const depth = useContext(SectionDepth);

  return (
    <span
      className={styles.Lines}
      data-depth={depth}
      data-is-last={isLast}
      data-start={start}
    >
      {mapCount.map((_, index) => (
        <span className={styles.LineStart} key={index} />
      ))}
      <span className={styles.LineEnd} />
    </span>
  );
};

export default Page;
