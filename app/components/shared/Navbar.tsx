"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import logo from "@/public/images/logo_bwa_text.svg";
import defaultAvatar from "@/public/images/default-avatar.svg";
import icSearch from "@/public/images/ic_search.svg";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["600"] });

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    const navbarHeight = 100; // Ganti dengan tinggi sesuai kebutuhan
    const scrolledPastNavbar = window.scrollY > navbarHeight;
    setSticky(scrolledPastNavbar);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`transition-all duration-300 ease-in-out transform ${
        isSticky
          ? "fixed top-0 left-0 right-0 z-50 bg-[#2447f9] rounded-3xl backdrop-filter backdrop-blur-sm bg-opacity-25"
          : "relative"
      } bg-[#F3F3F3] py-3 md:px-[10px] ${poppins.className} overflow-hidden`}
    >
      <div className="container flex items-center justify-between">
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
          <div className="p-3 bg-[#e5e9f2] rounded-full cursor-pointer hidden md:block">
            <Image src={icSearch} alt="icSearch" width={20} height={20} />
          </div>
          <span className="hidden md:block">Halo, Maulana</span>
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
