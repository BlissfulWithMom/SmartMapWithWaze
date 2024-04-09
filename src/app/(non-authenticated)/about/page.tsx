import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constant";
import Header from "@/components/_layout/Header";
import Title from "@/components/about/Title";
import Footer from "@/components/_layout/Footer";
import Testimonial from "@/components/home/Testimonial";
import About from "@/components/about/About";
import Team from "@/components/about/Team";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Register`,
  description: `${SITE_TITLE} - Register`
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <Title />
      <About />
      <Team />
      <Testimonial />

      <Footer />
    </main>
  );
}
