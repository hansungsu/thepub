import { BLOG_URL } from "@/constants/url";
import useSWR from "swr";

// 데이터를 가져올 url 정의
const url = `${BLOG_URL}/wp-json/wp/v2/categories`;
const fetcher = async (url: string): Promise<any> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default function BlogList() {
  const { data, error, isLoading } = useSWR(url, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <ul>
        {data.map((item: any) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
