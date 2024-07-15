import { NewsList } from "@/components/news-list";
import { DUMMY_NEWS } from "@/dummy-news";

function NewsPage() {
  return (
    <div>
      <h1>Available News</h1>

      <NewsList news={DUMMY_NEWS} />
    </div>
  );
}

export default NewsPage;
