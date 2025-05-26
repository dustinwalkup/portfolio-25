import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PROJECTS = [
  {
    title: "Echo AI",
    description:
      "A headless mock marketing site built with Sveltekit and Prismic CMS. Leveraging hybrid rendering (SSG/ISR), Tailwind CSS and built-in SEO optimizations, it delivers fast, responsive content that editors can update instantly.",
    image: "/images/echoai.png",
    tags: ["SvelteKit", "TailwindCSS", "Prismic", "GSAP"],
    demoUrl: "https://echo-ai-git-main-dustin-walkups-projects.vercel.app/",
    repoUrl: "https://github.com/dustinwalkup/echo.ai",
  },
  {
    title: "movieapp",
    description:
      "A Next.js/TypeScript full-stack application that helps users discover where to stream movies with a fast, responsive interface to search, filter, and save titles across popular platforms. Built with server actions, TMDB integration, and Clerk authentication, it supports personalized watchlists and real-time availability updates.",
    image: "/images/movieapp.png",
    tags: ["Nextj", "TailwindCSS", "Drizzle", "PostgreSQL"],
    demoUrl: "https://movie-app-lime-five.vercel.app/",
    repoUrl: "https://github.com/dustinwalkup/movie-app",
  },
  {
    title: "Hoador",
    description:
      "A full-stack Next.js/TypeScript application using Drizzle ORM and Postgres that enables users to list, rent, and manage tools through a secure, responsive interface. Features include role-based dashboards, real-time messaging, and scheduling to support seamless peer-to-peer rentals across web and mobile.",
    image: "/images/hoador.png",
    tags: ["TypeScript", "Next.js", "Clerk", "Stripe"],
    demoUrl: "https://hoador-web.vercel.app/",
    repoUrl: null,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-custom-background/20 relative py-24 backdrop-blur-md md:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2
              className="section-title text-primary text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
              style={{ textShadow: "0 0 5px rgba(255,0,255,0.3)" }}
            >
              My Projects
            </h2>
            <p className="text-secondary mt-4">
              A selection of my creative work and personal projects
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project, index) => (
              <Card
                key={index}
                className="psychedelic-card z-10 flex grow overflow-hidden transition-all hover:scale-105"
                style={{
                  transform: `rotate(${index % 2 === 0 ? "2" : "-2"}deg)`,
                }}
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                    style={{
                      filter: "hue-rotate(45deg) saturate(2)",
                    }}
                  />
                </div>
                <CardHeader className="flex flex-1 flex-col">
                  <CardTitle
                    className="section-title text-primary"
                    style={{ textShadow: "0 0 5px rgba(255,0,255,0.3)" }}
                  >
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-tertiary flex flex-1 flex-col">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tag}
                      className="border-0 text-xs"
                      style={{
                        background:
                          tagIndex % 3 === 0
                            ? "rgba(255,0,255,0.3)"
                            : tagIndex % 3 === 1
                              ? "rgba(0,255,255,0.3)"
                              : "rgba(255,255,0,0.3)",
                        color:
                          tagIndex % 3 === 0
                            ? "#FF00FF"
                            : tagIndex % 3 === 1
                              ? "#00FFFF"
                              : "#FFFF00",
                        boxShadow: `0 0 10px ${
                          tagIndex % 3 === 0
                            ? "rgba(255,0,255,0.5)"
                            : tagIndex % 3 === 1
                              ? "rgba(0,255,255,0.5)"
                              : "rgba(255,255,0,0.5)"
                        }`,
                        backdropFilter: "blur(5px)",
                      }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </CardContent>
                <CardFooter className="flex flex-col justify-between">
                  <div className="flex w-full items-center justify-between">
                    {!project.repoUrl && (
                      <span className="text-secondary text-xs">
                        Private repo — contact for access.
                      </span>
                    )}
                    {project.repoUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-primary text-primary hover:text-secondary hover:bg-primary/20"
                        style={{ boxShadow: "0 0 10px rgba(255,0,255,0.5)" }}
                      >
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demoUrl && (
                      <Button
                        size="sm"
                        asChild
                        className="from-secondary to-tertiary hover:from-tertiary hover:to-secondary bg-linear-to-r text-black"
                        style={{ boxShadow: "0 0 10px rgba(0,255,255,0.5)" }}
                      >
                        <Link
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="glow-border hover:bg-tertiary/20 border-tertiary text-tertiary hover:text-secondary"
            >
              <a
                href="https://github.com/dustinwalkup"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                See more projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="bg-tertiary absolute bottom-1/4 left-1/4 h-60 w-60 rounded-full opacity-10 blur-3xl"></div>
      <div className="bg-primary absolute top-1/4 right-1/4 h-60 w-60 rounded-full opacity-10 blur-3xl"></div>
    </section>
  );
}
