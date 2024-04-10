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
        <CardContent className="h-full p-2">
          <iframe
            id="waze-iframe"
            frameborder="0"
            src="https://embed.waze.com/iframe?zoom=13&lat=31.0461&lon=34.8516&ct=livemap&pin=1&desc=1"
            className="h-full w-full"
          />
        </CardContent>
        {/* <CardFooter>
          <p>Card Footer</p>
        </CardFooter> */}
      </Card>
    </div>
  );
}
