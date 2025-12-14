import { ProductShow } from "../types/types";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const ProductShowCard = ({ product }: { product: ProductShow }) => {
  return (
    <div className="bg-theme-lightgray rounded-xl w-full  sm:flex-1 min-w-30  flex sm:items-end items-center justify-end sm:justify-center relative overflow-visible min-h-[165px]">
      <div className="absolute left-1/2 -translate-x-1/2 -top-1/2 z-10 flex flex-col items-center">
        <Image
          src={product.image}
          alt={product.name}
          width={120}
          height={120}
          className="w-[120px] h-[120px] object-contain"
        />
        <div className="w-20 h-5 bg-black/30 rounded-full blur-md -mt-4"></div>
      </div>
      <div className="flex flex-col justify-end py-6 sm:py-7.5 items-center w-full z-20">
        <h3 className="uppercase font-bold tracking-[0.8px] sm:tracking-[1.29px] text-center text-theme-dark text-sm sm:text-[13px] md:text-base lg:text-lg">
          {product.name}
        </h3>
        <Link
          href={product.href}
          className="hover:text-theme-dark-orange text-black/50 cursor-pointer transition-colors duration-300 flex justify-center items-center text-xs sm:text-[13px] md:text-sm gap-1"
        >
          SHOP
          <span className="text-theme-dark-orange hover:text-theme-dark-orange bg-none">
            <ChevronRight className="size-4 font-bold" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProductShowCard;
