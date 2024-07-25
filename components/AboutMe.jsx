import { Source_Sans_3 } from 'next/font/google';
import Image from 'next/image';
import { FaLinkedinIn } from "react-icons/fa";
import AboutMeImg from "@/public/img/profile2.jpg";
import AboutMeImgg from "@/public/img/about-me.jpg";

const sourceSans = Source_Sans_3({ subsets: ['latin'] });

export default function AboutMe() {
  return (
    <section className="py-20 px-4 max-md:border-t max-md:border-slate-200 max-w-4xl mx-auto">
      <h2 className={`${sourceSans.className} text-center mb-8 text-4xl`}>About Me</h2>

      <div className='mb-10 relative before:content-[""] before:absolute before:border-t-8 before:border-l-8 before:border-blue-500 before:top-0 before:left-0 md:before:w-[85%] before:w-[80%] before:h-full before:box-border perspective-2000 h-[450px] max-md:h-[350px] w-[80%] mx-auto after after:content-[""] after:absolute after:border-b-8 after:border-r-8 after:border-blue-500 after:top-0 after:left-0 md:after:w-[85%] after:w-[80%] after:h-full after:box-border box-border left-10 hover:cursor-pointer hover:-rotate-y-5 transition-all before:hover:rotate-y-5 before:transition-all after:hover:rotate-y-5 after:transition-all'>
        <Image
          alt='About Me Image'
          src={AboutMeImgg}
          className='absolute top-[30px] left-[-30px] w-[95%] h-[calc(100%-60px)]'
        />
      </div>

      <div className='md:px-20 px-8'>
        <p className='mb-4'>Hello! My full name is Muhammad Yanuarullah Assidiq, you can call me Arul or Anwar. I&#39;m 23 years old, I was born on January 21, 2001 in Indonesia, Jakarta.</p>

        <p className='mb-4'>I&#39;m obsessed with making things and even more obsessed with making things better. In everyday life, I work as a data entry in a company in Jakarta. I have been interested in web development since 2018 and started self-taught since 2019.</p>

        <p className='mb-4'>If you interested about my work experience, you can visit my LinkedIn</p>

        <button className='text-white bg-blue-600 hover:bg-blue-400 transition-all px-4 py-2 rounded-md flex items-center gap-2'>Linked <FaLinkedinIn /></button>
      </div>
    </section>
  )
}
