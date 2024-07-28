"use client";

import { motion as m } from 'framer-motion';
import { Source_Sans_3 } from 'next/font/google';

const sourceSans = Source_Sans_3({ subsets: ['latin'] });

export default function Contact() {

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <m.section
      className="py-20 px-4 flex flex-col items-center gap-4 max-w-lg mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "linear" }}
    >
      <h2 className={`${sourceSans.className} text-4xl mb-4 font-semibold`}>Get In Touch</h2>

      <p className={`${sourceSans.className} mb-4 text-justify text-lg`}>I&#39;m currently looking for job or internship opportunities, my inbox is always open. I&#39;ll try my best to answer your email!</p>

      <button
        type="button"
        className="bg-blue-600 dark:bg-dark-mode2nd dark:hover:bg-[#8dcbce] text-white rounded-md p-4 hover:bg-blue-500 transition-all"
        onClick={() => openInNewTab("mailto:m.yanuarullah2101@gmail.com")}
      >Say Hello</button>
    </m.section>
  )
}
