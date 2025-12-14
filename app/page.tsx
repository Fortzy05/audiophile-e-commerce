import Hero from "./layout/Hero";
import Link from "next/link";
import { BigBtn } from "../components/btn";
import Image from "next/image";
import ProductShowContainer from "./layout/ProductShowContainer";
import { Zx9Showcase } from "./layout/Zx9Showcase";
import About from "./components/About";
export default function Home() {
  return (
    <main className="min-h-screen items-center relative">
      <Hero />
      <section className="min-h-dvh pt-30 mx-auto flex-col flex justify-center items-center px-10 lg:px-[165px]">
        <ProductShowContainer />
        {/* {speakers and airpods showcase} */}
        <section className="space-y-8 mt-30 size-full">
          <Zx9Showcase />
          <div className="bg-theme-lightgray rounded-md w-full h-80 relative overflow-hidden">
            <div className="absolute inset-0 size-full">
              <Image
                src={"/images/zx7-speaker.jpg"}
                alt="zx7-speaker"
                fill
                className="scale-x-[-1] object-cover object-bottom-right"
              />
            </div>
            <div className="text-theme-black z-10 w-7/10 md:w-5/10 h-full flex items-center px-6 sm:px-12 md:px-18">
              <div className="relative z-20 p-6 flex flex-col justify-center h-full">
                <h1 className="font-bold tracking-[2px] text-2xl uppercase w-fit">
                  ZX7 SPEAKER
                </h1>
                <Link href={"/product/zx7-speaker"}>
                  <BigBtn
                    text="SEE PRODUCT"
                    className="bg-transparent border-2 border-theme-black hover:bg-theme-black mt-8 text-black hover:text-white w-fit"
                  />
                </Link>
              </div>
            </div>
          </div>
          <section className="flex justify-between items-center w-full h-80 sm:flex-row flex-col gap-4 sm:gap-6 md:gap-8">
            <div className="rounded-lg w-full h-full overflow-hidden">
              <Image
                src={"/images/yx1-earphone.jpg"}
                alt="yx1-earphone"
                width={400}
                height={400}
                className="rounded-lg object-cover size-full"
              />
            </div>
            <div className="rounded-lg bg-theme-lightgray size-full flex flex-col items-center justify-center text-theme-black">
              <h1 className="font-bold tracking-[2px] text-2xl uppercase w-fit">
                yx1 earphones
              </h1>
              <Link href={"/product/yx1-earphones"}>
                <BigBtn
                  text="SEE PRODUCT"
                  className="bg-transparent border-2 border-theme-black hover:bg-theme-black mt-8 text-black hover:text-white w-fit"
                />
              </Link>
            </div>
          </section>
        </section>
        <About />
      </section>
    </main>
  );
}
