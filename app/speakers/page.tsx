import React from 'react';
import data from '../lib/data.json';
import { Product } from '../types/types';
import CategoryProduct from '../components/shared/CategoryProduct';
import ProductShowContainer from '../components/ProductCardContainer';
import About from '../components/About';

export default function SpeakersPage() {
  const products = (data as unknown as Product[])
    .filter((p) => p.category === 'speakers')
    .sort((a, b) => (a.new === b.new ? 0 : a.new ? -1 : 1));

  return (
    <main>
      <div className="bg-theme-black text-white h-[100px] md:h-[240px] flex items-center justify-center">
        <h1 className="text-[28px] md:text-[40px] font-bold uppercase tracking-[2px]">Speakers</h1>
      </div>

      <div className="max-w-[1110px] mx-auto px-6 md:px-10 lg:px-0 py-[64px] lg:py-[160px]">
        {products.map((product, index) => (
          <CategoryProduct 
            key={product.id} 
            product={product} 
            reverse={index % 2 !== 0} 
          />
        ))}

        <div className="mt-[120px] lg:mt-[160px]">
          <ProductShowContainer />
        </div>

        <div className="mt-[120px] lg:mt-[160px]">
          <About />
        </div>
      </div>
    </main>
  );
}
