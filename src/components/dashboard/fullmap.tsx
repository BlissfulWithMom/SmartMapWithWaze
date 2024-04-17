"use client";

export default function FullMap() {
  return (
    <div className="mt-8 flex h-screen w-full">
      <div className="flex w-full">
        <iframe
          id="waze-iframe"
          frameBorder="0"
          src="https://embed.waze.com/iframe?zoom=17&lat=31.771959&lon=35.217018&ct=livemap&pin=1&desc=<USER_ID>$visitor=<VISITOR_ID>"
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
