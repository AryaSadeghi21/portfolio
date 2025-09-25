import React from "react";
import { ProjectCard } from "../components/ProjectCard";
const projects = [
  {
    title: "NBA Draft Optimizer",
    description: "Predictive tool using Monte Carlo simulation",
    img: "assets/nba.webp",
    link: "https://github.com/arya/nba-optimizer",
  },
  {
    title: "Syllabus Parser",
    description: "Turns syllabus PDFs into calendar events",
    img: "assets/syllabus-parser.webp",
    link: "https://github.com/arya/syllabus-parser",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="c-space section-spacing pt-0">
      <h2 className="text-heading">Projects</h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:gap-1 lg:gap-100 md:grid-cols-1 lg:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
