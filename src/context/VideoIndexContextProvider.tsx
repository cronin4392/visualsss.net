import { createContext, useContext } from "react";
import { noop } from "@/utils/noop";

type VideoIndexContextType = {
  videoIndex: number;
  setVideoIndex: (index: number) => void;
};

type Video = { name: string; url: string };

export const videos: Array<Video> = [
  {
    name: "The Holy Mountain",
    url: "https://visualsssssssss-site.s3.amazonaws.com/holy-mountain/playlist.m3u8",
  },
  {
    name: "Fantastic Planet",
    url: "https://visualsssssssss-site.s3.amazonaws.com/fantastic-planet/playlist.m3u8",
  },
  {
    name: "Mad Max",
    url: "https://visualsssssssss-site.s3.amazonaws.com/mad-max/playlist.m3u8",
  },
];

export const VideoIndexContext = createContext<VideoIndexContextType>({
  videoIndex: 0,
  setVideoIndex: (_index) => noop,
});

export const useVideo = (): { video: Video } & VideoIndexContextType => {
  const { videoIndex } = useContext(VideoIndexContext);
  return {
    video: videos[videoIndex % videos.length],
    ...useContext(VideoIndexContext),
  };
};
