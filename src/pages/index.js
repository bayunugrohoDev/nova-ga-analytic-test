import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

import Hero from "@/components/Hero";
import Article from "@/components/Article";
import Button from "@/components/Button";
import MessageBubble from "@/components/MessageBubble";
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
};

export default function Home() {
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
        <meta name="description" content="The world from a friendly place." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.section}>
          <Hero
            title={
              <>
                <strong>
                  The world from <br />a
                </strong>{" "}
                friendly <strong>place</strong>
              </>
            }
            description="Nova Circle is a unique way to inspire and get inspired to find new adventures by bringing together like-minded hotspot hunters from around the world. If you have ever felt the disappointment of a fantastic trip with your friends ending in an endless search for that one perfect restaurant, Nova Circle's feed of inspiration from like-minded people will be a like a dream. It is the new way to effortlessly make the most of every moment and every trip!"
          >
            <div className={styles.bubbleContainer}>
              <Button onClick={scrollToForm}>Join waitlist</Button>
            </div>
          </Hero>
          <Image
            src={firstSectionImage}
            alt="First section image"
            className={styles.firstSectionImage}
            priority
            width={620}
            height={911}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
          <Image
            src={firstSectionMobileImage}
            alt="First section image"
            className={styles.firstSectionMobileImage}
            priority
            width={163}
            height={477}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </section>

        <section className={styles.section}>
          <Image
            src={secondSectionImage}
            alt="Nova Circle app views"
            className={styles.secondSectionImage}
            priority
            width={1023}
            height={875}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
          <Article
            title={
              <>
                <strong>Find new</strong> hotspots{" "}
                <strong>and share your</strong> own{" "}
                <strong>hidden gems!</strong>
              </>
            }
            description="Find unique and off-the-beaten-path hangouts, save your favorite spots, and see the world through other explorer’s eyes. Share your own discoveries and inspire others to find new places. Together, we can make the most of every moment and create a unique archive of amazing experiences."
          />
        </section>

        <section className={styles.section}>
          <Article
            title={
              <>
                <strong>Be</strong> part{" "}
                <strong>of a diverse community of</strong> like-minded people.
              </>
            }
            description="Whether you’re a seasoned traveler or just want to be up-to-date with the hot spots in your home town, with Nova Circle, you can fashion your own community of explorers who inspire you. Find people who enjoy the same spots as you do, and grow your circle as you go!"
          />
          <Image
            src={thirdSectionImage}
            alt="Third section image"
            className={styles.thirdSectionImage}
            width={831}
            height={1024}
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          />
        </section>
      </main>
    </>
  );
}
