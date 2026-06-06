import { useEffect, useRef } from 'react';

const PARTICLE_CHARS = ['0', '1', '<', '>', '{', '}', '/', '*', ';'];
const PARTICLE_COUNT = 20;

function Background() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear any existing content
    container.innerHTML = '';

    const animations = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.textContent = PARTICLE_CHARS[Math.floor(Math.random() * PARTICLE_CHARS.length)];

      const size = Math.random() * 20 + 10;
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      const duration = Math.random() * 20 + 10;

      particle.style.fontSize = `${size}px`;
      particle.style.left = `${startX}px`;
      particle.style.top = `${startY}px`;

      container.appendChild(particle);

      const newX = (Math.random() - 0.5) * 200;
      const newY = (Math.random() - 0.5) * 200;

      const animation = particle.animate(
        [
          { transform: 'translate(0, 0)', opacity: 0.1 },
          { transform: `translate(${newX}px, ${newY}px)`, opacity: 0.3 },
          { transform: 'translate(0, 0)', opacity: 0.1 },
        ],
        {
          duration: duration * 1000,
          iterations: Infinity,
          easing: 'ease-in-out',
        }
      );

      animations.push(animation);
    }

    return () => {
      animations.forEach((anim) => anim.cancel());
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="blob top-0 -left-20"></div>
      <div className="blob blob-2 bottom-0 -right-20"></div>
      <div className="absolute inset-0" id="particle-container" ref={containerRef}></div>
    </div>
  );
}

export default Background;
