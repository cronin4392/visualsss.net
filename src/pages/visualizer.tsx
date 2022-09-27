import {  NextPage } from "next";
import HeadTag from "@/components/HeadTag";
import Header from "@/components/Header";
import VideoLayout from "@/layouts/VideoLayout";

const VisualizerPage: NextPage = () => {
  return (
    <>
      <HeadTag />
      <VideoLayout header={<Header subLine="visssualizer" />} />
    </>
  );
};

export default VisualizerPage;
