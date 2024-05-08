"use client";

import { useState } from "react";

export default function Clock() {
  const pathName = window.location.pathname;
  const Position = pathName === "/dashboard" ? "flex" : "fixed right-8 top-32";
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
    <div className={`${Position}`}>
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
