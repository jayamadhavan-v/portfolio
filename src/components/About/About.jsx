import { about } from '../../data/portfolioData.js';

function About() {
  return (
    <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-lowest relative z-10" id="about">
      <div className="max-w-[1280px] mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
        <div className="order-2 md:order-1 relative group reveal active">
          <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl group-hover:bg-primary/20 transition-all"></div>
          <img
            alt={about.imageAlt}
            className="relative rounded-2xl w-full max-w-md mx-auto object-cover aspect-[4/5] shadow-2xl border-4 border-white transition-transform duration-500 group-hover:scale-[1.02]"
            src={about.image}
          />
        </div>
        <div className="order-1 md:order-2 space-y-8 reveal active">
          <div className="space-y-4">
            <h2 className="text-on-background font-headline-lg text-headline-lg">{about.title}</h2>
            {about.paragraphs.map((para, index) => (
              <p key={index} className="text-on-surface-variant font-body-md text-body-md leading-relaxed">
                {para}
              </p>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-6">
            {about.stats.map((stat, index) => (
              <div
                key={index}
                className={`glass-card p-6 rounded-xl border-l-4 ${
                  stat.tone === 'primary' ? 'border-primary' : 'border-secondary'
                }`}
              >
                <div
                  className={`font-headline-md text-headline-md ${
                    stat.tone === 'primary' ? 'text-primary' : 'text-secondary'
                  }`}
                >
                  {stat.value}
                </div>
                <div className="text-on-surface-variant font-label-md text-label-md">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
