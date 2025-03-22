
import { FadeIn, FadeInUp } from './Transitions';
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

    const particles: { 
      x: number; 
      y: number; 
      radius: number; 
      color: string; 
      speedX: number; 
      speedY: number;
    }[] = [];
    
    const particleCount = 30;
    
    // Changed back to base color - more blue/purple
    const color = `hsla(250, 80%, 60%, 0.3)`;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 2 + Math.random() * 3,
        color: color,
        speedX: Math.random() * 0.3 - 0.15,
        speedY: Math.random() * 0.3 - 0.15
      });
    }

    const animate = () => {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = 'rgba(246, 246, 252, 0.01)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
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
      
      {/* Changed back to base blue/purple gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent z-0" />
      
      <div className="container mx-auto px-4 md:px-6 z-10 py-12 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-wider overflow-hidden">
              <div className="flex justify-center">
                {"BIENVENUE SUR MON PORTFOLIO".split('').map((letter, index) => (
                  <span 
                    key={index} 
                    className="inline-block animate-pulse-slow hover:text-primary"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </span>
                ))}
              </div>
            </h2>
          </div>
          
          <div className="relative mb-12">
            {/* Changed to primary/accent gradient */}
            <h1 className="heading-xl bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Younes El Mourabit
            </h1>
            <div className="absolute inset-0 bg-primary/10 filter blur-xl opacity-40" />
          </div>
          
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
