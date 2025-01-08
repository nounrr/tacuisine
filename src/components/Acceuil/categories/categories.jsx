import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./categorie.css";



function Categorie({ categories }) {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={4}
      grabCursor={true}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {categories.map((categorie, index) => (
        <SwiperSlide key={index}>
          <div className={`category ${categorie.active ? "active" : ""}`}>
            <span className="emoji">{categorie.emoji}</span>
            <p>{categorie.title}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Categorie;
