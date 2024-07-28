import { Inter } from "next/font/google";
import "@/app/_style/globals.css"
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Theme from "@/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "Sidiq Yanuar | %s",
    default: "Sidiq Yanuar",
  },
  description: "Arul's website portfolio",
  twitter: {
    card: "summary_large_image"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark:bg-dark-mode`}>
        <Theme>
          <Header />
          <Navigation />

          <main>
            {children}
          </main>

          <Footer />
        </Theme>
      </body>
    </html>
  );
}
