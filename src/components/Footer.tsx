import { Brain, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-width">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-xl font-heading font-bold"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <Brain className="w-8 h-8 text-primary" />
            <span>Rida Tanveer</span>
          </a>

          {/* Tagline */}
          <p className="text-background/70 text-center max-w-md">
            Building intelligent systems that see, understand, and decide.
          </p>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-background/20" />

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-background/60">
            <span>© {currentYear} Rida Tanveer | AI Engineer</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-400 fill-red-400" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
