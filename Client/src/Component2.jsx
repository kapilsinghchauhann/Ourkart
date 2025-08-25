import './Component2.css'

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function Component2() {
    return (
        <div className='sliderog'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                autoplay={{
                    delay: 2500,   // 2.5 seconds delay
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide><a href="#"><img src="/7e0730ebd78a392e.jpg" alt="" /></a></SwiperSlide>
                <SwiperSlide><a href="#"><img src="/45c22d09a46e2872.jpeg" alt="" /></a></SwiperSlide>
                <SwiperSlide><a href="#"><img src="/0053b0d2452256a1.jpg" alt="" /></a></SwiperSlide>
                <SwiperSlide><a href="#"><img src="/6461d5d33ce8d48f.jpeg" alt="" /></a></SwiperSlide>
                <SwiperSlide><a href="#"><img src="/46968ed9b4d7c94b.jpg" alt="" /></a></SwiperSlide>
                <SwiperSlide><a href="#"><img src="/a07a4f8fd326df25.jpeg" alt="" /></a></SwiperSlide>
                <SwiperSlide><a href="#"><img src="/a30e3dd83a45e7d0.jpeg" alt="" /></a></SwiperSlide>
            </Swiper>
        </div>
    )
}
