import Head from "next/head";
import { MainLayout } from "@/components/layout/MainLayout";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { StorySection } from "@/components/sections/StorySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { siteConfig } from "@/config/site";
import { business } from "@/data/business";

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  const socialImage = siteUrl ? `${siteUrl}${siteConfig.images.hero}` : undefined;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: "LYON’S Café & Co-Working Space",
    description: siteConfig.description,
    ...(siteUrl ? { url: siteUrl, image: socialImage } : {}),
    telephone: "+62 822-8998-7300",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sleman",
      addressRegion: "Daerah Istimewa Yogyakarta",
      addressCountry: "ID",
    },
    openingHoursSpecification: [{
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    }],
    hasMap: business.mapsUrl,
  };

  return (
    <>
      <Head>
        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />
        <meta name="keywords" content={siteConfig.keywords.join(", ")} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="theme-color" content="#351713" />
        {siteUrl && <link rel="canonical" href={siteUrl} />}
        <meta property="og:title" content={siteConfig.title} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:site_name" content="LYON’S Café & Co-Working Space" />
        {siteUrl && <meta property="og:url" content={siteUrl} />}
        {socialImage && <meta property="og:image" content={socialImage} />}
        {socialImage && <meta property="og:image:alt" content="Suasana LYON’S Café & Co-Working Space di Sleman" />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteConfig.title} />
        <meta name="twitter:description" content={siteConfig.description} />
        {socialImage && <meta name="twitter:image" content={socialImage} />}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>
      <MainLayout>
        <HeroSection />
        <StorySection />
        <ExperienceSection />
        <MenuSection />
        <GallerySection />
        <TestimonialsSection />
        <LocationSection />
      </MainLayout>
    </>
  );
}
