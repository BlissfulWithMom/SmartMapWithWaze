"use client";

import Link from "next/link";

import { useViewStore } from "@/zustand/zustand";

export default function DropMenu({
  isOpen,
  toggle
}: {
  isOpen: boolean;
  toggle: () => void;
}) {
  const Field = useViewStore((state) => state.setField);
  const Waze = useViewStore((state) => state.setWaze);
  const Live11 = useViewStore((state) => state.setLive11);
  const Sport1 = useViewStore((state) => state.setSport1);
  const LiveChat = useViewStore((state) => state.setLiveChat);
  const Channel13 = useViewStore((state) => state.setChannel13);
  const Channel14 = useViewStore((state) => state.setChannel14);
  const Children = useViewStore((state) => state.setChildren);
  const Sagittarius = useViewStore((state) => state.setSagittarius);
  const Here11 = useViewStore((state) => state.setHere11);

  const Button19 = useViewStore((state) => state.setButton19);
  const OneBank = useViewStore((state) => state.setOneBank);
  const Chat = useViewStore((state) => state.setChat);
  const Flower = useViewStore((state) => state.setFlower);
  const News = useViewStore((state) => state.setNews);
  const Lottery = useViewStore((state) => state.setLottery);
  const Flight = useViewStore((state) => state.setFlight);
  const CNN = useViewStore((state) => state.setCnn);
  const Movie = useViewStore((state) => state.setMovie);
  return (
    <div
      className="sidebar-container fixed left-0 z-50 grid h-full w-full justify-center overflow-hidden bg-white pt-[120px]"
      style={{
        opacity: `${isOpen ? "1" : "0"}`,
        top: ` ${isOpen ? "0" : "-100%"}`
      }}
    >
      <button className="absolute right-0 p-5" onClick={toggle}>
        {/* Close icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
          />
        </svg>
      </button>

      <ul className="sidebar-nav z-50 text-center text-xl leading-relaxed">
        <li>
          <button
            onClick={() => {
              Field();
              toggle();
            }}
          >
            Home
          </button>
        </li>
        <li>
          <button onClick={Waze}>Drive</button>
        </li>
        <li>
          <button onClick={Live11}>כאן 11 סדרות</button>
        </li>
        <li>
          <button onClick={Sport1}>ספורט 1</button>
        </li>
        <li>
          <button onClick={LiveChat}>הידברות שידור חי</button>
        </li>
        <li>
          <button onClick={Channel13}>ערוץ 13 שידור חי</button>
        </li>
        <li>
          <button onClick={Channel14}>ערוץ 14 שידור חי</button>
        </li>
        <li>
          <button onClick={Children}>ניק ערוץ הילדיםl</button>
        </li>
        <li>
          <button onClick={Sagittarius}>12 קשת</button>
        </li>
        <li>
          <button onClick={Here11}>11 כאן</button>
        </li>

        <li>
          <button onClick={Button19}>כפתור 19</button>
        </li>
        <li>
          <button onClick={OneBank}>בנק אפס אחד</button>
        </li>
        <li>
          <button onClick={Chat}>צ'אט</button>
        </li>
        <li>
          <button onClick={Flower}>הזמנת פרחים</button>
        </li>
        <li>
          <button onClick={News}>חדשות</button>
        </li>
        <li>
          <button onClick={Lottery}>מפעל הפיס</button>
        </li>
        <li>
          <button onClick={Flight}>כרטיסי טיסה ונופש</button>
        </li>
        <li>
          <button onClick={CNN}>CNNLIVE</button>
        </li>
        <li>
          <button onClick={Movie}>סרטים</button>
        </li>
      </ul>
    </div>
  );
}
