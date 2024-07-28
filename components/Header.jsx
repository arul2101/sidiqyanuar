"use client";

import { FiMenu, FiMoon, FiSun } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavigationPhone from "./NavigationPhone";
import Logo from "@/components/Logo";
import { Poppins } from 'next/font/google';
import Icons from "./Icons";
import { useTheme } from "next-themes";

import { motion as m } from "framer-motion";

const poppins = Poppins({ subsets: ['latin'], weight: '400' });

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { theme, setTheme, } = useTheme("light");


  useEffect(() => {
    if (!toggle) {
      document.body.classList.remove("overflow-y-hidden");
    } else {
      document.body.classList.add("overflow-y-hidden");
    }
  }, [toggle])

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header
      className={`2xl:max-w-[1480px] lg:max-w-7xl md:max-w-3xl max-w-2xl mx-auto px-4 py-4`}
    >
      <m.section
        className="flex justify-between items-center py-6"
        initial={{ x: "-75%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .75, ease: "linear" }}
      >
        <div className="button_navigation md:hidden" onClick={() => setToggle(prevToggle => !prevToggle)}>
          <FiMenu />
        </div>

        <Logo position="mobileUp" />

        <div className="button_navigation" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          {theme === "light" && mounted ? <FiMoon /> : <FiSun />}
        </div>
      </m.section>

      <NavigationPhone onToggle={setToggle} toggle={toggle} />

      <m.section
        className="flex items-center max-md:flex-col md:justify-between"
        initial={{ x: "+75%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .75, ease: "linear" }}
      >
        <Link href="/" className={`mb-4 font-bold text-xl md:hidden block ${poppins.className}`}>Sidiq Yanuar</Link>
        <a href="https://www.instagram.com/m.yanuarullah" target="_blank" className="button_follow"><FiUserPlus />Follow</a>

        <Icons classNameOfContainer="flex gap-4 max-md:mt-8 mb-2" classNameOfEachIcon="text-2xl" />
      </m.section>
    </header>
  )
}
