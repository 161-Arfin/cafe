import type { Testimonial } from "@/types";

export const googleRating = { score: "4,8", reviewCount: "450+", sourceLabel: "ulasan Google" } as const;

export const testimonials: Testimonial[] = [
  { title: "Nyaman untuk WFC", summary: "Suasana modern dan tempat duduk yang nyaman membuat sesi kerja terasa lebih fokus." },
  { title: "Wi-Fi yang mendukung", summary: "Koneksi internet menjadi salah satu alasan LYON’S cocok untuk belajar dan bekerja." },
  { title: "Bisa datang kapan saja", summary: "Operasional 24 jam memberi ruang untuk produktif tanpa dibatasi jadwal." },
];
