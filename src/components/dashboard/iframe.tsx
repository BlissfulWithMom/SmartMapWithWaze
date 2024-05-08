"use client";

import React from "react";

function IframeComponent({ url }: { url: string }) {
  return (
    <iframe
      title={url}
      src={url}
      width="100%"
      className="h-[calc(100vh-6rem)] rounded-b-[20px]"
    />
  );
}

export default IframeComponent;
