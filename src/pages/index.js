import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

import googleAnalyticsService from "@/core/services/googleAnalyticsService";

import { storeLink } from "@/core/constants/storeLink";

import Hero from "@/components/Hero";
import Article from "@/components/Article";
import Testimonials from "@/components/Testimonials";
import styles from "@/styles/Home.module.css";

import badgeAppleStore from "../../public/badge-apple-store-download.svg";
import badgeGooglePlay from "../../public/badge-google-play-download.svg";

import heroImage from "../../public/hero-home.png";
import firstSectionImage from "../../public/section-1-home.png";
import secondSectionImage from "../../public/section-2-home.png";

export default function Home() {
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
        <title>Nova Circle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="All the best spots in one place. Recommended by those you trust."
        />
        <meta property="og:title" content="Nova Circle" />
        <meta
          property="og:description"
          content="All the best spots in one place. Recommended by those you trust."
        />
      </Head>
      <main className={styles.main}>
        <section className={styles.section}>
          <Hero
            title={
              <>
                <strong>All the best</strong> spots
                <strong> in one place. </strong>
                <strong>Recommended by those you </strong>trust.
              </>
            }
            description={
              <>
                <p>
                  Nova Circle is your single space for saving and sharing top
                  recommendations around the world while getting inspired by
                  likeminded people. Find out which restaurants, hotels, bars
                  and activities people in your circle recommend, and forget
                  about the hustle to ask around for recommendations when going
                  somewhere new.
                </p>
                <br />
                <p>#Eat #Stay #Drink #Do</p>

                <div className={styles.badges}>
                  <p className={styles.header}>
                    <strong>Download our app. It’s free</strong>
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
            src={heroImage}
            alt="First section image"
            priority
            className={styles.heroImage}
          />
        </section>

        <section className={styles.section}>
          <Image
            src={firstSectionImage}
            alt="Nova Circle app views"
            className={styles.firstSectionImage}
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
            src={secondSectionImage}
            alt="Third section image"
            className={styles.secondSectionImage}
          />
        </section>
      </main>
      <Testimonials />
    </>
  );
}
