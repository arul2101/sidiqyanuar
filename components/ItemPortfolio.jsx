import Each from "@/utils/Each";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import TechStack from "./TechStack";

export default function ItemPortfolio({ title, link, github, img, tech }) {
  return (
    <div className="p-2 w-[28rem] relative fade">
      <Image
        src={img}
        height={400}
        alt="Image Portfolio"
        className="mb-2 rounded-md"
      />

      <div className="flex flex-col">
        <h2 className="text-xl">{title}</h2>

        <ul className="flex gap-2 flex-wrap">
          <Each of={tech} render={({ title, icon }) =>
            <TechStack title={title} icon={icon} />
          } />
        </ul>

        <div className="flex justify-between items-center mt-4">
          <a href={link} target="_blank" className="text-slate-600 font-light  hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-600">Demo</a>

          <div className="">
            <a href={github} target="_blank" className="text-[1.3rem] hover:bg-slate-200 dark:hover:bg-slate-600 rounded-full h-7 w-7 flex items-center justify-center"><FiGithub /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
