export default function TechStack({ icon, title }) {
  return (
    <li className="bg-slate-300 dark:bg-slate-700 px-2 rounded-md flex items-center gap-1">
      {icon}{title}
    </li>
  )
}
