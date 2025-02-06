"use client"

import { motion as m } from "framer-motion";
import React from 'react'
import { useTranslations } from "next-intl";
import Each from "@/utils/Each";
import ItemBlog from "./ItemBlog";

export default function BlogPage({ posts }) {
  const t = useTranslations('Blog');

  return (
    <section className="py-20 px-4 2xl:max-w-[1480px] lg:max-w-7xl md:max-w-3xl max-w-2xl mx-auto max-md:border-t max-md:border-slate-200 max-md:dark:border-slate-800 mb-10">
      <m.h2
        className="text-center text-xl font-bold"
        initial={{ y: "-25%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .75, ease: "linear" }}
      >{t('title')}</m.h2>
      <m.p
        className="text-center font-light"
        initial={{ y: "-25%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .75, ease: "linear" }}
      >{t('description')}</m.p>

      <m.div
        className="flex justify-center gap-8 flex-wrap mt-4"
        initial={{ y: "+25%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .75, ease: "linear" }}
      >
        {posts?.length > 0 ? posts.map(post => (
          <ItemBlog key={post.slug} {...post} />
        )) : (
          <p>something went wrong</p>
        )}
      </m.div>
    </section>
  )
}
