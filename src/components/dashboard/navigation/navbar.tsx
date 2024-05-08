"use client";

import React from "react";
import { FaUser } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import VoiceControlledButton from "../voicecommand";
import ClockButton from "../clockbutton";

function Navbar({ toggle }: { toggle: () => void }) {
  return (
    <header className="fixed bottom-0 z-50 h-24 w-full bg-[#222831]">
      <div className="mx-auto h-full px-4">
        <div className="flex h-full items-center justify-around">
          <div className="flex items-center justify-center">
            <div className="mx-8 flex  items-center ">
              <a
                className="hover:bg-transition h-[80px] w-[80px] rounded-full bg-transparent transition-all duration-300 hover:-mt-3 "
                style={{
                  backgroundImage: 'url("/images/dashboard/home2.png")',
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat"
                }}
                href="/dashboard"
              />
            </div>
            <div className="mx-8 flex  items-center ">
              <a
                className="hover:bg-transition h-[60px] w-[60px] rounded-full bg-transparent shadow-[0_0_15px_0_rgba(0,255,0)] transition-all duration-300 hover:-mt-3 "
                style={{
                  backgroundImage: 'url("/images/dashboard/viewmap3.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat"
                }}
                href="/dashboard/https%3A%2F%2Fembed.waze.com%2Fiframe%3Fzoom%3D18%26lat%3D-23.55052%26lon%3D-46.63331%26pin%3D1%26desc%3D1"
              />
            </div>
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
            <li className="flex items-center border-b-4 border-[#3F72AF] text-base hover:border-[#EE4266] hover:text-[#EE4266]">
              <a href="/dashboard/https%3A%2F%2Fwww.easygo.co.il">
                כרטיסי טיסה ונופש
              </a>
            </li>
            <li className="flex items-center border-b-4 border-[#3F72AF] text-base hover:border-[#EE4266] hover:text-[#EE4266]">
              <a href="/dashboard/https%3A%2F%2Fwww.onezerobank.com">
                בנק אפס אחד
              </a>
            </li>
            <li className="flex items-center border-b-4 border-[#3F72AF] text-base hover:border-[#EE4266] hover:text-[#EE4266]">
              <a href="/dashboard/https%3A%2F%2Fwww.flowernet.co.il">
                הזמנת פרחים
              </a>
            </li>
            <li className="flex items-center border-b-4 border-[#3F72AF] text-base hover:border-[#EE4266] hover:text-[#EE4266]">
              <a href="/dashboard/https%3A%2F%2Fwww.hidabroot.org%2Fvod">
                הידברות שידור חי
              </a>
            </li>
            <li className="flex items-center border-b-4 border-[#3F72AF] text-base hover:border-[#EE4266] hover:text-[#EE4266]">
              <a href="/dashboard/https%3A%2F%2Fwww.mako.co.il%2Fmako-vod">
                צ'אט
              </a>
            </li>
            <li className="flex items-center border-b-4 border-[#3F72AF] text-base hover:border-[#EE4266] hover:text-[#EE4266]">
              <a href="/dashboard/https%3A%2F%2Fwww.one.co.il%2FVOD">ספורט 1</a>
            </li>
            <li className="flex items-center border-b-4 border-[#3F72AF] text-base hover:border-[#EE4266] hover:text-[#EE4266]">
              <a href="/dashboard/https%3A%2F%2Fpopcorntimeonline.xyz">סרטים</a>
            </li>
          </ul>
          <div className="flex h-full items-center justify-between bg-inherit">
            <VoiceControlledButton />
            <ClockButton />
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="h-[70px] w-[70px] rounded-full bg-transparent hover:bg-transparent hover:shadow-[0_0_15px_0_rgba(0,0,0)]"
                  style={{
                    backgroundImage: 'url("/images/dashboard/round.png")',
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundBlendMode: "Overlay"
                  }}
                >
                  <FaUser className="text-xl text-black" />
                </Button>
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
