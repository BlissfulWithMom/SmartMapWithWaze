"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function Waze() {
  return (
    <div className="h-full w-full pl-2">
      <Card className="h-full">
        <CardContent className="h-full p-2">
          <iframe
            id="waze-iframe"
            frameBorder="0"
            src="https://embed.waze.com/iframe?zoom=17&lat=31.771959&lon=35.217018&ct=livemap&pin=1&desc=<USER_ID>$visitor=<VISITOR_ID>"
            className="h-full w-full"
          />
        </CardContent>
      </Card>
    </div>
  );
}
