"use client";

import { useState } from "react";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`fixed top-1/2 z-50 h-[700px] -translate-y-1/2 transform rounded-r-3xl bg-gradient-to-b from-[#363547] to-[#1a161c] ${isCollapsed ? "w-20" : "w-64"}`}
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
                    className="h-[50px] w-[50px]"
                  />
                </span>
              )}
              {!isCollapsed && (
                <div className="flex w-40 items-center justify-start">
                  <img
                    src="./images/dashboard/ellipsis-horizontal.png"
                    alt="menu"
                    className="h-[50px] w-[50px]"
                  />
                  <span className="px-4 text-xl text-white" />
                </div>
              )}
            </a>
          </li>
          <li className="flex items-center justify-center">
            <a href="/dashboard" className="flex items-center justify-center">
              {isCollapsed && (
                <span>
                  <img
                    src="./images/dashboard/home.png"
                    alt="home"
                    className="h-[50px] w-[50px]"
                  />
                </span>
              )}
              {!isCollapsed && (
                <div className="flex w-40 items-center justify-start">
                  <img
                    src="./images/dashboard/home.png"
                    alt="home"
                    className="h-[50px] w-[50px]"
                  />
                  <span className="px-4 text-xl text-white">Home</span>
                </div>
              )}
            </a>
          </li>
          <li className="flex items-center justify-center">
            <a href="/fullmap" className="flex items-center justify-center">
              {isCollapsed && (
                <span>
                  <img
                    src="./images/dashboard/map.png"
                    alt="map"
                    className="h-[50px] w-[50px]"
                  />
                </span>
              )}
              {!isCollapsed && (
                <div className="flex w-40 items-center justify-start">
                  <img
                    src="./images/dashboard/map.png"
                    alt="fullMap"
                    className="h-[50px] w-[50px]"
                  />
                  <span className="px-4 text-xl text-white">FullMap</span>
                </div>
              )}
            </a>
          </li>
          <li className="flex items-center justify-center">
            <a href="#" className="flex items-center justify-center">
              {isCollapsed && (
                <span>
                  <img
                    src="./images/dashboard/cog.png"
                    alt="settings"
                    className="h-[50px] w-[50px]"
                  />
                </span>
              )}
              {!isCollapsed && (
                <div className="flex w-40 items-center justify-start">
                  <img
                    src="./images/dashboard/cog.png"
                    alt="settings"
                    className="h-[50px] w-[50px]"
                  />
                  <span className="px-4 text-xl text-white">Settings</span>
                </div>
              )}
            </a>
          </li>
          <li />
          <li className="flex items-center justify-center">
            <a href="#" className="flex items-center justify-center">
              {isCollapsed && (
                <span>
                  <img
                    src="./images/dashboard/arrow-left-on-rectangle.png"
                    alt="logout"
                    className="h-[50px] w-[50px]"
                  />
                </span>
              )}
              {!isCollapsed && (
                <div className="flex w-40 items-center justify-start">
                  <img
                    src="./images/dashboard/arrow-left-on-rectangle.png"
                    alt="logout"
                    className="h-[50px] w-[50px]"
                  />
                  <span className="px-4 text-xl text-white">LogOut</span>
                </div>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
