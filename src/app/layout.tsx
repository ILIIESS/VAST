import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PFE",
  description: "Generated by create next app",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased flex",
          fontSans.variable
        )}
      >
        <Sidebar />

        <div className="min-h-screen ml-[320px] w-full overflow-y-scroll">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}