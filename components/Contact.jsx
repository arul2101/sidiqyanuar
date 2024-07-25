"use client";

import { Source_Sans_3 } from 'next/font/google';

const sourceSans = Source_Sans_3({ subsets: ['latin'] });

export default function Contact() {

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <section className="py-20 px-4 flex flex-col items-center gap-4 max-w-lg mx-auto">
      <h2 className={`${sourceSans.className} text-4xl mb-4 font-semibold`}>Get In Touch</h2>

      <p className={`${sourceSans.className} mb-4 text-justify text-lg`}>I&#39;m currently looking for job or internship opportunities, my inbox is always open. I&#39;ll try my best to answer your email!</p>

      <button
        type="button"
        className="bg-blue-600 text-white rounded-md p-4 hover:bg-blue-500 transition-all"
        onClick={() => openInNewTab("mailto:m.yanuarullah2101@gmail.com")}
      >Say Hello</button>
    </section>
  )
}
