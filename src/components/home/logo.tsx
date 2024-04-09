"use client";

import News from "./news";
import TV from "./tv";
import Music from "./music";
import Waze from "./waze";
import Action from "./action";

export default function Logo() {
  return (
    <section className="h-screen w-full p-4">
      <div className="flex h-full flex-row">
        <div className="flex w-1/4 flex-col">
          <div className="flex">
            <L />
          </div>
          <div className="flex">
            <News />
          </div>
          <div className="flex">
            <TV />
          </div>
          <div className="flex">
            <Music />
          </div>
          <div className="flex">
            <Action />
          </div>
        </div>
        <div className="flex w-3/4">
          <Waze />
        </div>
      </div>
    </section>
  );
}
