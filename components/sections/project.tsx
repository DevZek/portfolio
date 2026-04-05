import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectCard from "@/components/ui/ProjectCard";

const projects = [
  {
    number: "01",
    title: "Project One",
    description:
      "A short description of what this project does and what problem it solves.",
    tags: ["React", "TypeScript", "Node.js"],
    link: "#",
  },
  {
    number: "02",
    title: "Project Two",
    description:
      "A short description of what this project does and what problem it solves.",
    tags: ["Next.js", "Tailwind"],
    link: "#",
  },
  {
    number: "03",
    title: "Project Three",
    description:
      "A short description of what this project does and what problem it solves.",
    tags: ["JavaScript", "CSS", "API"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-zinc-800 py-28">
      <Container>
        <SectionLabel number="02" title="Projects" />

        <div className="flex items-end justify-between mb-12">
          <h2 className="font-display text-5xl font-extrabold tracking-tight">
            Selected work
          </h2>
          <span className="text-zinc-500 text-sm">
            {projects.length} projects
          </span>
        </div>

        <div className="flex flex-col border-t border-zinc-800">
          {projects.map((project) => (
            <ProjectCard key={project.number} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
