import { useEffect, useState } from "react";
import Image from "next/image";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#top");

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) setActiveHref(`#${visibleSection.target.id}`);
      },
      { rootMargin: "-28% 0px -62% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-primary/60 shadow-[inset_0_1px_0_rgba(255,255,255,.12),0_10px_36px_rgba(25,10,8,.16)] backdrop-blur-2xl backdrop-saturate-[175%]">
      <Container
        as="nav"
        aria-label="Primary navigation"
        className="flex h-16 items-center justify-between gap-4 lg:h-[72px]"
      >
        <a
          href="#top"
          className="group flex min-w-0 shrink-0 items-center gap-2.5 text-white"
          aria-label={`${siteConfig.name} home`}
        >
          <Image src={siteConfig.images.logo} alt="Logo LYON’S Café dan Co-Working Space" width={44} height={44} priority className="h-10 w-10 object-contain transition-transform duration-300 group-hover:rotate-[-5deg] lg:h-11 lg:w-11" />
          <span className="block min-w-0"><strong className="block truncate font-heading text-base leading-none sm:text-lg md:text-xl">LYON’S</strong><small className="mt-1 block truncate text-[6px] uppercase tracking-[.16em] text-white/55 sm:text-[7px] sm:tracking-[.2em]">Café &amp; Co-Working</small></span>
        </a>
        <ul className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => {
            const active = activeHref === item.href;
            return (
            <li key={item.href}>
              <a
                className={`group/nav relative block px-1 py-3 text-[13px] font-medium transition-colors duration-300 ${active ? "text-accent" : "text-white/65 hover:text-white"}`}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setActiveHref(item.href)}
              >
                {item.label}
                <span className={`absolute inset-x-1 bottom-1 h-px origin-left bg-accent transition-transform duration-300 ${active ? "scale-x-100" : "scale-x-0 group-hover/nav:scale-x-100"}`} aria-hidden="true" />
              </a>
            </li>
          )})}
        </ul>
        <div className="hidden lg:block">
          <Button href={siteConfig.links.whatsapp} variant="gold" className="min-h-9 rounded-full px-4 py-2 text-xs">
            Hubungi kami
          </Button>
        </div>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Tutup navigasi" : "Buka navigasi"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative block h-5 w-6" aria-hidden="true"><span className={`absolute left-0 top-1 h-px w-6 bg-current transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} /><span className={`absolute left-0 top-2.5 h-px w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} /><span className={`absolute left-0 top-4 h-px w-6 bg-current transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} /></span>
        </button>
      </Container>
      {open && (
        <div
          id="mobile-menu"
          className="mobile-menu-enter border-t border-white/10 bg-primary/75 px-5 pb-5 backdrop-blur-2xl lg:hidden"
        >
          <ul>
            {navigation.map((item) => {
              const active = activeHref === item.href;
              return (
              <li key={item.href}>
                <a
                  className={`flex min-h-12 items-center justify-between border-b border-white/10 py-3 text-sm transition-colors ${active ? "text-accent" : "text-white/75"}`}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => { setActiveHref(item.href); setOpen(false); }}
                >
                  {item.label}
                  <span className={`h-1.5 w-1.5 rounded-full bg-accent transition-opacity ${active ? "opacity-100" : "opacity-0"}`} aria-hidden="true" />
                </a>
              </li>
            )})}
          </ul>
          <div className="mt-5 grid grid-cols-2 gap-3"><Button href="#menu" variant="gold" className="px-3" onClick={() => setOpen(false)}>Lihat Menu</Button><Button href={siteConfig.links.meeting} variant="outline" className="px-3">Booking Room</Button></div>
        </div>
      )}
    </header>
  );
}
