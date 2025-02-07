import React from "react";
import { motion as m } from "framer-motion";
import Each from "@/utils/Each";

const menu = [
  {
    title: "Projects",
  },
  {
    title: "Certificates",
  },
];

export default function FilterShowcase({
  selectedShowcase,
  onSelectedShowcase,
}) {
  return (
    <m.ul
      className="flex justify-center items-center gap-2 mt-6 mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "linear" }}
    >
      <Each
        of={menu}
        render={({ title }) => (
          <li
            onClick={() => onSelectedShowcase(title)}
            className={`${selectedShowcase === title ? "bg-blue-600 text-white dark:bg-dark-mode2nd" : "text-black dark:text-white"} hover:bg-blue-600 hover:text-white dark:hover:bg-dark-mode2nd cursor-pointer p-2 rounded-lg transition-all`}
          >
            {title}
          </li>
        )}
      />
    </m.ul>
  );
}
