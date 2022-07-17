import { GetStaticProps, NextPage } from "next";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Background from "@/components/Background";

type PageProps = {};

const Page: NextPage<PageProps> = () => {
  return (
    <>
      <Layout>
        <Header />
        <Menu />
      </Layout>
      <Background />
    </>
  );
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  return {
    props: {},
  };
};

export default Page;
