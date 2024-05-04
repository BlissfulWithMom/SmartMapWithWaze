"use client";

import Link from "next/link";

export default function DropMenu({
  isOpen,
  toggle
}: {
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <div
      className="sidebar-container fixed left-0 z-50 grid h-full w-full justify-center overflow-hidden bg-white pt-[120px]"
      style={{
        opacity: `${isOpen ? "1" : "0"}`,
        top: ` ${isOpen ? "0" : "-100%"}`
      }}
    >
      <button className="absolute right-0 p-5" onClick={toggle}>
        {/* Close icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
          />
        </svg>
      </button>

      <ul className="sidebar-nav z-50 text-center text-xl leading-relaxed">
        <li>
          <Link href="/about">
            <button>כאן 11 סדרות</button>
          </Link>
        </li>
        <li>
          <Link href="/services">
            <button>ספורט 1</button>
          </Link>
        </li>
        <li>
          <Link href="/contacts">
            <button>הידברות שידור חי</button>
          </Link>
        </li>
        <li>
          <Link href="/contacts">
            <button>ערוץ 13 שידור חי</button>
          </Link>
        </li>
        <li>
          <Link href="/contacts">
            <button>ערוץ 14 שידור חי</button>
          </Link>
        </li>
        <li>
          <Link href="/contacts">
            <button>ניק ערוץ הילדיםl</button>
          </Link>
        </li>
        <li>
          <Link href="/contacts">
            <button>12 קשת</button>
          </Link>
        </li>
        <li>
          <Link href="/contacts">
            <button>11 כאן</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
