"use client";

import Image from "next/image";
import { formatTimestampToDate } from "@/utils/helper";
import { PortableText } from "next-sanity";
import NotFound from "./NotFound";
import ArrowBack from "./ArrowBack";

export default function BlogDetail(props) {
  const { title, author, authorImage, image, publishedAt, body, categories } =
    props;

  if (Object.keys(props).length === 0) {
    return <NotFound />;
  }

  if (Object.keys(props).length > 0)
    return (
      <section className="2xl:max-w-[1480px] lg:max-w-7xl md:max-w-3xl max-w-2xl mx-auto px-6 py-8 max-md:border-t max-md:border-slate-200 max-md:dark:border-slate-800 relative">
        <div className="grid grid-cols-[70%,30%] gap-4 max-md:grid-cols-1 grid-rows-1 mt-4 animate-show-fade-in">
          <div className="border-[1px] dark:border-slate-700 border-slate-200 rounded-md">
            <div className="px-4 py-4 flex items-center gap-2">
              <ArrowBack />

              <h2 className="font-semibold text-[1.2rem]">{title}</h2>
            </div>
            <Image
              src={image}
              alt="image blog"
              width={1920}
              height={1080}
              className="w-full"
              priority
            />

            <div className="flex items-center gap-2 p-4">
              {categories.length > 0 &&
                categories.map((category) => (
                  <div
                    className="bg-slate-300 dark:bg-slate-700 px-2 rounded-sm flex items-center gap-1"
                    key={category}
                  >
                    {category}
                  </div>
                ))}
            </div>

            <div className="p-4 space-y-4">
              <PortableText value={body} />
            </div>
          </div>

          <div className="">
            <div className="border-[1px] border-slate-200 rounded-md w-full dark:border-slate-700 p-4 sticky top-2 z-30 transition-all">
              <h2 className="font-semibold">Written by</h2>
              <div className="flex items-center gap-2 mt-4">
                <div className="rounded-full h-8 w-8 flex justify-center items-center">
                  <Image
                    src={authorImage}
                    width={1920}
                    height={1080}
                    alt="Profile Picture"
                    className="rounded-full h-full w-full object-cover"
                    priority
                  />
                </div>

                <div className="flex flex-col">
                  <p className="font-semibold">{author}</p>
                  <span className="text-[.8rem] text-gray-500">
                    {formatTimestampToDate(publishedAt)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
