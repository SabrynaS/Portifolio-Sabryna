import { useEffect, useRef, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  age: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
}

const CursorGlow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const particleIdRef = useRef(0);
  const lastTimeRef = useRef(Date.now());
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Detectar modo escuro
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);

    // Observer para mudanças de tema
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Cores delicadas baseadas no tema
    const colors = isDarkMode
      ? [
          'rgba(220, 180, 240, ', // Roxo claro
          'rgba(255, 230, 255, ', // Rosa muito claro
          'rgba(200, 220, 255, ', // Azul claro
          'rgba(230, 200, 255, ', // Lilás
          'rgba(255, 240, 245, ', // Rosa pálido
        ]
      : [
          'rgba(186, 85, 211, ', // Lilás (medium orchid)
          'rgba(221, 160, 221, ', // Plum
          'rgba(230, 140, 230, ', // Violeta
          'rgba(255, 182, 193, ', // Light pink (lilás)
          'rgba(216, 191, 216, ', // Thistle
        ];

    const shouldSkipEffect = (element: Element): boolean => {
      if (element.classList.contains('card') || element.closest('[class*="card"]')) {
        return true;
      }

      if (
        element.closest('[role="dialog"]') ||
        element.closest('.modal') ||
        element.closest('[class*="modal"]') ||
        element.closest('[class*="dialog"]')
      ) {
        return true;
      }

      const textElements = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'SPAN', 'A', 'BUTTON', 'LABEL'];
      if (textElements.includes(element.tagName)) {
        return true;
      }

      if (element.closest('p') || element.closest('h1') || element.closest('h2') || 
          element.closest('h3') || element.closest('h4') || element.closest('h5') || 
          element.closest('h6') || element.closest('a') || element.closest('button') ||
          element.closest('label')) {
        return true;
      }

      return false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as Element;

      if (shouldSkipEffect(target)) {
        return;
      }

      const now = Date.now();
      const timeSinceLastParticle = now - lastTimeRef.current;

      if (timeSinceLastParticle > 25) {
        const count = Math.random() > 0.5 ? 1 : 2;
        
        for (let i = 0; i < count; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 2 + 0.5;
          
          const particle: Particle = {
            id: particleIdRef.current++,
            x: e.clientX + (Math.random() - 0.5) * 20,
            y: e.clientY + (Math.random() - 0.5) * 20,
            age: 0,
            size: Math.random() * 4 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
          };

          particlesRef.current.push(particle);

          setTimeout(() => {
            particlesRef.current = particlesRef.current.filter(p => p.id !== particle.id);
          }, 1000);
        }
        lastTimeRef.current = now;
      }
    };

    const animationFrame = () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';

        particlesRef.current.forEach((particle) => {
          const div = document.createElement('div');
          const progress = particle.age / 1000;
          const opacity = Math.max(0, (1 - progress) * 0.7);

          const x = particle.x + particle.vx * particle.age;
          const y = particle.y + particle.vy * particle.age + (progress * progress * 20);

          div.style.position = 'fixed';
          div.style.left = `${x}px`;
          div.style.top = `${y}px`;
          div.style.width = `${particle.size}px`;
          div.style.height = `${particle.size}px`;
          div.style.borderRadius = '50%';
          div.style.transform = 'translate(-50%, -50%)';
          div.style.pointerEvents = 'none';
          div.style.zIndex = '1';

          div.style.background = `radial-gradient(circle at 35% 35%, 
            ${particle.color}${opacity * 1.2}),
            ${particle.color}${opacity * 0.5})`;

          div.style.boxShadow = `0 0 ${8 + progress * 8}px ${particle.color}${opacity * 0.6})`;
          div.style.filter = 'blur(0.8px)';

          containerRef.current?.appendChild(div);
          particle.age += 16;
        });
      }

      requestAnimationFrame(animationFrame);
    };

    document.addEventListener('mousemove', handleMouseMove);
    const rafId = requestAnimationFrame(animationFrame);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [isDarkMode]);

  return <div ref={containerRef} className="pointer-events-none fixed inset-0 overflow-hidden" style={{ zIndex: 9999 }} />;
};

export default CursorGlow;
