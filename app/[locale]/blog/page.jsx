import HeaderBlogs from "@/components/HeaderBlogs";
import Blogs from "@/components/Blogs";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Suspense } from "react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("Blog");
  return {
    metadataBase: new URL('https://www.sidiqyanuar.vercel.app/id/blog'),
    keywords: ["blog arul", "sidiq yanuar blog", 'arul blog'],
    title: "Blog",
    openGraph: {
      description: t('description'),
      images: [
        {
          url: 'https://sidiqyanuar.vercel.app/opengraph-image.png',
          alt: 'My Website Open Graph Image',
          width: 1200,
          height: 630,
        }
      ]
    },
  };
}

export default async function BlogsPage({ params: { locale }, searchParams }) {
  const search = (await searchParams).search || "";

  return (
    <>
      <HeaderBlogs search={search} locale={locale} />
      <Suspense fallback={<LoadingSpinner />}>
        <Blogs locale={locale} search={search} />
      </Suspense>
    </>
  );
}
