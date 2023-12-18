import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReduxProviders } from "@/redux/ReduxProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
    <html lang="en" className="dark">
      <body className={inter.className}>
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
