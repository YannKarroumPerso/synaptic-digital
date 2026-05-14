import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageSchemas } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site synaptic-digital.fr, édité par Synaptic Digital EURL.",
};

export default function MentionsLegales() {
  return (
    <>
      <PageSchemas
        breadcrumb={[
          { name: "Accueil", url: "https://synaptic-digital.fr" },
          { name: "Mentions légales" },
        ]}
      />
      <section className="py-20 lg:py-28">
      <Container narrow>
        <div className="text-center mb-14">
          <span className="section-eyebrow">Informations légales</span>
          <h1 className="text-primary">Mentions légales</h1>
        </div>

        <div className="prose-content space-y-12">
          <Block title="Éditeur du site">
            <dl>
              <DefRow label="Dénomination sociale" value="Synaptic Digital EURL" />
              <DefRow label="Forme juridique" value="EURL (Entreprise Unipersonnelle à Responsabilité Limitée)" />
              <DefRow label="Capital social" value="[À compléter] €" />
              <DefRow label="Siège social" value="33 rue des Petits Champs, 16400 Vœuil-et-Giget" />
              <DefRow label="SIRET" value="[À compléter]" />
              <DefRow label="Gérant" value="Karroum Yann" />
              <DefRow label="Email" value="contact@synaptic-digital.fr" />
              <DefRow label="Site web" value="synaptic-digital.fr" />
            </dl>
          </Block>

          <Block title="Hébergement">
            <p>
              Le site synaptic-digital.fr est hébergé par <strong>Vercel Inc.</strong>
              <br />
              440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
            </p>
          </Block>

          <Block title="Propriété intellectuelle">
            <p>
              L&apos;ensemble des contenus présents sur le site synaptic-digital.fr (textes, images, graphismes, logos, icônes, etc.) est la propriété exclusive de Synaptic Digital EURL, sauf mention contraire. Toute reproduction, distribution, modification ou utilisation de ces contenus, sans autorisation préalable et écrite de Synaptic Digital EURL, est strictement interdite.
            </p>
          </Block>

          <Block title="Données personnelles" id="donnees">
            <p>
              Synaptic Digital EURL s&apos;engage à assurer la protection, la confidentialité et la sécurité des données personnelles de ses utilisateurs, conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
            </p>
            <p>
              Les données collectées via le site (formulaire de contact, cookies) sont utilisées uniquement dans le cadre de la relation commerciale et ne sont en aucun cas cédées à des tiers.
            </p>
            <p>Conformément à la réglementation en vigueur, vous disposez des droits suivants sur vos données :</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Droit d&apos;accès</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement</li>
              <li>Droit d&apos;opposition</li>
              <li>Droit à la portabilité</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à :{" "}
              <a href="mailto:contact@synaptic-digital.fr" className="text-accent font-semibold hover:underline">
                contact@synaptic-digital.fr
              </a>
            </p>
          </Block>

          <Block title="Cookies">
            <p>
              Le site synaptic-digital.fr utilise des cookies techniques nécessaires à son fonctionnement et, avec votre consentement, des cookies analytiques pour mesurer l&apos;audience. Vous pouvez à tout moment paramétrer votre choix via le bandeau cookies.
            </p>
          </Block>

          <Block title="Responsabilité">
            <p>
              Synaptic Digital EURL s&apos;efforce de fournir des informations aussi précises que possible sur le site synaptic-digital.fr. Toutefois, la société ne pourra être tenue responsable des omissions, inexactitudes ou carences dans la mise à jour des informations. Synaptic Digital EURL se réserve le droit de modifier les contenus du site à tout moment et sans préavis.
            </p>
          </Block>

          <Block title="Droit applicable">
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </Block>

          <p className="text-text-muted text-sm italic pt-6 border-t border-border">
            Dernière mise à jour : mai 2026
          </p>
        </div>
      </Container>
    </section>
    </>
  );
}

function Block({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) {
  return (
    <div id={id}>
      <h2 className="text-primary mb-4" style={{ fontSize: "clamp(22px, 2.4vw, 28px)" }}>
        {title}
      </h2>
      <div className="space-y-3 text-text-dark leading-relaxed">{children}</div>
    </div>
  );
}

function DefRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 mb-2">
      <dt className="font-semibold text-primary min-w-[200px]">{label} :</dt>
      <dd>{value}</dd>
    </div>
  );
}
