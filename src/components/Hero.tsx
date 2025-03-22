
import { FadeIn, FadeInUp, FadeInDown } from './Transitions';
import { ArrowDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Simplified particles with fewer properties
    const particles: { 
      x: number; 
      y: number; 
      radius: number; 
      color: string; 
      speedX: number; 
      speedY: number;
      opacity: number;
    }[] = [];
    
    // Reduced particle count
    const particleCount = 60;
    
    // Simplified color palette
    const colors = [
      `hsla(250, 80%, 60%, 0.6)`, // Primary color
      `hsla(262, 80%, 60%, 0.6)`, // Accent color
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    const animate = () => {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Simplified background
      ctx.fillStyle = 'rgba(246, 246, 252, 0.01)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Simple boundary checks
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      });
      
      // Simplified connections
      particles.forEach((particleA, i) => {
        particles.slice(i + 1).forEach(particleB => {
          const dx = particleA.x - particleB.x;
          const dy = particleA.y - particleB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            const opacity = 0.2 * (1 - distance / 150);
            ctx.strokeStyle = `rgba(120, 120, 240, ${opacity})`;
            ctx.globalAlpha = opacity;
            ctx.lineWidth = 1;
            ctx.moveTo(particleA.x, particleA.y);
            ctx.lineTo(particleB.x, particleB.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        });
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
        style={{ pointerEvents: 'none' }}
      />
      
      {/* Simple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-50 z-0" />
      
      <div className="container mx-auto px-4 md:px-6 z-10 py-12 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInDown delay={150}>
            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 tracking-wider">
              BIENVENUE SUR MON PORTFOLIO
            </h2>
          </FadeInDown>
          
          <FadeInUp delay={200}>
            <h1 className="heading-xl mb-6 bg-gradient-to-r from-primary via-accent to-indigo-500 bg-clip-text text-transparent">
              Younes El Mourabit
            </h1>
          </FadeInUp>
          
          <FadeInUp delay={600}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
            </div>
          </FadeInUp>
        </div>
      </div>
      
      <FadeIn className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10" delay={1000}>
        <a 
          href="#skills" 
          className="flex flex-col items-center justify-center text-sm text-foreground/50 hover:text-primary transition-colors"
        >
          <span className="mb-2">Découvrir</span>
          <ArrowDown className="animate-bounce" size={20} />
        </a>
      </FadeIn>
    </section>
  );
};

export default Hero;
