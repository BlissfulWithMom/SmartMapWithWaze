"use client";

import React, { useState } from "react";

import { useViewStore } from "@/zustand/zustand";

import { Button } from "@/components/ui/button";

export default function ClockButton() {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const ViewClock = useViewStore((state) => state.setClock);
  const handleClick = () => {
    ViewClock();
    setIsButtonActive((prevState) => !prevState);
  };
  return (
    <div>
      <Button
        className={`mx-8 h-[60px] w-[60px] cursor-pointer rounded-full border-none bg-transparent text-white hover:bg-transparent ${
          isButtonActive
            ? "shadow-[0_0_15px_0_rgba(0,0,0)]"
            : "shadow-[0_0_15px_0_rgba(255,249,208)]"
        }`}
        onClick={handleClick}
        style={{
          backgroundImage: isButtonActive
            ? 'url("/images/dashboard/clocklight.png")'
            : 'url("/images/dashboard/clockdark.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {isButtonActive ? (
          <div className="flex items-center justify-center text-black">ON</div>
        ) : (
          <div className="flex items-center justify-center text-white">OFF</div>
        )}
      </Button>
    </div>
  );
}
