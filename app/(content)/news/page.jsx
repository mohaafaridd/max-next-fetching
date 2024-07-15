"use client";

import { NewsList } from "@/components/news-list";
import { DUMMY_NEWS } from "@/dummy-news";
import { useEffect, useState } from "react";

function NewsPage() {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState();
  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/news");

      if (!response.ok) {
        setError("Failed to fetch news.");
        setIsLoading(false);
      }

      const news = await response.json();

      setIsLoading(false);
      setNews(news);
    }

    fetchNews();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  let newsContent;

  if (news) {
    newsContent = <NewsList news={DUMMY_NEWS} />;
  }

  return (
    <div>
      <h1>Available News</h1>

      {newsContent}
    </div>
  );
}

export default NewsPage;
