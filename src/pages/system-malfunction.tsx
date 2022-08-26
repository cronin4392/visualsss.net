import { GetStaticProps, NextPage } from "next";
import PageLayout from "@/layouts/PageLayout";
import HeadTag from "@/components/HeadTag";
import Header from "@/components/Header";
import Page from "@/components/Page";
import SecretOverlay from "@/components/SecretOverlay";

type PageProps = {};

const SystemMalfunctionPage: NextPage<PageProps> = () => {
  return (
    <>
      <HeadTag />
      <PageLayout
        header={<Header subLine={false} />}
        content={<SecretOverlay />}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  return {
    props: {},
  };
};

export default SystemMalfunctionPage;
