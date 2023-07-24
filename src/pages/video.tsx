import { NextPage } from "next";
import VideoPage from "@/layouts/VideoPage";
import HeadTag from "@/components/HeadTag";

const VideoRoute: NextPage = () => {
  return (
    <>
      <HeadTag pageTitle="video" />
      <VideoPage />
    </>
  );
};

export default VideoRoute;
