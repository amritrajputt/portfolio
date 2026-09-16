import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import { ReactLenis } from "lenis/react";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Amrit Raj",
  description: "Amrit Raj - Full Stack Developer Portfolio",
  icons: "/amrit.jpg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ReactLenis root>
        <body
          className={`antialiased w-11/12 max-w-4xl mx-auto bg-[#F6F5FE] dark:bg-[#000000] text-black dark:text-white border-x border-neutral-200 dark:border-zinc-900 min-h-screen`}
        >
          <ThemeProvider
            attribute={"class"}
            defaultTheme="black"
            enableSystem
            disableTransitionOnChange={false}
          >
            <Navbar />
            {children}
            <Analytics />
          </ThemeProvider>
        </body>
      </ReactLenis>
    </html>
  );
}
