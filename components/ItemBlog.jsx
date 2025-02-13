"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { shortenText, formatTimestampToDate } from "@/utils/helper";

export default function ItemBlog({
  author,
  publishedAt,
  title,
  description,
  slug,
  image,
  authorImage,
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted)
    return (
      <Link
        href={`/blog/${slug}`}
        className="w-[24rem] rounded-md relative fade border-[1px] border-slate-400 dark:border-slate-700 hover:shadow-lg transition-all hover:scale-105 duration-300 shadow-slate-950 dark:shadow-[#76ABAE] overflow-hidden"
      >
        <div className="w-full h-[250px]">
          <Image
            src={image}
            width={1920}
            height={1080}
            alt="Thumbnail Blog"
            className="w-full h-full object-cover"
            priority
          />
        </div>

        <div className="p-2 h-[50%]">
          <h2 className="font-semibold text-[1.2rem]">{title}</h2>
          <p className="text-[.9rem] text-slate-600 dark:text-slate-400">
            {shortenText(description)}...
          </p>

          <div className="flex items-center gap-2 mt-4">
            <div className="rounded-full h-8 w-8">
              <Image
                src={authorImage}
                width={1920}
                height={1080}
                alt="Profile Picture"
                className="rounded-full h-full object-cover"
                priority
              />
            </div>

            <div className="">
              <p className="font-semibold block">{author}</p>
              <span className="text-[.8rem] text-gray-500 block">
                {formatTimestampToDate(publishedAt)}
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
}
