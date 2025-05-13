"use client";

import { useEffect, useState } from "react";
import { ArrowDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAME = "Dustin Walkup";
const WEB_DEVELOPER = "Web Developer";

export default function Hero() {
  const [rotation, setRotation] = useState(0);
  const [letterSpacing, setLetterSpacing] = useState(0);

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 50);

    const letterSpacingInterval = setInterval(() => {
      setLetterSpacing((prev) => {
        const newValue = prev + 0.001;
        return newValue > 0.1 ? 0 : newValue;
      });
    }, 50);

    return () => {
      clearInterval(rotationInterval);
      clearInterval(letterSpacingInterval);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
    >
      <div className="relative z-10 container flex flex-col items-center justify-center gap-8 px-4 text-center md:px-6">
        <div className="space-y-6">
          <div className="relative">
            <h1 className="hero-title text-6xl font-bold tracking-wider sm:text-7xl md:text-8xl lg:text-9xl">
              <span className="distort-text drop-shadow-glow from-primary via-secondary to-tertiary block bg-gradient-to-r bg-clip-text text-transparent">
                {NAME}
              </span>
            </h1>

            {/* Decorative elements */}
            <div className="bg-primary absolute -top-4 -left-4 h-8 w-8 rounded-full opacity-70 blur-md"></div>
            <div className="bg-secondary absolute -right-4 -bottom-4 h-8 w-8 rounded-full opacity-70 blur-md"></div>
          </div>

          <p
            className={cn(
              "hero-subtitle mx-auto max-w-[700px] text-xl text-white md:text-2xl",
              "l transition-all duration-500",
            )}
            style={{ letterSpacing: `${letterSpacing}em` }}
          >
            {WEB_DEVELOPER}
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 animate-bounce">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "rounded-full text-white hover:bg-[#00FFFF]/20",
                "shadow-glow-cyan transition-transform duration-100",
              )}
              onClick={scrollToAbout}
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: "transform 0.1s linear",
              }}
            >
              <ArrowDownIcon className="h-6 w-6" />
              <span className="sr-only">Scroll down</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
