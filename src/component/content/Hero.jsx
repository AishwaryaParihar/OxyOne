import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import carousel from "../../assets/caraousel.jpg"; 
import carousel2 from "../../assets/caraousel2.webp"; 
import carousel3 from "../../assets/caraousel3.jpg"; 
const images = [
  carousel,
  carousel2,
  carousel3,
];

const Hero = () => {
  return (
    <div className="w-full  mx-auto mt-10 mb-6">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="rounded-lg overflow-hidden"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Carousel Slide ${index + 1}`}
              className="w-full h-1/6 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
