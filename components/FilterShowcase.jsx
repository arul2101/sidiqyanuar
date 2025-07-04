import React from "react";
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
    <ul className="flex justify-center items-center gap-2 mt-6 mb-8 animate-show-fade-in">
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
    </ul>
  );
}
