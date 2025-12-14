import HeroCard from "../components/HeroCard";
import Image from "next/image";
import heroImage from "../assets/headphones.png";

export default function Hero() {
  return (
    <section className="relative  bg-[#0D0D0D] h-[729px] overflow-hidden">
      <div className="flex gap-[46px] pl-[165px]">
        <div className="mt-32">
          <HeroCard />
        </div>
        <div className="-mt-20">
          <Image
            className="brightness-70 object-cover opacity-90"
            src={heroImage}
            height={886}
            width={708}
            alt="hero image"
          />
        </div>
      </div>
    </section>
  );
}
