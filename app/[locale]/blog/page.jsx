import HeaderBlogs from "@/components/HeaderBlogs";
import Blogs from "@/components/Blogs";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Suspense } from "react";

export async function generateMetadata() {
  return {
    title: "Blog",
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
