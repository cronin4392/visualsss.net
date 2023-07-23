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
};

export type Youtube = {
  __type: "youtube";
  id: string;
  caption: string;
  description: string;
  date: string;
  size: Sizes;
};

const newVideo = (
  relFile: string,
  caption: string,
  date: string,
  description: React.ReactElement,
  options?: { size: Sizes }
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
  };
};

const newVideoGroup = (
  videos: Array<[string] | [string, { size: Sizes }]>,
  caption: string,
  date: string,
  description: React.ReactElement
): Array<Video> =>
  videos.map(([relFile, options]) =>
    newVideo(relFile, caption, date, description, options)
  );

const newYoutube = (
  id: string,
  caption: string,
  date: string,
  description: React.ReactElement,
  options?: { size: Sizes }
): Youtube => {
  return {
    __type: "youtube",
    id,
    caption,
    description: renderToString(description),
    date,
    size: options?.size || null,
  };
};

const content: Array<Video | Youtube> = [
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
    <>
      I ran visuals for the Aversion BCCO event at Lower Level. I projection
      mapped the back wall and the DJ was in the center of the room.
    </>
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
    <>Video I made with typographic scenes that say Drum n Bass (DnB).</>,
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
        --
        <br /> An artist who has touched the heart of every dnb lover with his
        unparalleled dancefloor rollers touches down for his long awaited first
        USA tour in Boston.
      </p>
    </>
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
        ---
        <br />
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
  newVideo("IMG_1242.mp4", "Elements", "Feb 2023", <></>, {
    size: "wide",
  }),
  newVideo("IMG_1244.mp4", "Elements", "Feb 2023", <></>),
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
  newVideo("IMG_0262.mp4", "Elements", "Jul 2022", <></>),
  newVideo("IMG_9810.mp4", "Elements", "Apr 2022", <></>),
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
    "House Party",
    "Oct 2021",
    <p>
      This is an art installation I created for a halloween house party that had
      a room with DJs playing throughout the night. The stage was made of
      foamcore and created by another party-goer. The installtion I made
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
        ---
        <br />
        Artists For Humanity (AFH) provides under-resourced teens the keys to
        self-sufficiency through paid employment in art and design.
      </p>
    </>
  ),
  newYoutube("TeHW-T7uc4Q", "Sound Boy Ent", "Jun 2020", <></>),
];

export default content;
