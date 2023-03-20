import { NextPage } from "next";
import PageLayout from "@/layouts/PageLayout";
import HeadTag from "@/components/HeadTag";
import Header from "@/components/Header";
import Events from "@/components/Events";

const ContentPage: NextPage = () => {
  return (
    <>
      <HeadTag pageTitle="Events" />
      <PageLayout header={<Header subLine="Events" />} content={<Events />} />
    </>
  );
};

export default ContentPage;
