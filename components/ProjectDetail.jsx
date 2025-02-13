"use client";

import { CodeXml, SquareArrowOutUpRight, Star } from "lucide-react";
import ArrowBack from "./ArrowBack";
import TechStack from "./TechStack";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import {
  RiNextjsFill,
  RiReactjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { PortableText } from "next-sanity";
import { TbBrandFramerMotion } from "react-icons/tb";
import NotFound from "./NotFound";
import { SiShadcnui } from "react-icons/si";
import { motion as m } from "framer-motion";

const icons = {
  tailwind: <RiTailwindCssFill />,
  supabase: <RiSupabaseFill />,
  next: <RiNextjsFill />,
  framer: <TbBrandFramerMotion />,
  react: <RiReactjsFill />,
  shadcn: <SiShadcnui />,
};

export default function ProjectDetail(props) {
  const { title, demo, features, techstack, image, body, github } = props;
  if (Object.keys(props).length === 0) {
    return <NotFound />;
  }
  if (Object.keys(props).length > 0)
    return (
      <section className="2xl:max-w-[1480px] lg:max-w-7xl md:max-w-3xl max-w-2xl mx-auto px-4 py-8 max-md:border-t max-md:border-slate-200 max-md:dark:border-slate-800">
        <ArrowBack />

        <m.div
          className="grid grid-cols-2 max-md:grid-cols-1 mt-4 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: "linear" }}
        >
          <div>
            <h2 className="text-[2.2rem]">{title}</h2>
            <PortableText value={body} />

            <div className="mt-4 flex gap-2 items-center">
              <a
                href={demo}
                target="_blank"
                className="bg-blue-600 dark:bg-dark-mode2nd text-white flex items-center gap-2 px-2 py-2 border-2 border-blue-600 dark:border-[#76ABAE] hover:shadow-lg duration-300 hover:scale-105 w-[8rem] rounded-md"
              >
                <SquareArrowOutUpRight className="h-4 w-4" />
                Live demo
              </a>
              {github && (
                <a
                  href={github}
                  target="_blank"
                  className="  flex items-center gap-2 px-2 py-2 border-[1px] border-black dark:bg-white dark:text-black hover:shadow-lg duration-300 hover:scale-105 w-[8rem] rounded-md"
                >
                  <FaGithub className="h-4 w-4" />
                  Github
                </a>
              )}
            </div>

            <div className="mt-8">
              <div className="flex items-center gap-2 text-[1.5rem]">
                <CodeXml className="text-blue-600 dark:text-[#76ABAE]" />
                Technology Used
              </div>

              <div className="flex gap-2 flex-wrap">
                {techstack?.length > 0 &&
                  techstack.map((tech) => (
                    <TechStack
                      key={tech}
                      icon={icons[tech.toLowerCase().split(" ")[0]]}
                      title={tech}
                    />
                  ))}
              </div>
            </div>
          </div>
          <div>
            <Image
              src={image}
              alt="image project"
              width={1920}
              height={1080}
              className="rounded-lg"
              priority
            />

            <div className="mt-4">
              <div className="flex items-center gap-2 text-[1.5rem]">
                <div className="rotate-90">
                  <Star className="text-orange-400" fill="white" size={24} />
                </div>
                Key Features
              </div>

              <div className="pl-4 mt-4 space-y-4">
                {features?.length > 0 ? (
                  features?.map((feature) => (
                    <div className="flex items-start gap-2" key={feature}>
                      <div className="rotate-90">
                        <Star
                          className="text-orange-400"
                          fill="orange"
                          size={24}
                        />
                      </div>
                      <p>{feature}</p>
                    </div>
                  ))
                ) : (
                  <p>UNAVAILABLE</p>
                )}
              </div>
            </div>
          </div>
        </m.div>
      </section>
    );
}
