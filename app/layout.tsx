import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import StoreProvider from "./StoreProvider";
import { CookiesProvider } from 'next-client-cookies/server';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Commerce",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <StoreProvider>
          {" "}
          <CookiesProvider>
          <Navbar />
      {children}
    </CookiesProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
