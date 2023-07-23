import { NextPage } from "next";
import PageLayout from "@/layouts/PageLayout";
import HeadTag from "@/components/HeadTag";
import Header from "@/components/Header";
import Page from "@/components/Page";
import LinkWrapper from "@/components/LinkWrapper";

const AboutPage: NextPage = () => {
  return (
    <>
      <HeadTag pageTitle="about" />
      <PageLayout
        header={
          <Header
            subLine="About"
            link={{
              text: "Press Kit",
              href: "https://drive.google.com/drive/folders/1MKpHQ67uDbJqUPu3f0FsD4PUJb-xvRVU?usp=share_link",
            }}
          />
        }
        content={
          <Page
            content={
              <>
                <p>
                  VISUALSSS is a{" "}
                  <LinkWrapper href="https://en.wikipedia.org/wiki/VJing">
                    VJ
                  </LinkWrapper>{" "}
                  and digital artist who creates real-time experiences for
                  events spanning from live music acts to art installations. By
                  seamlessly mixing typography and real-time inputs, like
                  cameras and microphones, they create dynamic responsive
                  visuals that react spontaneously to the event.
                </p>
                <p>
                  I have played for a variety of electronic music genres
                  including Drum and Bass, Dubstep, Techno, Bass, Hip-hop,
                  House, and Disco among others.
                </p>
                <p>
                  My interest in VJing started back in 2017 after attending a
                  music festival. I had no idea VJing even existed and I was
                  blown away by what I saw. I shortly thereafter discovered the
                  real-time software{" "}
                  <LinkWrapper href="https://derivative.ca/">
                    Touchdesigner
                  </LinkWrapper>{" "}
                  and became enthralled in it. Using my experience in software
                  development and graphic design I began to make original
                  content.
                </p>
              </>
            }
          />
        }
      />
    </>
  );
};

export default AboutPage;
