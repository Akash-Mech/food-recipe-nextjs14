import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Food recipe app",
  description: "Explore a curated selection of tasty recipes and make every meal a delightfav",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="container mx-auto">
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </div>
        <Footer />
      </body>
    </html>
  );
}
