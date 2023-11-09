import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

import { initReactGA, trackClickAppStore, trackClickPlayStore } from "@/core/services/googleAnalytics";

import Hero from "@/components/Hero";
import Article from "@/components/Article";
import styles from "@/styles/Home.module.css";

import badgeAppleStore from "../../public/badge-apple-store-download.svg";
import badgeGooglePlay from "../../public/badge-google-play-download.svg";

import firstSectionImage from "../../public/section1.png";
import secondSectionImage from "../../public/section2.png";
import thirdSectionImage from "../../public/section3.png";
import firstSectionMobileImage from "../../public/section1.mobile.png";

export default function Home() {
  
  initReactGA();
 
  const router = useRouter();

  // set scroll restoration to manual
  useEffect(() => {
    if (window.history.scrollRestoration !== "manual") {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // handle and store scroll position
  useEffect(() => {
    const handleRouteChange = () => {
      window.sessionStorage.setItem(
        "scrollPosition",
        window.scrollY.toString()
      );
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  // restore scroll position
  useEffect(() => {
    if (window.sessionStorage.scrollPosition) {
      window.scrollTo(
        0,
        Number(window.sessionStorage.getItem("scrollPosition"))
      );
      window.sessionStorage.removeItem("scrollPosition");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Nova Circle</title>
        <meta
          name="description"
          content="Discover a World, From a Friendly Place"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.section}>
          <Hero
            title={
              <>
                <strong>Discover a World, From a</strong> Friendly
                <strong> Place</strong>
              </>
            }
            description={
              <>
                <p>
                  Nova Circle is your world of inspiration, connecting friends
                  and like-minded individuals to uncover new experiences and
                  hotspots. Say goodbye to endlessly searching for the perfect
                  spot for cocktails, a romantic dinner, or yoga studio. Our
                  feed is packed with curated content from your network,
                  inspiring you in an effortless and enjoyable way.
                </p>
                <div className={styles.badges}>
                  <p className={styles.header}>
                    <strong>Download our app</strong>
                  </p>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={()=> trackClickAppStore()}
                  >
                    <Image
                      src={badgeAppleStore}
                      alt="Download on the App Store"
                      className={styles.badge}
                    />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={()=> trackClickPlayStore()}
                  >
                    <Image
                      src={badgeGooglePlay}
                      alt="Get it on Google Play"
                      className={styles.badge}
                    />
                  </a>
                </div>
              </>
            }
          ></Hero>
          <Image
            src={firstSectionImage}
            alt="First section image"
            priority
            className={styles.firstSectionImage}
          />
          <Image
            src={firstSectionMobileImage}
            alt="First section image"
            className={styles.firstSectionMobileImage}
          />
        </section>

        <section className={styles.section}>
          <Image
            src={secondSectionImage}
            alt="Nova Circle app views"
            className={styles.secondSectionImage}
          />
          <Article
            title={
              <>
                <strong>Find new Hotspots and Share </strong> Your own
                <strong> Hidden Gems</strong>
              </>
            }
            description="Discover unique and off-the-beaten-path hangouts, save your favorite spots, and see the world through other explorers’ eyes. Join us in crafting a unique archive of amazing experiences that inspire you, your friends, and others - whether it’s a local restaurant, boutique hotel, running trail, coffee shop, or playground for your pooch."
          />
        </section>

        <section className={styles.section}>
          <Article
            title={
              <>
                <strong>Be Part of a</strong> Vibrant Community
              </>
            }
            description="Nova Circle is your social app for discovering the places to go and things to do, built on recommendations by those you trust. Connect with friends and likeminded members who share your interests, whether you’re seeking fresh horizons or looking to uncover hidden gems in your hometown. Join us today to begin your journey of friendship and inspiration."
          />
          <Image
            src={thirdSectionImage}
            alt="Third section image"
            className={styles.thirdSectionImage}
          />
        </section>
      </main>
    </>
  );
}
