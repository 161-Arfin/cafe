import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "outline" | "gold" | "text";
};

const variants = {
  primary: "bg-primary text-white hover:bg-primary-container",
  outline: "border border-white text-white hover:bg-white hover:text-primary",
  gold: "bg-accent text-white hover:bg-[#bf4825]",
  text: "border-b border-current pb-1 text-primary hover:text-accent",
};

export function Button({ children, className = "", variant = "primary", ...props }: ButtonProps) {
  const external = typeof props.href === "string" && props.href.startsWith("http");
  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-button px-6 py-3 text-sm font-semibold tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${variants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  );
}
