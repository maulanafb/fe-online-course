"use client";
import Image from "next/image";
import React from "react";
import thumbnail from "@/public/images/mastering-git.png";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Poppins } from "next/font/google";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import CourseItem from "./CourseItem";

const poppinsSemi = Poppins({ subsets: ["latin"], weight: ["700"] });
const FeaturedCourse = () => {
  return (
    <>
      <div className="mt-10">
        <Swiper
          grabCursor={true}
          className="w-screen"
          loop={true}
          freeMode={true}
          slidesPerView={"auto"}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          direction={"horizontal"}
          modules={[FreeMode, Autoplay]}
        >
          <SwiperSlide className="max-w-[300px] md:max-w-sm">
            <CourseItem />
          </SwiperSlide>
          <SwiperSlide className="max-w-[300px] md:max-w-sm">
            <CourseItem />
          </SwiperSlide>
          <SwiperSlide className="max-w-[300px] md:max-w-sm">
            <CourseItem />
          </SwiperSlide>
          <SwiperSlide className="max-w-[300px] md:max-w-sm">
            <CourseItem />
          </SwiperSlide>
          <SwiperSlide className="max-w-[300px] md:max-w-sm">
            <CourseItem />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default FeaturedCourse;
