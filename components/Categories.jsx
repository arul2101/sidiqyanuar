"use client";

import { menuPortfolio } from "@/constant";
import Each from "@/utils/Each";
import { useState } from "react";

export default function Categories({ filter }) {
  const [toggleState, setToggleState] = useState(1);

  const toggleHandle = (index, filterName) => {
    filter(filterName)
    setToggleState(index);
  }

  return (
    <ul className="flex justify-center items-center gap-2 mt-6 mb-8">
      <Each of={menuPortfolio} render={({ id, title }) =>
        <li
          onClick={() => toggleHandle(id, title)}
          className={`${toggleState === id ? "bg-blue-600 text-white" : "text-black"} hover:bg-blue-600 hover:text-white cursor-pointer p-2 rounded-lg transition-all`}
        >{title}</li>
      } />
    </ul>
  )
}
