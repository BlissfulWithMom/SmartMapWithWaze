"use client";

import "./style.css";

export default function Waze() {
  return (
    <div className="mt-12 flex h-screen w-full justify-end">
      <div className="flex w-full">
        <iframe
          id="waze-iframe"
          frameBorder="0"
          src="https://embed.waze.com/iframe?zoom=17&lat=31.771959&lon=35.217018&ct=livemap&pin=1&desc=<USER_ID>$visitor=<VISITOR_ID>"
          className="h-full w-full"
          style={{
            borderBottomLeftRadius: "80%",
            boxShadow: "0px 0px 80px grey "
          }}
        />
      </div>
    </div>
  );
}
