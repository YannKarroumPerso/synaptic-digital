import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostType = "article" | "etude" | "decryptage";

export type Post = {
  slug: string;
  title: string;
  date: string;
  type: PostType;
  theme: string;
  excerpt: string;
  metaDescription?: string;
  keywords?: string[];
  readingTime: number; // en minutes
  contentHtml: string;
  contentRaw: string;
};

export type PostMeta = Omit<Post, "contentHtml" | "contentRaw">;

/**
 * Liste tous les posts du dossier content/blog/, triés par date (plus récent en premier).
 */
export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
  const posts: PostMeta[] = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    return {
      slug: data.slug ?? slug,
      title: data.title ?? "Sans titre",
      date: data.date ?? new Date().toISOString().split("T")[0],
      type: (data.type ?? "article") as PostType,
      theme: data.theme ?? "",
      excerpt: data.excerpt ?? content.slice(0, 180).replace(/\n/g, " ") + "…",
      metaDescription: data.metaDescription,
      keywords: data.keywords ?? [],
      readingTime: estimateReadingTime(content),
    };
  });

  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

/**
 * Récupère un post complet par son slug (avec contenu HTML rendu).
 */
export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const contentHtml = marked.parse(content, { async: false }) as string;

  return {
    slug: data.slug ?? slug,
    title: data.title ?? "Sans titre",
    date: data.date ?? new Date().toISOString().split("T")[0],
    type: (data.type ?? "article") as PostType,
    theme: data.theme ?? "",
    excerpt: data.excerpt ?? "",
    metaDescription: data.metaDescription,
    keywords: data.keywords ?? [],
    readingTime: estimateReadingTime(content),
    contentHtml,
    contentRaw: content,
  };
}

function estimateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / wordsPerMinute));
}

/**
 * Labels affichables pour les types de posts.
 */
export const POST_TYPE_LABELS: Record<PostType, string> = {
  article: "Article",
  etude: "Étude",
  decryptage: "Décryptage",
};

/**
 * Format date FR.
 */
export function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}
