import AboutMe from "./components/about-me";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Works } from "./components/Works";
import { Contact } from "./components/Contact";
import { CommunityFooter } from "./components/CommunityFooter";
import { Expertise } from "./components/Expertise";
import Works1 from "./components/Works1";
import ExploreTools from "./components/Explore-Tools";

export default function Home() {
  return (
    <>
     <Header />
    <div className="portfolio-shell">
   
      <main className="page-content">
        <Hero />
        <ExploreTools />
        <AboutMe />
        <Expertise 
        />
        <Experience /> 
        <Works1/>
        {/* <Works /> */}
        <Contact />
      </main>
   
    </div>
       <CommunityFooter />
         </>
  );  
}
