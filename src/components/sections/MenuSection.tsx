import { useState } from "react";
import { menuCategories } from "@/data/menu";
import { Container } from "@/components/ui/Container";

export function MenuSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pointerStart, setPointerStart] = useState<number | null>(null);
  const activeCategory = menuCategories[activeIndex];

  const showPrevious = () => setActiveIndex((index) => (index - 1 + menuCategories.length) % menuCategories.length);
  const showNext = () => setActiveIndex((index) => (index + 1) % menuCategories.length);

  return (
    <section id="menu" className="section-space overflow-hidden bg-background">
      <Container>
        <div className="reveal mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div><p className="text-xs font-bold uppercase tracking-[.18em] text-accent">Menu resmi LYON’S</p><h2 className="mt-3 max-w-2xl font-heading text-5xl leading-none text-primary md:text-6xl">Semua yang kami sajikan, lengkap dengan harganya.</h2></div>
          <p className="max-w-sm text-sm leading-7 text-muted">Pilih kategori atau geser papan menu. Harga ditampilkan dalam ribuan rupiah.</p>
        </div>

        <div className="mb-5 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Kategori menu">
          {menuCategories.map((category, index) => <button key={category.id} type="button" role="tab" aria-selected={index === activeIndex} onClick={() => setActiveIndex(index)} className={`min-h-11 shrink-0 cursor-pointer rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${index === activeIndex ? "border-primary-container bg-primary-container text-white" : "border-primary/15 text-primary hover:border-primary/45"}`}>{category.title}</button>)}
        </div>

        <div
          tabIndex={0}
          onKeyDown={(event) => { if (event.key === "ArrowLeft") showPrevious(); if (event.key === "ArrowRight") showNext(); }}
          onPointerDown={(event) => setPointerStart(event.clientX)}
          onPointerUp={(event) => { if (pointerStart === null) return; const distance = event.clientX - pointerStart; if (distance > 60) showPrevious(); if (distance < -60) showNext(); setPointerStart(null); }}
          className="menu-board relative overflow-hidden rounded-card bg-[radial-gradient(circle_at_80%_10%,#9b302c_0%,#7e211f_42%,#641817_100%)] text-white shadow-[0_28px_80px_rgba(63,17,15,.25)] outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
          aria-label={`${activeCategory.title}. Gunakan tombol panah kiri dan kanan untuk mengganti kategori.`}
        >
          <div key={activeCategory.id} className="menu-enter min-h-[680px] p-6 sm:p-9 md:min-h-[720px] md:p-12 lg:p-16">
            <header className="border-b border-white/75 pb-5"><p className="text-3xl font-extrabold leading-none tracking-[-.04em] md:text-5xl">LYON’S</p><h3 className="mt-2 text-3xl font-light leading-none md:text-5xl"><strong className="font-bold">{activeCategory.title.split(" ")[0]}</strong>{activeCategory.title.includes(" ") ? ` ${activeCategory.title.split(" ").slice(1).join(" ")}` : ""}</h3><p className="mt-3 text-xs uppercase tracking-[.14em] text-white/55">{activeCategory.subtitle}</p></header>

            <div className="mt-9 grid gap-x-12 gap-y-4 md:grid-cols-2 md:gap-y-5">
              {activeCategory.items.map((item) => <article key={item.name} className="grid grid-cols-[1fr_auto] gap-x-5"><div><h4 className="text-lg leading-tight md:text-xl">{item.name}{item.featured && <span className="ml-2 text-[9px] font-bold uppercase tracking-[.1em] text-[#efc58f]">Favorit</span>}</h4><p className="mt-1 text-[11px] leading-4 text-white/65 md:text-xs">{item.description}</p></div><span className="pt-0.5 text-sm font-medium md:text-base">{item.price.replaceAll("Rp", "")}</span></article>)}
            </div>

            <div className="absolute inset-x-6 bottom-5 border-b border-white/75 pb-3 sm:inset-x-9 md:inset-x-12 lg:inset-x-16"><p className="text-[9px] leading-3 text-white/70 md:text-[10px]">ADD-ON · Oat milk +7 · Extra shot +5 · Ice cream +5 · Extra flavour +5 · Large cup +7</p></div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2" aria-label={`Halaman ${activeIndex + 1} dari ${menuCategories.length}`}>{menuCategories.map((category, index) => <button key={category.id} type="button" onClick={() => setActiveIndex(index)} aria-label={`Buka ${category.title}`} className={`h-1.5 cursor-pointer rounded-full transition-all ${index === activeIndex ? "w-9 bg-accent" : "w-2 bg-primary/20"}`} />)}</div>
      </Container>
    </section>
  );
}
