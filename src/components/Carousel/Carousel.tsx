import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  // Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-flip";
import "swiper/css/effect-coverflow";
import "./style.css";

import { Card } from "../Card";

export const Carousel = () => {
  const cardInfosPlans = [
    {
      category: "Adulto",
      usefulTime: "Mínimo 12 meses.",
      time: "Recorrente",
      value: "135",
    },
    {
      category: "Adulto",
      usefulTime: "Mínimo 06 meses.",
      time: "Recorrente",
      value: "165",
    },
    {
      category: "Adulto",
      usefulTime: "Mínimo 03 meses.",
      time: "Recorrente",
      value: "195",
    },
    {
      category: "Adulto",
      usefulTime: "Mínimo 01 mês.",
      time: "Mensal",
      value: "205",
    },
    {
      category: "Infântil",
      usefulTime: "Mínimo 12 meses.",
      time: "Recorrente",
      value: "100",
    },
    {
      category: "Infântil",
      usefulTime: "Mínimo 06 meses.",
      time: "Recorrente",
      value: "130",
    },
    {
      category: "Infântil",
      usefulTime: "Mínimo 03 meses.",
      time: "Recorrente",
      value: "160",
    },
    {
      category: "Infântil",
      usefulTime: "Mínimo 01 mês.",
      time: "Mensal",
      value: "180",
    },
  ];

  return (
    <Swiper
      modules={[EffectCoverflow, Pagination, A11y, Autoplay, Navigation]}
      effect={"coverflow"}
      grabCursor={false}
      centeredSlides={true}
      centerInsufficientSlides={true}
      initialSlide={3}
      loop={true}
      // autoplay={true}
      
      breakpoints={{
        320: {
          slidesPerView: 1,

        },
        375: {
          slidesPerView: 1,
          
        },
        425: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4
        }
      }}
      coverflowEffect={{
        rotate: 20,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      navigation
      pagination={{ clickable: true }}
    >
      {cardInfosPlans.map((p) => (
        <SwiperSlide>
          <Card
            category={p.category}
            usefulTime={p.usefulTime}
            time={p.time}
            value={p.value}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
