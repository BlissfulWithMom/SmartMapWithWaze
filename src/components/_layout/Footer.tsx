"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="z-[10] flex w-full flex-col items-center justify-center bg-[#F6995C] p-4">
      <div className="flex flex-col items-center justify-center">
        <strong className="text-xl opacity-70">
          Copyright © 2024. All rights reserved.
        </strong>
        <p>
          <a className="text-[#51829B] hover:text-[#FF407D]" href="#">
            {" "}
            Terms & Conditions{" "}
          </a>
          <span>|</span>
          <a href="#" className="text-[#51829B] hover:text-[#FF407D]">
            {" "}
            Privacy Policy{" "}
          </a>
        </p>
      </div>
      <div className="container flex w-[300px] items-center justify-between p-4">
        <Link href="#">
          <img
            src="/images/home/facebook.png"
            alt="facebook"
            className="w-[50px]"
          />
        </Link>
        <Link href="#">
          <img
            src="/images/home/twitter.png"
            alt="twitter"
            className="w-[50px]"
          />
        </Link>
        <Link href="#">
          <img
            src="/images/home/instagram.png"
            alt="instagram"
            className="w-[50px]"
          />
        </Link>
        <Link href="#">
          <img
            src="/images/home/youtube.png"
            alt="youtube"
            className="w-[50px]"
          />
        </Link>
        <Link href="#">
          <img
            src="/images/home/tik-tok.png"
            alt="tik-tok"
            className="w-[50px]"
          />
        </Link>
      </div>
    </footer>
  );
}
