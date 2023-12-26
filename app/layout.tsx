import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import StoreProvider from "./StoreProvider";
import { CookiesProvider } from "next-client-cookies/server";
import { Suspense } from "react";
import Loading from "./loading";
import { ToastContainer } from "react-toastify";


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

            <Suspense fallback={<Loading />}>
              {" "}
              {children} <ToastContainer />
            </Suspense>
          </CookiesProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
