"use client";

import { useState } from "react";

export default function Clock() {
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
    <div className="fixed flex h-screen w-full justify-start">
      <div className="ml-20 pr-4">
        {/* <h1 className=" text-white">Hello</h1> */}
        <div
          className="relative mt-32 flex h-[300px] min-w-[550px] items-center justify-center rounded-xl"
          style={{
            backgroundImage: 'url("/images/dashboard/view.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "Overlay",
            width: "100%"
          }}
        >
          <h1 className="text-7xl text-white">{ctime}</h1>
        </div>
      </div>
    </div>
  );
}
