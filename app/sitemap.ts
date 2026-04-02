import { MetadataRoute } from "next";
import { aiTools } from "@/data/tools"; // ✅ import your tools data
// import { blogs } from "@/data/blogs"; // (if you have blog data separate)

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ainovalab.vercel.app";

  // Static pages
  const staticRoutes = [
    "",
    "/tools",
    "/article",
    "/news",
  ];

  // Tool pages
  const toolRoutes = aiTools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: new Date(),
  }));

  // Blog pages (if using)
//   const blogRoutes = blogs.map((blog) => ({
//     url: `${baseUrl}/article/${blog.slug}`,
//     lastModified: new Date(),
//   }));

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    })),
    ...toolRoutes,
  ];
}