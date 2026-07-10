import type { MetadataRoute } from "next";
import { SEO_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — Marketing Político Digital 2026`,
    short_name: SITE_NAME,
    description: SEO_DESCRIPTION,
    start_url: SITE_URL,
    scope: SITE_URL,
    display: "standalone",
    background_color: "#07111F",
    theme_color: "#07111F",
    lang: "pt-BR",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon.svg",
        sizes: "180x180",
        type: "image/svg+xml",
      },
    ],
  };
}
