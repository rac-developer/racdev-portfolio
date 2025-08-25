import type { Metadata } from "next";
import { Inter  } from "next/font/google";
import "../ui/globals.css";

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
        className={`${primaryFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
