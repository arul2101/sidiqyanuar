import Each from "@/utils/Each";
import ItemPortfolio from "./ItemPortfolio";

export default function Projects({ projects }) {
  return (
    <div className="flex justify-center gap-4 flex-wrap mt-4 animate-show-fade-in">
      <Each
        of={projects}
        render={(props) => {
          const { fdprocessedid, ...filteredProps } = props;

          return <ItemPortfolio {...filteredProps} />
        } }
        />
    </div>
  )
}
