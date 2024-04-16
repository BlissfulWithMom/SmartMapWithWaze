import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constant";
import Header from "@/components/_layout/Header";
import Sidebar from "@/components/_layout/sidebar";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Register`,
  description: `${SITE_TITLE} - Register`
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#1a151c]">
      <Header />
      {/* <section>login</section>
      <footer>footer</footer> */}
      <Sidebar />
    </main>
  );
}
