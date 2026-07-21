import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

const galleryImages = [
  { src: siteConfig.images.barista, alt: "Barista LYON’S meracik minuman di area bar", label: "Craft", className: "md:col-span-7 md:row-span-2" },
  { src: siteConfig.images.workspace, alt: "Area coworking LYON’S dengan suasana hangat", label: "Workspace", className: "md:col-span-5" },
  { src: siteConfig.images.drinks, alt: "Pilihan minuman segar dari LYON’S Café", label: "Coffee", className: "md:col-span-5" },
  { src: siteConfig.images.hero, alt: "Suasana hangat di meja bar LYON’S Café", label: "Moments", className: "md:col-span-12" },
];

export function GallerySection() {
  return (
    <section id="gallery" className="section-space overflow-hidden bg-primary text-white">
      <Container>
        <div className="reveal mb-10 flex flex-col gap-6 border-b border-white/15 pb-8 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div><p className="text-xs font-semibold uppercase tracking-[.22em] text-accent">Galeri LYON’S</p><h2 className="mt-4 max-w-2xl font-heading text-4xl font-medium leading-none sm:text-5xl lg:text-6xl">Lihat lebih dekat. Rasakan suasananya.</h2></div>
          <p className="max-w-sm text-sm leading-7 text-white/55">Kopi, ruang kerja, dan momen yang hidup setiap hari di LYON’S.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-12 md:auto-rows-[260px] lg:auto-rows-[300px]">
          {galleryImages.map((image) => (
            <figure key={image.label} className={`group reveal relative min-h-[280px] overflow-hidden rounded-card border border-white/10 bg-primary-container ${image.className}`}>
              <Image src={image.src} alt={image.alt} fill quality={100} sizes="(min-width: 768px) 60vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/65 via-transparent to-transparent" />
              <figcaption className="absolute bottom-5 left-5 text-xs font-semibold uppercase tracking-[.2em] text-white md:bottom-6 md:left-6"><span className="mr-3 inline-block h-px w-8 align-middle bg-accent" />{image.label}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
