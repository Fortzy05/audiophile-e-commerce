'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCartStore } from '../../store/useCartStore';
import { BigBtn } from '../../../components/btn';
import { CartItem } from '../../types/types';

export default function CartModal() {
  const { cart, isCartOpen, toggleCart, updateQuantity, removeAll, closeCart } = useCartStore();

  if (!isCartOpen) return null;

  const total = cart.reduce((acc: number, item: CartItem) => acc + item.price * item.quantity, 0);


  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/40 z-40"
        onClick={toggleCart}
      />
      
      {/* Modal */}
      <div className="absolute top-[129px] right-0 md:right-[165px] bg-white w-full md:w-[377px] rounded-lg p-8 z-50 text-black">
        <div className="flex justify-between items-center mb-8">
          <h6 className="font-bold text-lg tracking-[1.3px]">CART ({cart.length})</h6>
          <button 
            onClick={removeAll}
            className="text-theme-black/50 hover:text-theme-orange underline text-[15px] leading-[25px]"
          >
            Remove all
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="text-center text-gray-400 py-8">Your cart is empty</p>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-[#F1F1F1]">
                    <Image
                      src={item.image.mobile} // Using mobile image for thumbnail
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-[15px] uppercase">{item.slug.split('-')[0]}</p>
                    <p className="font-bold text-[14px] text-black/50">$ {item.price.toLocaleString()}</p>
                  </div>
                </div>
                
                <div className="bg-[#F1F1F1] w-[96px] h-[32px] flex items-center justify-between px-3 text-[13px] font-bold">
                  <button 
                    onClick={() => item.quantity > 1 ? updateQuantity(item.id, item.quantity - 1) : null}
                    className="text-black/25 hover:text-theme-orange"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="text-black/25 hover:text-theme-orange"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div className="mt-8 space-y-6">
            <div className="flex justify-between items-center">
              <span className="font-medium text-black/50 uppercase">Total</span>
              <span className="font-bold text-lg">$ {total.toLocaleString()}</span>
            </div>
            <Link href="/checkout" onClick={closeCart} className="block">
              <BigBtn text="CHECKOUT" className="w-full bg-theme-orange hover:bg-theme-light-orange text-white" />
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
