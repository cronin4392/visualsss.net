import { NextPage } from "next";
import HomePage from "@/layouts/HomePage";
import HeadTag from "@/components/HeadTag";

const Page: NextPage = () => {
  return (
    <>
      <HeadTag />
      <HomePage />
    </>
  );
};

export default Page;
