import { useProjectContext } from "@/lib/project-context";
import { ProjectCard } from "@/components/ui/ProjectCard";

export default function ProjectsPage() {
  const { projects, setCurrentProjectById } = useProjectContext();

  return (
    <div className="flex h-full flex-col gap-4">
      <header className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-base font-semibold text-slate-50">Project Explorer</h1>
          <p className="text-sm text-slate-400">
            Browse text, image, and audio datasets across Amharic and Afaan Oromo.
          </p>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={() => setCurrentProjectById(project.id)}
          />
        ))}
      </section>
    </div>
  );
}

