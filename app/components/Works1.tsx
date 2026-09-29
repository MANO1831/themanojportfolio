import type { Metadata } from "next";
import { Outfit, Caveat } from "next/font/google";
import { AllProjectsDialog } from "./AllProjectsDialog";
import "../styles/Works1.css";
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Creative Designs · Meaningful Experiences",
  description: "A curated collection of creative design, development, launch, and growth work.",
  openGraph: {
    title: "Creative Designs · Meaningful Experiences",
    description: "Explore recent creative work from strategy and planning through ongoing support.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const services = [
  { number: "#01", label: "Strategy & Planning" },
  { number: "#02", label: "Design & Development" },
  { number: "#03", label: "Launch & Growth" },
  { number: "#04", label: "Ongoing Support" },
];

const projects = [
  {
    id: "previous-logo-overview",
    title: "Previous Logo Overview",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/850524247893737.Y3JvcCw1NTIzLDQzMjAsMTA4MCww.jpg",
    href: "https://www.behance.net/gallery/247893737/Previous-Logo-Overview",
  },
  {
    id: "3dots-brand-identity",
    title: "3dots - BRAND IDENTITY",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/945d2c246880577.Y3JvcCw1MzY5LDQyMDAsMTE5LDA.jpg",
    href: "https://www.behance.net/gallery/246880577/3dots-BRAND-IDENTITY",
  },
  {
    id: "ambiospace-interior-design-app",
    title: "Ambiospace Interior Design Application Prototype",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/27f56b234864021.Y3JvcCwzNTA4LDI3NDQsMTMwLDA.jpg",
    href: "https://www.behance.net/gallery/234864021/Ambiospace-Interior-Deisgn-Application-Prototype",
  },
  {
    id: "fitness-app-onboarding",
    title: "Fitness Application Onboarding Screens",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/1295a6234862203.Y3JvcCwxMDMwLDgwNiwxOTYsNjEy.png",
    href: "https://www.behance.net/gallery/234862203/Fitness-Application-Onboarding-Screens",
  },
  {
    id: "branding",
    title: "Branding",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/472311234462007.Y3JvcCwyNDgwLDE5MzksMCw2NTY.jpg",
    href: "https://www.behance.net/gallery/234462007/Branding",
  },
  {
    id: "onam-festival-poster",
    title: "Onam Festival Poster",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/95ae1c234071599.Y3JvcCwzODQwLDMwMDMsMCwxMTM1OA.jpg",
    href: "https://www.behance.net/gallery/234071599/Onam-Festival-Poster",
  },
  {
    id: "product-manipulation",
    title: "Product Manipulation",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/cba861230228591.Y3JvcCwyODYyLDIyMzksODc4LDM2OA.jpg",
    href: "https://www.behance.net/gallery/230228591/Product-Manipulation",
  },
  {
    id: "cyber-security-website",
    title: "Cyber Security Website",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/f3e4df229717867.Y3JvcCwxODU0LDE0NTAsNTczLDM5OQ.jpg",
    href: "https://www.behance.net/gallery/229717867/Cyber-Security-Website",
  },
  {
    id: "landing-page-design",
    title: "Landing Page Design",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/c775ce227001913.Y3JvcCwzODQwLDMwMDMsMCww.jpg",
    href: "https://www.behance.net/gallery/227001913/Landing-Page-Design",
  },
  {
    id: "adventure-trip-website-design",
    title: "Adventure Trip Website Design",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/d0e1a8225707695.Y3JvcCwzODM1LDMwMDAsODUsMA.png",
    href: "https://www.behance.net/gallery/225707695/Adventure-Trip-Website-Design",
  },
  {
    id: "interior-design-app-ui",
    title: "Interior Design Application UI Design",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/9824f8225658937.Y3JvcCwxNDAwLDEwOTUsMCww.jpg",
    href: "https://www.behance.net/gallery/225658937/Interior-Design-Application-UI-Design",
  },
  {
    id: "interior-design-app-ux",
    title: "Interior Design Application UX Design",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/c046d5225657229.Y3JvcCwxMjIzLDk1NiwwLDA.jpg",
    href: "https://www.behance.net/gallery/225657229/Interior-Design-Application-UX-Design",
  },
];

export default function PortfolioPage() {
  return (
    <main className={`portfolio-page ${outfit.variable} ${caveat.variable}`}>
      <section className="portfolio-section" aria-labelledby="recent-work-title">
        <header className="portfolio-heading">
          <p className="portfolio-kicker">My Recent Work</p>
          <h1 id="recent-work-title">
            Creative Designs.
            <span>Meaningful Experiences.</span>
          </h1>
        </header>

        <div className="work-showcase" aria-label="Featured projects">
          {projects.map((project) => (
            <article
              key={project.id}
              className="work-panel"
            >
              <a href={project.href} target="_blank" rel="noreferrer">
                <img
                  className="work-panel-image"
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
                <span className="work-panel-title">{project.title}</span>
              </a>
            </article>
          ))}
        </div>

        <AllProjectsDialog projects={projects} />
        
        <div className="service-list" id="services">
          {services.map((service) => (
            <div className="service-item" key={service.number}>
              <p>{service.number}</p>
              <h2>{service.label}</h2>
            </div>
          ))}
        </div>
        

      </section>
    </main>
  );
}
