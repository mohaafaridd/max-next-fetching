import { NewsList } from "@/components/news-list";
import { getAllNews } from "@/lib/news";

async function NewsPage() {
  const news = getAllNews();

  return (
    <div>
      <h1>Available News</h1>
      <NewsList news={news} />;
    </div>
  );
}

export default NewsPage;
