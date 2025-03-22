
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  // Intersection Observer for animation performance
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Add a staggered animation to children with data-animate attribute
          const animatedElements = entry.target.querySelectorAll('[data-animate]');
          animatedElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('animated');
            }, index * 150); // 150ms stagger
          });
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Get all animated sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      observer.observe(section);
    });

    // Add parallax scroll effect
    const handleParallax = () => {
      const scrollY = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = element.dataset.speed || '0.1';
        const yPos = scrollY * parseFloat(speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleParallax);

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Noise overlay for texture */}
      <div className="fixed inset-0 bg-noise opacity-5 pointer-events-none z-[-1]"></div>
      
      {/* Enhanced animated background gradients */}
      <div className="fixed inset-0 pointer-events-none z-[-2] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-primary/10 to-transparent opacity-70 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-radial from-accent/10 to-transparent opacity-70 blur-3xl"></div>
        
        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-500/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-gradient-to-r from-pink-400/20 to-indigo-500/20 blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 rounded-full bg-gradient-to-r from-green-400/20 to-blue-500/20 blur-3xl animate-pulse-slow" style={{animationDelay: '4s'}}></div>
        
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-purple-50/40 to-pink-50/40 animate-gradient-shift opacity-60"></div>
        
        {/* Moving gradient lines */}
        <div className="absolute h-px w-full top-1/4 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-shimmer"></div>
        <div className="absolute h-px w-full top-2/4 bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-shimmer" style={{animationDelay: '1s'}}></div>
        <div className="absolute h-px w-full top-3/4 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-shimmer" style={{animationDelay: '2s'}}></div>
      </div>

      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
