"use client";

import {
  Card,
  CardContent
  // CardDescription,
  // CardFooter,
  // CardHeader,
  // CardTitle
} from "@/components/ui/card";

export default function Waze() {
  return (
    <div className="h-full w-full pl-2">
      <Card className="h-full">
        {/* <CardHeader>
          <CardTitle>News</CardTitle>
          <CardDescription>Please listen to today's news...</CardDescription>
        </CardHeader> */}
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        {/* <CardFooter>
          <p>Card Footer</p>
        </CardFooter> */}
      </Card>
    </div>
  );
}
