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

const SectionContent: React.FC<SectionContentType> = (props) => {
  const { ...content } = props;

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
      <>
        <SectionTitle>{title}</SectionTitle>
        {content.map((c, index) => (
          <SectionContent {...c} key={index} />
        ))}
      </>
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
  const { ref, height } = useElementSize();
  const depth = useContext(SectionDepth) + 1;
  const fontSize = getFontSize(ref);
  const lines = getLineCount(height, fontSize) - 1;

  return (
    <div className={styles.Content}>
      <div className={styles.ContentLines}>
        <Lines count={depth} />
        {lines > 0 && (
          <>
            {[...Array(lines)].map((_, index) => (
              <Lines count={depth} key={index} />
            ))}
            <Lines count={depth - 1} />
          </>
        )}
      </div>
      <div>
        <div ref={ref}>{content}</div>
      </div>
    </div>
  );
};

const Lines: React.FC<{
  count: number;
}> = ({ count }) => {
  const mapCount = [...Array(count)];

  return (
    <span className={styles.Lines}>
      {mapCount.map((_, index) => (
        <span className={styles.LineStart} key={index} />
      ))}
      <span className={styles.LineEnd} />
    </span>
  );
};

export default Page;
