import { GetStaticProps, NextPage } from "next";
import HeadTag from "@/components/HeadTag";
import Header from "@/components/Header";
import VideoLayout from "@/layouts/VideoLayout";

type PageProps = {};

const VisualizerPage: NextPage<PageProps> = () => {
  return (
    <>
      <HeadTag />
      <VideoLayout header={<Header showCom={false} />} />
    </>
  );
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  return {
    props: {},
  };
};

export default VisualizerPage;
