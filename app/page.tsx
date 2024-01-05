import Image from "next/image";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["600"] });
const poppinsLight = Poppins({ subsets: ["latin"], weight: ["400"] });
const poppinsSemi = Poppins({ subsets: ["latin"], weight: ["700"] });
import thumbnail from "@/public/images/mastering-git.png";
export default function Home() {
  return (
    <main
      className={`${poppins.className} flex flex-col bg-[#f3f3f3] items-start   mx-auto px-10 font-bold  py-[50px]`}
    >
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
      <div className="flex flex-col">
        <Image src={thumbnail} alt="thumbnail" width={200} height={200} />
        <Image src={thumbnail} alt="thumbnail" width={200} height={200} />
        <Image src={thumbnail} alt="thumbnail" width={200} height={200} />
        <Image src={thumbnail} alt="thumbnail" width={200} height={200} />
        <Image src={thumbnail} alt="thumbnail" width={200} height={200} />
        <Image src={thumbnail} alt="thumbnail" width={200} height={200} />
        <Image src={thumbnail} alt="thumbnail" width={200} height={200} />
        <Image src={thumbnail} alt="thumbnail" width={200} height={200} />
      </div>
    </main>
  );
}
