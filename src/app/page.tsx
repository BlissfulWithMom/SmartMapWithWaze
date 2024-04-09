import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constant";
import Dashboard from "@/components/home/dashboard";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Landing`,
  description: `${SITE_TITLE} - Landing`
};

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Dashboard />
    </main>
  );
}
