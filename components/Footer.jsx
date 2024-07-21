import Icons from "./Icons";
import { Poppins } from "next/font/google";
import { Source_Sans_3 } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: '400' });
const sourceSans = Source_Sans_3({ subsets: ['latin'] });

export default function Footer() {
  return (
    <footer className="text-center py-4 px-2 bg-slate-100 relative">
      <h2 className={`text-2xl mb-5 ${poppins.className} font-bold`}>Sidiq Yanuar</h2>

      <p className={`${sourceSans.className}`}>Flowers grow with rain, Humans grow with pain. So now you know, why god give you pain?</p>

      <Icons classNameOfContainer="flex mt-4 mb-20 justify-center items-center" classNameOfEachIcon="text-xl" />

      <section className="bg-slate-300 absolute w-full bottom-0 left-0 py-3">
        <p>&copy;2024 <a href="https://www.instagram.com/m.yanuarullah" target="_blank" className="underline">Sidiq Yanuar</a> - Created with <span className="text-red-500">❤</span></p>
      </section>
    </footer>
  )
}
