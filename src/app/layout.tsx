import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import WrapProviders from "./WrapProviders";
import { Toaster } from "sonner";
import { CookiesProvider } from "next-client-cookies/server";

export const metadata: Metadata = {
  title: "deltafoxtech",
  description: "Official website of deltafoxtech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <CookiesProvider>
        <WrapProviders>
          <body>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {/* <NavBar /> */}
              <div className="bg-[#F5F5F5]">
                {children}
                <Toaster richColors />
              </div>
            </ThemeProvider>
          </body>
        </WrapProviders>
      </CookiesProvider>
    </html>
  );
}
