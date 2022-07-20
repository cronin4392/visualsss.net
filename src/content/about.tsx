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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed
              facilisis ipsum. Fusce in risus sit amet justo fringilla iaculis.
              Phasellus tincidunt erat sit amet mi blandit tempor. Donec ut
              hendrerit orci, sed egestas elit. Aenean fermentum dignissim mi,
              et gravida nisl accumsan id. Suspendisse porta nisi non ante
              iaculis posuere. Curabitur pretium turpis id facilisis lacinia.
              Donec quis gravida mauris. Aliquam scelerisque urna vel metus
              consequat euismod. Suspendisse aliquam ullamcorper ultricies.
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
              <LinkWrapper href="https://nextjs.org/">Next.js</LinkWrapper> yada
              yada yada
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed
              facilisis ipsum. Fusce in risus sit amet justo fringilla iaculis.
              Phasellus tincidunt erat sit amet mi blandit tempor. Donec ut
              hendrerit orci, sed egestas elit. Aenean fermentum dignissim mi,
              et gravida nisl accumsan id. Suspendisse porta nisi non ante
              iaculis posuere. Curabitur pretium turpis id facilisis lacinia.
              Donec quis gravida mauris. Aliquam scelerisque urna vel metus
              consequat euismod. Suspendisse aliquam ullamcorper ultricies.
            </p>
          </>
        ),
      },
    ],
  },
];
