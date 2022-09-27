import { useEffect } from "react";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import PageLayout from "@/layouts/PageLayout";
import HeadTag from "@/components/HeadTag";
import Header from "@/components/Header";
import SecretOverlay from "@/components/SecretOverlay";
import { useSssState } from "@/context/SssContextProvider";

const SystemMalfunctionPage = () => {
  const router = useRouter();
  const { sss } = useSssState();

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

export default SystemMalfunctionPage;
