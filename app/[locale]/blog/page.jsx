import BlogPage from "@/components/BlogPage";
import { getPosts } from "@/services/sanity-api";

export async function generateMetadata() {
  return {
    title: "Blog"
  };
}

export default async function BlogsPage({ params: { locale } }) {
  const posts = await getPosts(locale);
  return <BlogPage posts={posts} />
}
