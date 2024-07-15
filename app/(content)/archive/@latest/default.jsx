import { NewsList } from "@/components/news-list";
import { getLatestNews } from "@/lib/news";
import React from "react";

export default async function LatestNewsPage() {
  const news = await getLatestNews();

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={news} />
    </>
  );
}
