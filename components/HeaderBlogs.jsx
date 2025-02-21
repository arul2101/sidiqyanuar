"use client";

import { motion as m } from "framer-motion";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { Source_Sans_3 } from "next/font/google";

const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export default function HeaderBlogs({ search, locale }) {
  const [query, setQuery] = useState("");
  const t = useTranslations("Blog");
  const router = useRouter();

  return (
    <section className="pt-8 px-4 2xl:max-w-[1480px] lg:max-w-7xl md:max-w-3xl max-w-2xl mx-auto max-md:border-t max-md:border-slate-200 max-md:dark:border-slate-800 mb-10">
      <m.h2
        className="text-center text-xl font-bold"
        initial={{ y: "-25%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "linear" }}
      >
        {t("title")}
      </m.h2>
      <m.p
        className="text-center font-light"
        initial={{ y: "-25%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "linear" }}
      >
        {t("description")}
      </m.p>

      <m.form
        onSubmit={(e) => {
          e.preventDefault();
          router.push(`?search=${query.split(" ").join("+")}`);
        }}
        className="mt-5 relative md:w-[30rem] w-[20rem] mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "linear" }}
      >
        <input
          type="text"
          placeholder="Search..."
          className="py-2 px-2 w-full border-2 focus:outline-none border-slate-600 rounded-md"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="absolute right-2 top-2">
          <Search />
        </button>
        {search && (
          <button
            type="button"
            onClick={() => {
              router.push(`/${locale}/blog`);
              setQuery("");
            }}
            className="absolute right-8 top-2"
          >
            <X />
          </button>
        )}
      </m.form>

      <h2
        className={`text-center mt-8 ${sourceSans.className} text-[1.2rem] font-medium`}
      >
        {search
          ? `${t("result_title_search")} "${search}"`
          : `${t("result_title_all")}`}
      </h2>
    </section>
  );
}
