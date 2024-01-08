"use client";
import Image from "next/image";
import React from "react";
import thumbnail from "@/public/images/mastering-git.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Poppins } from "next/font/google";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";

const poppinsSemi = Poppins({ subsets: ["latin"], weight: ["700"] });
const Test = () => {
  return (
    <div className="overflow-hidden ">
      <Swiper
        className="bg-[#f3f3f3]"
        freeMode={true}
        slidesPerView={4}
        autoplay={true}
        direction={"horizontal"}
      >
        <SwiperSlide>
          <div className="rounded-xl bg-white mr-5">
            <Image
              className="rounded-t-2xl"
              src={thumbnail}
              width={370}
              height={200}
              alt="thumbnail"
            />
            <div className="p-4 ">
              <div className={`${poppinsSemi.className} text-xl w-[300px]`}>
                Mastering Git And Vercel For Developer
              </div>
              <p className={``}>Rp. 200.000</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-xl bg-white mr-5">
            <Image
              className="rounded-t-2xl"
              src={thumbnail}
              width={370}
              height={200}
              alt="thumbnail"
            />
            <div className="p-4 ">
              <div className={`${poppinsSemi.className} text-xl w-[300px]`}>
                Mastering Git And Vercel For Developer
              </div>
              <p className={``}>Rp. 200.000</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-xl bg-white mr-5">
            <Image
              className="rounded-t-2xl"
              src={thumbnail}
              width={370}
              height={200}
              alt="thumbnail"
            />
            <div className="p-4 ">
              <div className={`${poppinsSemi.className} text-xl w-[300px]`}>
                Mastering Git And Vercel For Developer
              </div>
              <p className={``}>Rp. 200.000</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-xl bg-white mr-5">
            <Image
              className="rounded-t-2xl"
              src={thumbnail}
              width={370}
              height={200}
              alt="thumbnail"
            />
            <div className="p-4 ">
              <div className={`${poppinsSemi.className} text-xl w-[300px]`}>
                Mastering Git And Vercel For Developer
              </div>
              <p className={``}>Rp. 200.000</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-xl bg-white mr-5">
            <Image
              className="rounded-t-2xl"
              src={thumbnail}
              width={370}
              height={200}
              alt="thumbnail"
            />
            <div className="p-4 ">
              <div className={`${poppinsSemi.className} text-xl w-[300px]`}>
                Mastering Git And Vercel For Developer
              </div>
              <p className={``}>Rp. 200.000</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Test;
