"use client";

// import { Metadata } from "next";
// import { SITE_TITLE } from "@/utils/constant";

import Sidebar from "@/components/dashboard/sidebar";
import Field from "@/components/dashboard/field";
import Navigation from "@/components/dashboard/navigation/navigation";
import IframeComponent from "@/components/dashboard/iframe";
import { useViewStore } from "@/zustand/zustand";

// export const metadata: Metadata = {
//   title: `${SITE_TITLE} - Register`,
//   description: `${SITE_TITLE} - Register`
// };

export default function DashboardPage() {
  const FieldState = useViewStore((state) => state.field);
  const WazeState = useViewStore((state) => state.waze);
  const Live11State = useViewStore((state) => state.live11);
  const SagittariusState = useViewStore((state) => state.sagittarius);
  return (
    <main className="relative flex w-full flex-col bg-[#1a151c]">
      <Navigation />
      <Sidebar />
      {FieldState && <Field />}
      {WazeState && (
        <IframeComponent url="https://embed.waze.com/iframe?zoom=18&lat=-23.55052&lon=-46.63331&pin=1&desc=1" />
      )}
      {Live11State && (
        <IframeComponent url="https://www.kan.org.il/content/kan/kan-11/p-12317/" />
      )}
      {SagittariusState && (
        <IframeComponent url="https://www.mako.co.il/mako-vod" />
      )}
    </main>
  );
}
