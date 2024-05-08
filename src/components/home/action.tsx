"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { useMapStore } from "@/zustand/zustand";
import { Button } from "../ui/button";

export default function Action() {
  const GoogleMap = useMapStore((state) => state.setGoogleMap);
  const WazeMap = useMapStore((state) => state.setWazeMap);
  return (
    <div className="f-full w-full">
      <Link href="/#">
        <Card className="flex h-full bg-[#FDFFAB]">
          <CardContent className="flex h-full w-full flex-col items-center rounded-md p-2">
            <div className="flex h-full w-full flex-row items-center rounded-md p-2">
              <div className="border-1 flex w-1/2 items-center border-black p-2">
                <Button className="w-full" onClick={GoogleMap}>
                  <img
                    src="/icon/google3.png"
                    alt="googleIcon"
                    className="h-[50px] w-[50px]"
                  />
                  <p>Google Map</p>
                </Button>
              </div>
              <div className="border-1 flex w-1/2 items-center border-black p-2">
                <Button className="w-full" onClick={WazeMap}>
                  <img
                    src="/icon/waze1.png"
                    alt="wazeIcon"
                    className="h-[50px] w-[50px]"
                  />
                  <p>Waze Map</p>
                </Button>
              </div>
            </div>
            <div className="flex w-full justify-center p-4">
              <Button>
                <img
                  src="/icon/ai.png"
                  alt="aiIcon"
                  className="h-[50px] w-[50px]"
                />
                <p>Turn On Voice Commands</p>
              </Button>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
