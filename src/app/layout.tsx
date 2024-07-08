import StyledComponentsRegistry from "@/lib/registry";

import Nav from "@/components/layout/nav";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PLAY BLOG :: THE PUB ::",
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
          <section className="container mx-auto">
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </section>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
