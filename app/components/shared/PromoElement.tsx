import React from "react";
import sale from "@/public/images/todays_sale.svg";
import Image from "next/image";
import checkBlue from "@/public/images/check-blue.svg";
import { Poppins } from "next/font/google";
import Link from "next/link";
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
const poppinsMedium = Poppins({ subsets: ["latin"], weight: ["500"] });
const poppinsSemiBold = Poppins({ subsets: ["latin"], weight: ["600"] });
const poppinsBold = Poppins({ subsets: ["latin"], weight: ["700"] });
const poppinsBlack = Poppins({ subsets: ["latin"], weight: ["800"] });

const PromoElement = () => {
  return (
    <div
      className={`${poppinsSemiBold.className} flex justify-center flex-col md:flex-row mx-auto px-10 py-5 bg-[#110843] md:justify-between`}
    >
      <div className="flex flex-col md:flex-row items-center">
        <Image src={sale} alt="Today sale" />
        <div className={`${poppinsBlack.className} flex flex-col text-white`}>
          <span>12.12 Sale Premium Rp 77K</span>
          <span>kode promo NEXTYEAR</span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center text-white md:space-x-4 space-x-0">
        <div className="flex justify-between md:space-x-3 mt-5 md:mt-0 ">
          <Image src={checkBlue} alt="check blue" className="mr-4 md:mr-0 " />
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
