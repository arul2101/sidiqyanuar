import BlogDetail from "@/components/BlogDetail";
import { getPost } from "@/services/sanity-api";
import { cache } from "react";

const getPostDetail = cache(async (slug, locale) => {
  const post = await getPost(slug, locale);
  return post;
});

export async function generateMetadata({ params: { locale, slug } }) {
  const { description, image } = await getPostDetail(slug, locale);

  return {
    title: `Blog - ${slug.split("-").join(" ")}`,
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
      title: `Blog - ${slug.split("-").join(" ")}`,
      images: [image],
    }
  };
}

export default async function page({ params: { locale, slug } }) {
  const post = await getPostDetail(slug, locale);
  return <BlogDetail {...post} />;
}
