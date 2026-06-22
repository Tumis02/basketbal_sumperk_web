import type { Metadata } from "next";
import { SITE } from "@/lib/site";

type PageSeoInput = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
};

export function pageMetadata({
  title,
  description,
  path,
  image,
}: PageSeoInput): Metadata {
  const url = path ? new URL(path, SITE.url).toString() : SITE.url;
  return {
    title,
    description: description ?? SITE.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url,
      siteName: SITE.name,
      title,
      description: description ?? SITE.description,
      images: image ? [{ url: image }] : undefined,
    },
  };
}
