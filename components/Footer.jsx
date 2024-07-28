"use client";

import Icons from "./Icons";
import { Poppins } from "next/font/google";
import { motion as m } from "framer-motion";

const poppins = Poppins({ subsets: ['latin'], weight: '400' });

export default function Footer() {
  return (
    <m.footer
      className="text-center bg-slate-300 dark:bg-slate-800 py-3 mt-96"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "linear" }}
    >
      <Icons classNameOfContainer="flex mb-2 justify-center items-center" classNameOfEachIcon="text-xl" />

      <p>&copy;2024 <a href="https://www.instagram.com/m.yanuarullah" target="_blank" className={`${poppins.className} text-blue-600 dark:text-[#76ABAE]`}>Sidiq Yanuar</a> - Created with <span className="text-red-500">❤</span></p>
    </m.footer>
  )
}
