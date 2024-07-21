import { icon } from "@/constant";
import Each from "@/utils/Each";

export default function Icons({ classNameOfContainer, classNameOfEachIcon }) {
  const baseStyleOfEachIcon = "h-10 w-10 rounded-full flex items-center justify-center hover:bg-slate-200 cursor-pointer hover:bg-opacity-60 transition-all text-slate-700";

  return (
    <div className={classNameOfContainer}>
      <Each of={icon} render={({ element, href }) =>
        <a
          href={href}
          target="_blank"
          className={`${baseStyleOfEachIcon} ${classNameOfEachIcon}`}
        >{element}</a>
      } />
    </div>
  )
}
