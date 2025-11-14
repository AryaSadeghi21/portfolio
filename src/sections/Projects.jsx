import React from "react";
import { ProjectCard } from "../components/ProjectCard";
const projects = [
  {
    title: "NBA Draft Optimizer",
    description: "Predictive tool using Monte Carlo simulation",
    img: "assets/nba.webp",
    link: "https://github.com/AryaSadeghi21/nba-draft-visualizer",
    details: [
      "Developed a full-stack system for fantasy basketball draft optimization, combining applied machine learning with interactive front-end visualization.",
      "Built predictive models (linear regression, ridge regression, random forest, histogram gradient boosting) to estimate player fantasy performance, incorporating uncertainty quantification via Monte Carlo simulations.",
      "Engineered data pipelines with Python (pandas, NumPy, scikit-learn) for ingestion, cleaning, feature generation, and statistical evaluation (MAE, RMSE, R²).",
      "Implemented an algorithmic draft engine to recommend optimal picks under dynamic constraints (team needs, positional scarcity, and projected variance).",
      "Integrated results into a SwiftUI mobile application with modern UI design, leveraging state management, bindings, and environment objects for interactive draft experiences.",
      "Employed Git/GitHub for version control and applied Agile practices (tickets, Kanban, iteration cycles) to structure development.",
      "This project demonstrates end-to-end skills in machine learning, statistical modeling, probabilistic simulation, algorithm design, and iOS development, showcasing the ability to translate advanced analytics into a polished user-facing product.",
    ],
  },
  {
    title: "Syllabus Parser",
    description: "Turns syllabus PDFs into calendar events",
    img: "assets/syllabus-parser.webp",
    link: "https://github.com/AryaSadeghi21/syllabus-parser",
    details: [
      "Applied Natural Language Processing (NLP) techniques via LLMs to extract structured data from unstructured syllabus PDFs.",
      "Built a FastAPI backend for document ingestion and preprocessing, with a JavaScript frontend supporting drag-and-drop uploads and real-time progress tracking.",
      "Orchestrated workflows in n8n, integrating LLM output parsing, JSON transformations, and external APIs.",
      "Automated scheduling with the Google Calendar API, converting assignments, quizzes, and exams into events with deadlines.",
      "Demonstrated skills in API development, cloud integrations, workflow automation, and prompt engineering.",
      "Impact: Eliminates manual syllabus parsing and event entry, showing how AI + automation can streamline real-world processes.",
    ],
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
