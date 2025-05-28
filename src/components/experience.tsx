import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const EXPERIENCE = [
  {
    title: "Developer",
    company: "Level Five Solutions",
    period: "2023 - Present",
    description:
      "Developer at a digital agency delivering CMS-driven websites for clients ranging from small businesses to enterprise organizations.",
    responsibilities: [
      "Built and maintained client websites using Next.js, React, and TypeScript",
      "Integrated headless CMS platforms like Contentful and Prismic",
      "Collaborated with cross-functional teams to deliver tailored digital experiences",
      "Applied performance and accessibility best practices across client projects",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "Django",
      "Contentful",
      "Prismic",
    ],
  },
  {
    title: "Developer",
    company: "Yellow Freight",
    period: "2022 - 2023",
    description:
      "Front-end developer on an enterprise-level shipping platform, building and integrating features for the myYellow.com customer portal.",
    responsibilities: [
      "Developed scalable UI features in React with TypeScript for the Yellow web app",
      "Integrated frontend components with GraphQL-based microservices",
      "Authored unit tests using Jest and React Testing Library",
      "Designed a reusable autocomplete input used across the application",
    ],
    technologies: [
      "React",
      "Redux",
      "Typescript",
      "GraphQL",
      "Jest",
      "React Testing Library",
    ],
  },
  {
    title: "Assistant Branch Manager / Inside Sales",
    company: "BPS Supply Group",
    period: "2014 - 2022",
    description:
      "Sales and branch operations manager for an industrial distribution company specializing in pipe, valves, and fittings.",
    responsibilities: [
      "Led a cross-functional team of sales and warehouse associates",
      "Trained 15+ employees in sales strategy and daily operations",
      "Managed customer accounts, sourcing and fulfilling product orders",
      "Restructured sales and ops processes to grow branch revenue by 15%",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-[#280040]/70 py-24 backdrop-blur-md md:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="section-title text-primary text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Work Experience
            </h2>
            <p className="mt-4 text-white">
              My professional journey and career highlights
            </p>
          </div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <Card
                key={index}
                className={cn(
                  "psychedelic-card overflow-hidden transition-all hover:scale-[1.02]",
                  index % 2 === 0 ? "rotate-1" : "-rotate-1",
                )}
              >
                <CardHeader>
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                      <CardTitle className="section-title text-primary">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-base text-white">
                        {exp.company} | {exp.period}
                      </CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies?.map((tech, techIndex) => (
                        <Badge
                          key={tech}
                          className={cn(
                            "border-0 text-xs text-white backdrop-blur-md",
                            techIndex % 3 === 0
                              ? "shadow-glow-fuchsia bg-fuchsia-500/30"
                              : techIndex % 3 === 1
                                ? "shadow-glow-cyan bg-cyan-500/30"
                                : "shadow-glow-yellow bg-yellow-500/30",
                          )}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-white">{exp.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-tertiary font-medium">
                      Key Responsibilities:
                    </h4>
                    <ul className="ml-6 list-disc space-y-1 text-sm text-white">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-1/3 -left-20 h-80 w-80 rounded-full bg-[#AA00FF] opacity-10 blur-3xl"></div>
      <div className="bg-secondary absolute -right-20 bottom-1/3 h-80 w-80 rounded-full opacity-10 blur-3xl"></div>
    </section>
  );
}
