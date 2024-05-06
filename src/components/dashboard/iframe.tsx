"use client";

import React from "react";

function IframeComponent({ url }) {
  return (
    <iframe src={url} width="100%" className="mt-24 h-[calc(100vh-6rem)]" />
  );
}

export default IframeComponent;
