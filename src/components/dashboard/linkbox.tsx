"use client";

import { useViewStore } from "@/zustand/zustand";

export default function LinkBox() {
  const FieldState = useViewStore((state) => state.field);
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
      title: "Drive",
      function: Waze
    },
    {
      title: "כפתור 19",
      function: Button19
    },
    {
      title: "בנק אפס אחד",
      function: OneBank
    },
    {
      title: "צ'אט",
      function: Chat
    },
    {
      title: "הזמנת פרחים",
      function: Flower
    },
    {
      title: "חדשות",
      function: News
    },
    {
      title: "מפעל הפיס",
      function: Lottery
    },
    {
      title: "כרטיסי טיסה ונופש",
      function: Flight
    },
    {
      title: "CNNLIVE",
      function: CNN
    },
    {
      title: "סרטים",
      function: Movie
    }
  ];

  return (
    <div
      className={`min-w-[220px] max-w-[435px] opacity-90 ${FieldState ? "flex" : "fixed left-6 top-24"}`}
    >
      <div className="flex h-full w-full flex-wrap items-center justify-center">
        {list.map((l, index) => (
          <div
            key={index}
            className="mr-4 mt-4 flex h-[50px] w-[200px] cursor-pointer items-center justify-center rounded-xl bg-[#1B3C73] opacity-90 hover:bg-[#EE4266] hover:shadow-[0_0_20px_0_rgba(0,0,0)]"
          >
            <a className="flex items-center justify-center">
              <div
                className="flex w-40 items-center justify-start"
                onClick={l.function}
              >
                <span className="px-4 text-base text-white">{l.title}</span>
              </div>
            </a>
          </div>
        ))}
        <div />
      </div>
    </div>
  );
}
