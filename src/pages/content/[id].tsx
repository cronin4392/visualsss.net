import { InferGetStaticPropsType, GetStaticProps, NextPage } from "next";
import { getParam } from "@/utils/urls";
import content, { Video, Youtube } from "@/data/videos";
import PageLayout from "@/layouts/PageLayout";
import HeadTag from "@/components/HeadTag";
import Header from "@/components/Header";
import VideoDetail from "@/components/VideoDetail";
import LinkWrapper from "@/components/LinkWrapper";

const ContentPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  content,
}) => {
  console.log(content);
  return (
    <>
      <HeadTag />
      <PageLayout
        header={
          <Header
            subLine={<LinkWrapper href="/content">Content</LinkWrapper>}
          />
        }
        content={<VideoDetail video={content} />}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps<{
  content: Youtube | Video;
}> = async ({ params }) => {
  const id = getParam(params, "id");
  const video = content.find((v) => v.id === id);

  if (!video) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      content: video,
    },
  };
};

export const getStaticPaths = () => {
  const paths = content.map(({ id }) => ({
    params: {
      id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default ContentPage;
