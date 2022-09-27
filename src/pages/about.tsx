import { GetStaticProps, NextPage } from "next";
import PageLayout from "@/layouts/PageLayout";
import HeadTag from "@/components/HeadTag";
import Header from "@/components/Header";
import Page from "@/components/Page";
import LinkWrapper from "@/components/LinkWrapper";

const AboutPage: NextPage = () => {
  return (
    <>
      <HeadTag />
      <PageLayout
        header={<Header subLine="About" />}
        content={
          <Page
            content={
              <p>
                I am a{" "}
                <LinkWrapper href="https://en.wikipedia.org/wiki/VJing">
                  VJ
                </LinkWrapper>{" "}
                that goes by the name visualsss. My interest in VJing started
                back in 2017 after attending a music festival. I had no idea
                VJing even existed and I was blown away by what I saw. I shortly
                thereafter discovered the real-time software{" "}
                <LinkWrapper href="https://derivative.ca/">
                  Touchdesigner
                </LinkWrapper>{" "}
                and became enthralled in it. Using my experience in software
                development and graphic design I began to make original content
                in it centered around typography. Check out my{" "}
                <LinkWrapper href="https://www.youtube.com/c/Visualsss">
                  Youtube
                </LinkWrapper>{" "}
                to see some tutorials I&rsquo;ve made for Touchdesigner and see
                some of my work on my{" "}
                <LinkWrapper href="https://www.instagram.com/visualsssssssss/">
                  Instagram
                </LinkWrapper>
              </p>
            }
          />
        }
      />
    </>
  );
};

export default AboutPage;
