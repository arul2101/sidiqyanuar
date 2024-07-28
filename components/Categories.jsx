"use client";

import { menuPortfolio } from "@/constant";
import Each from "@/utils/Each";
import { useState } from "react";
import { motion as m } from "framer-motion";

export default function Categories({ filter }) {
  const [toggleState, setToggleState] = useState(1);

  const toggleHandle = (index, filterName) => {
    filter(filterName)
    setToggleState(index);
  }

  return (
    <m.ul
      className="flex justify-center items-center gap-2 mt-6 mb-8"
      initial={{ y: "-75%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .75, ease: "linear" }}
    >
      <Each of={menuPortfolio} render={({ id, title }) =>
        <li
          onClick={() => toggleHandle(id, title)}
          className={`${toggleState === id ? "bg-blue-600 text-white dark:bg-dark-mode2nd" : "text-black dark:text-white"} hover:bg-blue-600 hover:text-white dark:hover:bg-dark-mode2nd cursor-pointer p-2 rounded-lg transition-all`}
        >{title}</li>
      } />
    </m.ul>
  )
}
