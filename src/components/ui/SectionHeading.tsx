type Props = { eyebrow?: string; title: string; centered?: boolean; className?: string };

export function SectionHeading({ eyebrow, title, centered = false, className = "" }: Props) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {eyebrow && <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>}
      <h2 className="font-heading text-4xl font-medium leading-tight text-primary md:text-5xl">{title}</h2>
      {centered && <span className="mx-auto mt-5 block h-px w-20 bg-accent" aria-hidden="true" />}
    </div>
  );
}
