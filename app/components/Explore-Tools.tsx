import {
  SiFigma,
  SiFramer,
} from "react-icons/si";
import { DiIllustrator, DiPhotoshop } from "react-icons/di";
import type { IconType } from "react-icons";

import "../styles/Explore-Tools.css";

const tools: {
  name: string;
  icon?: IconType;
  mark?: string;
  className: string;
}[] = [
  {
    name: "Adobe Photoshop",
    icon: DiPhotoshop,
    className: "photoshop",
  },
  {
    name: "Affinity",
    mark: "a",
    className: "affinity",
  },
  {
    name: "Adobe Illustrator",
    icon: DiIllustrator,
    className: "illustrator",
  },
  {
    name: "Figma",
    icon: SiFigma,
    className: "figma",
  },
  {
    name: "Framer",
    icon: SiFramer,
    className: "framer",
  },
  {
    name: "Adobe XD",
    mark: "Xd",
    className: "xd",
  },
  {
    name: "Adobe InDesign",
    mark: "Id",
    className: "indesign",
  },
];

function renderTools() {
  return tools.map((tool) => {
    const Icon = tool.icon;

    return (
      <div className="tool-item" key={tool.name}>
        <div className={`tool-icon ${tool.className}`}>
          {Icon ? <Icon aria-hidden="true" /> : tool.mark}
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

          <p className="description">
            Exploring the tools, technologies, and creative skills
            that shape my design journey.
          </p>
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