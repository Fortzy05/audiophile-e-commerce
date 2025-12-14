import { NavLink } from "./../util/nav-link";
import { navLinks } from "../lib/constants";
import { Button } from "../../components/ui/button";
import { Facebook, TwitterIcon, Instagram } from "lucide-react";
const Footer = () => {
  return (
    <footer className="w-full bg-theme-black min-h-[50dvh] mt-20 px-10 md:px-40 space-y-10 flex flex-col items-center justify-center sm:items-start py-0 pb-10">
      <div className="h-1 w-28 bg-theme-dark-orange flex flex-col"></div>
      <section className="flex justify-center flex-col sm:flex-row sm:justify-between items-center sm:flex-wrap gap-8 w-full">
        <h2 className="font-extrabold text-theme-white text-2xl">audiophile</h2>
        <nav className="flex flex-col sm:flex-row gap-8  text-center">
          {navLinks.map((link) => (
            <NavLink key={link.name} href={link.href} name={link.name} />
          ))}
        </nav>
      </section>
      <p className="text-theme-white/50 leading-[25px] text-center sm:text-left">
        Audiophile is an all in one stop to fulfill your audio needs. We&apos;re
        a small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <section className="flex flex-col gap-4 sm:flex-row justify-between items-center w-full">
        <p className="text-theme-light/50">
          Copyright 2021. All Rights Reserved
        </p>
        <div>
          <Button variant={"ghost"} className="cursor-pointer" size={"icon-lg"}>
            <Facebook />
          </Button>
          <Button variant={"ghost"} className="cursor-pointer" size={"icon-lg"}>
            <TwitterIcon />
          </Button>
          <Button variant={"ghost"} className="cursor-pointer" size={"icon-lg"}>
            <Instagram />
          </Button>
        </div>
      </section>
    </footer>
  );
};

export default Footer;