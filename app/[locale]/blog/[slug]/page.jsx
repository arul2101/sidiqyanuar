import BlogDetail from "@/components/BlogDetail";
import { getPost } from "@/services/sanity-api";

export async function generateMetadata({ params: { slug } }) {
  return {
    title: `Blog - ${slug.split("-").join(" ")}`,
  };
}

export default async function page({ params: { locale, slug } }) {
  const post = await getPost(slug, locale);
  return <BlogDetail {...post} />;
}
