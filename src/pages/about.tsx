import { GetStaticProps, NextPage } from "next";
import PageLayout from "@/layouts/PageLayout";
import HeadTag from "@/components/HeadTag";
import Header from "@/components/Header";
import Page from "@/components/Page";
import { aboutPageContent } from "@/content/about";

type PageProps = {};

const AboutPage: NextPage<PageProps> = () => {
  return (
    <>
      <HeadTag />
      <PageLayout
        header={<Header showCom={false} />}
        content={<Page content={aboutPageContent} />}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  return {
    props: {},
  };
};

export default AboutPage;
