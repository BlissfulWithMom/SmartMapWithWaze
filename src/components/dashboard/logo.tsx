"use client";

import React from "react";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="fixed left-2 top-2">
      <Link
        className="box-border flex h-full items-center px-4 pt-1 text-base font-normal text-white"
        href="/"
      >
        <img src="/images/logo/logo.svg" alt="logo" className="w-[90px]" />
      </Link>
    </div>
  );
}
