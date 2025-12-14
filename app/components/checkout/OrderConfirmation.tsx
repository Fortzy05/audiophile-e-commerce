'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCartStore } from '../../store/useCartStore';
import { BigBtn } from '../../../components/btn';
import { CartItem } from '../../types/types';

export default function OrderConfirmation() {
  const { removeAll, cart } = useCartStore();
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  // Create a snapshot of the cart for display before clearing (or we just accept it's cleared when "Back to Home" is clicked)
  // Actually usually we show what was bought. 
  // If we assume this component is shown AFTER success, we might want to pass the items as props or keep them until "Back to Home".
  // For simplicity, let's say "Thank you for your order" and show valid items. 
  // If we use this component triggered by success, the cart is still there? 
  // Better: The Checkout logic shows this, and ONLY when "Back to Home" is clicked do we clear cart and navigate.

  const firstItem = cart[0];
  const otherCount = cart.length - 1;
  const grandTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0) + 50; // +50 shipping assumption

  const handleBackToHome = () => {
    removeAll();
    router.push('/');
  };

  if (!cart.length) return null; // Should not happen if flow is correct

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-start md:items-center justify-center p-6 overflow-y-auto">
      <div className="bg-white rounded-lg p-8 md:p-12 w-full max-w-[540px] mt-24 md:mt-0">
        <div className="w-16 h-16 bg-theme-orange rounded-full flex items-center justify-center mb-8">
           <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#D87D4A" cx="32" cy="32" r="32"/><path stroke="#FFF" strokeWidth="4" d="M20.754 33.333 27.505 40 44.333 23.254"/></g></svg>
        </div>
        
        <h3 className="font-bold text-[32px] leading-[36px] uppercase mb-6">
          Thank you <br/> for your order
        </h3>
        
        <p className="text-black/50 text-[15px] mb-8">
          You will receive an email confirmation shortly.
        </p>

        <div className="bg-[#F1F1F1] rounded-lg overflow-hidden flex flex-col md:flex-row mb-12">
          {/* Items */}
          <div className="p-6 flex-1">
            {firstItem && (
               <div className="flex justify-between items-start border-b border-black/10 pb-3 mb-3 last:border-0 last:mb-0 last:pb-0">
                 <div className="flex gap-4">
                    <div className="relative w-[50px] h-[50px]">
                      <Image src={firstItem.image.mobile} alt={firstItem.name} fill className="object-contain" />
                    </div>
                    <div>
                      <p className="font-bold text-[15px] show-ellipsis w-[100px] whitespace-nowrap overflow-hidden text-ellipsis">
                        {firstItem.slug.split('-')[0].toUpperCase()}
                      </p>
                      <p className="text-[14px] text-black/50 font-bold">$ {firstItem.price.toLocaleString()}</p>
                    </div>
                 </div>
                 <span className="text-[15px] text-black/50 font-bold">x{firstItem.quantity}</span>
               </div>
            )}
            {otherCount > 0 && (
              <p className="text-[12px] text-black/50 font-bold text-center pt-3 border-t border-black/10">
                and {otherCount} other item(s)
              </p>
            )}
          </div>
          
          {/* Total */}
          <div className="bg-black py-10 px-6 md:w-[198px] flex flex-col justify-center">
             <p className="text-white/50 text-[15px] uppercase mb-2">Grand Total</p>
             <p className="text-white font-bold text-[18px]">$ {grandTotal.toLocaleString()}</p>
          </div>
        </div>

        <button onClick={handleBackToHome} className="w-full">
          <BigBtn text="Back to Home" className="w-full bg-theme-orange hover:bg-theme-light-orange text-white" />
        </button>
      </div>
    </div>
  );
}
