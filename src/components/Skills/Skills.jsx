import { skills } from '../../data/portfolioData.js';

function Skills() {
  return (
    <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-bright relative z-10" id="skills">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center mb-16 space-y-4 reveal active">
          <h2 className="text-on-background font-headline-lg text-headline-lg">Technical Arsenal</h2>
          <div className="w-20 h-1.5 bg-primary-container mx-auto rounded-full"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 group reveal active"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
                  skill.tone === 'primary'
                    ? 'bg-primary/10 text-primary'
                    : skill.tone === 'secondary'
                    ? 'bg-secondary/10 text-secondary'
                    : 'bg-tertiary/10 text-tertiary'
                }`}
              >
                <span className="material-symbols-outlined">{skill.icon}</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-6">{skill.title}</h3>
              <div className="flex flex-wrap gap-3 items-center">
                {skill.items.map((item, itemIdx) => {
                  if (item.image) {
                    return (
                      <div
                        key={itemIdx}
                        className="flex items-center gap-2 bg-[#e0f2fe]/50 text-[#0f172a] px-3 py-1.5 rounded-full font-label-md text-label-md tech-icon-float"
                      >
                        <img
                          alt={item.alt || item.name}
                          className="w-[20px] h-[20px] object-contain"
                          src={item.image}
                        />
                        <span>{item.name}</span>
                      </div>
                    );
                  } else {
                    return (
                      <span
                        key={itemIdx}
                        className="bg-[#e0f2fe]/50 text-[#0f172a] px-3 py-1.5 rounded-full font-label-md text-label-md"
                      >
                        {item.name}
                      </span>
                    );
                  }
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
