import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import testimonials from "../../data/testimonial";
import './swiper-custom.css'; // Ensure this file is correctly imported

const Testimonials = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mt-12 mb-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="rounded-lg overflow-hidden"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="p-6 h-[310px] mx-2 my-3 bg-white shadow-xl rounded-lg text-center relative">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 mx-auto rounded-full  border-white mb-4 object-cover"
              />
              <p className="text-lg font-semibold mb-2 text-gray-800">
                "{testimonial.quote}"
              </p>
              <p className="text-sm text-gray-600">- {testimonial.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
