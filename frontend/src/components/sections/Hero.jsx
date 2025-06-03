import FloatingAI from "./FloatingAI";

const Hero = () => {
  const headlineText = "Hey, I'm Gowthami Kota";

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-start text-left px-6 z-10 select-none">
      <FloatingAI />
      <h1
        className="ml-4 animate-fade-in-up text-5xl md:text-7xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#00F5FF] via-[#A400FF] to-[#FF00C8]"
        style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.03em' }}
      >
        {headlineText}
      </h1>
      <p
        className="ml-4 mt-6 animate-fade-in-up text-lg md:text-xl text-white/80 max-w-xl"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        B.Tech AIML | Full Stack Developer | AI Storyteller
      </p>
      <button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        className="ml-4 mt-10 px-8 py-3 rounded-xl bg-[#00F5FF]/20 border border-[#00F5FF]/50 text-[#00F5FF] hover:bg-[#00F5FF]/40 hover:scale-105 transition-all duration-300 backdrop-blur-xl"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Explore My World →
      </button>
    </section>
  );
};

export default Hero;
