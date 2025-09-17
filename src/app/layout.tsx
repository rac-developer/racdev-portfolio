import type { Metadata } from "next";
// import { Inter  } from "next/font/google";
import "@/ui/globals.css";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import GridBackground from "@/components/GridBackground";
import { primaryFont } from "@/ui/font";

// const primaryFont = Inter ({
//   variable: "--font-inter-sans",
//   subsets: ["latin"]
// });

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
    <html lang="es">
      <body className={`${primaryFont.variable} min-h-dvh overflow-x-hidden flex flex-col relative`}> 
        <GridBackground /> {/* Coloca el componente aquí */}
        
        <div className="sticky top-0 z-50 py-4 px-4 xl:px-8 mb-4 bg-background">
          <Header />
        </div>

        <div className="flex flex-col flex-grow w-full max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-none mx-auto px-6 md:px-8 xl:px-10">
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>

      </body>
    </html>
  );
}