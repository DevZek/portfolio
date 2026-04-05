import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-32 overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      <Container className="relative flex flex-col">
        <h1
          className="font-display text-[clamp(2.5rem,6vw,7rem)] font-extrabold leading-none tracking-tighter mb-8"
          style={{ animation: "fadeUp 0.8s 0.1s ease both" }}
        >
          Van Daele
          <br />
          <span className="text-green-400">Ezekiël</span>
        </h1>

        <p
          className="text-zinc-500 text-base leading-relaxed max-w-lg mb-12"
          style={{ animation: "fadeUp 0.8s 0.2s ease both" }}
        >
          Software developer building clean, fast, and memorable experiences.
          Focused on back-end and full-stack development.
        </p>

        <div
          className="flex gap-4 flex-wrap"
          style={{ animation: "fadeUp 0.8s 0.3s ease both" }}
        >
          <a
            href="#projects" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-green-400 text-black text-sm font-medium tracking-wide hover:bg-green-300 transition-all duration-200 hover:-translate-y-0.5"
          >
            View my work →
          </a>
           <a
            href="/CV_EVD.pdf" download
            className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-400 text-black text-sm font-medium tracking-wide hover:bg-cyan-300 transition-all duration-200 hover:-translate-y-0.5"
          >
            Download CV →
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 border border-zinc-700 text-sm text-zinc-200 hover:border-green-400 hover:text-green-400 transition-all duration-200 hover:-translate-y-0.5"
          >
            Get in touch
          </a>
        </div>
      </Container>
    </section>
  );
}
