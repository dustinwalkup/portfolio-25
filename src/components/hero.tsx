"use client";

import { useEffect, useState } from "react";
import { ArrowDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

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
              <span
                className="distort-text from-pink via-torquoise to-yellow block bg-linear-to-r bg-clip-text text-transparent"
                style={{
                  filter: "drop-shadow(0 0 5px rgba(255,0,255,0.5))",
                  textShadow: "0 0 10px rgba(255,0,255,0.3)",
                }}
              >
                {NAME}
              </span>
            </h1>

            {/* Decorative elements */}
            <div className="bg-pink absolute -top-4 -left-4 h-8 w-8 rounded-full opacity-70 blur-md"></div>
            <div className="bg-torquoise absolute -right-4 -bottom-4 h-8 w-8 rounded-full opacity-70 blur-md"></div>
          </div>

          <p
            className="hero-subtitle text-yellow mx-auto max-w-[700px] text-xl md:text-2xl"
            style={{
              textShadow: "0 0 10px rgba(255,255,0,0.8)",
              letterSpacing: `${letterSpacing}em`,
              transition: "letter-spacing 0.5s ease",
            }}
          >
            {WEB_DEVELOPER}
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 animate-bounce">
            <Button
              variant="ghost"
              size="icon"
              className="text-torquoise hover:bg-torquoise/20 rounded-full"
              onClick={scrollToAbout}
              style={{
                boxShadow:
                  "0 0 10px var(--torquoise), 0 0 20px var(--torquoise)",
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
