"use client";

import Clock from "./view";
import Waze from "./waze";

export default function Field() {
  return (
    <div className="flex h-full w-full flex-row pl-2">
      <div className="w-1/3">
        <Clock />
      </div>

      <div className="w-2/3">
        <Waze />
      </div>
    </div>
  );
}
