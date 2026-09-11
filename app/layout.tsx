import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Toto list app",
  description: "Generated your own todolist",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col items-center ">
          <Navbar />
          
          {/* Use flex-1 & flex-col to allow main to expand and pass height down */}
          <main className="container flex flex-1 flex-col items-center justify-center p-4">
            {children}
          </main>
        </body>
    </html>
  );
}
