
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X, User, GraduationCap, Rss } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "#home" },
    { name: "A propos", href: "#about", icon: <User size={16} className="mr-1" /> },
    { name: "Compétences", href: "#skills" },
    { name: "Expérience", href: "#parcours", icon: <GraduationCap size={16} className="mr-1" /> },
    { name: "Projets", href: "#projects" },
    { name: "Veille", href: "#veille", icon: <Rss size={16} className="mr-1" /> },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "py-3 glass" : "py-5 bg-transparent"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            className="font-display text-xl font-bold tracking-tight transition-opacity hover:opacity-80"
          >
            <span className="text-primary">Younes</span> El Mourabit
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 text-sm font-medium flex items-center"
              >
                {link.icon && link.icon}
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav 
        className={cn(
          "fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/95 backdrop-blur-lg transition-transform duration-300 md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button 
          className="absolute top-5 right-5 p-2 text-foreground"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-200 text-xl font-medium flex items-center"
              onClick={() => setIsOpen(false)}
            >
              {link.icon && link.icon}
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
