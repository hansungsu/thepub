import StyledComponentsRegistry from "@/lib/registry";

import Nav from "@/components/layout/nav";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IT BLOG :: THE PUB",
  description: "welcome visit the PUB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Nav />
          <section className="container mx-auto">{children}</section>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
