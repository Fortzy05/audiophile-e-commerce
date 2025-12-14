import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../../types/types';
import { BigBtn } from '../../../components/btn';

interface CategoryProductProps {
  product: Product;
  reverse?: boolean;
}

export default function CategoryProduct({ product, reverse = false }: CategoryProductProps) {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-[125px] mb-[120px] last:mb-0`}>
      {/* Image Section */}
      <div className="w-full lg:w-[540px] h-[352px] lg:h-[560px] relative bg-[#F1F1F1] rounded-lg overflow-hidden flex items-center justify-center">
        {/* Mobile Image */}
        <div className="lg:hidden relative w-full h-full">
           <Image
            src={product.categoryImage.mobile}
            alt={product.name}
            fill
            className="object-cover md:hidden"
          />
           <Image
            src={product.categoryImage.tablet}
            alt={product.name}
            fill
            className="object-cover hidden md:block"
          />
        </div>
        
        {/* Desktop Image */}
        <div className="hidden lg:block relative w-full h-full">
          <Image
            src={product.categoryImage.desktop}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-[572px]">
        {product.new && (
          <span className="text-theme-dark-orange text-[14px] tracking-[10px] uppercase mb-6">
            New Product
          </span>
        )}
        
        <h2 className="text-[28px] md:text-[40px] leading-[1.1] font-bold uppercase mb-8 max-w-[15ch]">
          {product.name}
        </h2>
        
        <p className="text-black/50 text-[15px] leading-[25px] mb-10 max-w-[572px]">
          {product.description}
        </p>

        <Link href={`/product/${product.slug}`}>
          <BigBtn text="See Product" className="bg-theme-orange hover:bg-theme-light-orange text-white" />
        </Link>
      </div>
    </div>
  );
}
