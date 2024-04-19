"use client";

import Waze from "./waze";

export default function Field() {
  return (
    <div className="flex h-full w-full flex-row justify-end pl-2">
      <div className="w-2/3">
        <Waze />
      </div>
    </div>
  );
}
