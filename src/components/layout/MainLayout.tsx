import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { useRevealAnimations } from "@/hooks/useRevealAnimations";

export function MainLayout({ children }: { children: ReactNode }) {
  useRevealAnimations();

  return (
    <>
      <a href="#main-content" className="fixed left-4 top-4 z-[100] -translate-y-24 bg-accent px-4 py-3 text-sm font-bold text-primary transition-transform focus:translate-y-0">Lewati ke konten utama</a>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
