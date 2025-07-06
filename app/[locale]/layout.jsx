import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Inter } from "next/font/google";
import Theme from "@/theme-provider";
import "@/app/_style/globals.css";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Bounce, ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://www.sidiqyanuar.vercel.app'),
  keywords: ['sidiqyanuar', 'sidiq yanuar', 'muhammad yanuarullah assidiq', 'arul', 'arul website', 'sidiq yanuar portfolio', 'sidiq yanuar portofolio', "arul's website portfolio", 'website arul'],
  title: {
    default: 'Sidiq Yanuar',
    template: "Sidiq Yanuar | %s",
  },
  verification: {
    google: "eDIgKm-oW2BlG5tUlvhB1JdX7RdJAiDyQXO3p4H2iqE"
  },
  openGraph: {
    description: 'Im a simple, creative, enthusiastic and fun loving person. My dream is to create something for help many people',
    images: [
      {
        url: 'https://www.sidiqyanuar.vercel.app/opengraph-image.png',
        alt: 'My Website Open Graph Image',
        width: 1200,
        height: 630,
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Arul's website portfolio",
  },
}

export default async function LocaleLayout({ children, params: { locale } }) {
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.className} dark:bg-dark-mode`}>
        <NextIntlClientProvider messages={messages}>
          <Theme>
            <Header locale={locale} />
            <Navigation locale={locale} />
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
              transition={Bounce}
            />
            {children}
            <Footer />
          </Theme>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
