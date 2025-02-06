"use client";

import { menu } from "@/constant";
import Each from "@/utils/Each";
import { Link } from "@/i18n/routing";
import { Inter } from 'next/font/google';
import { usePathname } from "next/navigation";
import { motion as m } from "framer-motion";

const inter = Inter({ subsets: ['latin'] });


export default function Navigation({ locale }) {
  const pathname = usePathname();
  const isActive = (href) => {
    const activeRoute = href === '/' ? `/${locale}` : `/${locale}${href}`;
    const path = pathname.split("/");
    const adding = path.filter(item => item !== 'blog' && item !== locale).join('');
    return pathname === activeRoute + (adding !== '' ? `/${adding}` : '');
  }

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
          className={`${inter.className} dark:hover:text-[#ffc947] dark:hover:bg-transparent w-auto h-10 p-2 font-medium items-center hover:text-blue-600 rounded-md transition-all ${isActive(href) ? "dark:text-[#ffc947] dark:after:content-[''] dark:after:block dark:after:border-b-2 dark:after:pb-4 dark:after:border-b-[#ffc947] dark:after:w-[100%] text-blue-600 after:content-[''] after:block after:border-b-2 after:pb-4 after:border-blue-600 after:w-[100%]" : "text-slate-600 dark:text-white"}`}>{title}</Link>
      } />
    </m.nav>
  )
}
