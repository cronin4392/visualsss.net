import { GetStaticProps, NextPage } from "next";
import PageLayout from "@/layouts/PageLayout";
import HeadTag from "@/components/HeadTag";
import Header from "@/components/Header";
import Page from "@/components/Page";
import { aboutPageContent } from "@/content/about";

const AboutPage: NextPage = () => {
  return (
    <>
      <HeadTag />
      <PageLayout
        header={<Header subLine="About" />}
        content={<Page content={aboutPageContent} />}
      />
    </>
  );
};

export default AboutPage;
