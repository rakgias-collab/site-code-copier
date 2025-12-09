import { Mail, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border-2 border-foreground/60 flex items-center justify-center">
              <span className="text-foreground font-display text-lg font-bold">M</span>
            </div>
            <div>
              <p className="font-display font-semibold text-foreground">MOCRISIS 2025</p>
              <p className="text-sm text-foreground/60">© {new Date().getFullYear()} All rights reserved</p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:info@mocrisis.ca"
              className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
            >
              <Mail size={18} />
              <span className="text-sm">info@mocrisis.ca</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-foreground/60 hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-foreground/60 hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
