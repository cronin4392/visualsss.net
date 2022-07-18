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

const Page: React.FC<PageProps> = ({ content }) => {
  return (
    <div className={styles.Container}>
      {content.map((section, index) => (
        <SectionContent {...section} key={index} />
      ))}
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

const Section: React.FC<SectionType> = ({ title, content }) => (
  <div className={styles.Section}>
    <h2 className={styles.SectionTitle}>{title}</h2>
    {content.map((c, index) => (
      <SectionContent {...c} key={index} />
    ))}
  </div>
);

const Content: React.FC<ContentType> = ({ content }) => (
  <div className={styles.Content}>{content}</div>
);

export default Page;
