"use client";

import { useState } from "react";
import Categories from "./Categories";
import { dataPortfolio } from "@/constant";
import Each from "@/utils/Each";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";

import { motion as m } from "framer-motion";

export default function Portfolio() {
  const [data, setData] = useState(dataPortfolio);

  const filterItems = (category) => {
    if (category === "All") {
      setData(dataPortfolio);
      return;
    }

    const newItems = dataPortfolio.filter((item) => {
      return item.category === category;
    });
    setData(newItems);
    console.log(data);
  }

  return (
    <section className="py-20 px-4 2xl:max-w-[1480px] lg:max-w-7xl md:max-w-3xl max-w-2xl mx-auto max-md:border-t max-md:border-slate-200 max-md:dark:border-slate-800 mb-10">
      <m.h2
        className="text-center text-xl font-bold"
        initial={{ y: "-25%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .75, ease: "linear" }}
      >My Portfolio</m.h2>
      <m.p
        className="text-center font-light"
        initial={{ y: "-25%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .75, ease: "linear" }}
      >Most Recent Work</m.p>

      <Categories filter={filterItems} />

      <m.div
        className="flex justify-center gap-4 flex-wrap"
        initial={{ y: "+25%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .75, ease: "linear" }}
      >
        {data.length > 0 ? (
          <Each of={data} render={({ title, link, github, img, tech }) =>
            <div className="p-2 w-[28rem] relative">
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
                    <li className="bg-slate-300 dark:bg-slate-700 px-2 rounded-md flex items-center gap-1">
                      {icon}{title}
                    </li>
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
          } />
        ) : (
          <p className="mt-40">NO DATA</p>
        )}
      </m.div>
    </section>
  )
}
