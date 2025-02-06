import ProjectDetail from "@/components/ProjectDetail";
import { getProject } from "@/services/sanity-api";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { slug } }) {
  const t = await getTranslations('ProjectPage');
  return {
    title: `${t('title')} - ${slug.split("-").join(" ")}`
  };
}

export default async function page({ params: { locale, slug } }) {
  const project = await getProject(slug, locale);
  return <ProjectDetail {...project} />
}
