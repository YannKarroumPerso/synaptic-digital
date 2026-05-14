import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { getAllPosts, POST_TYPE_LABELS, formatDate, type PostMeta } from "@/lib/blog";
import { Clock, FileText, BookOpen, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
 title: "Ressources, Études, articles, décryptages",
 description:
 "Études, articles et décryptages signés Synaptic Digital. Analyses concrètes sur le digital des PME en Charente : SEO local, IA, création de site, e-commerce.",
};

const typeIcons = {
 article: BookOpen,
 etude: BarChart3,
 decryptage: FileText,
};

export default function BlogIndex() {
 const posts = getAllPosts();

 return (
 <>
 {/* HERO */}
 <section className="relative overflow-hidden pt-20 pb-12 lg:pt-24 lg:pb-16 bg-bg-light">
 <div className="absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,123,71,0.08)_0%,transparent_70%)] z-0" />
 <Container className="relative z-10">
 <div className="max-w-[760px] mx-auto text-center">
 <span className="section-eyebrow">Ressources</span>
 <h1 className="text-primary mb-6">
 Études, articles, décryptages.
 </h1>
 <p className="text-[20px] text-text-muted leading-relaxed">
 Des analyses concrètes sur le digital des PME en Charente. Pas de blabla, pas de listicles
 génériques, du contenu utile, sourcé, ancré localement.
 </p>
 </div>
 </Container>
 </section>

 {/* LISTE DES ARTICLES */}
 <section className="py-12 lg:py-16">
 <Container>
 {posts.length === 0 ? (
 <EmptyState />
 ) : (
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-[1200px] mx-auto">
 {posts.map((post) => (
 <PostCard key={post.slug} post={post} />
 ))}
 </div>
 )}
 </Container>
 </section>

 {/* CTA */}
 <section className="bg-bg-dark text-text-light py-16 lg:py-20 text-center">
 <Container>
 <h2 className="text-text-light mb-4">Un projet en tête ?</h2>
 <p className="text-text-light/70 text-[18px] max-w-[600px] mx-auto mb-8">
 On échange 30 minutes pour cerner votre besoin, puis on vous envoie un devis détaillé sous 48h.
 </p>
 <Link href="/contact" className="btn btn-primary btn-arrow">
 Démarrer mon projet
 </Link>
 </Container>
 </section>
 </>
 );
}

function PostCard({ post }: { post: PostMeta }) {
 const Icon = typeIcons[post.type];
 return (
 <Link
 href={`/blog/${post.slug}`}
 className="group flex flex-col bg-bg-card border border-border rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-accent"
 >
 <div className="aspect-[16/9] bg-gradient-to-br from-bg-warm via-[#F2E8DC] to-accent-light/40 relative overflow-hidden">
 {post.cover ? (
 <Image
 src={post.cover}
 alt={post.coverAlt || post.title}
 fill
 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
 className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
 />
 ) : (
 <div className="absolute inset-0 flex items-center justify-center">
 <Icon size={48} className="text-accent/40 group-hover:text-accent transition-colors" strokeWidth={1.5} />
 </div>
 )}
 <div className="absolute top-4 left-4 z-10 bg-bg-card/95 backdrop-blur border border-border rounded-full px-3 py-1 text-[11px] font-semibold text-primary uppercase tracking-wider shadow-sm">
 {POST_TYPE_LABELS[post.type]}
 </div>
 </div>
 <div className="p-7 flex flex-col flex-1">
 <div className="flex items-center gap-3 text-[12px] text-text-muted mb-3">
 <time dateTime={post.date}>{formatDate(post.date)}</time>
 <span className="w-1 h-1 rounded-full bg-text-muted/40" />
 <span className="flex items-center gap-1">
 <Clock size={11} /> {post.readingTime} min
 </span>
 </div>
 <h3 className="text-primary text-[19px] mb-3 leading-tight group-hover:text-accent transition-colors">
 {post.title}
 </h3>
 <p className="text-sm text-text-muted leading-relaxed flex-1">{post.excerpt}</p>
 <div className="mt-5 pt-5 border-t border-border text-accent font-semibold text-sm group-hover:underline">
 Lire l&apos;article →
 </div>
 </div>
 </Link>
 );
}

function EmptyState() {
 return (
 <div className="text-center max-w-[480px] mx-auto py-16">
 <div className="text-6xl mb-6">📚</div>
 <h3 className="text-primary mb-3">Les premières ressources arrivent bientôt</h3>
 <p className="text-text-muted leading-relaxed">
 On prépare actuellement les premières études et articles. Revenez dans quelques jours, ou{" "}
 <Link href="/contact" className="text-accent font-semibold hover:underline">
 contactez-nous
 </Link>{" "}
 si vous voulez être notifié à la publication.
 </p>
 </div>
 );
}
