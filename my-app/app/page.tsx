import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import Navbar from "@/components/sections/navbar";
import Projects from "@/components/sections/project";
import Skills from "@/components/sections/skill";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
    </main>
  )
}