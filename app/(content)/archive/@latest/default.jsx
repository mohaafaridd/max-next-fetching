import { NewsList } from "@/components/news-list";
import { getLatestNews } from "@/lib/news";
import React from "react";

export default function LatestNewsPage() {
  const news = getLatestNews();

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={news} />
    </>
  );
}
