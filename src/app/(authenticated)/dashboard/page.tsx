"use client";

// import { Metadata } from "next";
// import { SITE_TITLE } from "@/utils/constant";
import { useState, useEffect } from "react";
import { useViewStore } from "@/zustand/zustand";

// import Sidebar from "@/components/dashboard/sidebar";
import Map from "@/components/dashboard/map";
import Navigation from "@/components/dashboard/navigation/navigation";
import Clock from "@/components/dashboard/clock";
import LinkBox from "@/components/dashboard/linkbox";

import Logo from "@/components/dashboard/logo";
import DynamicPages from "@/components/dashboard/dynamicpage";
// export const metadata: Metadata = {
//   title: `${SITE_TITLE} - Register`,
//   description: `${SITE_TITLE} - Register`
// };

export default function DashboardPage() {
  const [bgIndex, setBgIndex] = useState(0);

  const bgImgs = [
    "./images/dashboard/back1.jpg",
    "./images/dashboard/back2.jpg",
    "./images/dashboard/back3.jpg",
    "./images/dashboard/back4.jpg",
    "./images/dashboard/back5.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % bgImgs.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [bgImgs.length]);

  const FieldState = useViewStore((state) => state.field);

  const ClockState = useViewStore((state) => state.clock);
  return (
    <main className="flex w-full flex-col bg-[#222831]">
      <Navigation />
      {/* <Sidebar /> */}
      {FieldState ? (
        <div className="flex w-full flex-row">
          <div
            className="flex h-[calc(100vh-6rem)] w-1/3 flex-col items-center justify-around rounded-bl-[20px]"
            style={{
              backgroundImage: `url(${bgImgs[bgIndex]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "Overlay",
              transition: "background-image 2s ease-in-out" // Add this line
            }}
          >
            {ClockState ? <Clock /> : null}
            <LinkBox />
            <Logo />
          </div>
          {/* <div className="flex h-screen w-full">1</div> */}
          <Map />
        </div>
      ) : (
        <>
          {ClockState ? <Clock /> : null}
          <LinkBox />
        </>
      )}
      <DynamicPages />
    </main>
  );
}
