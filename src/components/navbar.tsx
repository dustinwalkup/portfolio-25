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

  // pick one of the three color classes by index
  const colorClasses = ["text-primary", "text-secondary", "text-tertiary"];

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-custom-background/30 backdrop-blur-xl" : "bg-tranparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold tracking-tight">
            <h1>
              <span className="hero-title psychedelic-text">Dustin</span>
              <span className="hero-title text-secondary">Walkup</span>
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
              className={cn(
                "transform text-sm font-medium transition-all duration-300 ease-in-out",
                index % 3 === 0
                  ? "text-primary"
                  : index % 3 === 1
                    ? "text-secondary"
                    : "text-tertiary",
                "hover:text-tertiary hover:scale-110 hover:[text-shadow:0_0_10px_rgba(255,255,0,0.8)]",
              )}
            >
              {item.name}
            </button>
          ))}
        </nav>
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="shadow-glow-fuchsia from-primary to-secondary rounded-full bg-gradient-to-r md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
                className={cn(
                  "block w-full py-2 text-base font-medium transition-colors",
                  "[text-shadow:0_0_5px_currentColor]",
                  colorClasses[index % colorClasses.length],
                )}
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
