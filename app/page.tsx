import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { Services } from "@/components/home/Services";
import { Pillars } from "@/components/home/Pillars";
import { Method } from "@/components/home/Method";
import { Team } from "@/components/home/Team";
import { Testimonials } from "@/components/home/Testimonials";
import { RealisationsTeaser } from "@/components/home/RealisationsTeaser";
import { Pricing } from "@/components/home/Pricing";
import { FAQ } from "@/components/home/FAQ";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Pillars />
      <Method />
      <Team />
      <Testimonials />
      <RealisationsTeaser />
      <Pricing />
      <FAQ />
      <Contact />
    </>
  );
}
