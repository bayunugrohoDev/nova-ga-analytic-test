import Head from "next/head";
import Image from "next/image";

import Article from "@/components/Article";
import Button from "@/components/Button";
import Testimonials from "@/components/Testimonials";
import styles from "@/styles/Home.module.css";

import firstSectionImage from "../../public/section1.png";
import secondSectionImage from "../../public/section2.png";
import thirdSectionImage from "../../public/section3.png";

export default function Home() {
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
            title="Let’s see the world. Let’s share the world."
            description="Embrace the beauty of the world and share your 
              experiences with others. With Nova Circle, you can effortlessly 
              plan your next adventure and connect with like-minded travelers 
              from all around the globe. Explore new destinations, indulge in local 
              cultures, and create memories that will last a lifetime."
          >
            <Button href="#join">Join waitlist</Button>
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
      <Testimonials />
    </>
  );
}
