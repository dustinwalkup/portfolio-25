import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Contentful",
  "Prismic",
  "Headless CMS",
  "Python",
  "Django",
  "Tailwind CSS",
  "HTML/CSS",
  "Git",
  "UI/UX Design",
  "Responsive Design",
  "RESTful APIs",
  "GraphQL",
];

const bgClasses = [
  "shadow-glow-fuchsia bg-fuchsia-500/30",
  "shadow-glow-cyan    bg-cyan-500/30",
  "shadow-glow-yellow  bg-yellow-500/30",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#280040]/70 py-24 backdrop-blur-md md:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="section-title text-primary text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <p className="mt-4 text-white">
              Get to know my background and skills
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="section-title text-primary text-2xl font-bold">
                My Story
              </h3>
              <div className="space-y-4 text-white">
                <p>
                  I&apos;m a passionate web developer with a keen eye for design
                  and a love for creating innovative user experiences. Currently
                  working at a creative agency, I collaborate with talented
                  designers and developers to build cutting-edge digital
                  solutions.
                </p>
                <p>
                  My journey in web development began over 5 years ago, and
                  I&apos;ve since honed my skills in frontend technologies. I
                  believe in pushing boundaries, creating websites that not only
                  look extraordinary but also perform exceptionally well.
                </p>
                <p>
                  When I&apos;m not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or
                  experimenting with digital art and creative visuals.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="section-title text-secondary text-2xl font-bold">
                Skills & Expertise
              </h3>
              <Card className="psychedelic-card overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => {
                      const randomBg =
                        bgClasses[Math.floor(Math.random() * bgClasses.length)];
                      return (
                        <Badge
                          key={skill}
                          className={cn(
                            "hover:bg-primary border-0 text-sm text-white backdrop-blur-md transition-colors duration-300 ease-in-out",
                            randomBg,
                          )}
                        >
                          {skill}
                        </Badge>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8 space-y-4">
                <h4 className="section-title text-tertiary text-xl font-semibold">
                  Education
                </h4>
                <div className="psychedelic-card space-y-2 p-4">
                  <p className="text-primary font-medium">
                    Bachelor of Science in Computer Science
                  </p>
                  <p className="text-sm text-white">
                    Oregon State University, 2019-2022
                  </p>
                </div>
                <div className="psychedelic-card space-y-2 p-4">
                  <p className="text-primary font-medium">
                    Bachelor of Science in Chemistry
                  </p>
                  <p className="text-sm text-white">
                    California State University Bakersfield, 2008-2012
                  </p>
                </div>

                <h4 className="section-title text-tertiary text-xl font-semibold">
                  Certifications
                </h4>
                <div className="psychedelic-card space-y-2 p-4">
                  <p className="text-primary font-medium">
                    Adobe Experience Manager Sites Developer Professional
                  </p>
                  <p className="text-sm text-white">
                    Adobe, 2025 (in progress)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="bg-primary absolute top-1/4 -left-20 h-40 w-40 rounded-full opacity-20 blur-3xl"></div>
      <div className="bg-secondary absolute -right-20 bottom-1/4 h-40 w-40 rounded-full opacity-20 blur-3xl"></div>
    </section>
  );
}
