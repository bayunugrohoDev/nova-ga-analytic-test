import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

import googleAnalyticsService from "@/core/services/googleAnalyticsService";

import { storeLink } from "@/core/constants/storeLink";

import Hero from "@/components/Hero";
import Article from "@/components/Article";
import styles from "@/styles/Meta.module.css";

import badgeAppleStore from "../../public/badge-apple-store-download.svg";
import badgeGooglePlay from "../../public/badge-google-play-download.svg";

import firstSectionImage from "../../public/meta-section1.png";
import secondSectionImage from "../../public/meta-section2.png";
import firstSectionMobileImage from "../../public/section1.mobile.png";

export default function Meta() {
  const router = useRouter();

  // handle action for click on 'Download our app' button
  const handleClickAppStore = () => {
    googleAnalyticsService.trackClickAppStore();
    window.open(storeLink.appStoreLink, "_blank");
  };

  const handleClickGooglePlay = () => {
    googleAnalyticsService.trackClickGooglePlay();
    window.open(storeLink.googleAppLink, "_blank");
  };

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
        <title>Nova Circle | Meta</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Share once, explore together" />
        <meta property="og:title" content="Nova Circle" />
        <meta
          property="og:description"
          content="Share once, explore together"
        />
      </Head>
      <main className={styles.main}>
        <section className={`${styles.section} ${styles.spaceBottom}`}>
          <Hero
            title={
              <>
                <strong>All the best</strong> spots <strong>in one place. </strong>
                <strong> Recommended by those you </strong>trust
              </>
            }
            description={
              <>
                <p>
                  Nova Circle is your free single space for saving and sharing
                  top recommendations around the world while getting inspired by
                  likeminded people. Find out what restaurants, hotels, bar and
                  acitivites people in your circle recommend, and forget about
                  the hustle to ask around for recommendations when going
                  somewhere new.
                </p>
                <br />
                <p> #Eat - #Stay - #Drink - #Do</p>
                <div className={styles.badges}>
                  <p className={styles.header}>
                    <strong>Download our app. It's free</strong>
                  </p>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleClickAppStore()}
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
                    onClick={() => handleClickGooglePlay()}
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
          {/* <Image
            src={firstSectionMobileImage}
            alt="First section image"
            className={styles.firstSectionMobileImage}
          /> */}
        </section>

        <section className={styles.section}>
          <Article
            title={
              <>
                <strong>Why Nova Circle? </strong>
              </>
            }
            description={
            <>
                <div>
                    <Image width={80} height={80} src="/icons/user-single.svg" alt="" />
                    <p>Organize all your favorite spots</p>
                </div>
                <div>
                    <Image width={80} height={80} src="/icons/drink.svg" alt="" />
                    <p>Share your top picks from the world</p>
                </div>
                <div>
                    <Image width={80} height={80} src="/icons/wishlist.svg" alt="" />
                    <p>Create curated lists</p>
                </div>
                <div>
                    <Image width={80} height={80} src="/icons/map.svg" alt="" />
                    <p>Get inspired for your next adventure by genuine recommendations</p>
                </div>
            </>}
          />
          <Image
            src={secondSectionImage}
            alt="Nova Circle app views"
            className={styles.secondSectionImage}
          />
        </section>
      </main>
    </>
  );
}

