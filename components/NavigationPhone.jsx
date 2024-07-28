"use client";

import { icon, menu } from "@/constant";
import Each from "@/utils/Each";
import Link from "next/link";
import { VscChromeClose } from "react-icons/vsc";
import ProfilePicture from "./ProfilePicture";
import { DM_Sans } from 'next/font/google';
import { Inter } from 'next/font/google';
import { usePathname } from "next/navigation";
import Icons from "./Icons";


const dmSans = DM_Sans({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });


export default function NavigationPhone({ toggle, onToggle }) {
  const pathname = usePathname();

  return (
    <>
      <div
        className={`${toggle ? "h-screen w-full bg-slate-950 bg-opacity-40 absolute md:hidden top-0 left-0 z-40 transition-all" : ""}`}
        onClick={() => onToggle(false)}
      ></div>
      <nav className={`absolute md:hidden h-screen w-[20rem] bg-white dark:bg-dark-mode z-50 top-0 left-0 p-6 transition-all ${toggle ? "left-0" : "left-[-999px]"}`}>
        <section className="flex justify-between items-center">
          <ProfilePicture position="phone" />

          <button
            className="text-xl h-8 w-8 flex items-center justify-center rounded-full hover:bg-slate-200 hover:bg-opacity-60"
            onClick={() => onToggle(false)}
          >
            <VscChromeClose />
          </button>
        </section>

        <section className="mt-12">
          <h2 className={`text-slate-400 font-medium text-lg ${inter.className}`}>Menu</h2>

          <div className="flex flex-col gap-3 mt-4">
            <Each of={menu} render={({ title, href }) =>
              <Link
                href={href}
                className={`${dmSans.className} hover:bg-slate-200 dark:hover:bg-dark-mode2nd pl-4 py-3 rounded-md transition-all ${pathname === href && "bg-slate-200 dark:bg-dark-mode2nd"}`}
                onClick={() => onToggle(false)}
              >{title}</Link>
            } />
          </div>
        </section>

        <section className="mt-12">
          <h2 className={`text-slate-400 font-medium text-lg ${inter.className}`}>Socials</h2>

          <Icons classNameOfContainer='flex gap-4 mt-8 mb-2' classNameOfEachIcon='text-2xl' />
        </section>
      </nav>
    </>
  )
}
