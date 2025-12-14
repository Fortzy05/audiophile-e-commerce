'use client';

import React, { useState } from 'react';
import { Product } from '../../types/types';
import { useCartStore } from '../../store/useCartStore';
import { BigBtn } from '../../../components/btn';

interface AddToCartProps {
  product: Product;
}

export default function AddToCart({ product }: AddToCartProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartStore();

  const handleIncrement = () => setQuantity(q => q + 1);
  const handleDecrement = () => setQuantity(q => Math.max(1, q - 1));

  const handleAdd = () => {
    addToCart(product, quantity);
    // Optional: Show toast or open cart
    useCartStore.getState().toggleCart(); 
  };

  return (
    <div className="flex gap-4">
      <div className="bg-[#F1F1F1] w-[120px] h-[48px] flex items-center justify-between px-4 font-bold">
        <button 
          onClick={handleDecrement}
          className="text-black/25 hover:text-theme-orange transition-colors"
        >
          -
        </button>
        <span className="text-[13px]">{quantity}</span>
        <button 
          onClick={handleIncrement}
          className="text-black/25 hover:text-theme-orange transition-colors"
        >
          +
        </button>
      </div>
      
      <div onClick={handleAdd}>
        <BigBtn text="ADD TO CART" className="bg-theme-orange hover:bg-theme-light-orange text-white" />
      </div>
    </div>
  );
}
