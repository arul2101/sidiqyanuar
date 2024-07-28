"use client";

import { menu } from "@/constant";
import Each from "@/utils/Each";
import Link from "next/link";
import { Inter } from 'next/font/google';
import { usePathname } from "next/navigation";
import { motion as m } from "framer-motion";

const inter = Inter({ subsets: ['latin'] });


export default function Navigation() {
  const pathname = usePathname();

  console.log(pathname)
  return (
    <m.nav
      className="md:flex hidden justify-center gap-4 mt-8 border-b border-slate-200 dark:border-slate-800 pb-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .75, ease: "linear" }}
    >
      <Each of={menu} render={({ title, href }) =>
        <Link
          href={href}
          className={`${inter.className} dark:hover:text-[#ffc947] dark:hover:bg-transparent w-auto h-10 p-2 font-medium items-center hover:bg-slate-300 rounded-md transition-all ${pathname === href ? "dark:text-[#ffc947] text-slate-950 dark:after:content-[''] dark:after:block dark:after:border-b-2 dark:after:pb-4 dark:after:border-b-[#ffc947] dark:after:w-[100%]" : "text-slate-600 dark:text-white"}`}>{title}</Link>
      } />
    </m.nav>
  )
}
