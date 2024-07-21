import { Inter } from "next/font/google";
import "@/app/_style/globals.css"
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sidiq Yanuar",
  description: "Arul's website portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Navigation />

        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
