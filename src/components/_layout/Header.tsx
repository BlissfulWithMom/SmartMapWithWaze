"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed z-[10] w-full bg-[#51829B]">
      <div className="container flex h-[100px] items-center justify-between">
        <div className="flex h-full items-center justify-start bg-inherit">
          <Link
            className="box-border flex h-full items-center px-4 pt-1 text-base font-normal text-white"
            href="/"
          >
            <img src="/images/logo/logo.png" alt="logo" className="w-[90px]" />
          </Link>
          <Link
            className="z-20 box-border flex h-full items-center border-b-4 border-[#51829B] px-4 pt-1 text-base font-normal text-white hover:cursor-pointer hover:border-b-4 hover:border-[#FF407D] hover:text-[#FF407D]"
            href="/"
          >
            Home
          </Link>
          <Link
            className="z-20 box-border flex h-full items-center border-b-4 border-[#51829B] px-4 pt-1 text-base font-normal text-white hover:cursor-pointer hover:border-b-4 hover:border-[#FF407D] hover:text-[#FF407D]"
            href="/about"
          >
            About Us
          </Link>
          <Link
            className="z-20 box-border flex h-full items-center border-b-4 border-[#51829B] px-4 pt-1 text-base font-normal text-white hover:cursor-pointer hover:border-b-4 hover:border-[#FF407D] hover:text-[#FF407D]"
            href="/course"
          >
            Our Courses
          </Link>
          <Link
            className="z-20 box-border flex h-full items-center border-b-4 border-[#51829B] px-4 pt-1 text-base font-normal text-white hover:cursor-pointer hover:border-b-4 hover:border-[#FF407D] hover:text-[#FF407D]"
            href="/contact"
          >
            Contact Us
          </Link>
          <Link
            className="z-20 box-border flex h-full items-center border-b-4 border-[#51829B] px-4 pt-1 text-base font-normal text-white hover:cursor-pointer hover:border-b-4 hover:border-[#FF407D] hover:text-[#FF407D]"
            href="/products"
          >
            Our Products
          </Link>
        </div>
        <div className="flex h-full items-center justify-start bg-inherit">
          <Link
            className="z-20 mr-4 box-border flex items-center rounded-sm border-2 border-gray-300 px-4 py-2 text-base font-normal text-white hover:cursor-pointer hover:text-[#FF407D] "
            href="/login"
          >
            Login
          </Link>
          <Link
            className="z-20 box-border flex items-center rounded-sm border-2 border-[#FF407D] bg-[#FF407D] px-4 py-2 text-base font-normal text-white"
            href="/signup"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
