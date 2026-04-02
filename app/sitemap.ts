import { MetadataRoute } from "next";
import { aiTools } from "@/data/tools";
import { articles } from "@/data/newsArticles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ainovalab.vercel.app";

  return [
    // Static pages
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },

    // Tool pages
    ...aiTools.map((tool) => ({
      url: `${baseUrl}/tools/${tool.slug}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    })),

    // News pages
    ...articles.map((news) => ({
      url: `${baseUrl}/news/${news.slug}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    })),
  ];
}