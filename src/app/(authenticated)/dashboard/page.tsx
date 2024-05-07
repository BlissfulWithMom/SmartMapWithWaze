"use client";

// import { Metadata } from "next";
// import { SITE_TITLE } from "@/utils/constant";
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
  const FieldState = useViewStore((state) => state.field);
  return (
    <main className="flex w-full flex-col bg-[#3F72AF]">
      <Navigation />
      {/* <Sidebar /> */}
      {FieldState ? (
        <div className="flex w-full flex-row">
          <div
            className="flex h-[calc(100vh-6rem)] w-1/3 flex-col items-center justify-around rounded-bl-[20px]"
            style={{
              backgroundImage: `url(./images/dashboard/background.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "Overlay"
            }}
          >
            <Clock />
            <LinkBox />
            <Logo />
          </div>
          {/* <div className="flex h-screen w-full">1</div> */}
          <Map />
        </div>
      ) : (
        <>
          <Clock />
          <LinkBox />
        </>
      )}
      <DynamicPages />
    </main>
  );
}
