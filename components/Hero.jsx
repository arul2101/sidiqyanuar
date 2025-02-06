"use client";

import Image from "next/image";
import ArulGantengImage from "@/public/img/arul-ganteng.png";
import { Source_Sans_3 } from 'next/font/google';
import { useTypewriter } from 'react-simple-typewriter'
import { motion as m } from "framer-motion";
import { useTranslations } from 'next-intl';


const sourceSans = Source_Sans_3({ subsets: ['latin'] });


export default function Hero() {
  const [text] = useTypewriter({
    words: ['Web Development Enthusiast', 'Learning and sharing'],
    loop: {}
  })
  const t = useTranslations('Hero');

  return (
    <m.section
      className="max-md:border-t max-md:border-slate-200 max-md:dark:border-slate-800 border-b border-slate-200 dark:border-slate-800 pt-2 px-8 text-center flex flex-col gap-2 items-center h-[20rem] relative"
    >
      <m.div
        initial={{ x: "-75%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .75, ease: "linear" }}
      >
        <Image
          src={ArulGantengImage}
          alt="Profile Picture Image"
          className="w-[10rem] rounded-full bg-blue-950"
        />
      </m.div>
      <m.h2
        className="font-bold text-xl md:text-3xl"
        initial={{ x: "-75%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .75, ease: "linear" }}
      >Sidiq Yanuar</m.h2>
      <p className="-mt-2 font-semibold text-slate-400 absolute md:top-[13.5rem] top-[13rem] max-md:text-[.95rem]">{text}</p>

      <m.p
        className={`${sourceSans.className} max-w-lg text-lg md:text-xl font-light mt-6 max-md:text-[.9rem] max-md:mt-4`}
        initial={{ x: "+75%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .75, ease: "linear" }}
      >{t('description')}</m.p>
    </m.section>
  )
}
