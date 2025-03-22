
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
      {/* Enhanced noise overlay */}
      <div className="fixed inset-0 bg-noise opacity-8 pointer-events-none z-[-1]"></div>
      
      {/* Enhanced animated background elements */}
      <div className="fixed inset-0 pointer-events-none z-[-2] overflow-hidden">
        {/* Primary large gradient blobs */}
        <div className="absolute -top-40 -left-40 w-[800px] h-[800px] rounded-full bg-gradient-radial from-primary/10 to-transparent opacity-80 blur-3xl animate-morph-gradient"></div>
        <div className="absolute -bottom-40 -right-40 w-[800px] h-[800px] rounded-full bg-gradient-radial from-accent/15 to-transparent opacity-80 blur-3xl animate-morph-gradient" style={{animationDelay: '3s'}}></div>
        
        {/* Secondary animated orbs with more vibrant colors */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-400/25 to-purple-500/25 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-[350px] h-[350px] rounded-full bg-gradient-to-r from-pink-400/30 to-indigo-500/30 blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-2/3 left-1/3 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-indigo-400/25 to-blue-500/25 blur-3xl animate-pulse-slow" style={{animationDelay: '4s'}}></div>
        
        {/* Enhanced gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 animate-gradient-shift opacity-70"></div>
        
        {/* Enhanced shimmer effect lines */}
        <div className="absolute h-px w-full top-1/4 bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-shimmer opacity-80"></div>
        <div className="absolute h-px w-full top-2/4 bg-gradient-to-r from-transparent via-accent/40 to-transparent animate-shimmer opacity-80" style={{animationDelay: '1s'}}></div>
        <div className="absolute h-px w-full top-3/4 bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-shimmer opacity-80" style={{animationDelay: '2s'}}></div>
        
        {/* Diagonally moving light beams */}
        <div className="absolute h-[2px] w-[1000px] top-[30%] left-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent -rotate-[30deg] animate-slide-in-left" style={{animationDuration: '8s', animationIterationCount: 'infinite'}}></div>
        <div className="absolute h-[2px] w-[1000px] bottom-[30%] right-0 bg-gradient-to-r from-transparent via-accent/30 to-transparent rotate-[30deg] animate-slide-in-right" style={{animationDuration: '8s', animationIterationCount: 'infinite', animationDelay: '4s'}}></div>
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
