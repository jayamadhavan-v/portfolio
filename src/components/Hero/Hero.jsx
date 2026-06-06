import { hero } from '../../data/portfolioData.js';

function Hero() {
  return (
    <section className="pt-32 pb-24 md:pt-48 md:pb-section-padding-desktop hero-gradient relative overflow-hidden z-10" id="home">
      <div className="max-w-[1280px] mx-auto px-8 grid md:grid-cols-2 items-center gap-16 relative z-10">
        <div className="space-y-8 reveal active">
          <div className="space-y-4">
            <h2 className="text-primary font-label-md text-label-md tracking-[0.2em] uppercase">{hero.eyebrow}</h2>
            <h1 className="text-on-background font-headline-xl text-headline-xl">{hero.name}</h1>
            <p className="text-on-surface-variant font-body-lg text-body-lg max-w-lg leading-relaxed">
              {hero.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              className="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-label-md text-label-md hover:shadow-xl btn-glow hover:-translate-y-1 transition-all flex items-center gap-2"
              href="#projects"
            >
              View Projects
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
            <a
              className="glass-card text-on-surface px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-white transition-all"
              href="#contact"
            >
              Get In Touch
            </a>
          </div>
        </div>
        <div className="relative hidden md:block reveal active">
          <img
            alt={hero.imageAlt}
            className="w-full h-auto drop-shadow-2xl floating-element"
            src={hero.image}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
