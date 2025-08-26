import type { Metadata } from "next";
import { Inter  } from "next/font/google";
import "../ui/globals.css";
import { Header } from "@/components/Header";

const primaryFont = Inter ({
  variable: "--font-inter-sans",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Rodolfo Alejandro Castro Developer",
  description: "Rodolfo Alejandro Castro Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${primaryFont.variable} min-h-svh overflow-x-hidden`}
      >
        <div className="sticky top-0 z-50 py-4 -mx-4 xl:-mx-8 px-4 xl:px-8 mb-4">
        <Header/>
      </div>
        {children}
      </body>
    </html>
  );
}
