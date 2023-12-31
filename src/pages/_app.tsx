import Icons from "@/Components/Icons/Icons";
import "@/styles/global.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
      <Head>
        <title>Coin</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/icon.png" />
      </Head>
      {/* <AccountProvider> */}
      <Component {...pageProps} />
      <Icons />
      {/* </AccountProvider> */}
    </>
  );
}
