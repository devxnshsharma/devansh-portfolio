import HlsVideo from "./HlsVideo";

const stats = [
  { value: "50+", label: "DSA problems solved" },
  { value: "Top 15%", label: "Hackathon ranking" },
  { value: "6,000+", label: "Credits optimized" },
  { value: "6+", label: "Languages mastered" },
];

const Stats = () => {
  return (
    <section className="relative bg-background py-32 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* HLS Background */}
      <HlsVideo
        src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0"
        desaturate
      />
      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 z-[1]"
        style={{
          height: "200px",
          background: "linear-gradient(to bottom, hsl(0 0% 0%), transparent)",
        }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[1]"
        style={{
          height: "200px",
          background: "linear-gradient(to top, hsl(0 0% 0%), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex justify-center">
        <div className="liquid-glass rounded-3xl p-12 md:p-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center w-full max-w-5xl">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-heading italic text-foreground text-4xl md:text-5xl lg:text-6xl mb-2">
                {stat.value}
              </div>
              <div className="font-body font-light text-foreground/60 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
