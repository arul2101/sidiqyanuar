"use client";

import Image from "next/image";
import ProfilePicture from "@/public/img/profile-picture.png";
import { Source_Sans_3 } from 'next/font/google';
import { useTypewriter } from 'react-simple-typewriter'

const sourceSans = Source_Sans_3({ subsets: ['latin'] });


export default function Hero() {
  const [text] = useTypewriter({
    words: ['Web Development Enthusiast', 'Handsome People'],
    loop: {}
  })

  return (
    <section className="max-md:border-t max-md:border-slate-200 border-b border-slate-200 py-8 px-8 text-center flex flex-col gap-2 items-center h-[20rem] relative">
      <Image
        src={ProfilePicture}
        alt="Profile Picture Image"
        className="w-[6rem] rounded-full bg-blue-950"
      />
      <h2 className="font-bold text-xl md:text-3xl">Sidiq Yanuar</h2>
      <p className="-mt-2 font-semibold text-slate-400">{text}</p>

      <p className={`${sourceSans.className} max-w-lg text-lg md:text-xl font-light absolute bottom-11`}>Im a simple, creative, enthusiastic and fun loving person. My dream is to create something for help many people</p>
    </section>
  )
}
