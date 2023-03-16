import Head from "next/head";
import Image from "next/image";

import Article from "@/components/Article";
import Button from "@/components/Button";
import Card from "@/components/Card";
import styles from "@/styles/Home.module.css";

import firstSectionImage from "../../public/section1.png";
import secondSectionImage from "../../public/section2.png";
import thirdSectionImage from "../../public/section3.png";
import lanaImage from "../../public/person1.png";
import johnImage from "../../public/person2.png";
import diannaImage from "../../public/person3.png";
import joeImage from "../../public/person4.png";
import rikkeImage from "../../public/person5.png";

const TESTIMONIAL_PERSONS = [
  {
    avatar: lanaImage,
    name: "Lana Smith",
    testimonial:
      "I absolutely love this travel app! It's so easy to use and has all the features I need to plan my perfect vacation. The interface is user-friendly, making it easy to use and find the needed info. Plus, the networking feature allows me to connect with other travelers and get great recommendations for things to do and places to eat. I highly recommend this app to anyone looking to make travel planning a breeze!",
  },
  {
    avatar: johnImage,
    name: "John Doe",
    testimonial:
      "I'm so impressed with this travel app! Its great features, such as the ability to create custom lists and find personalized recommendations, have made my travel experiences so much better. I especially love the networking aspect, which has allowed me to connect with like-minded travelers and make new friends. I highly recommend this app to anyone who wants to travel with ease.",
  },
  {
    avatar: diannaImage,
    name: "Diana Sloan",
    testimonial:
      "I've tried many travel apps, but this one is by far the best. The app's usability is fantastic, making it a joy to use. And the networking feature is amazing! I've made so many new friends and received valuable recommendations from other travelers. If you want a travel app that's easy to use, has great features, and allows you to network with other travelers, this is the one for you!",
  },
  {
    avatar: joeImage,
    name: "Joe Evans",
    testimonial:
      "I can't say enough good things about this travel app! It's so easy to use and has all the features I need to plan my trips. The interface is intuitive, making it easy to find what I need. The networking feature is also fantastic, allowing me to connect with other travelers and get great tips on local hotspots. I highly recommend this app to anyone looking for a great travel companion!",
  },
  {
    avatar: rikkeImage,
    name: "Rikke Klas",
    testimonial:
      "I've been using this travel app for a while now, and it's become an essential tool for all my trips. The app's great features, such as the ability to create custom lists and receive personalized recommendations, have made my travel experiences so much better. The usability is fantastic, and the networking feature is a game-changer! I've met so many amazing people and gotten insider tips that have made my trips unforgettable",
  },
];

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
            <Button href="#join">Join waitlist</Button>
          </Article>
          <Image src={firstSectionImage} alt="First section image" priority />
        </section>

        <section className={styles.section}>
          <Image src={secondSectionImage} alt="Second section image" priority />
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
            title={
              <>
                Find, save, see and
                <br />
                share hidden gems.
              </>
            }
            description="Find unique and off-the-beaten-path destinations, save your
              favorite spots, and see the world through the eyes of other
              travelers. Share your own discoveries and inspire others to
              explore new places. Whether you're a seasoned traveler or just
              starting out, Nova Circle makes it easy to find, save, see and
              share the spots that make travel so special."
          />
          <Image src={thirdSectionImage} alt="Third section image" />
        </section>

        <section className={styles.section}>
          {TESTIMONIAL_PERSONS.map((person) => (
            <Card
              key={person.name}
              avatar={person.avatar}
              title={person.name}
              description={person.testimonial}
            />
          ))}
        </section>
      </main>
    </>
  );
}
