import { createContext, useContext } from "react";
import { noop } from "@/utils/noop";

type VideoIndexContextType = {
  videoIndex: number;
  setVideoIndex: (index: number) => void;
};

type Video = { name: string; type: string; url: string };

export const videos: Array<Video> = [
  {
    name: "Mad Max",
    type: "Glitch",
    url: "https://visualsssssssss-site.s3.amazonaws.com/max-max-v.01/playlist.m3u8",
  },
  {
    name: "The Holy Mountain",
    type: "Pixelated",
    url: "https://visualsssssssss-site.s3.amazonaws.com/holy-mountain/playlist.m3u8",
  },
  {
    name: "Fantastic Planet",
    type: "Voronoi",
    url: "https://visualsssssssss-site.s3.amazonaws.com/fantastic-planet/playlist.m3u8",
  },
  {
    name: "Mad Max",
    type: "Pixelated",
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
