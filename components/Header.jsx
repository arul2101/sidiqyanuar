"use client";

import { FiMenu, FiMoon, FiSun } from "react-icons/fi";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavigationPhone from "./NavigationPhone";
import Logo from "@/components/Logo";
import { Poppins } from "next/font/google";
import Icons from "./Icons";
import { useTheme } from "next-themes";
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
    <header className={`2xl:max-w-[1480px] lg:max-w-7xl md:max-w-3xl max-w-2xl mx-auto px-4 py-4`}>
      <section className="flex justify-between items-center py-6">
        <div
          className="button_navigation md:hidden"
          onClick={() => setToggle((prevToggle) => !prevToggle)}
        >
          <FiMenu />
        </div>

        <Logo position="mobileUp" />

        <div className="flex items-center gap-2 animate-show-from-right">
          <LocaleSwitch />
          <div
            className="button_navigation"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" && mounted ? <FiMoon /> : <FiSun />}
          </div>
        </div>
      </section>

      <NavigationPhone onToggle={setToggle} toggle={toggle} locale={locale} />

      <section className="flex items-center max-md:flex-col md:justify-between">
        <Link
          href="/"
          className={`mb-4 font-bold text-xl md:hidden block animate-show-from-top ${poppins.className}`}
        >
          Sidiq Yanuar
        </Link>
        <Icons
          classNameOfContainer="flex gap-4 mb-2"
          classNameOfEachIcon="text-2xl"
        />
      </section>
    </header>
  );
}
