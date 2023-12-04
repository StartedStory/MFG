"use client";
import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex lg:hidden">
      <button
        onClick={() => setOpen(!isOpen)}
        className="transition-all ease-in-out duration-300"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-white hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <div className="overflow-hidden bg-gray-900/80 w-screen  px-10 pt-5 absolute right-0 top-10 z-max">
          <button
            onClick={() => setOpen(!isOpen)}
            className="transition-all ease-in-out duration-300 w-full"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-white ml-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
          <ul className="flex-col pt-12">
            <li className="block rounded-md px-3 py-2 text-xl font-medium text-blue-200">
              <Link href="/">Home</Link>
            </li>
            <li className="block rounded-md px-3 py-2 text-xl font-medium text-blue-200">
              <Link href="/aboutUs">About us</Link>
            </li>
            <li className="block rounded-md px-3 py-2 text-xl font-medium text-blue-200">
              Our Products
            </li>
            <li className="block rounded-md px-3 py-2 text-xl font-medium text-blue-200">
              <Link href="/news">News</Link>
            </li>
            <li className="block rounded-md px-3 py-2 text-xl font-medium text-blue-200">
              <Link href="/ToolsAndDownload">Tools and download</Link>
            </li>
            <li className="block rounded-md px-3 py-2 text-xl font-medium text-blue-200">
              Career
            </li>
            <li className="block rounded-md px-3 py-2 text-xl font-medium text-blue-200">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
