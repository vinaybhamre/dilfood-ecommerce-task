import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReduxProviders } from "@/redux/ReduxProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { Providers } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DecorNest",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          closeOnClick
          theme="dark"
        />
        <ReduxProviders>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </ReduxProviders>
      </body>
    </html>
  );
}
