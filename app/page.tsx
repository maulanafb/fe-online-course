import Image from "next/image";
import { Poppins } from "next/font/google";

import Flickity from "react-flickity-component";
import FeaturedCourse from "./components/shared/FeaturedCourse";

const poppins = Poppins({ subsets: ["latin"], weight: ["600"] });
const poppinsLight = Poppins({ subsets: ["latin"], weight: ["400"] });
const poppinsSemi = Poppins({ subsets: ["latin"], weight: ["700"] });

const Home = () => {
  return (
    <main
      className={`${poppins.className} flex flex-col bg-[#f3f3f3]   font-bold py-[50px] overflow-x-hidden`}
    >
      <div className="px-10">
        <h3 className="text-[#47bb8e]">Our Recommended</h3>
        <div className={`mt-4 ${poppinsSemi.className}`}>
          <h1 className="text-3xl text-[#34364a]">Pelajari Skills Baru</h1>
          <h1 className="text-3xl text-[#34364a] font-bold mt-2">
            Sesuai Dengan Minatmu
          </h1>
        </div>
        <h2
          className={`max-w-xl ${poppinsLight.className} text-lg leading-7 tracking-wide mt-5`}
        >
          Belajar membangun website yang dinamis seperti toko online dengan
          teknologi web development terbaru
        </h2>
      </div>
      <div className="">
        <FeaturedCourse />
      </div>

      <div className="flex flex-col items-center space-y-5 mt-5 justify-center">
        <h1 className="text-[#47bb8e] text-center">
          Mastering Freelancer Tools
        </h1>
        <h2
          className={`text-3xl text-center ${poppinsSemi.className} flex flex-col  text-[#34364a]`}
        >
          <span>Kelas Online BuildWithAngga</span>{" "}
          <span className="">Materi Paling Update</span>
        </h2>
      </div>
    </main>
  );
};

export default Home;
