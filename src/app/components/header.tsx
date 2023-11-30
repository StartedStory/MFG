import Image from "next/image";
import React, { useState } from "react";
import MobileMenu from "./mobileMenu";
import Link from "next/link";
export default function Header() {
  return (
    <header>
      <div className="flex flex-col bg-primary ">
        <div
          id="top-bar"
          className=" h-auto justify-center w-full flex flex-row  lg:px-32 text-white  p-2 "
        >
          <div className="inline-flex items-center lg:pr-8">
            <a
              className="hover:text-secondary hover:cursor-pointer"
              href="tel:+21321448644"
            >
              <i className="fa-solid fa-phone"></i> +213 21 448 644
            </a>
          </div>
          <div className="inline-flex items-center border-l border-secondary px-8">
            <a
              className="hover:text-secondary hover:cursor-pointer"
              href="mailto:contact@mfg.dz"
            >
              <i className="fa-solid fa-envelope"></i> contact@mfg.dz
            </a>
          </div>
          <div className="items-center hidden lg:block lg:border-l lg:border-secondary px-8">
            <a
              className="hover:text-secondary hover:cursor-pointer"
              target="_blank"
              href="https://www.google.com/maps/place/Mediterranean+Float+Glass+SPA/@36.5860922,3.1700859,17z/data=!4m10!1m2!2m1!1zMjkgUm91dGUgZGUgTWVmdGFoIOKAkyBs4oCZQXJiYcOiIOKAkyAwOTMwMCBXLiBCbGlkYQ!3m6!1s0x12b22aecb27883c9:0xbd00be4555591d53!8m2!3d36.5864023!4d3.1718132!15sCjQyOSBSb3V0ZSBkZSBNZWZ0YWgg4oCTIGzigJlBcmJhw6Ig4oCTIDA5MzAwIFcuIEJsaWRhkgEOZ2xhc3NfaW5kdXN0cnngAQA!16s%2Fg%2F11byyjjl1y?entry=ttu"
            >
              <i className="fa-solid fa-map"></i> 29 Route de Meftah – l’Arbaâ –
              09300 W. Blida
            </a>
          </div>
        </div>
      </div>
      <div
        id="logo-menu-container"
        className="py-5 flex justify-between flex-row bg-white px-12 items-center lg:max-w-7xl w-full mx-auto"
      >
        <div className="flex items-center justify-between w-full">
          <Image
            src="/assets/img/logo-petit.png"
            alt="Mediterrnean Float Glass Logo"
            className="flex w-auto h-20 select-none"
            width={100}
            height={100}
          ></Image>
          <ul className="lg:flex gap-8 xl:gap-12 font-semibold hidden">
            <li className="hover:text-secondary hover:cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-secondary hover:cursor-pointer">
              <Link href="/aboutUs">About us</Link>
            </li>
            <li className="hover:text-secondary hover:cursor-pointer">
              Our Products
            </li>
            <li className="hover:text-secondary hover:cursor-pointer">News</li>
            <li className="hover:text-secondary hover:cursor-pointer">
              <Link href="/ToolsAndDownload">Tools and download</Link>
            </li>
            <li className="hover:text-secondary hover:cursor-pointer">
              Career
            </li>
            <li className="hover:text-secondary hover:cursor-pointer">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <MobileMenu></MobileMenu>
      </div>
    </header>
  );
}
