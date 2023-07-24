import { NextPage } from "next";
import FunnyLayout from "@/layouts/FunnyLayout";
import HeadTag from "@/components/HeadTag";
import Header from "@/components/Header";
import FunnyVideos from "@/components/FunnyVideos";

const FunnyPage: NextPage = () => {
  return (
    <>
      <HeadTag pageTitle="funnyyy" />
      <FunnyLayout
        header={<Header subLine="hahaha" />}
        content={<FunnyVideos />}
      />
    </>
  );
};

export default FunnyPage;
