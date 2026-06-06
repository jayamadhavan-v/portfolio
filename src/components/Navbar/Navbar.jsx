import { useEffect, useState } from 'react';
import { navLinks } from '../../data/portfolioData.js';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace('#', ''));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const currentSection = sectionIds.findLast((id) => {
        const section = document.getElementById(id);
        if (!section) return false;
        return section.offsetTop - 110 <= window.scrollY;
      });

      if (currentSection) {
        setActiveLink(`#${currentSection}`);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (event, href) => {
    event.preventDefault();

    const target = document.querySelector(href);
    if (!target) return;

    const offset = 80; // height of navbar
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = target.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    setActiveLink(href);
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 w-full z-50 bg-white/50 dark:bg-on-surface/50 backdrop-blur-md border-b border-outline-variant/10 h-20 transition-all duration-300 ${
        isScrolled ? 'nav-scrolled' : ''
      }`}
    >
      <div className="flex justify-between items-center w-full max-w-[1280px] mx-auto px-8 h-full">
        <a
          className="font-headline-md text-headline-md font-bold text-on-surface dark:text-surface-bright tracking-tight"
          href="#home"
          onClick={(event) => scrollToSection(event, '#home')}
        >
          Madhavan
        </a>

        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = activeLink === link.href;
            return (
              <a
                key={link.href}
                className={`font-label-md text-label-md transition-colors ${
                  isActive
                    ? 'text-primary dark:text-primary-fixed-dim border-b-2 border-primary dark:border-primary-fixed-dim pb-1'
                    : 'text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim'
                }`}
                href={link.href}
                onClick={(event) => scrollToSection(event, link.href)}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <a
          className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-label-md text-label-md hover:shadow-lg btn-glow hover:-translate-y-0.5 transition-all active:scale-95 inline-flex items-center justify-center"
          href="#contact"
          onClick={(event) => scrollToSection(event, '#contact')}
        >
          Get In Touch
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
