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
        scrolled ? "backdrop-blur-xl bg-[#280064]/30" : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold tracking-tight">
            <span className="hero-title psychedelic-text">Dustin</span>
            <span className="hero-title text-[#00FFFF]">Walkup</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex md:gap-x-8">
          {navItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium transition-colors hover:text-[#FFFF00]"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              style={{
                color:
                  hoverIndex === index
                    ? "#FFFF00"
                    : index % 3 === 0
                    ? "#FF00FF"
                    : index % 3 === 1
                    ? "#00FFFF"
                    : "#FFFF00",
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
            background: "linear-gradient(45deg, #FF00FF, #00FFFF)",
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
          <div className="space-y-1 px-4 pb-3 pt-2 backdrop-blur-xl bg-[#280064]/70">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full py-2 text-base font-medium transition-colors"
                style={{
                  color:
                    index % 3 === 0
                      ? "#FF00FF"
                      : index % 3 === 1
                      ? "#00FFFF"
                      : "#FFFF00",
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
