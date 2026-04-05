import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectCard from "@/components/ui/ProjectCard";

const projects = [
   {
    number: "01",
    title: "Portfolio",
    description: "A personal portfolio built to showcase my projects and skills...",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Resend"],
    live: "https://yoursite.vercel.app",
    github: "https://github.com/you/portfolio",
    image: "/images/portfolio.png",  
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
