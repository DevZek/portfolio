import Container from "@/components/ui/Container"
import SectionLabel from "@/components/ui/SectionLabel"

const skills = [
  { name: "React", score: 8 },
  { name: "Next.js", score: 7 },
  { name: "TypeScript", score: 6 },
  { name: "JavaScript", score: 8 },
  { name: "Tailwind CSS", score: 9 },
  { name: "Node.js", score: 5 },
  { name: "Git", score: 7 },
  { name: "Figma", score: 6 },
  { name: "HTML", score: 10 },
  { name: "CSS", score: 9 },
  { name: "REST APIs", score: 6 },
  { name: "Framer Motion", score: 4 },
]

export default function Skills() {
  return (
    <section id="skills" className="border-t border-zinc-800 py-28">
      <Container>
        <SectionLabel number="03" title="Skills" />

        <h2 className="font-display text-5xl font-extrabold tracking-tight mb-12">
          What I work with
        </h2>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative px-4 py-3 border border-zinc-800 text-xs text-center tracking-wide overflow-hidden"
            >
              {/* Fill bar based on score */}
              <div
                className="absolute inset-0 bg-green-400 transition-all duration-500"
                style={{ width: `${skill.score * 10}%` }}
              />

              {/* Darker overlay on the unfilled part so text stays readable */}
              <div className="absolute inset-0 bg-zinc-950 opacity-60" />

              <span className="relative text-zinc-200">{skill.name}</span>

              {/* Score shown on hover */}
              <span className="absolute top-1 right-2 text-[10px] text-black font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {skill.score}/10
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}