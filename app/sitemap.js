import { getPosts } from "@/services/sanity-api";


export default async function sitemap() {
  const fetchedPosts = await getPosts("id");
  const posts = fetchedPosts?.map((post) => {
    return {
      url: `https://www.sidiqyanuar.vercel.app/id/blog/${post.slug}`,
      lastModified: post.publishedAt
    }
  });

  return [
    {
    url: "https://www.sidiqyanuar.vercel.app",
    lastModified: new Date()
    },
    ...posts
  ]
}