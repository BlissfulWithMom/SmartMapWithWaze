"use client";

import "./style.css";

export default function Waze() {
  return (
    <div className="flex h-screen w-full justify-end">
      <div className="flex w-full">
        <iframe
          id="waze-iframe"
          frameBorder="0"
          src="https://embed.waze.com/iframe?zoom=18&lat=-23.55052&lon=-46.63331&pin=1&desc=1"
          className="z-40 h-[calc(100vh-6rem)] w-full rounded-br-[20px]"
          style={{
            boxShadow: "-10px 0px 35px -7px #FFFAB7 "
          }}
        />
      </div>
    </div>
  );
}
