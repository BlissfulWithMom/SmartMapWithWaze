"use client";

import { useState, useEffect } from "react";

export default function Clock() {
  const [pathName, setPathName] = useState("");
  const [position, setPosition] = useState("flex");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathName(window.location.pathname);
      setPosition(
        window.location.pathname === "/dashboard"
          ? "flex mt-24"
          : "fixed right-8 top-32"
      );
    }
  }, []);

  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true
    })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={position}>
      <div className="">
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
          <h1 className="text-5xl text-white">{time}</h1>
        </div>
      </div>
    </div>
  );
}
