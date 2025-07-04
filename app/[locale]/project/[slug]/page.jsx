import ProjectDetail from "@/components/ProjectDetail";
import { getProject } from "@/services/sanity-api";
import { getTranslations } from 'next-intl/server';
import { cache } from "react";

const getProjectDetail = cache(async (slug, locale) => {
  const project = await getProject(slug, locale);
  return project;
});

export async function generateMetadata({ params: { locale, slug } }) {
  const t = await getTranslations('ProjectPage');
  const { description, image } = await getProjectDetail(slug, locale);

  return {
    title: `${t('title')} - ${slug.split("-").join(" ")}`,
    description,
    openGraph: {
      images: [
        {
          url: image,
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${t('title')} - ${slug.split("-").join(" ")}`,
      images: [image],
    }
  };
}

export default async function page({ params: { locale, slug } }) {
  const project = await getProjectDetail(slug, locale);
  return <ProjectDetail {...project} />
}
