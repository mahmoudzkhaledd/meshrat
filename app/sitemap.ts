import { getAllServices } from "@/Controllers/Client/GetAllServices";
import { getAllBlogs } from "@/Controllers/Client/GetAllblogs";
import { getLanguage } from "@/Controllers/language/languageUtils";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = process.env.URL ?? "";
  const lang = getLanguage().lang;
  const services = await getAllServices({ lang: lang });
  const blogs = await getAllBlogs({ lang: lang });
  const servicesPages = services.map((service) => {
    return {
      url: `${url}/services/${service.id}`,
      lastModified: service.updatedAt,
      priority: 0.97,
    };
  });
  const blogsPage = blogs.map((blog) => {
    return {
      url: `${url}/blogs/${blog.slug}`,
      lastModified: blog.updatedAt,
      priority: 0.7,
    };
  });
  return [
    {
      url: url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${url}/blogs`,
      lastModified:
        blogs.length == 0 ? new Date() : blogs[blogs.length - 1].updatedAt,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${url}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    ...servicesPages,
    ...blogsPage,
  ];
}
