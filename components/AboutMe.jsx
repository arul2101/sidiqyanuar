"use client";

import { Source_Sans_3 } from 'next/font/google';
import Image from 'next/image';
import { FaLinkedinIn } from "react-icons/fa";
import AboutMeImg from "@/public/img/about-me.jpg";
import { motion as m } from "framer-motion";

const sourceSans = Source_Sans_3({ subsets: ['latin'] });

export default function AboutMe() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <m.section
      className="py-20 px-4 max-md:border-t max-md:border-slate-200 max-md:dark:border-slate-800 max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "linear" }}
    >
      <h2 className={`${sourceSans.className} text-center mb-8 text-4xl`}>About Me</h2>

      <div className='mb-10 relative before:content-[""] before:absolute before:border-t-8 before:border-l-8 before:border-blue-500 dark:before:border-[#76ABAE] before:top-0 before:left-0 md:before:w-[85%] before:w-[80%] before:h-full before:box-border perspective-2000 h-[450px] max-md:h-[350px] w-[80%] mx-auto after after:content-[""] after:absolute after:border-b-8 after:border-r-8 after:border-blue-500 dark:after:border-[#76ABAE] after:top-0 after:left-0 md:after:w-[85%] after:w-[80%] after:h-full after:box-border box-border left-10 hover:cursor-pointer hover:-rotate-y-5 transition-all before:hover:rotate-y-5 before:transition-all after:hover:rotate-y-5 after:transition-all'>
        <Image
          alt='About Me Image'
          src={AboutMeImg}
          className='absolute top-[30px] left-[-30px] w-[95%] h-[calc(100%-60px)]'
        />
      </div>

      <div className='md:px-20 px-8 fade'>
        <p className='mb-4'>Hello! My full name is Muhammad Yanuarullah Assidiq, you can call me Arul or Anwar. I&#39;m 23 years old, I was born on January 21, 2001 in Indonesia, Jakarta.</p>

        <p className='mb-4'>I&#39;m obsessed with making things and even more obsessed with making things better. In everyday life, I work as a data entry in a company in Jakarta. I have been interested in web development since 2018 and started self-taught since 2019.</p>

        <p className='mb-4'>If you interested about my work experience, you can visit my LinkedIn</p>

        <button
          className='text-white bg-blue-600 dark:bg-dark-mode2nd hover:bg-blue-400 dark:hover:bg-[#8dcbce] transition-all px-4 py-2 rounded-md flex items-center gap-2'
          type='button'
          onClick={() => openInNewTab("https://www.linkedin.com/in/muhammad-yanuarullah-assidiq-90a698255/")}
        >Linked <FaLinkedinIn /></button>
      </div>
    </m.section>
  )
}
