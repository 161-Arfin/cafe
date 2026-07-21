import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="id" className="scroll-smooth">
      <Head>
        <link rel="icon" type="image/png" href="/images/lyons-logo.png" />
        <link rel="apple-touch-icon" href="/images/lyons-logo.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
