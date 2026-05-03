import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import helpfyLogo from "@/assets/helpfy-logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#benefits", label: "Benefícios" },
    { href: "#how-it-works", label: "Como Funciona" },
    { href: "#differentials", label: "Diferenciais" },
    // { href: "#testimonials", label: "Depoimentos" },
    { href: "#plans", label: "Planos" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 shadow-lg backdrop-blur-md py-1"
          : "bg-transparent py-2",
      )}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src={helpfyLogo}
              alt="Helpfy"
              className="h-20 md:h-24 lg:h-28 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-navy/70 hover:text-coral font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <a href="#download">
              <Button className="btn-coral">Baixe o App</Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-navy p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden",
            mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="p-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-navy/70 hover:text-coral font-medium py-3 px-4 rounded-lg hover:bg-coral/5 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <hr className="my-2 border-navy/10" />
            <a href="#download" onClick={() => setMobileMenuOpen(false)}>
              <Button className="btn-coral mt-2 w-full">Baixe o App</Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
