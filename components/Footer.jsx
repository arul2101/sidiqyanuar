"use client";

import Icons from "./Icons";
import { Poppins } from "next/font/google";
import { useTranslations } from "next-intl";

const poppins = Poppins({ subsets: ['latin'], weight: '400' });

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer className="text-center bg-slate-300 dark:bg-slate-800 py-3 mt-96 animate-show-fade-in">
      <Icons classNameOfContainer="flex mb-2 justify-center items-center" classNameOfEachIcon="text-xl" />

      <p>&copy;2025 <a href="https://www.instagram.com/m.yanuarullah" target="_blank" className={`${poppins.className} text-blue-600 dark:text-[#76ABAE]`}>Sidiq Yanuar</a> - {t('description')} <span className="text-red-500">❤</span></p>
    </footer>
  )
}
