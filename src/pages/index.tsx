import { GetStaticProps, NextPage } from "next";
import HeadTag from "@/components/HeadTag";
import HomeLayout from "@/components/HomeLayout";
import Header from "@/components/Header";
import Menu from "@/components/Menu";

type PageProps = {};

const Page: NextPage<PageProps> = () => {
  return (
    <>
      <HeadTag />
      <HomeLayout header={<Header />} menu={<Menu />} />
    </>
  );
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  return {
    props: {},
  };
};

export default Page;
