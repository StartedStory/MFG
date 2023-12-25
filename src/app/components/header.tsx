"use client";

import Image from "next/image";
import React, { useState, Fragment } from "react";
import MobileMenu from "./mobileMenu";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const toolsMenuItems = [
    {title: "SOLAR CONTROL", link: '#toolsSection1'},
    {title: "THERMAL INSULATION", link: '#toolsSection2'},
    {title: "SECURITY", link: '#toolsSection3'},
    {title: "REFLECTIVE LENSES", link: '#toolsSection4'},
    {title: "TECHNICAL CATALOG", link: '#toolsSection5'},
    {title: "BIM", link: '#toolsSection6'},
    {title: "CERTIFICATIONS", link: '#toolsSection7'},
  ];
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
            src="/assets/img/Home/logo-petit.webp"
            alt="Mediterrnean Float Glass Logo"
            className="flex w-auto h-20 select-none"
            width={100}
            height={100}
          ></Image>
          <ul className="lg:flex items-center gap-8 xl:gap-12 font-semibold hidden">
            <li className="hover:text-secondary hover:cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-secondary hover:cursor-pointer">
              <Link href="/aboutUs">About us</Link>
            </li>
            <li className="hover:text-secondary hover:cursor-pointer">
              Our Products
            </li>
            <li className="hover:text-secondary hover:cursor-pointer">
              <Link href="/blog">News</Link>
            </li>
            <li className="hover:text-secondary hover:cursor-pointer">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 bg-white px-3 py-2 font-semibold text-gray-900 hover:text-secondary hover:cursor-pointer">
                    <Link href="/ToolsAndDownload">Tools and download</Link>
                    <ChevronDownIcon
                      className="-mr-1 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-100 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {toolsMenuItems.map((item, index) => (
                        <Menu.Item key={index}>
                          {({ active }) => (
                            <a
                              href={item.link}
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {item.title}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
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
