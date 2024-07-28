"use client";

import Image from "next/image";
import ArulGantengImage from "@/public/img/arul-ganteng.png";
import { Source_Sans_3 } from 'next/font/google';
import { useTypewriter } from 'react-simple-typewriter'
import { motion as m } from "framer-motion";

const sourceSans = Source_Sans_3({ subsets: ['latin'] });


export default function Hero() {
  const [text] = useTypewriter({
    words: ['Web Development Enthusiast', 'Handsome People'],
    loop: {}
  })

  return (
    <m.section
      className="max-md:border-t max-md:border-slate-200 max-md:dark:border-slate-800 border-b border-slate-200 dark:border-slate-800 pt-4 px-8 text-center flex flex-col gap-2 items-center h-[20rem] relative"
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
      <p className="-mt-2 font-semibold text-slate-400">{text}</p>

      <m.p
        className={`${sourceSans.className} max-w-lg text-lg md:text-xl font-light absolute bottom-4`}
        initial={{ x: "+75%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .75, ease: "linear" }}
      >Im a simple, creative, enthusiastic and fun loving person. My dream is to create something for help many people</m.p>
    </m.section>
  )
}
