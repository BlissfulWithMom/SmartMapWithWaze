"use client";

import Waze from "./waze";

export default function Map() {
  return (
    <div className="flex h-full w-full flex-row justify-end">
      <div className="w-2/3">
        <Waze />
      </div>
    </div>
  );
}
