import { footerLinks } from '../../data/portfolioData.js';

function Footer() {
  return (
    <footer className="bg-surface-bright dark:bg-surface-dim border-t border-outline-variant/20 dark:border-outline/20 w-full py-12 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1280px] mx-auto px-8 gap-8">
        <div className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight">Madhavan</div>
        <div className="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant">
          © 2026 Madhavan. Built with precision.
        </div>
        <div className="flex gap-6">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-all hover:scale-110"
              href="#"
              aria-label={link.label}
            >
              <span className="material-symbols-outlined">{link.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
