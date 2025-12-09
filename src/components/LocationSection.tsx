import { MapPin } from "lucide-react";

export const LocationSection = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30 relative">
      <div className="absolute inset-0 pattern-bg opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-primary text-sm font-medium tracking-wide uppercase mb-4">
            <MapPin size={16} />
            Location
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            MOCRISIS 2025 will be located at
          </h2>
          
          <div className="space-y-2">
            <p className="text-2xl md:text-3xl font-display font-semibold text-foreground">
              Monarch Park Collegiate Institute
            </p>
            <p className="text-lg text-foreground/70">
              1 Hanson Street, Toronto, Ontario
            </p>
          </div>

          {/* Map Embed Placeholder */}
          <div className="mt-12 rounded-lg overflow-hidden border border-border/30 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.6777!2d-79.3456!3d43.6789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb7e12345678%3A0x12345678abcdef!2sMonarch%20Park%20Collegiate%20Institute!5e0!3m2!1sen!2sca!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
              title="MOCRISIS Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
