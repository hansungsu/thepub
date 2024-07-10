import StyledComponentsRegistry from "@/lib/registry";

import Nav from "@/components/layout/nav";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PLAY BLOG :: THE PUB ::",
  description: "welcome visit the PUB",
};

// Create a client
const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>
      <QueryClientProvider client={queryClient}>
        <StyledComponentsRegistry>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex min-h-screen w-full flex-col">
              <Nav />
              <section>{children}</section>
            </div>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </QueryClientProvider>
      </body>
    </html>
  );
}
