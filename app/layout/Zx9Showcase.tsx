import Image from "next/image";
import { BigBtn } from "@/components/btn";
import Link from "next/link";
export const Zx9Showcase = () => {
  return (
    <div className="bg-theme-dark-orange w-full overflow-hidden h-[560px] rounded-xl relative flex flex-col md:flex-row md:justify-between items-center px-4 lg:px-0 ">
      <div className="w-full flex justify-center md:justify-start md:w-auto">
        <div className="block md:hidden mb-6 z-10">
          <Image
            src={"/images/showcase/speaker-showcase.png"}
            alt="speaker showcase"
            width={220}
            height={320}
          />
        </div>
      </div>
      <div className="hidden md:block absolute -bottom-6 md:left-10 lg:left-20;47kl=[h] z-10">
        <Image
          src={"/images/showcase/speaker-showcase.png"}
          alt="speaker showcase"
          width={400}
          height={800}
          className="md:w-[350] md:h-[500]"
        />
      </div>
      <div className="z-20 flex flex-col items-center text-center md:items-start md:text-left">
        <h3 className="font-bold tracking-[2px] leading-tight text-[1.5rem] sm:text-[2rem] md:text-[3.5rem] lg:text-[4rem]">
          ZX9 <br /> SPEAKER
        </h3>
        <p className="text-[14px] sm:text-[15px] leading-6 text-theme-white/75 w-full max-w-[300px] sm:max-w-[320px] md:max-w-[349px] mx-auto md:mx-0">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Link href={"/product/zx9-speaker"}>
          <BigBtn
            className="mt-10 bg-black cursor-pointer hover:bg-theme-dark/74"
            text="see product"
          />
        </Link>
      </div>
      <div className="absolute inset-0 w-full md:w-8/10 h-full pointer-events-none z-0">
        <Image
          src={"/images/oval.png"}
          alt=""
          className="hidden md:block object-cover"
          loading="lazy"
          fill
        />
        <Image
          src={"/images/oval-tab.png"}
          alt=""
          className="hidden sm:block md:hidden object-cover"
          loading="lazy"
          fill
        />
        <Image
          src={"/images/oval-mobile.png"}
          alt=""
          className="sm:hidden object-cover"
          loading="lazy"
          fill
        />
      </div>
    </div>
  );
};
