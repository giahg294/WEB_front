import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import "./Images.css";
import React from "react";

const ImageCarousel = () => {
  const images = [
    "/image1.png",
    "/image2.png",
    "/image3.png",
    "/image4.png",
    "/image5.png",
  ];

  return (
    <div className="carousel-wrapper">
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      slidesPerView={3}
      spaceBetween={20}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img src={src} alt={`Slide ${index}`} className="carousel-image" />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default ImageCarousel;
