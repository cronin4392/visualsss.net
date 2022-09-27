import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {process.env.NODE_ENV === "production" && (
          <script
            data-host="https://microanalytics.io"
            data-dnt="false"
            src="https://microanalytics.io/js/script.js"
            id="ZwSg9rf6GA"
            async
            defer
          ></script>
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
