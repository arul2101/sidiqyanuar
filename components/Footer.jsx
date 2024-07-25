import Icons from "./Icons";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: '400' });

export default function Footer() {
  return (
    <footer className="text-center bg-slate-300 py-3 mt-96">

      <Icons classNameOfContainer="flex mb-2 justify-center items-center" classNameOfEachIcon="text-xl" />

      <p>&copy;2024 <a href="https://www.instagram.com/m.yanuarullah" target="_blank" className={`${poppins.className} text-blue-600`}>Sidiq Yanuar</a> - Created with <span className="text-red-500">❤</span></p>
    </footer>
  )
}
