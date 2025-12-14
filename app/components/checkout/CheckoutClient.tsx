'use client';

import React, { useState } from 'react';
import { useCartStore } from '../../store/useCartStore';
import GoBack from '../shared/GoBack';
import { BigBtn } from '../../../components/btn';
import Image from 'next/image';
import OrderConfirmation from './OrderConfirmation';

export default function CheckoutClient() {
  const { cart } = useCartStore();
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'emoney' | 'cash'>('emoney');

  // Hardcoded shipping
  const shipping = 50;
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const vat = Math.round(total * 0.20);
  const grandTotal = total + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="relative">
        <CheckoutClientContent 
          cart={cart} 
          total={total} 
          shipping={shipping} 
          vat={vat} 
          grandTotal={grandTotal}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          handleSubmit={handleSubmit} // Won't be submitted again clearly but for structure
        />
        <OrderConfirmation />
      </div>
    );
  }

  return (
    <CheckoutClientContent 
      cart={cart} 
      total={total} 
      shipping={shipping} 
      vat={vat} 
      grandTotal={grandTotal} 
      paymentMethod={paymentMethod}
      setPaymentMethod={setPaymentMethod}
      handleSubmit={handleSubmit}
    />
  );
}

// Split content for cleaner re-use/render
function CheckoutClientContent({ cart, total, shipping, vat, grandTotal, paymentMethod, setPaymentMethod, handleSubmit }: any) {
  return (
    <div className="bg-[#F2F2F2] min-h-screen pt-[40px] pb-[140px]">
      <div className="max-w-[1110px] mx-auto px-6 md:px-10 lg:px-0">
        <GoBack />

        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-[30px] items-start">
          {/* Checkout Form */}
          <div className="flex-1 bg-white rounded-lg p-6 md:p-12 w-full">
            <h1 className="text-[32px] font-bold uppercase mb-10">Checkout</h1>
            
            {/* Billing Details */}
            <h6 className="text-theme-dark-orange text-[13px] font-bold uppercase tracking-[0.93px] mb-4">Billing Details</h6>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <Input label="Name" placeholder="Alexei Ward" />
              <Input label="Email Address" placeholder="alexei@mail.com" type="email" />
              <Input label="Phone Number" placeholder="+1 202-555-0136" type="tel" />
            </div>

            {/* Shipping Info */}
            <h6 className="text-theme-dark-orange text-[13px] font-bold uppercase tracking-[0.93px] mb-4">Shipping Info</h6>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
               <div className="md:col-span-2">
                 <Input label="Address" placeholder="1137 Williams Avenue" />
               </div>
               <Input label="ZIP Code" placeholder="10001" />
               <Input label="City" placeholder="New York" />
               <Input label="Country" placeholder="United States" />
            </div>

            {/* Payment Details */}
            <h6 className="text-theme-dark-orange text-[13px] font-bold uppercase tracking-[0.93px] mb-4">Payment Details</h6>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
               <label className="text-[12px] font-bold">Payment Method</label>
               <div className="space-y-4">
                 <div 
                   className={`border ${paymentMethod === 'emoney' ? 'border-theme-dark-orange' : 'border-[#cfcfcf]'} rounded-lg p-4 flex items-center gap-4 cursor-pointer hover:border-theme-orange`}
                   onClick={() => setPaymentMethod('emoney')}
                 >
                   <div className={`w-[20px] h-[20px] rounded-full border border-[#cfcfcf] flex items-center justify-center`}>
                      {paymentMethod === 'emoney' && <div className="w-[10px] h-[10px] bg-theme-dark-orange rounded-full" />}
                   </div>
                   <span className="font-bold text-[14px]">e-Money</span>
                 </div>
                 <div 
                   className={`border ${paymentMethod === 'cash' ? 'border-theme-dark-orange' : 'border-[#cfcfcf]'} rounded-lg p-4 flex items-center gap-4 cursor-pointer hover:border-theme-orange`}
                   onClick={() => setPaymentMethod('cash')}
                 >
                    <div className={`w-[20px] h-[20px] rounded-full border border-[#cfcfcf] flex items-center justify-center`}>
                      {paymentMethod === 'cash' && <div className="w-[10px] h-[10px] bg-theme-dark-orange rounded-full" />}
                   </div>
                   <span className="font-bold text-[14px]">Cash on Delivery</span>
                 </div>
               </div>
            </div>

            {paymentMethod === 'emoney' && (
              <div className="grid md:grid-cols-2 gap-4">
                 <Input label="e-Money Number" placeholder="238521993" />
                 <Input label="e-Money PIN" placeholder="6891" />
              </div>
            )}
            
            {paymentMethod === 'cash' && (
              <div className="flex items-center gap-8 mt-8">
                 <div className="text-[#D87D4A]">
                   <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg"><path d="M46.594 8.438H42.96v37.97l-6.412-4.223-5.26 6.007-8.73-10.435-5.918 4.706L2.342 3.84C.417 2.23 2.158.07 4.13.07h42.464c1.328 0 2.404 1.076 2.404 2.404v4.56c0 .889-.481 1.626-1.404 1.404zM18.89 25.107l-3.32-8.312-3.415 8.228h6.735zm-2.905-13.84l-7.382 18.59h3.76l1.583-4.136h8.016l1.564 3.996h3.693l-7.243-18.45H15.985zM38.318 20.35c-2.42-.04-4.634 1.258-5.32 3.69l-1.35 4.885h3.633l.97-3.52c.23-.746 1.135-1.42 2.067-1.42 1.354 0 1.96 1.05 1.96 2.29V42h3.812V25.35c0-2.864-1.898-5-4.772-5z" fill="#D87D4A" fillRule="nonzero"/></svg>
                 </div>
                 <p className="text-black/50 text-[15px] leading-[25px]">
                   The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                 </p>
              </div>
            )}
            
          </div>

          {/* Summary */}
          <div className="w-full lg:w-[350px] bg-white rounded-lg p-8">
             <h6 className="font-bold text-[18px] uppercase mb-8">Summary</h6>
             <div className="space-y-6 mb-8">
               {cart.map((item: any) => (
                 <div key={item.id} className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                       <div className="relative w-[64px] h-[64px] bg-[#F1F1F1] rounded-lg overflow-hidden">
                          <Image src={item.image.mobile} alt={item.name} fill className="object-contain" />
                       </div>
                       <div>
                          <p className="font-bold text-[15px] uppercase w-[100px] whitespace-nowrap overflow-hidden text-ellipsis">
                            {item.slug.split('-')[0]}
                          </p>
                          <p className="font-bold text-[14px] text-black/50">$ {item.price.toLocaleString()}</p>
                       </div>
                    </div>
                    <span className="font-bold text-[15px] text-black/50">x{item.quantity}</span>
                 </div>
               ))}
             </div>

             <div className="space-y-2 mb-8">
                <div className="flex justify-between text-[15px] uppercase">
                  <span className="text-black/50">Total</span>
                  <span className="font-bold">$ {total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[15px] uppercase">
                  <span className="text-black/50">Shipping</span>
                  <span className="font-bold">$ {shipping.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[15px] uppercase">
                  <span className="text-black/50">VAT (Included)</span>
                  <span className="font-bold">$ {vat.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[18px] uppercase mt-6">
                  <span className="text-black/50">Grand Total</span>
                  <span className="font-bold text-theme-dark-orange">$ {grandTotal.toLocaleString()}</span>
                </div>
             </div>

             <BigBtn type="submit" text="CONTINUE & PAY" className="w-full bg-theme-orange hover:bg-theme-light-orange text-white" />
          </div>
        </form>
      </div>
    </div>
  );
}

function Input({ label, placeholder, type = "text" }: { label: string, placeholder: string, type?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[12px] font-bold">{label}</label>
      <input 
        required 
        type={type} 
        placeholder={placeholder} 
        className="border border-[#cfcfcf] rounded-lg px-6 py-4 text-[14px] font-bold focus:border-theme-dark-orange outline-none placeholder:text-black/40"
      />
    </div>
  )
}
