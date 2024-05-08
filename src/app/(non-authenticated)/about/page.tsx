import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constant";
import Header from "@/components/_layout/Header";
import Footer from "@/components/_layout/Footer";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Register`,
  description: `${SITE_TITLE} - Register`
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <Footer />
    </main>
  );
}
