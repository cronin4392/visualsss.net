import { NextPage } from "next";
import PageLayout from "@/layouts/PageLayout";
import HeadTag from "@/components/HeadTag";
import Header from "@/components/Header";
import VideoGrid from "@/components/VideoGrid";

const ContentPage: NextPage = () => {
  return (
    <>
      <HeadTag pageTitle="Content" />
      <PageLayout
        header={<Header subLine="Content" />}
        content={<VideoGrid />}
      />
    </>
  );
};

export default ContentPage;
