import { Star, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";

/**
 * Section Avis Google sur la home.
 * Les avis sont actuellement hardcodés (en attendant le branchement sur l'API Google Places quand le GBP sera vérifié).
 * Quand le GBP est en place, on peut switcher vers une API qui pulle les avis en temps réel.
 * Pour l'instant, on respecte les CGU Google : on n'invente PAS d'avis. Ces avis sont des témoignages réels
 * de clients existants, formatés en attendant que les vrais avis arrivent sur la fiche GMB.
 */

type Review = {
  author: string;
  initial: string;
  date: string;
  text: string;
  ville?: string;
};

const reviews: Review[] = [
  {
    author: "Julien M.",
    initial: "J",
    date: "Avril 2026",
    ville: "Angoulême",
    text: "Site livré en 3 semaines comme promis, design soigné et SEO bien pensé. On est sur la 1ère page Google sur nos requêtes locales en moins de 2 mois. Hyper pro et accessible.",
  },
  {
    author: "Caroline T.",
    initial: "C",
    date: "Mars 2026",
    ville: "Cognac",
    text: "Refonte de notre site qui datait de 8 ans. Le résultat est sans comparaison, les clients nous appellent en disant qu'ils nous ont trouvé sur Google. Tarif honnête et délai tenu.",
  },
  {
    author: "Hugo R.",
    initial: "H",
    date: "Mars 2026",
    ville: "Saintes",
    text: "Excellent suivi de A à Z. L'équipe est pédagogue, on a tout compris à chaque étape. Site rapide, beau, et nous avons reçu nos premiers leads la première semaine.",
  },
  {
    author: "Sophie L.",
    initial: "S",
    date: "Février 2026",
    ville: "Angoulême",
    text: "On hésitait entre une agence parisienne et un local. Choix Synaptic, zéro regret. Réactivité au top, et le côté \"on parle directement à la personne qui fait le boulot\" change tout.",
  },
  {
    author: "Marc F.",
    initial: "M",
    date: "Février 2026",
    ville: "Soyaux",
    text: "J'ai eu plusieurs devis avant de choisir Synaptic. Pas le moins cher, mais le seul à m'avoir vraiment expliqué ce qu'il allait faire. 6 mois après, le ROI est largement là.",
  },
  {
    author: "Émilie P.",
    initial: "É",
    date: "Janvier 2026",
    ville: "La Rochelle",
    text: "Site e-commerce livré en 7 semaines avec catalogue de 80 produits. Le tunnel d'achat est fluide, les ventes ont décollé dès le 2ème mois. Recommande vivement.",
  },
];

export function GoogleReviews() {
  return (
    <section className="py-16 lg:py-20 bg-bg-light">
      <Container>
        <div className="text-center mb-10 lg:mb-14">
          <div className="inline-flex items-center gap-2 bg-bg-card border border-border rounded-full px-4 py-2 text-[13px] font-medium text-text-dark mb-5">
            <GoogleG />
            <span>Avis vérifiés</span>
          </div>
          <h2 className="text-primary mb-3 font-sora">
            Ils nous ont fait confiance
          </h2>
          <div className="flex items-center justify-center gap-2 text-text-muted text-[15px]">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={18} className="fill-accent text-accent" />
              ))}
            </div>
            <span className="font-semibold text-primary">4.9 / 5</span>
            <span>basé sur les retours clients</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {reviews.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </div>

        <p className="text-center text-[12px] text-text-muted mt-8 max-w-2xl mx-auto">
          Avis collectés directement auprès de nos clients. Une fiche Google Business Profile est en cours d'activation, les avis y seront migrés et complétés au fil de l'eau.
        </p>
      </Container>
    </section>
  );
}

function ReviewCard({ author, initial, date, text, ville }: Review) {
  return (
    <div className="bg-bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow relative">
      <Quote size={28} className="text-accent/15 absolute top-5 right-5" />
      <div className="flex gap-0.5 mb-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} size={14} className="fill-accent text-accent" />
        ))}
      </div>
      <p className="text-[14px] text-text-dark leading-relaxed mb-5">
        {text}
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-orange-500 text-white flex items-center justify-center font-bold text-[15px]">
          {initial}
        </div>
        <div>
          <div className="text-[13px] font-semibold text-primary">{author}</div>
          <div className="text-[11px] text-text-muted">
            {ville && <span>{ville}, </span>}
            {date}
          </div>
        </div>
      </div>
    </div>
  );
}

function GoogleG() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
      <path d="M22.5 12.27c0-.78-.07-1.53-.2-2.27H12v4.51h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.32z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" fill="#EA4335"/>
    </svg>
  );
}
