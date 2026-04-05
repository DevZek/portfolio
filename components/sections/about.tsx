import SectionLabel from "@/components/ui/SectionLabel";
import Container from "../ui/Container";

export default function About() {
  return (
    <section id="about" className="border-t border-zinc-800 py-28">
      <Container>
        <SectionLabel number="01" title="About" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="">
            <h2 className="font-display text-5xl font-extrabold tracking-tight leading-none mb-6">
              I build things that{" "}
              <em className="not-italic text-cyan-400">work.</em>
            </h2>
            <p className="text-zinc-500 leading-relaxed mb-4">
              I'm a developer based near Gent with a passion for building clean,
              reliable software whether that's a polished frontend, a solid
              backend, or the infrastructure that ties it all together.
            </p>
            <p className="text-zinc-500 leading-relaxed mb-8">
              I'm drawn to full stack and backend work. When I'm not coding I'm exploring new
              tools, breaking things on purpose, figuring out how to fix
              them, reading a book or at the gym.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 text-sm text-zinc-200 hover:border-green-400 hover:text-green-400 transition-all duration-200"
            >
              Let's work together →
            </a>
          </div>

          <div className="reveal relative aspect-3/4 max-h-96">
            <div className="w-full h-full bg-zinc-900 border border-zinc-800 flex flex-col items-center justify-center gap-3 text-zinc-600 text-xs tracking-widest uppercase">
              <span className="text-4xl opacity-30">◻</span>
              <span>Your Photo</span>
            </div>
            {/* Offset border accent */}
            <div className="absolute inset-0 translate-x-3 -translate-y-3 border border-green-400 opacity-20 -z-10" />
          </div>
        </div>
      </Container>
    </section>
  );
}
