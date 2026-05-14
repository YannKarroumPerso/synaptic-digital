import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageSchemas } from "@/components/seo/StructuredData";
import { articleSchema } from "@/lib/schema";
import {
  getAllPosts,
  getPostBySlug,
  POST_TYPE_LABELS,
  formatDate,
} from "@/lib/blog";
import { Clock, ArrowLeft, FileText, BookOpen, BarChart3 } from "lucide-react";

interface PageProps {
  params: { slug: string };
}

const typeIcons = {
  article: BookOpen,
  etude: BarChart3,
  decryptage: FileText,
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Article introuvable" };

  return {
    title: post.title,
    description: post.metaDescription || post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.metaDescription || post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default function BlogPost({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const Icon = typeIcons[post.type];
  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const url = `https://synaptic-digital.fr/blog/${post.slug}`;

  return (
    <>
      <PageSchemas
        breadcrumb={[
          { name: "Accueil", url: "https://synaptic-digital.fr" },
          { name: "Ressources", url: "https://synaptic-digital.fr/blog" },
          { name: post.title },
        ]}
        additional={[articleSchema(post, url)]}
      />
      {/* HEADER ARTICLE */}
      <section className="relative overflow-hidden pt-12 pb-8 lg:pt-16 lg:pb-12 bg-bg-light">
        <div className="absolute -top-40 -left-32 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,123,71,0.06)_0%,transparent_70%)] z-0" />
        <Container className="relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-muted mb-8 hover:text-accent transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Toutes les ressources
          </Link>

          <div className="max-w-[820px] mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 bg-bg-card border border-border rounded-full px-3.5 py-1.5 text-[12px] font-semibold text-accent uppercase tracking-wider">
                <Icon size={13} />
                {POST_TYPE_LABELS[post.type]}
              </span>
              <span className="flex items-center gap-2 text-[13px] text-text-muted">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span className="w-1 h-1 rounded-full bg-text-muted/40" />
                <Clock size={12} />
                {post.readingTime} min de lecture
              </span>
            </div>
            <h1 className="text-primary mb-6">{post.title}</h1>
            {post.excerpt && (
              <p className="text-[20px] text-text-muted leading-relaxed">{post.excerpt}</p>
            )}
          </div>
        </Container>
      </section>

      {/* HERO IMAGE (si cover disponible) */}
      {post.cover && (
        <section className="bg-bg-light pb-8 lg:pb-12">
          <Container narrow>
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-lg border border-border">
              <Image
                src={post.cover}
                alt={post.coverAlt || post.title}
                fill
                priority
                sizes="(max-width: 980px) 100vw, 980px"
                className="object-cover"
              />
            </div>
          </Container>
        </section>
      )}

      {/* CONTENU ARTICLE */}
      <section className="py-12 lg:py-16 bg-bg-card">
        <Container narrow>
          <article
            className="prose prose-lg max-w-none
              prose-headings:font-sora prose-headings:tracking-tight prose-headings:text-primary
              prose-h2:text-[28px] prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-[22px] prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-[17px] prose-p:leading-relaxed prose-p:text-text-dark
              prose-strong:text-primary prose-strong:font-semibold
              prose-a:text-accent prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
              prose-ul:my-6 prose-li:text-text-dark prose-li:my-2
              prose-blockquote:border-l-accent prose-blockquote:bg-bg-warm/40 prose-blockquote:py-3 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic prose-blockquote:font-medium
              prose-em:text-text-muted prose-em:not-italic prose-em:text-sm
              prose-hr:border-border prose-hr:my-12"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </Container>
      </section>

      {/* RELATED + CTA */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-bg-light border-t border-border">
          <Container>
            <h2 className="text-primary text-center mb-10" style={{ fontSize: "clamp(24px, 3vw, 32px)" }}>
              À lire aussi
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
              {relatedPosts.map((p) => {
                const RIcon = typeIcons[p.type];
                return (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group flex gap-5 bg-bg-card border border-border rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-accent"
                  >
                    {p.cover && (
                      <div className="relative w-[120px] h-[120px] rounded-2xl overflow-hidden shrink-0 bg-bg-warm">
                        <Image
                          src={p.cover}
                          alt={p.coverAlt || p.title}
                          fill
                          sizes="120px"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 text-[12px] font-semibold text-accent uppercase tracking-wider mb-2">
                        <RIcon size={13} />
                        {POST_TYPE_LABELS[p.type]}
                      </div>
                      <h3 className="text-primary text-[16px] mb-2 leading-tight group-hover:text-accent transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-sm text-text-muted leading-relaxed line-clamp-2">{p.excerpt}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* CTA bottom */}
      <section className="bg-bg-dark text-text-light py-16 text-center">
        <Container>
          <h2 className="text-text-light mb-4">Un projet web ou marketing en tête ?</h2>
          <p className="text-text-light/70 text-[18px] max-w-[600px] mx-auto mb-8">
            On échange 30 minutes, devis détaillé sous 48h, sans engagement.
          </p>
          <Link href="/contact" className="btn btn-primary btn-arrow">
            Démarrer mon projet
          </Link>
        </Container>
      </section>
    </>
  );
}
