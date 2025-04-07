import { renderToString } from "react-dom/server";

type Sizes = "tall" | "wide" | "long" | null;

export type Video = {
  __type: "video";
  id: string;
  file: string;
  caption: string;
  description: string;
  date: string;
  size: Sizes;
  project: string | null;
};

export const isVideo = (video: Video | Youtube): video is Video =>
  video.__type === "video";

export type Youtube = {
  __type: "youtube";
  id: string;
  caption: string;
  description: string;
  date: string;
  size: Sizes;
};

export type Instagram = {
  __type: "instagram";
  id: string;
  url: string;
  size: Sizes;
};

const newVideo = (
  relFile: string,
  caption: string,
  date: string,
  description: React.ReactElement,
  options?: { size: Sizes },
  project?: string
): Video => {
  const useAws = true;
  const baseUrl = useAws
    ? "https://visualsssssssss-site.s3.amazonaws.com/content/social-50mb-720p/"
    : "/videos/";

  const file = `${baseUrl}${relFile}`;

  return {
    __type: "video",
    id: relFile,
    file,
    caption,
    description: renderToString(description),
    date,
    size: options?.size || null,
    project: project || null,
  };
};

const newVideoGroup = (
  videos: Array<[string] | [string, { size: Sizes }]>,
  project: string,
  caption: string,
  date: string,
  description: React.ReactElement
): Array<Video> =>
  videos.map(([relFile, options]) =>
    newVideo(relFile, caption, date, description, options, project)
  );

const newYoutube = (
  id: string,
  caption: string,
  date: string,
  description: React.ReactElement,
  options?: { size: Sizes }
): Youtube => ({
  __type: "youtube",
  id,
  caption,
  description: renderToString(description),
  date,
  size: options?.size || null,
});

const newInstagram = (
  id: string,
  url: string,
  options?: { size: Sizes }
): Instagram => ({
  __type: "instagram",
  id,
  url,
  size: options?.size || null,
});

const ElementsDescription = () => (
  <p>
    I am one of the resident VJs for Elements Drum and Bass which is a weekly
    Drum &amp; Bass event held every Thursday at the Phoenix Landing in
    Cambridge, Massachusetts. Elements has hosted many of the biggest names in
    Drum &amp; Bass while at the same time supporting the local scene by
    featuring top local DJs.
  </p>
);

const content: Array<Video | Youtube | Instagram> = [
  newInstagram(
    "insta",
    "https://www.instagram.com/p/DHUnTFHPM2q/?img_index=1",
    {
      size: "wide",
    }
  ),
  newInstagram("insta", "https://www.instagram.com/p/DHE9SCBvQTK/", {
    size: "tall",
  }),
  newInstagram("insta", "https://www.instagram.com/p/DCrq9QnKjZy/"),
  newInstagram("insta", "https://www.instagram.com/p/DAgubk2PGX8/", {
    size: "tall",
  }),
  newInstagram("insta", "https://www.instagram.com/p/C_ZRdPuPz1h/", {
    size: "wide",
  }),
  ...newVideoGroup(
    [["IMG_2390.mp4", { size: "wide" }], ["IMG_2387.mp4"]],
    "ag-jeep",
    "Above Ground",
    "Sep 2023",
    <>
      <p>I ran projections for an event at Middle East upstairs.</p>
    </>
  ),
  ...newVideoGroup(
    [["IMG_2218.mp4"], ["IMG_2241.mp4"]],
    "homie-campout",
    "The Homie Collective Campout",
    "Aug 2023",
    <>
      Music festival in Central Mass. I was the video tech and performed VJ sets
      for acts including Jason Leech. I also ran a few pop up projections around
      the grounds.
    </>
  ),
  newVideo(
    "IMG_1734.mp4",
    "Transit x Infra @ The Grand",
    "May 2023",
    <>
      blktrmlne and I handled creating and mapping immersive visuals for the
      Transit x Infra event at The Grand Boston. Visuals incorporated live
      camera feeds of the audience and DJ.
    </>
  ),
  newVideo(
    "IMG_1639.mp4",
    "Aversion BCCO",
    "May 2023",
    <p>
      I ran visuals for the Aversion BCCO event at Lower Level. I projection
      mapped the back wall and the DJ was in the center of the room.
    </p>
  ),
  ...newVideoGroup(
    [
      ["IMG_1565.mp4"],
      [
        "IMG_1564.mp4",
        {
          size: "wide",
        },
      ],
    ],
    "hypnothesis",
    "Hypnothesis",
    "Apr 2023",
    <>
      <p>
        This is an interactive webcam installation I created for Hypnothesis.
        The installation switched between two different pieces. The first is a
        tricolored feedback effect. The second is in a bright gradient and uses
        the opencv library to detect and pixelate peoples faces.
      </p>
      <p>
        Hypnothesis is the end of year show for the VJ class in the Berkley
        Electronic Music program. The students put together and perform their
        own AV sets. The event takes place at Sonia.
      </p>
    </>
  ),
  newVideo(
    "DNA-DNB.mp4",
    "DnB",
    "Mar 2023",
    <p>Video I made with typographic scenes that say Drum n Bass (DnB).</p>,
    { size: "long" }
  ),
  newVideo(
    "IMG_1380.mp4",
    "BCEE",
    "Mar 2023",
    <>
      <p>
        This is a composition I used at the BCEE US debut show at
        Phoenix&nbsp;Landing for Elements&nbsp;Drum&nbsp;n&nbsp;Bass. The
        composition uses two scenes: one using BCEE&rsquo;s logo and the other
        using text that says Elements with an audio reactive wave. The scenes
        are run through an kolaidascope effect and a reaction diffusion effect.
      </p>
      <p>
        An artist who has touched the heart of every dnb lover with his
        unparalleled dancefloor rollers touches down for his long awaited first
        USA tour in Boston.
      </p>
    </>,
    undefined,
    "elements"
  ),
  newVideo(
    "HolyMountainNvidia.8.mp4",
    "The Holy Mountain",
    "v1.01",
    <p>
      I ran the movie The Holy Mountain through a generative filter that uses
      the Nvidia Background Removal tool to pixelate the things it detects in
      the foreground.
    </p>,
    {
      size: "long",
    }
  ),
  newVideo(
    "IMG_1292-2.mp4",
    "Aversion",
    "Mar 2023",
    <>
      <p>
        A snippet from my VJ set at the Aversion Ukraine fundraiser. ANAB and
        CSILLA were the DJs that performed.
      </p>
      <p>
        In this clip is a scene that uses a webcam effect pointed at the DJ. The
        projection is against the stained glass windows at ZuZu.
      </p>
      <p>
        Having regularly performed amongst some at the best in NYC over the last
        few years, most recently with the likes of Volvox, Anthony Parasole ,
        Justin Cudmore and more at Basement NYC, ANAB promises to bring a
        firestorm that ranges from Techno, to industrial, Post-punk and more.
        We’re excited to welcome her for her Boston Debut.
      </p>
    </>,
    {
      size: "long",
    }
  ),
  newVideo(
    "IMG_1242.mp4",
    "Elements",
    "Feb 2023",
    <ElementsDescription />,
    {
      size: "wide",
    },
    "elements"
  ),
  newVideo(
    "IMG_1244.mp4",
    "Elements",
    "Feb 2023",
    <ElementsDescription />,
    undefined,
    "elements"
  ),
  newVideo("IMG_1222.mp4", "Infra x Av_rsion", "Feb 2023", <></>),
  newVideo("IMG_0796.mp4", "Soundz Organic", "Nov 2022", <></>, {
    size: "wide",
  }),
  ...newVideoGroup(
    [
      [
        "IMG_1168.mp4",
        {
          size: "tall",
        },
      ],
      ["IMG_0885.mp4"],
    ],
    "flavours",
    "Flavours Above Ground",
    "Nov 2022",
    <></>
  ),
  newVideo(
    "IMG_0771.mp4",
    "Paplin Presents",
    "Oct 2022",
    <>
      <p>
        At this event I was hired to set up and run the projections. I set up
        projection mapping to allow for 2 VJs to perform at once. The Paplin and
        DayDreemer performed alongside me. In this clip The Paplin is on the
        left and I am on the right. The event took place at Union Tavern in
        Somerville.
      </p>
    </>
  ),
  newVideo("IMG_0534.mp4", "Fraktal Fest", "Aug 2022", <></>, {
    size: "long",
  }),
  newVideo(
    "IMG_0262.mp4",
    "Elements",
    "Jul 2022",
    <ElementsDescription />,
    undefined,
    "elements"
  ),
  newVideo(
    "IMG_9810.mp4",
    "Elements",
    "Apr 2022",
    <ElementsDescription />,
    undefined,
    "elements"
  ),
  newVideo(
    "IMG_9544.mp4",
    "AFH x Kitauna Parker",
    "Mar 2022",
    <>
      <p>
        This digital art installation grew out of a collaboration by Stephen
        Cronin, Director of Artists For Humanity’s Creative Technology Studio,
        and Kitauna Parker, AFH Alumna Artist in Residence. In the installation,
        Cronin reimagines Parker’s poetry and paintings to generate a new,
        responsive art piece harnessing live weather data and the power of
        creative coding—reflecting the impermanence of our days. “This work is a
        generative art piece made in TouchDesigner,” says Cronin. “The piece
        uses live weather data to control certain parameters. It adapts to the
        temperature, wind, and time of day to generate new variations throughout
        the month. “Ephemeral Days is The Sidewalk’s first exhibition of
        generative art, which involves the use of an autonomous system.
      </p>
      <a href="https://www.fsfaboston.com/the-sidewalk-video-gallery/artistsforhumanity">
        More Info
      </a>
    </>,
    {
      size: "wide",
    }
  ),
  newYoutube("JbCZ4dFoG5s", "Sound Boy Ent", "Feb 2022", <></>, {
    size: "wide",
  }),
  ...newVideoGroup(
    [
      ["IMG_8838.mp4"],
      ["IMG_8885.mp4"],
      [
        "IMG_8886.mp4",
        {
          size: "wide",
        },
      ],
    ],
    "halloween-ipad",
    "House Party",
    "Oct 2021",
    <p>
      This is an art installation I created for a halloween house party that had
      a room with DJs playing throughout the night. The stage was made of
      foamcore and created by another party-goer. The installation I made
      utilized Procreate on the iPad, streamed to Touchdesigner, where it was
      run through some animating filters. Party-goers had an outline of the
      stage design in Procreate that they could color in through the night. The
      projection would update live as they drew in Procreate.
    </p>
  ),
  ...newVideoGroup(
    [
      [
        "IMG_8578.mp4",
        {
          size: "tall",
        },
      ],
      [
        "IMG_8576.mp4",
        {
          size: "tall",
        },
      ],
    ],
    "nokia-snake",
    "Nokia Snake",
    "Oct 2021",
    <>
      <p>
        This is a video game booth we developed during my time as the Director
        of Creative Technology at Artists for Humanity. As a practice project
        some teen employees created the game snake using Python. We collaborated
        with the 3D studio to cut a Nokia Phone out of wood.
      </p>
      <p>
        Artists For Humanity (AFH) provides under-resourced teens the keys to
        self-sufficiency through paid employment in art and design.
      </p>
    </>
  ),
  newYoutube("TeHW-T7uc4Q", "Sound Boy Ent", "Jun 2020", <></>),
];

export default content;
