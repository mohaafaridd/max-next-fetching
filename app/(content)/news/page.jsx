import { NewsList } from "@/components/news-list";
import { DUMMY_NEWS } from "@/dummy-news";

async function NewsPage() {
  const response = await fetch("http://localhost:8080/news");

  if (!response.ok) {
    throw new Error("Failed to fetch news");
  }

  const news = await response.json();

  return (
    <div>
      <h1>Available News</h1>
      <NewsList news={news} />;
    </div>
  );
}

export default NewsPage;
