import fs from "node:fs";
import path from "node:path";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

// Files that live in public/ but aren't gallery photos - the club logo,
// sponsor logos, and hall occupancy charts used elsewhere on the site.
const EXCLUDED_FILES = new Set([
  "logo.png",
  "mk_fruit.png",
  "benefit.jpg",
  "uvax.jpg",
  "treninky_25-26_.jpg",
  "treninky_25-26_1_zs.jpg",
  "treninky_5zs_2025-2026_.jpg",
]);

export type GalleryPhoto = {
  src: string;
  alt: string;
};

function toAltText(filename: string): string {
  const base = filename.replace(/\.[^.]+$/, "");
  return base
    .replace(/[_-]+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function getGalleryPhotos(): GalleryPhoto[] {
  const publicDir = path.join(process.cwd(), "public");
  const files = fs.readdirSync(publicDir);

  return files
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .filter((file) => !EXCLUDED_FILES.has(file))
    .sort()
    .map((file) => ({
      src: `/${file}`,
      alt: toAltText(file),
    }));
}
