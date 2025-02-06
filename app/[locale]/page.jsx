import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import { getTranslations } from 'next-intl/server';
import { getProjects } from '@/services/sanity-api';

export async function generateMetadata() {
  const t = await getTranslations('HomePage');
  return {
    title: t('title')
  };
}

export default async function HomePage({ params: { locale } }) {
  const projects = await getProjects(locale);
  return (
    <>
      <Hero />
      <Portfolio projects={projects} />
      <Contact />
    </>
  );
}