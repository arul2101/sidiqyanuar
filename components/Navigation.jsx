"use client";

import { menu } from "@/constant";
import Each from "@/utils/Each";
import Link from "next/link";
import { Inter } from 'next/font/google';
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ['latin'] });


export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="md:flex hidden justify-center gap-4 mt-8">
      <Each of={menu} render={({ title, href }) =>
        <Link href={href} className={`${inter.className} text-slate-600 h-7 w-auto p-2 flex justify-center font-medium items-center hover:bg-slate-300 rounded-md transition-all ${pathname === href && "text-slate-950"}`}>{title}</Link>
      } />
    </nav>
  )
}
