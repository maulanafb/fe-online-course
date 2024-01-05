import Image from "next/image";
import React from "react";
import logo from "@/public/images/logo_bwa_text.svg";
import defaultAvatar from "@/public/images/default-avatar.svg";
import icSearch from "@/public/images/ic_search.svg";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["600"] });
const Navbar = () => {
  return (
    <nav className={`bg-[#F3F3F3] px-[30px] py-5 ${poppins.className} `}>
      <div className="container sticky  flex py-2 items-center justify-between bg-[#2447f9] rounded-3xl backdrop-filter backdrop-blur-sm bg-opacity-25">
        <Image src={logo} alt="logo" />
        <div>
          <ul className="hidden md:flex justify-between space-x-5 font-medium">
            <li>Flash Sale</li>
            <li>Kelas</li>
            <li>Alur Belajar</li>
            <li>Challenge</li>
          </ul>
        </div>
        <div className="flex items-center space-x-5">
          <div className="p-3 bg-[#e5e9f2] rounded-full cursor-pointer">
            <Image src={icSearch} alt="icSearch" width={20} height={20} />
          </div>
          <span>Halo, Maulana</span>
          <Image
            src={defaultAvatar}
            alt="defaultAvatar"
            width={60}
            height={60}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
