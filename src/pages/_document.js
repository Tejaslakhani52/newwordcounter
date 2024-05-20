import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>
          Free Count the Word - Word Counter & Character Counter Tool
        </title>
        <meta
          content="Boost your productivity with our Free Word & Character Counter Tool! Instantly count the words, characters, and spaces with ease."
          name="description"
        />
        <meta
          content="Free Word Counter: Count Words & Character Online for Any Length"
          property="og:title"
        />
        <meta
          content="Use our free online editor to count words and characters, check keyword density, and correct writing mistakes instantly. Try it Now."
          property="og:description"
        />
        <meta
          content="Free Word Counter: Count Words & Character Online for Any Length"
          property="twitter:title"
        />
        <meta
          content="Use our free online editor to count words and characters, check keyword density, and correct writing mistakes instantly. Try it Now."
          property="twitter:description"
        />
        <meta property="og:type" content="website" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Word Counter" />
        <meta name="apple-web-app-capable" content="yes" />
        <link rel="shortcut icon" href="./favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <body
        className={`bg-[#f6f8fa]`}
        style={{ fontFamily: "'Inter', sans-serif", overflowX: "hidden" }}
      >
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-42GPKPH6MR"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-42GPKPH6MR');
        `,
          }}
        />

        <meta
          name="google-site-verification"
          content="L6aG5-1IxMC-XrlotE0iqwY6MkUC2AT9nLAAqIX1brQ"
        />

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
