"use client";

import { useState } from "react";
import { useViewStore } from "@/zustand/zustand";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const Field = useViewStore((state) => state.setField);
  const Waze = useViewStore((state) => state.setWaze);
  const Button19 = useViewStore((state) => state.setButton19);
  const OneBank = useViewStore((state) => state.setOneBank);
  const Chat = useViewStore((state) => state.setChat);
  const Flower = useViewStore((state) => state.setFlower);
  const News = useViewStore((state) => state.setNews);
  const Lottery = useViewStore((state) => state.setLottery);
  const Flight = useViewStore((state) => state.setFlight);
  const CNN = useViewStore((state) => state.setCnn);
  const Movie = useViewStore((state) => state.setMovie);

  const list = [
    {
      src: "./images/dashboard/home.png",
      title: "Home",
      function: Field
    },
    {
      src: "./images/dashboard/map.png",
      title: "Drive",
      function: Waze
    },
    {
      src: "./images/dashboard/cog.png",
      title: "כפתור 19",
      function: Button19
    },
    {
      src: "./images/dashboard/cog.png",
      title: "בנק אפס אחד",
      function: OneBank
    },
    {
      src: "./images/dashboard/cog.png",
      title: "צ'אט",
      function: Chat
    },
    {
      src: "./images/dashboard/cog.png",
      title: "הזמנת פרחים",
      function: Flower
    },
    {
      src: "./images/dashboard/cog.png",
      title: "חדשות",
      function: News
    },
    {
      src: "./images/dashboard/cog.png",
      title: "מפעל הפיס",
      function: Lottery
    },
    {
      src: "./images/dashboard/cog.png",
      title: "כרטיסי טיסה ונופש",
      function: Flight
    },
    {
      src: "./images/dashboard/cog.png",
      title: "CNNLIVE",
      function: CNN
    },
    {
      src: "./images/dashboard/cog.png",
      title: "סרטים",
      function: Movie
    }
  ];

  return (
    <div
      className={`fixed top-1/2 z-40 h-[700px] -translate-y-1/2 transform rounded-r-3xl bg-[#3F72AF] opacity-90 ${isCollapsed ? "w-20" : "w-64"}`}
    >
      <nav className="flex h-full">
        <ul className="flex h-full w-full flex-col justify-around">
          <li
            onClick={toggleSidebar}
            className="flex items-center justify-center"
          >
            <a className="flex items-center justify-center">
              {isCollapsed && (
                <span>
                  <img
                    src="./images/dashboard/ellipsis-horizontal.png"
                    alt="menu"
                    className="h-[30px] w-[30px]"
                  />
                </span>
              )}
              {!isCollapsed && (
                <div className="flex w-40 items-center justify-start">
                  <img
                    src="./images/dashboard/ellipsis-horizontal.png"
                    alt="menu"
                    className="h-[30px] w-[30px]"
                  />
                  <span className="px-4 text-base text-white" />
                </div>
              )}
            </a>
          </li>

          {list.map((l, index) => (
            <li key={index} className="flex items-center justify-center">
              <a className="flex items-center justify-center">
                {isCollapsed && (
                  <span onClick={l.function}>
                    <img
                      src={l.src}
                      alt={l.title}
                      className="h-[30px] w-[30px]"
                    />
                  </span>
                )}
                {!isCollapsed && (
                  <div
                    className="flex w-40 items-center justify-start"
                    onClick={l.function}
                  >
                    <img
                      src={l.src}
                      alt={l.title}
                      className="h-[30px] w-[30px]"
                    />
                    <span className="px-4 text-base text-white">{l.title}</span>
                  </div>
                )}
              </a>
            </li>
          ))}

          <li />

          <li className="flex cursor-pointer items-center justify-center">
            <a className="flex items-center justify-center">
              {isCollapsed && (
                <span>
                  <img
                    src="./images/dashboard/arrow-left-on-rectangle.png"
                    alt="logout"
                    className="h-[30px] w-[30px]"
                  />
                </span>
              )}
              {!isCollapsed && (
                <div className="flex w-40 items-center justify-start">
                  <img
                    src="./images/dashboard/arrow-left-on-rectangle.png"
                    alt="logout"
                    className="h-[30px] w-[30px]"
                  />
                  <span className="px-4 text-base text-white">LogOut</span>
                </div>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
