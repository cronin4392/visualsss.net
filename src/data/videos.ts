type Sizes = "tall" | "wide" | "long";

export type Video = {
  __type: "video";
  file: string;
  caption: string;
  date: string;
  size?: Sizes;
};

export type Youtube = {
  __type: "youtube";
  id: string;
  caption: string;
  date: string;
  size?: Sizes;
};

const newVideo = (
  relFile: string,
  caption: string,
  date: string,
  options?: { size?: Sizes }
): Video => {
  const useAws = true;
  const baseUrl = useAws
    ? "https://visualsssssssss-site.s3.amazonaws.com/content/social-50mb-720p/"
    : "/videos/";

  const file = `${baseUrl}${relFile}`;

  return { __type: "video", file, caption, date, size: options?.size };
};

const newYoutube = (
  id: string,
  caption: string,
  date: string,
  options?: { size?: Sizes }
): Youtube => {
  return { __type: "youtube", id, caption, date, size: options?.size };
};

const content: Array<Video | Youtube> = [
  newVideo("HolyMountainNvidia.8.mp4", "The Holy Mountain", "v1.01", {
    size: "long",
  }),
  newVideo("IMG_1292-2.mp4", "Aversion", "Mar 2023", {
    size: "long",
  }),
  newVideo("IMG_1242.mp4", "Elements", "Feb 2023", {
    size: "wide",
  }),
  newVideo("IMG_1244.mp4", "Elements", "Feb 2023"),
  newVideo("IMG_1222.mp4", "Infra x Av_rsion", "Feb 2023"),
  newVideo("IMG_1168.mp4", "Flavours Above Ground", "Nov 2022", {
    size: "tall",
  }),
  newVideo("IMG_0885.mp4", "Flavours Above Ground", "Nov 2022"),
  newVideo("IMG_0771.mp4", "Paplin Presents", "Oct 2022"),
  newVideo("IMG_0534.mp4", "Fraktal Fest", "Aug 2022", {
    size: "long",
  }),
  newVideo("IMG_0262.mp4", "Elements", "Jul 2022"),
  newVideo("IMG_9810.mp4", "Elements", "Apr 2022"),
  newVideo("IMG_9544.mp4", "AFH x Kitauna Parker", "Mar 2022", {
    size: "wide",
  }),
  newYoutube("JbCZ4dFoG5s", "Sound Boy Ent", "Feb 2022", {
    size: "wide",
  }),
  newVideo("IMG_8838.mp4", "House Party", "Oct 2021"),
  newVideo("IMG_8885.mp4", "House Party", "Oct 2021"),
  newVideo("IMG_8886.mp4", "House Party", "Oct 2021", {
    size: "wide",
  }),
  newVideo("IMG_8578.mp4", "AFH Nokia Snake", "Sep 2021", {
    size: "tall",
  }),
  newVideo("IMG_8576.mp4", "AFH Nokia Snake", "Sep 2021", {
    size: "tall",
  }),
  newYoutube("TeHW-T7uc4Q", "Sound Boy Ent", "Jun 2020"),
];

export default content;
