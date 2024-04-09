"use client";

import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

export default function TV() {
  return (
    <div className="w-full">
      <Link href="https://www.mako.co.il/mako-vod-live-tv/VOD-6540b8dcb64fd31006.htmkan">
        <Card
          className="flex h-full bg-cover"
          style={{ backgroundImage: "url('/images/home/tv.jpg')" }}
        >
          <CardHeader>
            <CardTitle className="text-[#008DDA]">TV</CardTitle>
            <CardDescription className="text-[#008DDA]">
              What is your favorite movie? Enjoy it...
            </CardDescription>
          </CardHeader>
        </Card>
      </Link>
    </div>
  );
}
