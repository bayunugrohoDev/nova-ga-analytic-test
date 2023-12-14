import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import Card from "./Card";
import styles from "@/styles/Testimonials.module.css";

import johnnyImage from "../../public/testimonials/johnny-e.jpg";
import paulineImage from "../../public/testimonials/pauline-k.jpg";
import sebastianImage from "../../public/testimonials/sebastian-gibrand.jpg";
import amandaImage from "../../public/testimonials/amanda-k.jpg";

const TESTIMONIAL_PERSONS = [
  {
    avatar: johnnyImage,
    name: "Johnny Edlind",
    testimonial: `"I absolutely love this travel app! It's so easy to use and has all the features I need to plan my perfect vacation. The interface is user-friendly, making it easy to use and find the needed info. Plus, the networking feature allows me to connect with other travelers and get great recommendations for things to do and places to eat. I highly recommend this app to anyone looking to make travel planning a breeze!"`,
  },
  {
    avatar: paulineImage,
    name: "Pauline Krogsbøll",
    testimonial: `"I'm so impressed with this travel app! Its great features, such as the ability to create custom lists and find personalized recommendations, have made my travel experiences so much better. I especially love the networking aspect, which has allowed me to connect with like-minded travelers and make new friends. I highly recommend this app to anyone who wants to travel with ease."`,
  },
  {
    avatar: sebastianImage,
    name: "Sebastian Gibrand (@sebastian.gibrand)",
    testimonial: `"I've tried many travel apps, but this one is by far the best. The app's usability is fantastic, making it a joy to use. And the networking feature is amazing! I've made so many new friends and received valuable recommendations from other travelers. If you want a travel app that's easy to use, has great features, and allows you to network with other travelers, this is the one for you!"`,
  },
  {
    avatar: amandaImage,
    name: "Amanda Kymmer",
    testimonial: `"I can't say enough good things about this travel app! It's so easy to use and has all the features I need to plan my trips. The interface is intuitive, making it easy to find what I need. The networking feature is also fantastic, allowing me to connect with other travelers and get great tips on local hotspots. I highly recommend this app to anyone looking for a great travel companion!"`,
  },
];

export default function Testimonials() {
  return (
    <section className={styles.container}>
      <Swiper
        spaceBetween={32}
        slidesPerView="auto"
        className={styles.swiper}
        centeredSlides={true}
        centerInsufficientSlides={true}
        autoplay={{ delay: 6000 }}
        loop={true}
        speed={300}
        initialSlide={Math.min(TESTIMONIAL_PERSONS.length / 2)}
        pagination={{
          clickable: true,
          bulletClass: `swiper-pagination-bullet ${styles.indicator}`,
          bulletActiveClass: `swiper-pagination-bullet-active ${styles.indicatorActive}`,
        }}
        modules={[Autoplay, Pagination]}
      >
        {TESTIMONIAL_PERSONS.map((person) => (
          <SwiperSlide key={person.name} className={styles.swiperSlide}>
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
