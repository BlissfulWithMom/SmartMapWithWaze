"use client";

import { useState } from "react";
import { useViewStore } from "@/zustand/zustand";

export default function Clock() {
  const FieldState = useViewStore((state) => state.field);

  let time = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true
  });

  const [ctime, setCtime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(UpdateTime);
  return (
    <div className={`${FieldState ? "mt-12 flex" : "fixed right-8 top-32"}`}>
      <div className="">
        {/* <h1 className=" text-white">Hello</h1> */}
        <div
          className="flex h-[150px] min-w-[350px] items-center justify-center rounded-xl bg-[#3F72AF] opacity-90 shadow-[0_0_20px_0_rgba(0,0,0)]"
          style={{
            backgroundImage: 'url("/images/dashboard/Eclipse.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "Overlay",
            width: "100%"
          }}
        >
          <h1 className="text-5xl text-white">{ctime}</h1>
        </div>
      </div>
    </div>
  );
}
