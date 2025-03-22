
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Parcours from '@/components/Parcours';
import Veille from '@/components/Veille';

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

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Simple noise overlay */}
      <div className="fixed inset-0 bg-noise opacity-5 pointer-events-none z-[-1]"></div>
      
      {/* Simplified background elements */}
      <div className="fixed inset-0 pointer-events-none z-[-2] overflow-hidden">
        {/* Simple gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 opacity-70"></div>
        
        {/* Two main gradient blobs */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-radial from-primary/10 to-transparent opacity-60 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-radial from-accent/15 to-transparent opacity-60 blur-3xl"></div>
        
        {/* Single subtle shimmer line */}
        <div className="absolute h-px w-full top-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-shimmer opacity-50"></div>
      </div>

      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Parcours />
        <Projects />
        <Veille />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
