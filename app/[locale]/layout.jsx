import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Inter } from "next/font/google";
import Theme from '@/theme-provider';
import '@/app/_style/globals.css'
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

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

export default async function LocaleLayout({
  children,
  params: { locale }
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.className} dark:bg-dark-mode`}>
        <NextIntlClientProvider messages={messages}>
          <Theme>
            <Header locale={locale} />
            <Navigation locale={locale} />
            {children}
            <Footer />
          </Theme>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}