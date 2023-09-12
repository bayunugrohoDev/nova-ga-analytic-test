import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { Mixpanel } from "../core/services/mixpanel";

import Hero from "@/components/Hero";
import Article from "@/components/Article";
import Button from "@/components/Button";
import styles from "@/styles/Home.module.css";

import firstSectionImage from "../../public/section1.png";
import secondSectionImage from "../../public/section2.png";
import thirdSectionImage from "../../public/section3.png";
import firstSectionMobileImage from "../../public/section1.mobile.png";

const scrollToForm = () => {
  document.getElementById("join").scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });

  Mixpanel.track("Join Waitlist CTA Clicked");
};

export default function Home() {
  const router = useRouter();

  // set scroll restoration to manual
  useEffect(() => {
    if (window.history.scrollRestoration !== "manual") {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    Mixpanel.track("Page View", {
      "Page Title": "Home",
      "Page URL": window.location.href,
    });
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
        <meta name="description" content="The world from a friendly place." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.section}>
          <Hero
            title={
              <>
                Discover a World, From a <strong>Friendly</strong> Place
              </>
            }
            description="Nova Circle is your world of inspiration, connecting friends and likeminded individuals to uncover new experiences and hotspots. Say goodbye to endless searches for the perfect spot for cocktails, a romantic dinner, or a top-notch yoga studio. Our feed is packed with curated content from your network, making every moment and adventure effortless and enjoyable. Discover what you're looking for, even if you don't realize it yet."
          ></Hero>
          <Image
            src={firstSectionImage}
            alt="First section image"
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
                Find new Hotspots and Share Your <strong> own </strong> Hidden
                Gems Find new
              </>
            }
            description="Find unique and off-the-beaten-path hangouts, save your favorite spots, and see the world through other explorers’ eyes. Join us in crafting a vault of experiences that inspire you, your friends, and others to create a unique archive of amazing experiences - whether it’s a local restaurant, boutique hotel, secluded running trail, coffee shop, or the best playground for your pooch."
          />
        </section>

        <section className={styles.section}>
          <Article
            title={
              <>
                Be Part of a <strong>Vibrant Community</strong>
              </>
            }
            description="Nova Circle isn't just an app; it's a community fueling your passion for discovering new places and experiences. Nova Circle lets you explore destinations and spots based on recommendations by those you trust. Connect with friends and like-minded members who share your interests, whether you’re an avid traveler seeking fresh horizons or looking to uncover hidden gems in your hometown. Join Nova Circle today to begin your journey of friendship, inspiration, and unforgettable adventures."
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
