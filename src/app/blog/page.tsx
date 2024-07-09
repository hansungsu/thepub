import Link from "next/link";
import { BLOG_URL } from "@/constants/url";
import { BlogList } from "@/components/blog/BlogList";

async function getPosts() {
  const url = `${BLOG_URL}/wp-json/wp/v2/posts`;
  const res = await fetch(url);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Blog() {
  const posts = await getPosts();
  return (
    <div>
      <BlogList />
      {/* <ul>
        {posts.map((item: any) => (
          <li key={item.id}>
            <Link href={`/blog/${item.id}`}>
              <h1>{item.title.rendered}</h1>
            </Link>
          </li>
        ))}
      </ul> */}
    </div>
  );
}
