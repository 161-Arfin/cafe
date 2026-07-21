import type { MenuItemData } from "@/types";

export function MenuItem({ name, description, price, featured }: MenuItemData) {
  return (
    <article className="group">
      <div className="mb-2 flex items-start justify-between gap-4">
        <h4 className="font-heading text-2xl leading-tight text-text transition-colors group-hover:text-accent">{name}{featured && <span className="ml-2 align-middle text-[9px] font-semibold uppercase tracking-[.12em] text-accent">Favorit</span>}</h4>
        <span className="shrink-0 rounded-full border border-current px-3 py-1 text-right text-xs font-semibold leading-relaxed text-muted">{price}</span>
      </div>
      <p className="max-w-lg text-sm italic leading-relaxed text-muted">{description}</p>
    </article>
  );
}
