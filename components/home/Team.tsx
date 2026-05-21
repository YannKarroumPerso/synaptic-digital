import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { team } from "@/lib/data";

export function Team() {
 return (
 <Section id="equipe" className="bg-bg-warm">
 <Container>
 <SectionHeader
 eyebrow="L'équipe"
 title="4 personnes, 4 expertises"
 description="Pas une usine à sites avec 50 chefs de projet. Une équipe resserrée où chacun a un rôle clair, et où vous savez à qui parler."
 />
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
 {team.map((member) => (
 <div
 key={member.name}
 className="bg-bg-card border border-border rounded-3xl p-8 px-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
 >
 <div className="w-[120px] h-[120px] rounded-full overflow-hidden mx-auto mb-5 bg-bg-warm border-[3px] border-bg-card shadow-sm">
 <Image
 src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${member.seed}&backgroundColor=${member.bgColor}&size=280${member.hairVariant ? `&hair=${member.hairVariant}` : ""}`}
 alt={`Avatar de ${member.name}`}
 width={280}
 height={280}
 unoptimized
 />
 </div>
 <h4 className="text-primary text-[18px] mb-1">{member.name}</h4>
 <div className="text-[13px] font-semibold text-accent uppercase tracking-wider mb-3">
 {member.role}
 </div>
 <p className="text-sm text-text-muted leading-relaxed">{member.bio}</p>
 </div>
 ))}
 </div>
 </Container>
 </Section>
 );
}
