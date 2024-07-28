"use client";

import { useState } from "react";
import Categories from "./Categories";
import { dataPortfolio } from "@/constant";
import { motion as m } from "framer-motion";
import ItemPortfolio from "./ItemPortfolio";
import Each from "@/utils/Each";

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
          <Each of={data} render={(props) =>
            <ItemPortfolio {...props} />
          } />
        ) : (
          <p className="mt-40">NO DATA</p>
        )}
      </m.div>
    </section>
  )
}
