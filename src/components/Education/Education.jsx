import { certifications } from '../../data/portfolioData.js';

function Education() {
  return (
    <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-low relative z-10">
      <div className="max-w-[1280px] mx-auto px-8">
        <h2 className="text-on-background font-headline-md text-headline-md mb-12 text-center reveal active">Certified Professional</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-card bg-white p-8 rounded-2xl shadow-sm border border-outline-variant/30 flex flex-col items-center text-center reveal active"
            >
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">{cert.icon}</span>
              </div>
              <h4 className="font-headline-md text-headline-md mb-2">{cert.title}</h4>
              <p className="text-on-surface-variant font-body-md text-body-md">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
