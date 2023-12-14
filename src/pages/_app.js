import { useEffect } from "react";
import { useRouter } from "next/router";

import Layout from "@/components/Layout";

import "@/styles/globals.css";

import { config } from "@/core/constants/config";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (config.facebookPixel.FACEBOOK_PIXEL_ID) {
      console.log('ada')
      import("react-facebook-pixel")
        .then((x) => x.default)
        .then((ReactPixel) => {
          ReactPixel.init(config.facebookPixel.FACEBOOK_PIXEL_ID);
          ReactPixel.pageView();
          router.events.on("routeChangeComplete", () => {
            ReactPixel.pageView();
          });
        });
    }
  }, [router.events]);

  return  (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
