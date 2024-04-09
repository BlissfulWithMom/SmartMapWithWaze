"use client";

import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

export default function Music() {
  return (
    <div className="w-full">
      <Link href="https://open.spotify.com/playlist/5bDvrhT1eheXDZsvWWRJg1?si=63474fd4bd304d84">
        <Card
          className="flex h-full bg-cover"
          style={{ backgroundImage: "url('/images/home/music.jpg')" }}
        >
          <CardHeader>
            <CardTitle className="text-white">Music</CardTitle>
            <CardDescription className="text-white">
              Music is a friend in life...
            </CardDescription>
          </CardHeader>
        </Card>
      </Link>
    </div>
  );
}
