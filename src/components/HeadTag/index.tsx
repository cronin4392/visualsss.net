import { useState } from "react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useInterval } from "usehooks-ts";
import { Maybe } from "@/utils/types";
import { removeNulls } from "@/utils/lists";

export type ShareProps = {
  pageTitle?: Maybe<string>;
  description?: Maybe<string>;
  image?: Maybe<string>;
};

const getTitleSlideIndex = (index: number, text: string) => {
  const length = 12;

  const titleIndexStart = index % text.length;
  const titleIndexEnd = (index + text.length - 1) % text.length;

  console.log(titleIndexStart, titleIndexEnd);
  const title = text.slice(titleIndexStart, titleIndexEnd);

  return title;
};

const HeadTag: React.FC<ShareProps> = (props) => {
  const router = useRouter();
  const titleText =
    "visualsssssssssssssssssssssssssssssssssssssssssssssssssssss.net";
  const [titleIndex, setTitleIndex] = useState(0);
  const title = getTitleSlideIndex(titleIndex, titleText);

  const pageTitle = props.pageTitle || null;
  const fullTitle = removeNulls([title, pageTitle]).join(" | ");
  const description = props.description || "";
  const image = props.image;

  useInterval(() => {
    setTitleIndex(titleIndex + 1);
    console.log(title);
  }, Math.round(1000 / 10));

  return (
    <NextSeo
      title={fullTitle}
      description={description}
      additionalLinkTags={[
        {
          rel: "icon",
          href: "/favicon.png",
        },
      ]}
      openGraph={{
        url: `${process.env.URL}${router.asPath}`,
        title,
        description,
        images: image
          ? [
              {
                url: image,
                alt: "visualsss.net",
              },
            ]
          : undefined,
      }}
    />
  );
};

export default HeadTag;
