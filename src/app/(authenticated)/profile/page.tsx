import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constant";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Register`,
  description: `${SITE_TITLE} - Register`
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <header>header</header>
      <section>login</section>
      <footer>footer</footer>
    </main>
  );
}
