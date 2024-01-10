import { BLOG_URL } from "@/constants/url";

async function getPostView(id: number) {
  // 데이터를 가져올 url 정의
  const url = `${BLOG_URL}/wp-json/wp/v2/posts/${id}`;
  const res = await fetch(url);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function BlogView({ params }: { params: { id: number } }) {
  const postsView = await getPostView(params.id);

  return (
    <div>
      <h1>{postsView.title.rendered}</h1>
      <br></br>
      <div
        className="postsViewContent"
        dangerouslySetInnerHTML={{ __html: postsView.content.rendered }}
      />
    </div>
  );
}
