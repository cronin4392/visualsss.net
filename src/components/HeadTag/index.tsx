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

function repeatStartLetters(text: string) {
  const count = 3;
  const firstLetter = text.slice(0, 1);
  const repeated = new Array(count - 1).fill(firstLetter).join("");
  return repeated + text;
}

const HeadTag: React.FC<ShareProps> = (props) => {
  const router = useRouter();
  const title = props.title || "visualsss.net";
  const pageTitle = props.pageTitle
    ? repeatStartLetters(props.pageTitle)
    : null;
  const fullTitle = removeNulls([title, pageTitle]).join(" ");
  const description =
    props.description ||
    "VISUALSSS is a VJ and digital artist who creates real-time experiences for events spanning from live music acts to art installations.";
  const image = props.image || "/promo/share.png";

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
