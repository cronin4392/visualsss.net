import { GetStaticProps, NextPage } from "next";
import HomeLayout from "@/layouts/HomeLayout";
import HeadTag from "@/components/HeadTag";
import Header from "@/components/Header";
import Menu from "@/components/Menu";

const Page: NextPage = () => {
  return (
    <>
      <HeadTag />
      <HomeLayout header={<Header />} menu={<Menu />} />
    </>
  );
};

export default Page;
