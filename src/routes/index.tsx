import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Expertise } from "@/components/portfolio/Expertise";
import { Experience } from "@/components/portfolio/Experience";
import { Works } from "@/components/portfolio/Works";
import { Contact } from "@/components/portfolio/Contact";
import { CtaBanner } from "@/components/portfolio/CtaBanner";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manoj M — Graphic & UI/UX Designer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Manoj M, a visual communication designer crafting branding, UI/UX and marketing design that communicates clearly.",
      },
      { property: "og:title", content: "Manoj M — Graphic & UI/UX Designer Portfolio" },
      {
        property: "og:description",
        content:
          "Branding, UI/UX and digital design work by Manoj M — visual systems built around clarity and craft.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Works />
        <Contact />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
