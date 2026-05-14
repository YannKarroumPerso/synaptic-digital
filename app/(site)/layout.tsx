import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

/**
 * Layout du site principal (avec Nav + Footer).
 * S'applique à toutes les pages SAUF /devis (qui est hors de ce route group).
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
