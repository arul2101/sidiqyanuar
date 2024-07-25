"use client";

import { FiMenu, FiMoon, FiSun } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavigationPhone from "./NavigationPhone";
import ProfilePicture from "@/components/ProfilePicture";
import { Poppins } from 'next/font/google';
import Icons from "./Icons";
// import { FaSun } from "react-icons/fa";

const poppins = Poppins({ subsets: ['latin'], weight: '400' });

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

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

        <div className="button_navigation" onClick={() => setDarkMode(!darkMode)}>
          {!darkMode ? <FiMoon /> : <FiSun />}
        </div>
      </section>

      <NavigationPhone onToggle={setToggle} toggle={toggle} />

      <section className="flex items-center max-md:flex-col md:justify-between">
        <Link href="/" className={`mb-4 font-bold text-xl md:hidden block ${poppins.className}`}>Sidiq Yanuar</Link>
        <a href="https://www.instagram.com/m.yanuarullah" target="_blank" className="button_follow"><FiUserPlus />Follow</a>

        <Icons classNameOfContainer="flex gap-4 max-md:mt-8 mb-2" classNameOfEachIcon="text-2xl" />
      </section>
    </header>
  )
}
