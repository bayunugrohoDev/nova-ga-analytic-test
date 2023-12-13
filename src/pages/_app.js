import { useEffect } from "react";
import { useRouter } from "next/router";

import Layout from "@/components/Layout";

import "@/styles/globals.css";
import { config } from "@/core/constants/config";
import { fbPixelTrackName } from "@/core/constants/fbPixel";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(config.facebookPixel.FACEBOOK_PIXEL_ID) // facebookPixelId
        ReactPixel.pageView()

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
          ReactPixel.track(fbPixelTrackName.pageView, {});
        })
      })
      
  }, [router.events])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
