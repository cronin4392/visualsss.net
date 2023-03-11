import { NextPage } from "next";
import PageLayout from "@/layouts/PageLayout";
import HeadTag from "@/components/HeadTag";
import Header from "@/components/Header";
import VideoList from "@/components/VideoList";

const ContentPage: NextPage = () => {
  return (
    <>
      <HeadTag />
      <PageLayout
        header={<Header subLine="Content" />}
        content={<VideoList />}
      />
    </>
  );
};

export default ContentPage;
