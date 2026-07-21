import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { footerGroups } from "@/data/footer";

export function Footer() {
  return (
    <footer className="bg-primary py-10 text-white md:py-12">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_.7fr_.8fr] lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#top" className="inline-flex items-center gap-2.5 font-heading text-2xl font-semibold">
              <Image src={siteConfig.images.logo} alt="Logo LYON’S Café dan Co-Working Space" width={48} height={48} className="h-11 w-11 object-contain" />
              LYON’S
            </a>
            <p className="mt-3 max-w-md text-xs leading-6 text-white/55">Café dan co-working space 24 jam di Sleman untuk bekerja, bertemu, dan menikmati kopi.</p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="mb-3 text-[10px] font-semibold uppercase tracking-[.18em] text-accent">{group.title}</h2>
              <ul className="space-y-2">
                {group.links.map((link) => {
                  const external = link.href.startsWith("http");
                  return <li key={link.label}><a className="text-xs text-white/60 transition-colors hover:text-accent" href={link.href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{link.label}</a></li>;
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-col gap-2 border-t border-white/10 pt-5 text-[10px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} LYON’S Café &amp; Co-Working Space.</p>
          <p>Buka 24 jam · Monjali, Sleman</p>
        </div>
      </Container>
    </footer>
  );
}
