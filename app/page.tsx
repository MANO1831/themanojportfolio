import AboutMe from "./components/about-me";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Works } from "./components/Works";
import { Contact } from "./components/Contact";
import { CommunityFooter } from "./components/CommunityFooter";
import { Expertise } from "./components/Expertise";

export default function Home() {
  return (
    <div className="portfolio-shell">
      <Header />
      <main className="page-content">
        <Hero />
        <AboutMe />
        <Expertise 
        />
        <Experience />
        <Works />
        <Contact />
      </main>
      <CommunityFooter />
    </div>
  );
}
