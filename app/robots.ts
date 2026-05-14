import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Crawlers standards (Google, Bing, etc.)
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Bots LLM connus : on autorise (visibilité dans les réponses IA)
      // Liste basée sur https://github.com/ai-robots-txt
      {
        userAgent: [
          "GPTBot",          // OpenAI
          "ChatGPT-User",    // OpenAI (lien direct dans ChatGPT)
          "OAI-SearchBot",   // OpenAI SearchGPT
          "anthropic-ai",    // Anthropic
          "Claude-Web",      // Anthropic (legacy)
          "ClaudeBot",       // Anthropic
          "PerplexityBot",   // Perplexity
          "Perplexity-User", // Perplexity (recherche directe)
          "Google-Extended", // Google AI/Gemini
          "Applebot-Extended", // Apple Intelligence
          "Bytespider",      // ByteDance / Doubao
          "Meta-ExternalAgent", // Meta AI
        ],
        allow: "/",
      },
    ],
    sitemap: "https://synaptic-digital.fr/sitemap.xml",
    host: "https://synaptic-digital.fr",
  };
}
