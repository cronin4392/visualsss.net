import { GetStaticProps, NextPage } from "next";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";

type PageProps = {};

const Page: NextPage<PageProps> = () => {
  return (
    <Layout>
      <Hero
        title="Next.js Starter Kit"
        text="This is a starter kit for Next.js using Typescript and SCSS."
      />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  return {
    props: {},
  };
};

export default Page;
