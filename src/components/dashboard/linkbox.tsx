"use client";

import { useViewStore } from "@/zustand/zustand";

export default function LinkBox() {
  const FieldState = useViewStore((state) => state.field);

  const Button19 = useViewStore((state) => state.setButton19);
  const Live11 = useViewStore((state) => state.setLive11);
  const Here11 = useViewStore((state) => state.setHere11);
  const Sagittarius = useViewStore((state) => state.setSagittarius);
  const Channel13 = useViewStore((state) => state.setChannel13);
  const Channel14 = useViewStore((state) => state.setChannel14);
  const Children = useViewStore((state) => state.setChildren);
  const News = useViewStore((state) => state.setNews);
  const Lottery = useViewStore((state) => state.setLottery);
  const CNN = useViewStore((state) => state.setCnn);

  const list = [
    {
      title: "כפתור 19",
      function: Button19
    },
    {
      title: "11 כאן",
      function: Here11
    },
    {
      title: "12 קשת",
      function: Sagittarius
    },
    {
      title: "ערוץ 13 שידור חי",
      function: Channel13
    },
    {
      title: "ערוץ 14 שידור חי",
      function: Channel14
    },
    {
      title: "ניק ערוץ הילדיםl",
      function: Children
    },
    {
      title: "כאן 11 סדרות",
      function: Live11
    },
    {
      title: "מפעל הפיס",
      function: Lottery
    },
    {
      title: "חדשות",
      function: News
    },
    {
      title: "CNNLIVE",
      function: CNN
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
            className="mr-4 mt-4 flex h-[50px] w-[200px] cursor-pointer items-center justify-center rounded-xl bg-[#6AD4DD] text-black opacity-90 hover:bg-[#EE4266] hover:text-white hover:shadow-[0_0_20px_0_rgba(0,0,0)]"
          >
            <a className="flex items-center justify-center">
              <div
                className="flex w-40 items-center justify-start"
                onClick={l.function}
              >
                <span className="px-4 text-base">{l.title}</span>
              </div>
            </a>
          </div>
        ))}
        <div />
      </div>
    </div>
  );
}
