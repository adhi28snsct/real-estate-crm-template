import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/src/components/layout/sidebar";
import { Header } from "@/src/components/layout/header";

const inter = Inter({ subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
  title: "EstateFlow | Real Estate Lead Management",
  description: "Modern Real Estate Lead Management UI Dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-gray-50 antialiased">
      <body className={`${inter.className} h-full overflow-hidden text-gray-900 bg-gray-50 flex`}>
        <Sidebar />
        <div className="flex flex-1 flex-col overflow-hidden min-w-0 bg-[#FAFAFA]">
          <Header />
          <main className="flex-1 overflow-y-auto w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 min-h-full">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
