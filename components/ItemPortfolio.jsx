import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";

export default function ItemPortfolio({ title, description, slug, image }) {
    return (
      <Link
        href={`/project/${slug}`}
        className="p-2 w-[28rem] relative fade hover:shadow-lg transition-all hover:scale-105 duration-300 rounded-lg shadow-slate-950 dark:shadow-[#76ABAE]"
      >
        <div className="w-full">
          <Image
            src={image}
            height={400}
            width={1080}
            alt="Image Portfolio"
            className="mb-2 rounded-md"
            priority
          />
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl">{title}</h2>

          <p className="font-light text-[.9rem]">{description}...</p>

          <div className="flex justify-end text-blue-600 dark:text-dark-mode mt-4">
            <Link href={`/project/${slug}`} className="flex items-center gap-2">
              Details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Link>
    );
}
