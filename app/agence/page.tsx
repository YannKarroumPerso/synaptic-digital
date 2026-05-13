import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { team, methodSteps } from "@/lib/data";
import { Compass, Target, Sparkles, Heart, Users, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "L'agence — Notre approche, notre méthode, notre équipe",
  description:
    "Synaptic Digital est une équipe resserrée qui livre aux petites PME des sites beaux, rapides et bien référencés en 3 à 4 semaines. Découvrez notre méthode, nos convictions et l'équipe derrière vos projets.",
};

const manifestoPoints = [
  {
    number: "01",
    title: "Un site est un outil, pas une décoration.",
    text: "Sa job, c'est de transformer des visiteurs en clients, ou de positionner votre marque sur Google. Un site qui ne fait ni l'un ni l'autre, c'est une carte de visite chère.",
  },
  {
    number: "02",
    title: "Le délai compte autant que la qualité.",
    text: "Un site livré en 6 mois est un site qui rate sa fenêtre. On a industrialisé une méthode pour livrer en 3-4 semaines, sans bâcler — c'est notre vraie différence.",
  },
  {
    number: "03",
    title: "Design, performance et SEO vont ensemble.",
    text: "La plupart des agences arbitrent : soit c'est beau, soit c'est rapide, soit c'est bien référencé. On refuse l'arbitrage. Si vous payez pour les trois, vous repartez avec les trois.",
  },
  {
    number: "04",
    title: "Pas de jargon, pas de blabla.",
    text: "Vous parlez votre métier, on parle le nôtre, et on se comprend. On ne vous facturera jamais des heures à expliquer ce qu'est une « synergie d'activation digitale ».",
  },
  {
    number: "05",
    title: "On reste petits volontairement.",
    text: "Une équipe à taille humaine, où vous savez à qui parler, où chaque projet a un propriétaire. Pas une usine à sites avec 50 chefs de projet et un brief qui se dilue à chaque mail.",
  },
];

function ManifestoItem({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-12 py-10 lg:py-12 border-b border-border transition-colors hover:bg-bg-warm/40 -mx-6 px-6 md:-mx-8 md:px-8 rounded-2xl">
      <div className="font-sora font-bold text-[44px] md:text-[56px] text-accent leading-none tracking-tight">
        {number}
      </div>
      <div>
        <h3 className="text-primary font-sora font-bold text-[24px] md:text-[28px] leading-tight mb-3 transition-colors group-hover:text-accent">
          {title}
        </h3>
        <p className="text-text-muted text-[17px] leading-relaxed max-w-[640px]">
          {text}
        </p>
      </div>
    </div>
  );
}

export default function AgencePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-20 pb-12 lg:pt-24 lg:pb-16 bg-bg-light">
        <div className="absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,123,71,0.08)_0%,transparent_70%)] z-0" />
        <Container className="relative z-10">
          <div className="max-w-[820px] mx-auto text-center">
            <span className="section-eyebrow">L&apos;agence</span>
            <h1 className="text-primary mb-6">
              Une équipe resserrée, des sites qui font le travail.
            </h1>
            <p className="text-[20px] text-text-muted leading-relaxed max-w-[680px] mx-auto">
              On a fondé Synaptic en partant d&apos;un constat simple : les petites PME méritent mieux que des sites mal foutus livrés en six mois ou des agences premium hors de portée. On livre des sites qui marchent, vite, à un prix qui tient debout.
            </p>
          </div>
        </Container>
      </section>

      {/* MANIFESTE */}
      <Section className="bg-bg-card">
        <Container narrow>
          <div className="text-center mb-16">
            <span className="section-eyebrow">Manifeste</span>
            <h2 className="text-primary mb-4">Ce en quoi on croit</h2>
            <p className="text-text-muted text-[18px] leading-relaxed max-w-[600px] mx-auto">
              Cinq principes qui structurent chaque projet qu&apos;on accepte de prendre.
            </p>
          </div>
          <div className="border-t border-border">
            {manifestoPoints.map((point) => (
              <ManifestoItem key={point.number} {...point} />
            ))}
          </div>
        </Container>
      </Section>

      {/* LE MIX EXPLIQUÉ */}
      <Section className="bg-bg-warm">
        <Container>
          <SectionHeader
            eyebrow="Notre triple expertise"
            title="Design + Performance + SEO. Vraiment ensemble."
            description="On vous explique pédagogiquement pourquoi ces trois piliers ne devraient jamais être travaillés séparément, et comment on les fait coexister."
          />
          <div className="grid md:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
            <ExpertiseCard
              Icon={Sparkles}
              title="Design"
              shortLabel="Beau, mais utile"
              text="Pas un site joli pour être joli. Un design pensé pour guider le visiteur vers la conversion — bouton CTA visible, hiérarchie claire, parcours sans friction. Toutes les agences disent &laquo;&nbsp;on fait du beau&nbsp;&raquo;. Notre standard, c&apos;est : est-ce que ça donne envie de cliquer ?"
            />
            <ExpertiseCard
              Icon={Target}
              title="Performance"
              shortLabel="Rapide partout"
              text="Score Lighthouse 95+ par défaut. Site qui charge en moins de 2 secondes, même sur mobile 4G. Pas une option : un site lent fait fuir vos visiteurs avant même qu&apos;ils aient vu votre offre. On utilise des architectures statiques modernes (Next.js, Astro) qui rendent ça possible."
            />
            <ExpertiseCard
              Icon={Compass}
              title="SEO"
              shortLabel="Trouvé sur Google"
              text="Le SEO ne se rajoute pas après. Il se conçoit dès la structure de l&apos;arborescence, dès les titres de page, dès le poids des images. Nos sites sortent en ligne déjà optimisés pour les keywords de votre métier — et on suit les positions pendant 30 jours après le lancement."
            />
          </div>
        </Container>
      </Section>

      {/* MÉTHODE DÉTAILLÉE */}
      <Section className="bg-bg-card">
        <Container>
          <SectionHeader
            eyebrow="Notre méthode"
            title="4 étapes, zéro zone d'ombre"
            description="On vous explique exactement ce qu'on fait à chaque étape, ce qu'on attend de vous, et ce qu'on vous livre. Pas de mystère, pas de mauvaise surprise."
          />
          <div className="max-w-[880px] mx-auto relative">
            <div className="absolute left-[35px] top-8 bottom-8 w-0.5 bg-border z-0 hidden sm:block" />
            {methodSteps.map((step) => (
              <div key={step.number} className="flex gap-7 mb-8 last:mb-0 relative z-10">
                <div className="w-[72px] h-[72px] bg-bg-card border-2 border-accent rounded-full flex items-center justify-center font-sora font-bold text-[22px] text-accent shrink-0 shadow-md">
                  {step.number}
                </div>
                <div className="flex-1 bg-bg-light border border-border rounded-3xl px-7 py-6">
                  <div className="text-[13px] font-semibold text-accent uppercase tracking-wider mb-2">
                    {step.duration}
                  </div>
                  <h3 className="text-primary text-[22px] mb-3">{step.title}</h3>
                  <p className="text-text-muted text-[15px] leading-relaxed mb-5">
                    {step.description}
                  </p>
                  <div className="border-t border-border pt-4 grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-[11px] font-semibold text-accent uppercase tracking-wider mb-1">
                        Vous fournissez
                      </div>
                      <div className="text-text-dark">{step.yousProvide}</div>
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-accent uppercase tracking-wider mb-1">
                        On livre
                      </div>
                      <div className="text-text-dark">{step.weDeliver}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* POURQUOI LES PETITES PME */}
      <Section className="bg-bg-dark text-text-light relative overflow-hidden">
        <div className="absolute -top-40 -left-32 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,123,71,0.12)_0%,transparent_70%)] z-0" />
        <Container className="relative z-10">
          <div className="max-w-[820px] mx-auto text-center mb-12">
            <span className="section-eyebrow">Notre engagement</span>
            <h2 className="text-text-light mb-5">Pourquoi on bosse pour les petites PME</h2>
            <p className="text-text-light/70 text-[18px] leading-relaxed">
              Pas par défaut, par choix. Les petites structures sont celles qui ont le plus besoin d&apos;un site qui performe — parce qu&apos;elles n&apos;ont pas les budgets marketing pour compenser ailleurs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
            <ValueCard
              Icon={Users}
              title="Le bon partenaire"
              text="On n'est pas une agence pour les ETI multinationales. On parle aux dirigeants qui n'ont pas de direction marketing dédiée, qui pilotent eux-mêmes leur projet web entre deux réunions clients."
            />
            <ValueCard
              Icon={Clock}
              title="Le bon timing"
              text="3-4 semaines, pas 6 mois. Parce que vous n'avez pas le temps d'attendre. Parce qu'un site qui n'est pas en ligne ne vous rapporte rien. Parce que les fenêtres business se ferment vite."
            />
            <ValueCard
              Icon={Heart}
              title="Le bon prix"
              text="Entre 3 000 € et 7 500 € pour 90% des projets. Pas un budget de grande agence, pas un budget de freelance débordé. Le juste prix pour un travail sérieux."
            />
          </div>
        </Container>
      </Section>

      {/* ÉQUIPE ÉTENDUE */}
      <Section className="bg-bg-card">
        <Container>
          <SectionHeader
            eyebrow="L'équipe"
            title="4 personnes, 4 expertises, un objectif commun"
            description="Une équipe resserrée où chacun a son rôle clair. Vous savez à qui parler à chaque étape, et personne ne se renvoie la balle."
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
            {team.map((member) => (
              <article
                key={member.name}
                className="bg-bg-light border border-border rounded-3xl p-7 flex gap-5 transition-all duration-300 hover:shadow-md"
              >
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden bg-bg-warm border-[3px] border-bg-card shadow-sm shrink-0">
                  <Image
                    src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${member.seed}&backgroundColor=${member.bgColor}&size=240`}
                    alt={`Avatar de ${member.name}`}
                    width={240}
                    height={240}
                    unoptimized
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-primary text-[18px] mb-1">{member.name}</h4>
                  <div className="text-[13px] font-semibold text-accent uppercase tracking-wider mb-3">
                    {member.role}
                  </div>
                  <p className="text-sm text-text-dark leading-relaxed">
                    {(member as { bioExtended?: string }).bioExtended ?? member.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <p className="text-center mt-8 text-[13px] text-text-muted">
            💡 <em>Avatars et bios placeholder — Yann remplacera par les vraies photos et parcours.</em>
          </p>
        </Container>
      </Section>

      {/* CTA */}
      <section className="bg-bg-dark text-text-light py-16 lg:py-20 text-center">
        <Container>
          <h2 className="text-text-light mb-4">On en parle ?</h2>
          <p className="text-text-light/70 text-[18px] max-w-[600px] mx-auto mb-8">
            Premier échange gratuit, sans engagement. Devis détaillé sous 48h.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/#contact" variant="primary" arrow>
              Démarrer mon projet
            </Button>
            <Link
              href="/#realisations"
              className="btn btn-secondary !border-white/30 !text-text-light hover:!bg-white hover:!text-primary hover:!border-white"
            >
              Voir nos réalisations
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

function ExpertiseCard({
  Icon,
  title,
  shortLabel,
  text,
}: {
  Icon: typeof Compass;
  title: string;
  shortLabel: string;
  text: string;
}) {
  return (
    <div className="bg-bg-card border border-border rounded-3xl p-7 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="w-12 h-12 bg-accent/12 rounded-2xl flex items-center justify-center text-accent mb-5">
        <Icon size={24} />
      </div>
      <h3 className="text-primary text-[22px] mb-1">{title}</h3>
      <div className="text-[13px] font-semibold text-accent uppercase tracking-wider mb-3">
        {shortLabel}
      </div>
      <p className="text-[15px] text-text-muted leading-relaxed">{text}</p>
    </div>
  );
}

function ValueCard({
  Icon,
  title,
  text,
}: {
  Icon: typeof Compass;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-7 transition-all duration-300 hover:bg-white/[0.08] hover:border-accent">
      <div className="w-12 h-12 bg-accent/12 rounded-2xl flex items-center justify-center text-accent mb-5">
        <Icon size={24} />
      </div>
      <h3 className="text-text-light text-[20px] mb-3">{title}</h3>
      <p className="text-[15px] text-text-light/70 leading-relaxed">{text}</p>
    </div>
  );
}
