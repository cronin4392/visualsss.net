import LinkWrapper from "@/components/LinkWrapper";
import { PageType } from "@/types/page";

export const aboutPageContent: PageType["content"] = [
  {
    type: "section",
    title: "Me",
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
              that goes by the name visualsss. My interest in VJing started back
              in 2017 after attending a music festival. I had no idea VJing even
              existed and I was blown away by what I saw. I shortly thereafter
              discovered the real-time software{" "}
              <LinkWrapper href="https://derivative.ca/">
                Touchdesigner
              </LinkWrapper>{" "}
              and became enthralled in it. Using my experience in software
              development and graphic design I began to make original content in
              it centered around typography. Check out my{" "}
              <LinkWrapper href="https://www.youtube.com/c/Visualsss">
                Youtube
              </LinkWrapper>{" "}
              to see some tutorials I&rsquo;ve made for Touchdesigner and see
              some of my work on my{" "}
              <LinkWrapper href="https://www.instagram.com/visualsssssssss/">
                Instagram
              </LinkWrapper>
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
              </LinkWrapper>{" "}
              and the font used in my logo is{" "}
              <LinkWrapper href="https://www.generaltypestudio.com/fonts/pilat">
                Pilat by General Type Studio
              </LinkWrapper>
              . The videos in the background are streamed using{" "}
              <LinkWrapper href="https://en.wikipedia.org/wiki/HTTP_Live_Streaming">
                HLS
              </LinkWrapper>
              . Hit the play button on the homepage to experience the visualizer
              and switch the videos.
            </p>
          </>
        ),
      },
    ],
  },
];
