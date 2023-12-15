import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

import googleAnalyticsService from "@/core/services/googleAnalyticsService";
import { storeLink } from "@/core/constants/storeLink";

import Hero from "@/components/Hero";
import Article from "@/components/Article";
import Testimonials from "@/components/Testimonials";

import styles from "@/styles/Meta.module.css";

import badgeAppleStore from "../../public/badge-apple-store-download.svg";
import badgeGooglePlay from "../../public/badge-google-play-download.svg";
import heroImage from "../../public/hero-meta.png";
import firstSectionImage from "../../public/section-1-meta.png";

export default function Meta() {
  const router = useRouter();

  const WHY_NOVA_CIRCLE_LISTS = [
    {
      img_src: "/icons/user-single.svg",
      description: "Organize all your favorite spots",
      alt: "User icon",
    },
    {
      img_src: "/icons/drink.svg",
      description: "Share your top picks from the world",
      alt: "Drink icon",
    },
    {
      img_src: "/icons/wishlist.svg",
      description: "Create curated lists",
      alt: "Wishlist icon",
    },
    {
      img_src: "/icons/map.svg",
      description: "Get inspired by genuine recommendations",
      alt: "Discover icon",
    },
  ];
  // handle action for click on 'Download our app' button
  const handleClickAppStore = () => {
    googleAnalyticsService.trackClickAppStore();
    window.open(storeLink.appStoreLinkForMetaPage, "_blank");
  };

  const handleClickGooglePlay = () => {
    googleAnalyticsService.trackClickGooglePlay();
    window.open(storeLink.googleAppLinkForMetaPage, "_blank");
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
    router.events.on(
      "routeChangeStarAll the best spots in one place. Recommended by those you trustt",
      handleRouteChange
    );
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
          content="All the best spots in one place. Recommended by those you trust"
        />
        <meta property="og:title" content="Nova Circle" />
        <meta
          property="og:description"
          content="All the best spots in one place. Recommended by those you trust"
        />
      </Head>
      <main className={styles.main}>
        <section className={styles.section}>
          <Hero
            title={
              <>
                <strong>All the best</strong> spots{" "}
                <strong>in one place. </strong>
                <strong> Recommended by those you </strong>trust
              </>
            }
            description={
              <>
                <p>
                  Nova Circle is your free single space for saving and sharing
                  top recommendations around the world while getting inspired by
                  likeminded people. Find out what restaurants, hotels, bar and
                  activities people in your circle recommend, and forget about
                  the hustle to ask around for recommendations when going
                  somewhere new.
                </p>
                <br />
                <p> #Eat #Stay #Drink #Do</p>

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
            alt="Hero"
            priority
            className={styles.heroImage}
          />
        </section>

        <section className={styles.section}>
          <Article
            title={
              <>
                <strong>Why Nova Circle?</strong>
              </>
            }
            description={
              <>
                {WHY_NOVA_CIRCLE_LISTS.map((item, idx) => (
                  <div key={idx} className={styles.list}>
                    <Image
                      width={80}
                      height={80}
                      src={item.img_src}
                      alt={item.alt}
                    />
                    <p>{item.description}</p>
                  </div>
                ))}
              </>
            }
          />
          <Image
            src={firstSectionImage}
            alt="Nova Circle app"
            className={styles.firstSectionImage}
          />
        </section>
      </main>
      <Testimonials />
    </>
  );
}
