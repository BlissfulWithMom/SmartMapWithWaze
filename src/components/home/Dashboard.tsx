"use client";

import News from "./news";
import TV from "./tv";
import Music from "./music";
import Waze from "./waze";
import Action from "./action";
// import Logo from "./logo";

export default function Dashboard() {
  return (
    <section className="h-screen w-full p-4">
      <div className="flex h-full flex-row">
        <div className="flex h-full w-1/4 flex-col justify-around">
          {/* <div className="flex h-[25%]">
            <Logo />
          </div> */}
          <div className="flex h-[25%]">
            <News />
          </div>
          <div className="flex h-[25%]">
            <TV />
          </div>
          <div className="flex h-[25%]">
            <Music />
          </div>
          <div className="flex h-[22%]">
            <Action />
          </div>
        </div>
        <div className="flex h-full w-3/4 flex-col justify-center">
          <Waze />
        </div>
      </div>
    </section>
  );
}
