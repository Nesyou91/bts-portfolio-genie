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

    const particles: { 
      x: number; 
      y: number; 
      radius: number; 
      color: string; 
      speedX: number; 
      speedY: number;
      opacity: number;
      growth: number;
    }[] = [];
    
    const particleCount = 100;
    const colors = [
      'rgba(99, 102, 241, 0.6)',
      'rgba(139, 92, 246, 0.6)',
      'rgba(167, 139, 250, 0.6)',
      'rgba(217, 70, 239, 0.6)',
      'rgba(79, 70, 229, 0.6)',
      'rgba(236, 72, 153, 0.6)'
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 6 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: Math.random() * 0.8 - 0.4,
        speedY: Math.random() * 0.8 - 0.4,
        opacity: Math.random() * 0.5 + 0.3,
        growth: Math.random() < 0.5 ? 0.03 : -0.03
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    let isMouseMoving = false;
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseMoving = true;
      
      setTimeout(() => {
        isMouseMoving = false;
      }, 2000);
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        particle.radius += particle.growth;
        if (particle.radius > 10 || particle.radius < 1) {
          particle.growth *= -1;
        }
        
        if (isMouseMoving) {
          const dx = mouseX - particle.x;
          const dy = mouseY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200) {
            const force = 0.3 * (1 - distance / 200);
            particle.x += dx * force / 25;
            particle.y += dy * force / 25;
          }
        }
        
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
        
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.radius * 3
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.globalAlpha = particle.opacity * 0.6;
        ctx.fill();
        
        ctx.globalAlpha = 1;
      });
      
      particles.forEach((particleA, i) => {
        particles.slice(i + 1).forEach(particleB => {
          const dx = particleA.x - particleB.x;
          const dy = particleA.y - particleB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            
            const gradient = ctx.createLinearGradient(
              particleA.x, particleA.y, 
              particleB.x, particleB.y
            );
            
            const colorA = particleA.color.replace('rgba(', '').replace(')', '').split(',');
            const colorB = particleB.color.replace('rgba(', '').replace(')', '').split(',');
            
            gradient.addColorStop(0, `rgba(${colorA[0]}, ${colorA[1]}, ${colorA[2]}, ${0.2 * (1 - distance / 150)})`);
            gradient.addColorStop(1, `rgba(${colorB[0]}, ${colorB[1]}, ${colorB[2]}, ${0.2 * (1 - distance / 150)})`);
            
            ctx.strokeStyle = gradient;
            ctx.globalAlpha = 0.2 * (1 - distance / 150);
            ctx.lineWidth = 1.2;
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
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
        style={{ pointerEvents: 'none' }}
      />
      
      <div className="absolute inset-0 bg-gradient-radial from-blue-50/50 to-transparent opacity-80 z-0" />
      <div className="absolute inset-0 bg-noise opacity-5 z-0" />
      
      <div className="bubble opacity-40 top-[20%] left-[15%] bg-gradient-to-br from-indigo-400/20 to-purple-500/20" style={{ animationDelay: '0s', width: '350px', height: '350px' }} />
      <div className="bubble opacity-30 top-[50%] right-[10%] bg-gradient-to-br from-pink-400/20 to-purple-500/20" style={{ animationDelay: '3s', width: '300px', height: '300px' }} />
      <div className="bubble opacity-35 bottom-[15%] left-[25%] bg-gradient-to-br from-blue-400/20 to-indigo-500/20" style={{ animationDelay: '6s', width: '250px', height: '250px' }} />
      
      <div className="container mx-auto px-4 md:px-6 z-10 py-12 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInDown delay={150}>
            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 tracking-wider animate-float">
              BIENVENUE SUR MON PORTFOLIO
            </h2>
          </FadeInDown>
          
          <FadeInUp delay={200}>
            <h1 className="heading-xl mb-6 bg-gradient-to-r from-primary via-accent to-purple-600 bg-clip-text text-transparent animate-morph-gradient bg-[size:200%_200%]">
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
      
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-shimmer"></div>
    </section>
  );
};

export default Hero;
