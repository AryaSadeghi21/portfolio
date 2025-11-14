import { projects } from "@/data/projects";

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return <div className="p-8">Project not found</div>;

  return (
    <div className="max-w-3xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg mb-6">{project.description}</p>

      <img
        src={`/${project.img}`}
        alt={project.title}
        className="rounded-lg mb-6 max-h-96 object-contain"
      />

      <h2 className="text-xl font-semibold mb-2">Details</h2>
      <p className="whitespace-pre-line text-neutral-700 dark:text-neutral-300">
        {project.details}
      </p>
    </div>
  );
}
