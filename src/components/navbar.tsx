"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-custom-background/30 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold tracking-tight">
            <h1>
              <span className="hero-title psychedelic-text">Dustin</span>
              <span className="hero-title text-torquoise">Walkup</span>
            </h1>
          </Link>
        </div>

        <h1></h1>
        {/* Desktop navigation */}
        <nav className="hidden md:flex md:gap-x-8">
          {navItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium transition-colors"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              style={{
                color:
                  hoverIndex === index
                    ? "var(--yellow)"
                    : index % 3 === 0
                      ? "var(--pink)"
                      : index % 3 === 1
                        ? "var(--torquoise)"
                        : "var(--yellow)",
                textShadow:
                  hoverIndex === index
                    ? "0 0 10px rgba(255,255,0,0.8)"
                    : "none",
                transform: hoverIndex === index ? "scale(1.1)" : "scale(1)",
                transition: "all 0.3s ease",
              }}
            >
              {item.name}
            </button>
          ))}
        </nav>
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: "linear-gradient(45deg, var(--pink), var(--torquoise))",
            borderRadius: "50%",
            boxShadow: "0 0 10px rgba(255,0,255,0.8)",
          }}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-black" />
          ) : (
            <Menu className="h-6 w-6 text-black" />
          )}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="bg-custom-background/70 space-y-1 px-4 pt-2 pb-3 backdrop-blur-xl">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full py-2 text-base font-medium transition-colors"
                style={{
                  color:
                    index % 3 === 0
                      ? "var(--pink)"
                      : index % 3 === 1
                        ? "var(--torquoise)"
                        : "var(--yellow)",
                  textShadow: "0 0 5px currentColor",
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
