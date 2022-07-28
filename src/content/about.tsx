import LinkWrapper from "@/components/LinkWrapper";
import { PageType } from "@/types/page";

export const aboutPageContent: PageType["content"] = [
  {
    type: "section",
    title: "About",
    content: [
      {
        type: "content",
        content: (
          <>
            <p>
              I am a{" "}
              <LinkWrapper href="https://en.wikipedia.org/wiki/VJing">
                VJ
              </LinkWrapper>{" "}
              that goes by the name visualsssssssss. My interest in VJing
              started back in 2017 after being inspired while attending
              electronic music shows. I shortly thereafter discovered the
              real-time software{" "}
              <LinkWrapper href="https://derivative.ca/">
                Touchdesigner
              </LinkWrapper>{" "}
              and became enthralled in it. Using my experience in software
              development and graphic design I began to make original content in
              it centered around typography.
            </p>
          </>
        ),
      },
    ],
  },
  {
    type: "section",
    title: "The Site",
    content: [
      {
        type: "content",
        content: (
          <>
            <p>
              This site is built with{" "}
              <LinkWrapper href="https://nextjs.org/">Next.js</LinkWrapper>. You
              can find the source code here on{" "}
              <LinkWrapper href="https://github.com/cronin4392/visualsssssssss.com">
                Github
              </LinkWrapper>
              . The primary font used is{" "}
              <LinkWrapper href="https://www.colophon-foundry.org/typefaces/system85/">
                System85 by Colophon Foundry
              </LinkWrapper>
              . The videos in the background are streamed using{" "}
              <LinkWrapper href="https://en.wikipedia.org/wiki/HTTP_Live_Streaming">
                HLS
              </LinkWrapper>
              .
            </p>
          </>
        ),
      },
    ],
  },
];
