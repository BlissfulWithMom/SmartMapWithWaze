"use client";

import Waze from "./waze";

export default function Map() {
  return (
    <div className="fixed right-0 h-[calc(100vh-6rem)] w-2/3">
      <Waze />
    </div>
  );
}
