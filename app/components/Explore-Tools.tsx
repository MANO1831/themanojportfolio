import Image from "next/image";

import "../styles/Explore-Tools.css";

const tools: {
  name: string;
  logo: string;
  className: string;
}[] = [
  {
    name: "Adobe Photoshop",
    logo: "/tool-logos/adobe-photoshop.svg",
    className: "photoshop",
  },
  {
    name: "Affinity",
    logo: "/tool-logos/affinity.svg",
    className: "affinity",
  },
  {
    name: "Adobe Illustrator",
    logo: "/tool-logos/adobe-illustrator.svg",
    className: "illustrator",
  },
  {
    name: "Figma",
    logo: "/tool-logos/figma.svg",
    className: "figma",
  },
  {
    name: "Framer",
    logo: "/tool-logos/framer.svg",
    className: "framer",
  },
  {
    name: "Adobe XD",
    logo: "/tool-logos/adobe-xd.svg",
    className: "xd",
  },
  {
    name: "Adobe InDesign",
    logo: "/tool-logos/adobe-indesign.svg",
    className: "indesign",
  },
];

function renderTools() {
  return tools.map((tool) => {
    return (
      <div className="tool-item" key={tool.name}>
        <div className={`tool-icon ${tool.className}`}>
          <Image src={tool.logo} alt="" width={60} height={60} aria-hidden="true" />
        </div>
        <span>{tool.name}</span>
      </div>
    );
  });
}

export default function Home() {
  return (
    <main className="tools-section">
      <div className="tools-container">

        {/* Heading */}
         <div className="heading-area">
          <span className="works-script">Tools I Use. Skills I Build.
</span>
        <div className="expertise-title-wrap">
          <h3 className="expertise-title">Discover the Tools</h3>
        </div>

          {/* <p className="description">
            Exploring the tools, technologies, and creative skills
            that shape my design journey.
          </p> */}
        </div>

        {/* Tools */}
        <div className="tools-list">
          <div className="tools-track">
            <div className="tools-group">{renderTools()}</div>
            <div className="tools-group" aria-hidden="true">
              {renderTools()}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}