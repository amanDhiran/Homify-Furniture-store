import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { auth } from "@/auth";
import { Providers } from "./provider";
import { Cart } from "@/actions/redis";
import { redis } from "@/lib/redis";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Homify",
  description: "An e-commerce store for furniture",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()
  const cart: Cart | null = await redis.get(`cart-${session?.user?.id}`) 
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar user={session?.user!} cart={cart}/>
          <div className="pt-[80px]">
          {children}
          </div>
          <Footer />
          </Providers>
      </body>
    </html>
  );
}
