import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import React from "react";

export default function ImagePage({ params }) {
  const newsItemSlug = params.slug;

  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
