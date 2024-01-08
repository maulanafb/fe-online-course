import Image from "next/image";
import React from "react";
import thumbnail from "@/public/images/mastering-git.png";

import { Poppins } from "next/font/google";

const poppinsSemi = Poppins({ subsets: ["latin"], weight: ["700"] });
const CourseItem = () => {
  return (
    <div className="rounded-xl bg-white mr-5">
      <Image
        className="rounded-t-2xl"
        src={thumbnail}
        width={370}
        height={200}
        alt="thumbnail"
      />
      <div className="p-4 ">
        <div className={`${poppinsSemi.className} text-xl max-w-[300px]`}>
          Mastering Git And Vercel For Developer lima
        </div>
        <p className={``}>Rp. 200.000</p>
      </div>
    </div>
  );
};

export default CourseItem;
