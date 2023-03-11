export type Video = {
  __type: "video";
  id: string;
  file: string;
  caption: string;
  date: string;
  size?: "tall" | "wide";
};

export type Youtube = {
  __type: "youtube";
  id: string;
  video_id: string;
  caption: string;
  date: string;
  size?: "tall" | "wide";
};

const newVideo = (
  id: string,
  relFile: string,
  caption: string,
  date: string,
  options?: { size?: "tall" | "wide" }
): Video => {
  const useAws = true;
  const baseUrl = useAws
    ? "https://visualsssssssss-site.s3.amazonaws.com/content/social-50mb-720p/"
    : "/videos/";

  const file = `${baseUrl}${relFile}`;

  return {
    __type: "video",
    id,
    file,
    caption,
    date,
    size: options?.size,
  };
};

const newYoutube = (
  id: string,
  video_id: string,
  caption: string,
  date: string,
  options?: { size?: "tall" | "wide" }
): Youtube => {
  return {
    __type: "youtube",
    id,
    video_id,
    caption,
    date,
    size: options?.size,
  };
};

export const content: Array<Video | Youtube> = [
  newVideo("elements-02-23-1", "IMG_1242.mp4", "Elements", "Feb 2023", {
    size: "wide",
  }),
  newVideo("elements-02-23-2", "IMG_1244.mp4", "Elements", "Feb 2023"),
  newVideo(
    "infra-aversion-02-23",
    "IMG_1222.mp4",
    "Infra x Av_rsion",
    "Feb 2023"
  ),
  newVideo(
    "flavors-11-22-1",
    "IMG_1168.mp4",
    "Flavours Above Ground",
    "Nov 2022",
    {
      size: "tall",
    }
  ),
  newVideo(
    "flavors-11-22-1",
    "IMG_0885.mp4",
    "Flavours Above Ground",
    "Nov 2022"
  ),
  newVideo("paplin-10-22", "IMG_0771.mp4", "Paplin Presents", "Oct 2022"),
  newVideo("elements-07-22", "IMG_0262.mp4", "Elements", "Jul 2022"),
  newVideo("elements-04-22", "IMG_9810.mp4", "Elements", "Apr 2022"),
  newVideo(
    "ephemeral-days",
    "IMG_9544.mp4",
    "AFH x Kitauna Parker",
    "Mar 2022",
    {
      size: "wide",
    }
  ),
  newYoutube("soundboy-visiter", "JbCZ4dFoG5s", "Sound Boy Ent", "Feb 2022", {
    size: "wide",
  }),
  newVideo("procreate-10-21-1", "IMG_8838.mp4", "House", "Oct 2021"),
  newVideo("procreate-10-21-2", "IMG_8885.mp4", "House", "Oct 2021"),
  newVideo("procreate-10-21-3", "IMG_8886.mp4", "House", "Oct 2021"),
  newVideo("afh-nokia-1", "IMG_8578.mp4", "AFH Nokia Snake", "Sep 2021", {
    size: "tall",
  }),
  newVideo("afh-nokia-1", "IMG_8576.mp4", "AFH Nokia Snake", "Sep 2021", {
    size: "tall",
  }),
  newYoutube("afh-nokia-1", "TeHW-T7uc4Q", "Sound Boy Ent", "Jun 2020", {
    size: "wide",
  }),
];

export const getContent = (id: string) => {
  return null;
};
