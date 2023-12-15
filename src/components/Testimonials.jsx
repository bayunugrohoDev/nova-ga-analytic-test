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
    testimonial: `"I absolutely love this travel app! It's so easy to use and has all the features I need to plan my perfect vacation. The interface is user-friendly, making it easy to use and find the needed info."`,
  },
  {
    avatar: paulineImage,
    name: "Pauline Krogsbøll",
    testimonial: `"I'm so impressed with this travel app! Its great features, such as the ability to create custom lists and find personalized recommendations, have made my travel experiences so much better."`,
  },
  {
    avatar: sebastianImage,
    name: "Sebastian Gibrand",
    testimonial: `"I live for food, wine & experiences. Finally there’s an app where I can Share my favourites spots & get inspired by others."`,
  },
  {
    avatar: amandaImage,
    name: "Amanda Kymmer",
    testimonial: `"I can't say enough good things about this travel app! It's so easy to use and has all the features I need to plan my trips."`,
  },
];

export default function Testimonials() {
  return (
    <section className={styles.container}>
      <Swiper
        spaceBetween={32}
        slidesPerView="auto"
        centeredSlides={true}
        className={styles.swiper}
        autoplay={{ delay: 8000 }}
        speed={600}
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
