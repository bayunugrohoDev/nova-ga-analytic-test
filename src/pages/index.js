import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

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
        <meta
          name="description"
          content="Let’s see the world. Let’s share the world."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.section}>
          <Article
            title={
              <>
                Let’s see the world.
                <br />
                Let’s share the world.
              </>
            }
            description="Embrace the beauty of the world and share your 
              experiences with others. With Nova Circle, you can effortlessly 
              plan your next adventure and connect with like-minded travelers 
              from all around the globe. Explore new destinations, indulge in local 
              cultures, and create memories that will last a lifetime."
          >
            <div className={styles.bubbleContainer}>
              <Button onClick={scrollToForm}>Join waitlist</Button>
            </div>
          </Article>
          <Image
            src={firstSectionImage}
            alt="First section image"
            className={styles.firstSectionImage}
            priority
            width={674}
            height={990}
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
            alt="Second section image"
            className={styles.secondSectionImage}
            priority
            width={679}
            height={922}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
          <Article
            title={
              <>
                Expand your
                <br />
                circle of friends.
              </>
            }
            description="Whether you're a seasoned traveler or just looking to 
              explore your hometown, with Nova Circle you'll experience the moments of 
              a diverse, yet likeminded, community of explorers."
          />
        </section>

        <section className={styles.section}>
          <Article
            title="Find, save, see and share hidden gems."
            description="Find unique and off-the-beaten-path destinations, save your
              favorite spots, and see the world through the eyes of other
              travelers. Share your own discoveries and inspire others to
              explore new places. Whether you're a seasoned traveler or just
              starting out, Nova Circle makes it easy to find, save, see and
              share the spots that make travel so special."
          />
          <Image
            src={thirdSectionImage}
            alt="Third section image"
            className={styles.thirdSectionImage}
            width={673}
            height={990}
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          />
        </section>
      </main>
    </>
  );
}
