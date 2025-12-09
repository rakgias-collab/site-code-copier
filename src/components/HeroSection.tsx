import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-gradient laurel-pattern overflow-hidden pt-20"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 pattern-bg opacity-30" />
      
      {/* Laurel decorations */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 text-foreground/10 text-[200px] font-display hidden xl:block">
        ❧
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 text-foreground/10 text-[200px] font-display hidden xl:block transform scale-x-[-1]">
        ❧
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main Title */}
        <div className="space-y-8 max-w-5xl mx-auto">
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight animate-fade-in-up">
            Welcome to
            <br />
            <span className="tracking-wider">MOCRISIS 2025!</span>
          </h1>

          {/* Taglines */}
          <div className="space-y-4 opacity-0 animate-fade-in-up animation-delay-200" style={{ animationFillMode: 'forwards' }}>
            <p className="text-xl md:text-2xl text-foreground/90 font-display italic">
              Debate The World of <span className="underline decoration-2 underline-offset-4">Today</span>
            </p>
            <p className="text-xl md:text-2xl text-foreground/90 font-display italic">
              Lead The World of <span className="underline decoration-2 underline-offset-4">Tomorrow</span>
            </p>
          </div>

          {/* Date */}
          <div className="opacity-0 animate-fade-in-up animation-delay-400" style={{ animationFillMode: 'forwards' }}>
            <p className="text-2xl md:text-3xl lg:text-4xl font-display font-bold tracking-[0.2em] text-foreground mt-12">
              DECEMBER 6TH, 2025
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 opacity-0 animate-fade-in-up animation-delay-600" style={{ animationFillMode: 'forwards' }}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeAS7zID_GHOC0Y9fYauf-F8e1EbA-sAuFnry13TMS_3cNuzA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-primary"
            >
              Join Our Waitlist!
            </a>
            <a href="#about" className="btn-hero-outline">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Registration Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-lg bg-popover text-popover-foreground border-0 shadow-2xl">
          <button
            onClick={() => setShowModal(false)}
            className="absolute right-4 top-4 text-popover-foreground/60 hover:text-popover-foreground transition-colors"
          >
            <X size={20} />
          </button>
          <DialogHeader className="text-center space-y-4 pt-4">
            <DialogTitle className="text-2xl md:text-3xl font-display font-bold text-popover-foreground">
              MOCRISIS Registration Open Now!
            </DialogTitle>
          </DialogHeader>
          <div className="text-center space-y-4 py-4">
            <p className="text-popover-foreground/80">
              <strong>Experience the thrill of crisis committees!</strong> Registration is now open for MOCRISIS 2025. Join us for an unforgettable Model UN experience.
            </p>
            <p className="text-popover-foreground/70 text-sm">
              <strong>Interested in staffing?</strong> Reach out to{" "}
              <a href="mailto:info@mocrisis.ca" className="underline hover:text-primary">
                info@mocrisis.ca
              </a>{" "}
              for available opportunities.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <a
              href="mailto:hiring@mocrisis.ca"
              className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-popover-foreground text-popover font-semibold text-sm tracking-wide uppercase transition-all hover:bg-popover-foreground/90"
            >
              For Staff
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeAS7zID_GHOC0Y9fYauf-F8e1EbA-sAuFnry13TMS_3cNuzA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-popover-foreground text-popover font-semibold text-sm tracking-wide uppercase transition-all hover:bg-popover-foreground/90"
            >
              For Delegates
            </a>
          </div>
        </DialogContent>
      </Dialog>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-foreground/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-foreground/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
