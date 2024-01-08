import React from "react";
import sale from "@/public/images/todays_sale.svg";
import Image from "next/image";
import checkBlue from "@/public/images/check-blue.svg";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppinsSemiBold = Poppins({ subsets: ["latin"], weight: ["600"] });
const poppinsBlack = Poppins({ subsets: ["latin"], weight: ["800"] });

const PromoElement = () => {
  return (
    <div
      className={`${poppinsSemiBold.className} flex justify-center flex-col md:flex-row mx-auto px-10 py-5 bg-[#110843] md:justify-between`}
    >
      <div className="flex flex-col md:flex-row items-center">
        <Image src={sale} alt="Today sale" />
        <div
          className={`${poppinsBlack.className} flex flex-col text-white items-center md:items-start`}
        >
          <span>12.12 Sale Premium Rp 77K</span>
          <span>kode promo NEXTYEAR</span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between text-white md:space-x-4 space-x-4">
        <div className="flex justify-between md:space-x-3 space-x-1 mb-2 md:mb-0 mt-5 md:mt-0 ">
          <Image
            src={checkBlue}
            alt="check blue"
            className="mr-[2px] md:mr-0 "
          />
          <span>Akses Kelas Selamanya</span>
        </div>
        <Link href={""} className="px-5  py-3 bg-[#2447f9] rounded-full">
          Ambil Promo
        </Link>
      </div>
    </div>
  );
};

export default PromoElement;
