import { Button } from "../../components/ui/button";
import Link from "next/link";
export default function HeroCard() {
  return (
    <div className="relative w-[398px] h-[346px] ">
      <div className="">
        <h3 className="font-normal text-[14px] leading-[100%] tracking-[10px] text-theme-white opacity-[49.64%]">
          NEW PRODUCT
        </h3>
        <h1 className="absolute font-bold mt-[43px] text-[56px] leading-[58px] tracking-[2px] uppercase text-[#FFFFFF] ">
          XX99 Mark II Headphones
        </h1>
        <p className=" w-[349px] h-[75px] mt-[183px] font-medium text-[15px] leading-[25px] text-[#FFFFFF] opacity-75 ">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link href="/product/xx99-mark-two-headphones">
          <Button className="bg-[#D87D4A] w-40 h-12 tracking-[1px] rounded-none absolute top-[298px] font-bold text-[13px] hover:bg-theme-light-orange transition-colors cursor-pointer">
            SEE PRODUCT
          </Button>
        </Link>
      </div>
    </div>
  );
}
