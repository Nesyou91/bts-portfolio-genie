
import { FadeIn, FadeInUp } from './Transitions';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-radial from-blue-50 to-transparent opacity-40 z-0" />
      <div className="absolute inset-0 bg-noise opacity-5 z-0" />
      
      <div className="container mx-auto px-4 md:px-6 z-10 py-12 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-pulse">
              <span className="text-primary">Younes el mourabit</span>
              <br />
              Bienvenue sur mon Portfolio
            </h2>
          </FadeIn>
          
          <FadeInUp delay={100}>
            <h1 className="heading-xl mb-6">
              Développeur de solutions numériques <span className="text-primary">innovantes</span>
            </h1>
          </FadeInUp>
          
          <FadeInUp delay={200}>
            <p className="text-lg md:text-xl text-foreground/70 mb-8 leading-relaxed">
              Passionné de développement d'applications et de services informatiques, 
              je mets en œuvre des solutions techniques adaptées aux besoins des utilisateurs.
            </p>
          </FadeInUp>
        </div>
      </div>
      
      <FadeIn className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
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
