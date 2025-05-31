import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-primary border-t bg-[#280040]/90 py-8 backdrop-blur-xl">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="/" className="text-xl font-bold tracking-tight">
              <span className="hero-title text-primary">Dustin</span>
              <span className="hero-title text-secondary">Walkup</span>
            </Link>
            <p className="text-center text-sm text-white md:text-left">
              &copy; {new Date().getFullYear()} Dustin Walkup. All rights
              reserved.
            </p>
          </div>

          <div className="flex gap-4">
            <Link
              href="https://github.com/dustinwalkup"
              target="_blank"
              rel="noopener noreferrer"
              className="drop-shadow-glow-cyan text-secondary hover:text-yellow transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/dustinwalkup"
              target="_blank"
              rel="noopener noreferrer"
              className="drop-shadow-glow-yellow text-yellow hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
