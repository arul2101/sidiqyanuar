"use client";

import Each from "@/utils/Each";
import { FiMenu } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
import { icon } from "@/constant";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavigationPhone from "./NavigationPhone";
import ProfilePicture from "@/components/ProfilePicture";
import Navigation from "./Navigation";
import { Poppins } from 'next/font/google';

const inter = Poppins({ subsets: ['latin'], weight: '400' });

export default function Header() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-y-hidden");
  }, [toggle])

  return (
    <header className="2xl:max-w-[1480px] lg:max-w-7xl md:max-w-3xl max-w-2xl mx-auto px-4 py-4">
      <section className="flex justify-between items-center py-6">
        <div className="button_navigation md:hidden" onClick={() => setToggle(prevToggle => !prevToggle)}>
          <FiMenu />
        </div>

        <ProfilePicture position="mobileUp" />

        <div className="button_navigation">
          <FiMoon />
        </div>
      </section>

      <NavigationPhone onToggle={setToggle} toggle={toggle} />

      <section className="flex items-center max-md:flex-col md:justify-between">
        <Link href="/" className={`mb-4 font-bold text-xl md:hidden block ${inter.className}`}>Sidiq Yanuar</Link>
        <a href="https://www.instagram.com/m.yanuarullah" target="_blank" className="button_follow"><FiUserPlus />Follow</a>
        <div className="flex gap-4 max-md:mt-8 mb-2">
          <Each of={icon} render={({ element, href }) =>
            <a
              href={href}
              target="_blank"
              className="text-2xl h-10 w-10 rounded-full flex items-center justify-center hover:bg-slate-200 cursor-pointer hover:bg-opacity-60 transition-all text-slate-700"
            >{element}</a>
          } />
        </div>
      </section>
    </header>
  )
}
