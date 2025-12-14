import { BigBtn } from "@/components/btn";
import Image from "next/image";
import Link from "next/link";
const ProductCard = ({
  imageUrl,
  name,
  href,
}: {
  imageUrl: string;
  name: string;
  href: string;
}) => {
  return (
    <div className="flex flex-col gap-10 justify-between">
      <div className="w-full aspect-video sm:aspect-auto md:aspect-square bg-theme-lightgray rounded-xl flex justify-center items-center p-8 overflow-hidden">
        <Image
          src={imageUrl}
          alt={name || "Product Image"}
          width={400}
          height={400}
          className="object-contain object-center w-full h-full"
        />
      </div>
      <div className="size-full space-y-8 flex flex-col justify-center items-center text-black">
        <h1 className="font-bold text-2xl tracking-[1.2px] uppercase text-center">
          {name}
        </h1>
        <Link href={href}>
          <BigBtn text="see product" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
