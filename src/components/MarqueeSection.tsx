export const MarqueeSection = () => {
  const text = "MOCRISIS";
  const separator = " | ";
  const fullText = Array(20).fill(text).join(separator);

  return (
    <section className="py-8 bg-card overflow-hidden border-y border-border/30">
      <div className="relative">
        <div className="animate-marquee whitespace-nowrap flex">
          <span className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground/20 tracking-[0.3em]">
            {fullText}
          </span>
          <span className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground/20 tracking-[0.3em] ml-8">
            {fullText}
          </span>
        </div>
      </div>
    </section>
  );
};
