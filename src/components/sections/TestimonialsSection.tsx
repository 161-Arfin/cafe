import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { googleRating, testimonials } from "@/data/testimonials";

function Stars() {
  return <span className="tracking-[0.18em] text-accent" aria-label="5 dari 5 bintang">★★★★★</span>;
}

export function TestimonialsSection() {
  return (
    <section className="bg-surface py-20 md:py-28 lg:py-32" aria-labelledby="testimonial-heading">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Kata mereka</p>
            <h2 id="testimonial-heading" className="mt-4 max-w-lg font-heading text-4xl font-semibold leading-[0.98] text-primary sm:text-5xl lg:text-6xl">Tempat nyaman untuk tetap produktif.</h2>
            <div className="mt-8 flex items-end gap-4"><strong className="font-heading text-7xl leading-none text-primary">{googleRating.score}</strong><div className="pb-1"><Stars /><p className="mt-1 text-sm text-muted">{googleRating.reviewCount} {googleRating.sourceLabel}</p></div></div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((item, index) => <article key={item.title} className="reveal group border-t border-outline bg-background p-6 transition-transform duration-300 hover:-translate-y-1" style={{ transitionDelay: `${index * 80}ms` }}><Stars /><h3 className="mt-6 font-heading text-2xl font-semibold text-primary">{item.title}</h3><p className="mt-3 text-sm leading-7 text-muted">{item.summary}</p></article>)}
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-outline pt-6 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-2xl text-xs leading-5 text-muted">Ringkasan sentimen dari informasi dan ulasan publik. Rating dapat berubah mengikuti Google Maps.</p><Button href={siteConfig.links.maps} variant="outline">Baca ulasan di Google</Button></div>
      </Container>
    </section>
  );
}
