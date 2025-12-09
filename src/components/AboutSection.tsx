export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/50 relative">
      <div className="absolute inset-0 pattern-bg opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block px-4 py-2 bg-primary/20 rounded-full text-primary text-sm font-medium tracking-wide uppercase mb-4">
            About Us
          </div>
          
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-medium">
            <em>
              MOCRISIS provides a captivating Model UN experience suitable for any skill level. Unlike most conferences, it is{" "}
              <span className="underline decoration-2 underline-offset-4 decoration-primary">
                entirely composed of crisis committees
              </span>{" "}
              - creative, high stakes, and the perfect opportunity to learn and improve debate and problem-solving abilities.
            </em>
          </p>

          <p className="text-lg text-foreground/80 leading-relaxed">
            With the conference in its third installment, the MPC Model UN team is ready to bring you a thrilling crisis experience you will not soon forget.
          </p>

          <p className="text-lg text-foreground/80 leading-relaxed">
            MOCRISIS 2025 will be taking place on{" "}
            <span className="underline decoration-2 underline-offset-4 font-semibold">December 6th</span> at{" "}
            <span className="underline decoration-2 underline-offset-4 font-semibold">Monarch Park Collegiate Institute</span>.
          </p>

          <div className="pt-8">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeAS7zID_GHOC0Y9fYauf-F8e1EbA-sAuFnry13TMS_3cNuzA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-primary"
            >
              Join Our Waitlist!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
