import HeaderBlogs from "@/components/HeaderBlogs";
import Blogs from "@/components/Blogs";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Suspense } from "react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("Blog");
  return {
    title: "Blog",
    description: t('description')
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
