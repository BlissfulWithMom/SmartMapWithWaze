"use client";

import React from "react";

function IframeComponent({ url }) {
  return <iframe src={url} width="100%" height="1000px" />;
}

export default IframeComponent;
