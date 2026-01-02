import React from "react";
import { ProjectCard } from "../components/ProjectCard";
const projects = [
  
  {
    title: "Clinical Decision-Support Multi-Agent System",
    description: "Clinical decision-support tool powered by a safe, multi-agent LLM pipeline",
    img: "assets/heidi.webp",
    link: "https://github.com/AryaSadeghi21/heidiFinal",
    details: [
  "Designed a five-agent LLM pipeline that separates normalization, medication expansion, guideline filtering, contraindication checks, and citation generation.",
  "Enforced strict JSON-schema validation and rule-based gating against CDC, NICE, and ADA clinical guidelines to prevent unsafe or hallucinated outputs.",
  "Developed a FastAPI backend orchestrating agent-to-agent routing with deterministic control flow and robust input/output validation layers.",
  "Built a React + TypeScript frontend that displays recommendations, contraindications, and citations in a clean, real-time interface.",
  "Deployed the system on AWS EC2 using Docker for reproducible environments and low-latency inference.",
  "Impact: Demonstrates how multi-agent architectures, validation layers, and guideline gating can turn LLMs into reliable, safety-oriented clinical tools."
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
];

const Projects = () => {
  return (
    <section id="projects" className="c-space section-spacing pt-0">
      <h2 className="text-heading">Projects</h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-4 sm:gap-6 lg:gap-4 md:grid-cols-1 lg:grid-cols-2 items-start">



          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
