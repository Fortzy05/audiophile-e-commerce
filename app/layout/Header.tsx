'use client';

import Image from "next/image";
import logo from "../assets/audiophile.png";
import cartIcon from "../assets/carts.svg";
import line from "../assets/Rectangle.png";
import { navLinks } from "../lib/constants";
import { NavLink } from "../util/nav-link";
import { useCartStore } from "../store/useCartStore";
import CartModal from "../components/shared/CartModal";
import Link from "next/link";

export default function Header() {
  const { cart, toggleCart } = useCartStore();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="bg-theme-dark w-full relative z-50">
      <nav className="max-w-[1440px] mx-[24px] lg:mx-[165px] h-[97px] flex items-center justify-between text-theme-lightgray border-b border-white/10 relative">
        <Link href="/">
          <Image src={logo} height={25} width={143} alt="logo" />
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex uppercase text-[13px] h-[25px] items-center gap-[34px] leading-[25px] tracking-[2px]">
          {navLinks.map((link) => (
            <NavLink key={link.name} href={link.href} name={link.name} />
          ))}
        </div>

        {/* Mobile Nav Toggle (Optional - keeping simple for now) */}

        <button onClick={toggleCart} className="relative">
          <Image src={cartIcon} height={20} width={23.33} alt="cart" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-theme-orange text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>

        <CartModal />
      </nav>
    </div>
  );
}
