import { InferGetStaticPropsType, GetStaticProps, NextPage } from "next";
import { getParam } from "@/utils/urls";
import content, { Video, Youtube, isVideo } from "@/data/videos";
import PageLayout from "@/layouts/PageLayout";
import HeadTag from "@/components/HeadTag";
import Header from "@/components/Header";
import VideoDetail from "@/components/VideoDetail";
import LinkWrapper from "@/components/LinkWrapper";

const ContentPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  content,
  projectVideos,
}) => {
  return (
    <>
      <HeadTag />
      <PageLayout
        header={
          <Header
            subLine={<LinkWrapper href="/content">Content</LinkWrapper>}
          />
        }
        content={<VideoDetail video={content} projectVideos={projectVideos} />}
      />
    </>
  );
};

const getProjectVideos = (video: Youtube | Video) =>
  video.__type === "video" && video.project
    ? (content.filter(
        (v) => isVideo(v) && v.project === video.project && v.id !== video.id
      ) as Array<Video>)
    : [];

export const getStaticProps: GetStaticProps<{
  content: Youtube | Video;
  projectVideos: Array<Video>;
}> = async ({ params }) => {
  const id = getParam(params, "id");
  const video = content.find((v) => v.id === id);

  if (!video || video.__type === "instagram") {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      content: video,
      projectVideos: getProjectVideos(video),
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
