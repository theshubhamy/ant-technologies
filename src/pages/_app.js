import "@/styles/globals.css";
import Head from "next/head";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ANT Information Technologies</title>
        <meta
          name="description"
          content="ANT Information Technologies - Transforming businesses with cutting-edge solutions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
