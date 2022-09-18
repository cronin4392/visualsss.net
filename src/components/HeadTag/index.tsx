import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { Maybe } from "@/utils/types";
import { removeNulls } from "@/utils/lists";

export type ShareProps = {
  title?: Maybe<string>;
  pageTitle?: Maybe<string>;
  description?: Maybe<string>;
  image?: Maybe<string>;
};

const HeadTag: React.FC<ShareProps> = (props) => {
  const router = useRouter();
  const title = props.title || "visualsss.net";
  const pageTitle = props.pageTitle || null;
  const fullTitle = removeNulls([title, pageTitle]).join(" | ");
  const description = props.description || "";
  const image = props.image;

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
