"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import NewsDetails from "@/app/components/NewsDetails/NewsDetails";
import Container from "@/app/components/Container/Container";
import Footer from "@/app/components/Footer/Footer";
import Team from "@/app/components/Team/Team";

export default function News() {
  const { slug } = useParams();

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const [newsItem, setNewsItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    async function fetchNewsItem() {
      try {
        const response = await fetch(`${BASE_URL}/news/${slug}`);
        if (!response.ok) throw new Error("Failed to fetch news");

        const data = await response.json();

        console.log("Fetched Data:", data);
        setNewsItem(data.news);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchNewsItem();
  }, [slug]);

  if (error) return <p>Error: {error}</p>;
  if (!newsItem) return <p>Loading...</p>;

  return (
    <>
      <Container>
        <Team />
        <NewsDetails newsItem={newsItem} />
        <Footer />
      </Container>
    </>
  );
}
