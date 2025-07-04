"use client";

import Image from "next/image";
import ArulGantengImage from "@/public/img/arul-ganteng.png";
import { Source_Sans_3 } from "next/font/google";
import { useTypewriter } from "react-simple-typewriter";
import { useTranslations } from "next-intl";

const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export default function Hero() {
  const [text] = useTypewriter({
    words: ["Web Development Enthusiast", "Learning and sharing"],
    loop: {},
  });
  const t = useTranslations("Hero");

  return (
    <section className="max-md:border-t max-md:border-slate-200 max-md:dark:border-slate-800 border-b border-slate-200 dark:border-slate-800 pt-2 px-8 text-center flex flex-col gap-2 items-center p-4 animate-show-fade-in">
      <div className="animate-show-fade-in">
        <Image
          src={ArulGantengImage}
          alt="Profile Picture Image"
          className="w-[10rem] rounded-full bg-blue-950"
          priority
        />
      </div>

      <h2 className="font-bold text-xl md:text-3xl animate-show-from-left">
        Sidiq Yanuar
      </h2>

      <p className="h-2 font-semibold text-slate-400 max-md:text-[.95rem] animate-show-from-left">{text}</p>

      <p className={`${sourceSans.className} max-w-lg text-lg md:text-xl font-light mt-6 animate-show-from-right`}>
        {t("description")}
      </p>
    </section>
  );
}
