"use client";

import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

export default function News() {
  return (
    <div className="h-full w-full">
      <Link href="https://13tv.co.il/live/">
        <Card
          className="flex h-full bg-cover"
          style={{ backgroundImage: "url('/images/home/news.jpg')" }}
        >
          <CardHeader>
            <img
              src="/icon/news.png"
              alt="newsIcon"
              className="h-[50px] w-[50px]"
            />
            <CardTitle className="text-[red]">News</CardTitle>
            <CardDescription className="text-[red]">
              Please listen to today's news...
            </CardDescription>
          </CardHeader>
        </Card>
      </Link>
    </div>
  );
}
