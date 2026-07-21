import { siteConfig } from "@/config/site";
import { business } from "@/data/business";
import { Container } from "@/components/ui/Container";

export function LocationSection() {
  return (
    <section id="location" className="bg-surface py-5 md:py-8">
      <Container className="overflow-hidden bg-surface p-0">
        <div className="grid lg:grid-cols-[.82fr_1.18fr]">
          <div className="reveal flex flex-col justify-center p-8 md:p-14 lg:p-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[.18em] text-accent">
              Datang kapan saja
            </p>
            <h2 className="font-heading text-5xl leading-none text-primary md:text-6xl">
              Satu tempat.
              <br />
              Banyak cara menikmatinya.
            </h2>
            <p className="mt-7 text-sm leading-7 text-muted">
              {business.address}
              <br />
              <strong className="text-primary">
                Buka 24 jam, setiap hari.
              </strong>
            </p>
          </div>
          <div className="min-h-[420px] bg-outline/35">
            <iframe
              title="Lokasi LYON’S Café & Co-Working Space"
              src="https://www.google.com/maps?q=-7.7657083,110.368945&z=16&output=embed"
              className="h-full min-h-[420px] w-full border-0 grayscale-[.2]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="grid border-t border-outline/60 md:grid-cols-3">
          <a
            href="#menu"
            className="group border-b border-outline/60 p-7 transition-colors hover:bg-primary hover:text-white md:border-b-0 md:border-r"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[.16em] text-accent">
              Mau lihat pilihan?
            </span>
            <strong className="mt-2 block font-heading text-2xl">
              Buka Daftar Menu{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </strong>
          </a>
          <a
            href={siteConfig.links.meeting}
            target="_blank"
            rel="noopener noreferrer"
            className="group border-b border-outline/60 p-7 transition-colors hover:bg-primary hover:text-white md:border-b-0 md:border-r"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[.16em] text-accent">
              Butuh ruang?
            </span>
            <strong className="mt-2 block font-heading text-2xl">
              Booking Meeting Room{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </strong>
          </a>
          <a
            href={siteConfig.links.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-7 transition-colors hover:bg-primary hover:text-white"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[.16em] text-accent">
              Siap berangkat?
            </span>
            <strong className="mt-2 block font-heading text-2xl">
              Buka Google Maps{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </strong>
          </a>
        </div>
      </Container>
    </section>
  );
}
