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

import { useViewStore } from "@/zustand/zustand";
import VoiceControlledButton from "../voicecommand";
import ClockButton from "../clockbutton";

function Navbar({ toggle }: { toggle: () => void }) {
  const Field = useViewStore((state) => state.setField);
  const Waze = useViewStore((state) => state.setWaze);
  const Flight = useViewStore((state) => state.setFlight);
  const Flower = useViewStore((state) => state.setFlower);
  const OneBank = useViewStore((state) => state.setOneBank);
  const Sport1 = useViewStore((state) => state.setSport1);
  const LiveChat = useViewStore((state) => state.setLiveChat);
  const Chat = useViewStore((state) => state.setChat);
  const Movie = useViewStore((state) => state.setMovie);

  return (
    <header className="fixed bottom-0 z-50 h-24 w-full bg-[#222831]">
      <div className="mx-auto h-full px-4">
        <div className="flex h-full items-center justify-around">
          <div className="flex items-center justify-center">
            <div className="mx-8 flex  items-center ">
              <Button
                className="hover:bg-transition h-[80px] w-[80px] rounded-full bg-transparent transition-all duration-300 hover:-mt-3 "
                style={{
                  backgroundImage: 'url("/images/dashboard/home2.png")',
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat"
                }}
                onClick={Field}
              />
            </div>
            <div>
              <Button
                className="hover:bg-transition h-[80px] w-[80px] rounded-full bg-transparent transition-all duration-300 hover:-mt-3 "
                style={{
                  backgroundImage: 'url("/images/dashboard/home2.png")',
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat"
                }}
                onClick={Waze}
              >
                Drive
              </Button>
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
              <button onClick={Flight}>כרטיסי טיסה ונופש</button>
            </li>
            <li className="flex items-center border-b-4 border-[#3F72AF] text-base hover:border-[#EE4266] hover:text-[#EE4266]">
              <button onClick={OneBank}>בנק אפס אחד</button>
            </li>
            <li className="flex items-center border-b-4 border-[#3F72AF] text-base hover:border-[#EE4266] hover:text-[#EE4266]">
              <button onClick={Flower}>הזמנת פרחים</button>
            </li>
            <li className="flex items-center border-b-4 border-[#3F72AF] text-base hover:border-[#EE4266] hover:text-[#EE4266]">
              <button onClick={LiveChat}>הידברות שידור חי</button>
            </li>
            <li className="flex items-center border-b-4 border-[#3F72AF] text-base hover:border-[#EE4266] hover:text-[#EE4266]">
              <button onClick={Chat}>צ'אט</button>
            </li>
            <li className="flex items-center border-b-4 border-[#3F72AF] text-base hover:border-[#EE4266] hover:text-[#EE4266]">
              <button onClick={Sport1}>ספורט 1</button>
            </li>
            <li className="flex items-center border-b-4 border-[#3F72AF] text-base hover:border-[#EE4266] hover:text-[#EE4266]">
              <button onClick={Movie}>סרטים</button>
            </li>
          </ul>
          <div className="flex h-full items-center justify-between bg-inherit">
            <VoiceControlledButton />
            <ClockButton />
            {/* <Button
              className="h-[50px] w-[50px] bg-transparent hover:bg-transparent"
              style={{
                backgroundImage: 'url("/images/dashboard/bell.png")',
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundBlendMode: "Overlay",
                width: "100%"
              }}
            /> */}
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
