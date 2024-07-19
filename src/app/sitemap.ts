import { METADATA_BASE } from "@/config";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: METADATA_BASE,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: { cs: METADATA_BASE + "/cs", en: METADATA_BASE + "/en" },
      },
    },
  ];
}
