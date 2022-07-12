import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="dark">
        <Head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="author" content="Soul-Remix" />
          <meta property="og:locale" content="en_US" />
          <meta
            property="og:description"
            content="Password manager is your one stop to check your passwords and generate new passwords"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Soul Remix" />
          <meta
            name="twitter:description"
            content="Password manager is your one stop to check your passwords and generate new passwords"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
