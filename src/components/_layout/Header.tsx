"use client";

import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="fixed z-50 w-full bg-gradient-to-r from-[#1a151c] from-35% via-[#888282] via-60% to-[#e6e0e0] to-90%">
      <div className="flex h-[80px] items-center justify-between">
        <div className="flex h-full items-center justify-start bg-inherit">
          <Link
            className="box-border flex h-full items-center px-4 pt-1 text-base font-normal text-white"
            href="/"
          >
            <img
              src="/images/logo/logo.svg"
              alt="logo"
              className="ml-20 w-[90px]"
            />
          </Link>
        </div>
        <div className="flex justify-center">
          <Button className="mr-2 h-12 w-32 bg-[#CA4B03] px-4 text-white">
            כאן 11 סדרות
          </Button>
          <Button className="mr-2 h-12 w-32 bg-[#CA4B03] px-4 text-white">
            ספורט 1
          </Button>
          <Button className="mr-2 h-12 w-32 bg-[#CA4B03] px-4 text-white">
            הידברות שידור חי
          </Button>
          <Button className="mr-2 h-12 w-32 bg-[#CA4B03] px-4 text-white">
            ערוץ 13 שידור חי
          </Button>
          <Button className="mr-2 h-12 w-32 bg-[#CA4B03] px-4 text-white">
            ערוץ 14 שידור חי
          </Button>
          <Button className="mr-2 h-12 w-32 bg-[#CA4B03] px-4 text-white">
            ניק ערוץ הילדיםl
          </Button>
          <Button className="mr-2 h-12 w-32 bg-[#CA4B03] px-4 text-white">
            12 קשת
          </Button>
          <Button className="mr-2 h-12 w-32 bg-[#CA4B03] px-4 text-white">
            11 כאן
          </Button>
        </div>
        <div className="mr-20 flex h-full items-center justify-start bg-inherit">
          <Link href="/#" className="px-4">
            <Button className="h-[50px] w-[150px] rounded-3xl bg-[#4a3aff] text-xl">
              AI Command
            </Button>
          </Link>
          <Link href="/#" className="px-4">
            <img src="./images/dashboard/bell.png" alt="bell" />
          </Link>
          <Link href="/#" className="px-4">
            <img src="./images/dashboard/user-circle.png" alt="userIcon" />
          </Link>
        </div>
      </div>
    </header>
  );
}
