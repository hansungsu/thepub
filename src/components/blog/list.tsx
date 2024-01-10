import Link from "next/link";
import { BLOG_URL } from "@/constants/url";

async function getData() {
  // 데이터를 가져올 url 정의
  const url = `${BLOG_URL}/wp-json/wp/v2/categories`;
  const res = await fetch(url);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getPosts() {
  // 데이터를 가져올 url 정의
  const url = `${BLOG_URL}/wp-json/wp/v2/posts`;
  const res = await fetch(url);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function BlogList() {
  const data = await getData();
  const posts = await getPosts();
  return (
    <div>
      <ul>
        {posts.map((item: any) => (
          <li key={item.id}>
            <Link href={`/blog/${item.id}`}>
              <h1>{item.title.rendered}</h1>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
