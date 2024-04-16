"use client";

import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { AiFillHome, AiOutlineLogout } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { LuSettings } from "react-icons/lu";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed rounded-r-3xl bg-gradient-to-b from-[#363547] to-[#1a161c]">
      <nav>
        <ul>
          <li>
            <a href="#">
              <span>
                <HiMenu className="text-4xl text-white" />
              </span>
              <span className="px-4 text-xl text-white">Menu</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <AiFillHome className="text-4xl text-white" />
              </span>
              <span className="px-4 text-xl text-white">Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <BiMap className="text-4xl text-white" />
              </span>
              <span className="px-4 text-xl text-white">Map</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <LuSettings className="text-4xl text-white" />
              </span>
              <span className="px-4 text-xl text-white">Setting</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <AiOutlineLogout className="text-4xl text-white" />
              </span>
              <span className="px-4 text-xl text-white">Log Out</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
