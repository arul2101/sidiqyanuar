import { getPosts } from "@/services/sanity-api";
import ItemBlog from "./ItemBlog";

export default async function Blogs({ locale, search }) {
  const posts = await getPosts(locale, search);
  return (
    <div className="flex justify-center gap-8 flex-wrap mt-4 animate-blogs-startup">
      {posts?.length > 0 ? (
        posts.map((post) => <ItemBlog key={post.slug} {...post} />)
      ) : (
        <p>😢 Not Found</p>
      )}
    </div>
  );
}
