import { InferGetStaticPropsType, GetStaticProps, NextPage } from "next";
import { getParam } from "@/utils/urls";
import { Video, Youtube, content } from "@/content/content";
import PageLayout from "@/layouts/PageLayout";
import HeadTag from "@/components/HeadTag";
import Header from "@/components/Header";
import Videos from "@/components/VideoList";

const ContentPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  content,
}) => {
  return (
    <>
      <HeadTag />
      <PageLayout header={<Header subLine="Content" />} content={<Videos />} />
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
