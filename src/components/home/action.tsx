"use client";

import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

export default function Action() {
  return (
    <div className="f-full w-full">
      <Link href="/#">
        <Card className="flex h-full bg-[#FDFFAB]">
          <CardHeader>
            <CardTitle>Turn on AI</CardTitle>
            <CardDescription>
              We can add new functionalities here
            </CardDescription>
          </CardHeader>
        </Card>
      </Link>
    </div>
  );
}
