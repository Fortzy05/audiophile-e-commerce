import React from 'react';
import data from '../lib/data.json';
import { Product } from '../types/types';
import CategoryProduct from '../components/shared/CategoryProduct';
import ProductShowContainer from '../components/ProductCardContainer'; // Check import path
import About from '../components/About';

// Note: ProductShowContainer is in app/components/ProductCardContainer.tsx based on file view
// About is in app/components/About.tsx

export default function HeadphonesPage() {
  // Cast data to Product[] because imports from JSON might be inferred broadly
  const products = (data as unknown as Product[])
    .filter((p) => p.category === 'headphones')
    .sort((a, b) => (a.new === b.new ? 0 : a.new ? -1 : 1)); // Newest first

  return (
    <main>
      {/* Header */}
      <div className="bg-theme-black text-white h-[100px] md:h-[240px] flex items-center justify-center">
        <h1 className="text-[28px] md:text-[40px] font-bold uppercase tracking-[2px]">Headphones</h1>
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
