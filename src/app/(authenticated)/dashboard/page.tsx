import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constant";
import Header from "@/components/_layout/Header";
import Sidebar from "@/components/_layout/sidebar";
import Field from "@/components/dashboard/field";
import LinkBox from "@/components/dashboard/linkbox";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Register`,
  description: `${SITE_TITLE} - Register`
};

export default function LoginPage() {
  return (
    <main className="relative flex w-full flex-col bg-[#1a151c]">
      <Header />
      <Sidebar />
      <Field />
      <LinkBox />
    </main>
  );
}