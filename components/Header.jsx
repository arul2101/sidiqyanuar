"use client";

import { FiDownload, FiMenu, FiMoon, FiSun } from "react-icons/fi";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavigationPhone from "./NavigationPhone";
import Logo from "@/components/Logo";
import { Poppins } from "next/font/google";
import Icons from "./Icons";
import { useTheme } from "next-themes";

import { motion as m } from "framer-motion";
import LocaleSwitch from "./LocaleSwitch";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function Header({ locale }) {
  const [mounted, setMounted] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { theme, setTheme } = useTheme("light");

  useEffect(() => {
    if (!toggle) {
      document.body.classList.remove("overflow-y-hidden");
    } else {
      document.body.classList.add("overflow-y-hidden");
    }
  }, [toggle]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header
      className={`2xl:max-w-[1480px] lg:max-w-7xl md:max-w-3xl max-w-2xl mx-auto px-4 py-4`}
    >
      <m.section
        className="flex justify-between items-center py-6"
        initial={{ x: "+75%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "linear" }}
      >
        <div
          className="button_navigation md:hidden"
          onClick={() => setToggle((prevToggle) => !prevToggle)}
        >
          <FiMenu />
        </div>

        <Logo position="mobileUp" />

        <div className="flex items-center gap-2">
          <LocaleSwitch />
          <div
            className="button_navigation"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" && mounted ? <FiMoon /> : <FiSun />}
          </div>
        </div>
      </m.section>

      <NavigationPhone onToggle={setToggle} toggle={toggle} locale={locale} />

      <m.section
        className="flex items-center max-md:flex-col md:justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "linear" }}
      >
        <Link
          href="/"
          className={`mb-4 font-bold text-xl md:hidden block ${poppins.className}`}
        >
          Sidiq Yanuar
        </Link>
        <a
          href={"assets/cv-updated-2025.pdf"}
          target="_blank"
          download
          className="py-2 px-4 bg-blue-600 rounded-full text-white font-medium flex items-center justify-center gap-2 md:order-last hover:bg-opacity-90 transition-all dark:bg-dark-mode2nd dark:hover:bg-[#8dcbce]"
        >
          <FiDownload />
          Download CV
        </a>
        <Icons
          classNameOfContainer="flex gap-4 max-md:mt-8 mb-2"
          classNameOfEachIcon="text-2xl"
        />
      </m.section>
    </header>
  );
}
