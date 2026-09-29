"use client";

import { useRef } from "react";
import { ArrowUpRight, X } from "lucide-react";

type Project = {
  id: string;
  title: string;
  image: string;
  href: string;
};

export function AllProjectsDialog({ projects }: { projects: Project[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        className="projects-link"
        type="button"
        aria-haspopup="dialog"
        onClick={() => dialogRef.current?.showModal()}
      >
        See all projects
      </button>
      <dialog
        ref={dialogRef}
        className="projects-dialog"
        aria-labelledby="projects-dialog-title"
        onKeyDown={(event) => {
          if (event.key === "Escape") dialogRef.current?.close();
        }}
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current.close();
        }}
      >
        <div className="projects-dialog-header">
          <div>
            <p className="projects-dialog-kicker">Behance portfolio</p>
            <h2 id="projects-dialog-title">All projects</h2>
          </div>
          <button
            className="projects-dialog-close"
            type="button"
            aria-label="Close projects"
            onClick={() => dialogRef.current?.close()}
          >
            <X aria-hidden="true" size={21} />
          </button>
        </div>
        <div className="projects-dialog-grid">
          {projects.map((project, index) => (
            <a
              className="projects-dialog-card"
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noreferrer"
            >
              <span className="projects-dialog-image">
                <img src={project.image} alt="" loading={index < 3 ? "eager" : "lazy"} />
              </span>
              <span className="projects-dialog-card-footer">
                <span>{project.title}</span>
                <ArrowUpRight aria-hidden="true" size={18} />
              </span>
            </a>
          ))}
        </div>
      </dialog>
    </>
  );
}