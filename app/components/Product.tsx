import Image from "next/image";
import { BigBtn } from "../../components/btn";
import Link from "next/link";

const Product = ({
  imageUrl,
  name,
  category,
  order,
  desc,
  href,
}: {
  imageUrl: string;
  name: string;
  category: string;
  order?: boolean;
  desc: string;
  href: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center gap-10">
      <div
        className={`size-full bg-theme-lightgray rounded-md flex justify-center items-center ${
          order ? "md:order-1" : ""
        }`}
      >
        <Image
          src={imageUrl}
          alt={name}
          width={400}
          height={400}
          className="object-cover object-center"
        />
      </div>
      <div className="size-full flex-col space-y-3 justify-center items-center  px-10 py-5 text-black text-center md:text-left">
        <h4 className="tracking-[10px] text-theme-dark-orange text-md">
          NEW PRODUCT
        </h4>
        <h1 className="font-bold leading-11 tracking-[1.43px] uppercase text-4xl">
          {name} <br /> {category}
        </h1>
        <p className="text-theme-black/50 text-sm leading-3.5 mt-5">{desc}</p>
        <Link
          href={href}
          className="w-full flex justify-center md:justify-start"
        >
          <BigBtn
            className="bg-theme-dark-orange text-white hover:bg-theme-light-orange mt-5"
            text="see product"
          />
        </Link>
      </div>
    </div>
  );
};

export default Product;
