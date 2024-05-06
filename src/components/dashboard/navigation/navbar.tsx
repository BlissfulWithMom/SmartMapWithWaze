"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import { useViewStore } from "@/zustand/zustand";

function Navbar({ toggle }: { toggle: () => void }) {
  const Field = useViewStore((state) => state.setField);
  const Live11 = useViewStore((state) => state.setLive11);
  const Sport1 = useViewStore((state) => state.setSport1);
  const LiveChat = useViewStore((state) => state.setLiveChat);
  const Channel13 = useViewStore((state) => state.setChannel13);
  const Channel14 = useViewStore((state) => state.setChannel14);
  const Children = useViewStore((state) => state.setChildren);
  const Sagittarius = useViewStore((state) => state.setSagittarius);
  const Here11 = useViewStore((state) => state.setHere11);

  return (
    <header className="fixed z-50 h-24 w-full bg-[#3F72AF]">
      <div className="mx-auto h-full px-4">
        <div className="flex h-full items-center justify-between">
          <div className="flex h-full items-center justify-start bg-inherit">
            <Link
              className="box-border flex h-full items-center px-4 pt-1 text-base font-normal text-white"
              href="/"
            >
              <img
                src="/images/logo/logo.svg"
                alt="logo"
                className="w-[90px]"
              />
            </Link>
          </div>
          <button
            type="button"
            className="inline-flex items-center md:hidden"
            onClick={toggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
              />
            </svg>
          </button>
          <ul className="hidden h-full gap-x-6 text-white md:flex">
            <li className="flex items-center">
              <button onClick={Field}>Home</button>
            </li>
            <li className="flex items-center">
              <button onClick={Live11}>כאן 11 סדרות</button>
            </li>
            <li className="flex items-center">
              <button onClick={Sport1}>ספורט 1</button>
            </li>
            <li className="flex items-center">
              <button onClick={LiveChat}>הידברות שידור חי</button>
            </li>
            <li className="flex items-center">
              <button onClick={Channel13}>ערוץ 13 שידור חי</button>
            </li>
            <li className="flex items-center">
              <button onClick={Channel14}>ערוץ 14 שידור חי</button>
            </li>
            <li className="flex items-center">
              <button onClick={Children}>ניק ערוץ הילדיםl</button>
            </li>
            <li className="flex items-center">
              <button onClick={Sagittarius}>12 קשת</button>
            </li>
            <li className="flex items-center">
              <button onClick={Here11}>11 כאן</button>
            </li>
          </ul>
          <div className="mr-20 flex h-full items-center justify-start bg-inherit">
            <Button className="mr-4 h-[50px] w-[150px] rounded-3xl bg-[#4a3aff] px-4 text-xl">
              AI Command
            </Button>
            {/* <Link href="/#" className="px-4">
              <Button
                className="h-[50px] w-[50px] bg-transparent hover:bg-transparent"
                style={{
                  backgroundImage: 'url("/images/dashboard/bell.png")',
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundBlendMode: "Overlay",
                  width: "100%"
                }}
              />
            </Link> */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="h-[50px] w-[50px] bg-transparent hover:bg-transparent"
                  style={{
                    backgroundImage: 'url("/images/dashboard/user-circle.png")',
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundBlendMode: "Overlay",
                    width: "100%"
                  }}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>User</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Button className="w-full">Log Out</Button>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
