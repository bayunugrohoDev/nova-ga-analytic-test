import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import Card from "./Card";
import styles from "@/styles/Testimonials.module.css";

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

export default function Testimonials() {
  return (
    <section className={styles.container}>
      <Swiper
        spaceBetween={30}
        slidesPerView="auto"
        className={styles.swiper}
        centeredSlides={true}
        centerInsufficientSlides={true}
        autoplay={{ delay: 6000 }}
        speed={600}
        initialSlide={Math.min(TESTIMONIAL_PERSONS.length / 2)}
        pagination={{
          clickable: true,
          bulletClass: `swiper-pagination-bullet ${styles.indicator}`,
          bulletActiveClass: `swiper-pagination-bullet-active ${styles.indicatorActive}`,
        }}
        modules={[Autoplay, Pagination]}
      >
        {TESTIMONIAL_PERSONS.map((person) => (
          <SwiperSlide
            key={person.name}
            style={{ maxWidth: "auto", width: "800px" }}
          >
            {({ isActive }) => (
              <Card
                avatar={person.avatar}
                title={person.name}
                description={person.testimonial}
                blurred={!isActive}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
