import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
import { EffectCoverflow, Autoplay } from "swiper/modules";

const Speaker = () => {
  return (
    <div className="">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            loading="lazy"
            src="/images/Speaker1.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            loading="lazy"
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            loading="lazy"
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            loading="lazy"
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            loading="lazy"
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            loading="lazy"
            src="https://swiperjs.com/demos/images/nature-6.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            loading="lazy"
            src="https://swiperjs.com/demos/images/nature-7.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            loading="lazy"
            src="https://swiperjs.com/demos/images/nature-8.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Speaker;
