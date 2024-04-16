import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constant";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Landing`,
  description: `${SITE_TITLE} - Landing`
};

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#1a151c]">
      <header>header</header>
      <section>login</section>
      <footer>footer</footer>
    </main>
  );
}
