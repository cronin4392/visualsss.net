import { NextPage } from "next";
import HeadTag from "@/components/HeadTag";
import Header from "@/components/Header";
import VideoLayout from "@/layouts/VideoLayout";

const VideoPage: NextPage = () => {
  return (
    <>
      <HeadTag pageTitle="Video" />
      <VideoLayout header={<Header subLine="visssualizer" />} />
    </>
  );
};

export default VideoPage;
