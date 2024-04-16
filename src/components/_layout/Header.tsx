"use client";

import Link from "next/link";
import { FaRegCircleUser } from "react-icons/fa6";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="fixed z-[10] w-full">
      <div className="container flex h-[100px] items-center justify-between">
        <div className="flex h-full items-center justify-start bg-inherit">
          <Link
            className="box-border flex h-full items-center px-4 pt-1 text-base font-normal text-white"
            href="/"
          >
            <img src="/images/logo/logo.png" alt="logo" className="w-[90px]" />
          </Link>
        </div>
        <div>
          <Link href="/" className="px-4 text-xl text-white">
            Home
          </Link>
          <Link href="/about" className="px-4 text-xl text-white">
            About Us
          </Link>
          <Link href="/course" className="px-4 text-xl text-white">
            Our Courses
          </Link>
          <Link href="/contact" className="px-4 text-xl text-white">
            Contact Us
          </Link>
        </div>
        <div className="flex h-full items-center justify-start bg-inherit">
          <Link href="/#" className="px-4">
            <Button className="h-[50px] w-[150px] rounded-3xl bg-[#4a3aff] text-xl">
              AI Command
            </Button>
          </Link>
          <Link href="/#" className="px-4">
            <FaRegCircleUser className="text-4xl text-white" />
          </Link>
        </div>
      </div>
    </header>
  );
}
