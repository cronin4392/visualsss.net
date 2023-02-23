import { NextPage } from "next";
import PageLayout from "@/layouts/PageLayout";
import HeadTag from "@/components/HeadTag";
import Header from "@/components/Header";
import Videos from "@/components/Content";

const ContentPage: NextPage = () => {
  return (
    <>
      <HeadTag />
      <PageLayout header={<Header subLine="Content" />} content={<Videos />} />
    </>
  );
};

export default ContentPage;
