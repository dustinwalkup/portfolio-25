import About from "@/components/about";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";

export default function Main() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />
      <main className="relative z-10"></main>
      <Hero />
      <About />
      <Projects />
    </div>
  );
}
