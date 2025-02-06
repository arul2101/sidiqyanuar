import { icon } from "@/constant";
import Each from "@/utils/Each";
import { motion as m } from "framer-motion";

export default function Icons({ classNameOfContainer, classNameOfEachIcon }) {
  const baseStyleOfEachIcon = "h-10 w-10 rounded-full flex items-center justify-center hover:bg-slate-200 cursor-pointer hover:bg-opacity-60 transition-all text-slate-700 dark:text-slate-400 dark:hover:bg-opacity-20";

  return (
    <m.div
      className={classNameOfContainer}
      initial={{ x: "-75%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .75, ease: "linear" }}
    >
      <Each of={icon} render={({ element, href }) =>
        <a
          href={href}
          target="_blank"
          className={`${baseStyleOfEachIcon} ${classNameOfEachIcon}`}
        >{element}</a>
      } />
    </m.div>
  )
}
