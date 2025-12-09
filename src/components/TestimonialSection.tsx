import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "MOCRISIS is one of the best high school held conferences I have ever attended. They have the most welcoming, positive and enthusiastic staff ever. As a delegate all I can say is there's green teas, black teas but most importantly there's priorities.",
    highlight: "THE PRIORITY TO ATTEND MOCRISIS!",
    author: "Hethvi S.",
  },
  {
    quote: "The crisis committees at MOCRISIS pushed me to think creatively and act decisively. It was an incredible learning experience that I'll never forget.",
    highlight: "An unforgettable experience!",
    author: "Former Delegate",
  },
  {
    quote: "From the moment I arrived, the staff made me feel welcome. The committees were challenging but incredibly rewarding.",
    highlight: "Challenging and rewarding!",
    author: "MOCRISIS 2024 Participant",
  },
];

export const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 laurel-pattern" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 p-2 text-foreground/40 hover:text-foreground transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={40} />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 p-2 text-foreground/40 hover:text-foreground transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={40} />
            </button>

            {/* Testimonial Content */}
            <div className="text-center space-y-6 px-8 md:px-16">
              <Quote className="w-12 h-12 text-primary/40 mx-auto" />
              
              <blockquote className="text-lg md:text-xl lg:text-2xl text-foreground/90 font-display italic leading-relaxed transition-all duration-500">
                {testimonials[current].quote}
              </blockquote>
              
              <p className="text-xl md:text-2xl font-bold text-foreground tracking-wide uppercase">
                {testimonials[current].highlight}
              </p>

              <div className="h-px w-16 bg-foreground/30 mx-auto" />
              
              <cite className="text-foreground/60 not-italic font-medium">
                {testimonials[current].author}
              </cite>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-8" : "bg-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
