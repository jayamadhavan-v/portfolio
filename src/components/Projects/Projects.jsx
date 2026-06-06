import { useRef } from 'react';
import { projects } from '../../data/portfolioData.js';

function Projects() {
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const card = slider.querySelector('.snap-center');
    if (!card) return;
    const cardWidth = card.offsetWidth;
    slider.scrollBy({ left: direction * (cardWidth + 32), behavior: 'smooth' });
  };

  return (
    <section className="py-section-padding-mobile md:py-section-padding-desktop overflow-hidden bg-white relative z-10" id="projects">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex justify-between items-end mb-16 reveal active">
          <div className="space-y-4">
            <h2 className="text-on-background font-headline-lg text-headline-lg">Selected Projects</h2>
            <p class="text-on-surface-variant font-body-md text-body-md">A showcase of modern web architecture and design.</p>
          </div>
          <div className="hidden md:flex gap-4">
            <button
              className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary-container hover:text-on-primary-container transition-all active:scale-90"
              onClick={() => scrollSlider(-1)}
              aria-label="Scroll left"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button
              className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary-container hover:text-on-primary-container transition-all active:scale-90"
              onClick={() => scrollSlider(1)}
              aria-label="Scroll right"
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        <div
          className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scroll-smooth no-scrollbar"
          id="project-slider"
          ref={sliderRef}
        >
          {projects.map((project, index) => (
            <div key={index} className="min-w-full md:min-w-[700px] snap-center reveal active">
              <div className="glass-card rounded-3xl overflow-hidden group">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt={project.imageAlt}
                    src={project.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <button className="bg-white text-on-surface px-6 py-2 rounded-full font-label-md text-label-md flex items-center gap-2 hover:bg-primary hover:text-white transition-colors">
                        Live Demo <span className="material-symbols-outlined text-sm">open_in_new</span>
                      </button>
                      <button className="bg-on-surface text-white px-6 py-2 rounded-full font-label-md text-label-md flex items-center gap-2 hover:bg-white hover:text-on-surface transition-colors">
                        GitHub <span className="material-symbols-outlined text-sm">code</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-10 space-y-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-primary font-label-md text-label-md">{project.category}</span>
                    <span className="text-outline-variant">•</span>
                    <span className="text-on-surface-variant font-label-md text-label-md">{project.stack}</span>
                  </div>
                  <h3 className="text-on-background font-headline-md text-headline-md">{project.title}</h3>
                  <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
