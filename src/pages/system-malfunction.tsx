import { GetStaticProps, NextPage } from "next";
import PageLayout from "@/layouts/PageLayout";
import HeadTag from "@/components/HeadTag";
import Header from "@/components/Header";
import SecretOverlay from "@/components/SecretOverlay";
import { useSssState } from "@/context/SssContextProvider";
import { useEffect } from "react";
import { useRouter } from "next/router";

type PageProps = {};

const SystemMalfunctionPage: NextPage<PageProps> = () => {
  const router = useRouter();
  const { sClicks, sss } = useSssState();

  useEffect(() => {
    if (!sss) {
      router.replace("/");
    }
  }, [sss, router]);

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
