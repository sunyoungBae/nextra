import "./style.css";

import Head from "next/head";

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  );
}
