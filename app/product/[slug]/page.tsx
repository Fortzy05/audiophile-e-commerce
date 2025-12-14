import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import data from '../../lib/data.json';
import { Product } from '../../types/types';
import GoBack from '../../components/shared/GoBack';
import AddToCart from '../../components/shared/AddToCart';
import ProductShowContainer from '../../components/ProductCardContainer';
import About from '../../components/About';
import { BigBtn } from '../../../components/btn';

// Type helper for data
const products = data as unknown as Product[];

// Generate static params for all products (optional but good for static export)
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="pt-[100px] bg-[#FAFAFA]">
      <div className="max-w-[1110px] mx-auto px-6 md:px-10 lg:px-0 mb-[120px] lg:mb-[160px]">
        <GoBack />

        {/* Product Highlight */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-[125px] items-center mb-[88px] lg:mb-[160px]">
          {/* Image */}
          <div className="w-full md:w-[40%] lg:w-[540px] aspect-square relative bg-[#F1F1F1] rounded-lg overflow-hidden">
            <div className="md:hidden relative w-full h-full">
              <Image
                src={product.image.mobile}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="hidden md:block lg:hidden relative w-full h-full">
               <Image
                src={product.image.tablet}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="hidden lg:block relative w-full h-full">
              <Image
                src={product.image.desktop}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="flex-1">
             {product.new && (
              <span className="text-theme-dark-orange text-[14px] tracking-[10px] uppercase mb-6 block">
                New Product
              </span>
            )}
            <h1 className="text-[28px] md:text-[40px] leading-[1.1] font-bold uppercase mb-8 max-w-[15ch]">
              {product.name}
            </h1>
            <p className="text-black/50 text-[15px] leading-[25px] mb-8">
              {product.description}
            </p>
            <p className="font-bold text-[18px] tracking-[1.3px] mb-12">
              $ {product.price.toLocaleString()}
            </p>
            
            <AddToCart product={product} />
          </div>
        </div>

        {/* Features & In the Box */}
        <div className="flex flex-col lg:flex-row gap-[88px] lg:gap-[125px] mb-[88px] lg:mb-[160px]">
          <div className="flex-1 lg:max-w-[635px]">
            <h3 className="text-[32px] font-bold uppercase mb-8">Features</h3>
            <div className="text-black/50 text-[15px] leading-[25px] whitespace-pre-wrap">
              {product.features}
            </div>
          </div>

          <div className="flex-1 lg:max-w-[350px] flex flex-col md:flex-row lg:flex-col gap-8 md:gap-[150px] lg:gap-8">
            <h3 className="text-[32px] font-bold uppercase mb-8 w-fit shrink-0">In the Box</h3>
            <ul className="space-y-2">
              {product.includes.map((item, i) => (
                <li key={i} className="flex gap-6">
                  <span className="text-theme-dark-orange font-bold text-[15px]">{item.quantity}x</span>
                  <span className="text-black/50 text-[15px] capitalize">{item.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-rows-2 md:grid-cols-[40%_60%] gap-4 md:gap-8 mb-[120px] h-auto md:h-[592px]">
           <div className="flex flex-col gap-4 md:gap-8 h-full">
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-[#F1F1F1]">
                 <Image src={product.gallery.first.desktop} alt="Gallery 1" fill className="object-cover hidden md:block" />
                 <Image src={product.gallery.first.mobile} alt="Gallery 1" fill className="object-cover md:hidden" />
              </div>
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-[#F1F1F1]">
                 <Image src={product.gallery.second.desktop} alt="Gallery 2" fill className="object-cover hidden md:block" />
                 <Image src={product.gallery.second.mobile} alt="Gallery 2" fill className="object-cover md:hidden" />
              </div>
           </div>
           <div className="relative w-full h-full rounded-lg overflow-hidden bg-[#F1F1F1]">
              <Image src={product.gallery.third.desktop} alt="Gallery 3" fill className="object-cover hidden md:block" />
              <Image src={product.gallery.third.mobile} alt="Gallery 3" fill className="object-cover md:hidden" />
           </div>
        </div>

        {/* Others */}
        <div className="mb-[120px] lg:mb-[160px]">
          <h3 className="text-[32px] font-bold uppercase text-center mb-10 md:mb-16">You may also like</h3>
          <div className="flex flex-col md:flex-row gap-8 lg:gap-[30px]">
            {product.others.map((other) => (
              <div key={other.slug} className="flex-1 flex flex-col items-center gap-8">
                <div className="bg-[#F1F1F1] w-full aspect-auto rounded-lg relative flex items-center justify-center py-10">
                   <div className="relative w-[150px] md:w-[200px] lg:w-[350px] h-[150px] md:h-[200px] lg:h-[318px]">
                     <Image src={other.image.desktop} alt={other.name} fill className="object-contain" />
                   </div>
                </div>
                <h5 className="font-bold text-[24px] uppercase">{other.name}</h5>
                <Link href={`/product/${other.slug}`}>
                  <BigBtn text="See Product" className="bg-theme-orange hover:bg-theme-light-orange text-white" />
                </Link>
              </div>
            ))}
          </div>
        </div>
  
        <ProductShowContainer />
        <div className="mt-[120px]">
          <About />
        </div>
      </div>
    </main>
  );
}
