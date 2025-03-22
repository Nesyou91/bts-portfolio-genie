
import { FadeIn, FadeInUp, FadeInDown } from './Transitions';
import { ArrowDown, Code, Database, Server } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-50 to-transparent opacity-70 z-0" />
      <div className="absolute inset-0 bg-noise opacity-5 z-0" />
      
      {/* Animated background bubbles */}
      <div className="bubble opacity-30 top-[20%] left-[15%]" style={{ animationDelay: '0s', width: '300px', height: '300px' }} />
      <div className="bubble opacity-20 top-[50%] right-[10%]" style={{ animationDelay: '3s', width: '250px', height: '250px' }} />
      <div className="bubble opacity-25 bottom-[15%] left-[25%]" style={{ animationDelay: '6s', width: '200px', height: '200px' }} />
      
      <div className="container mx-auto px-4 md:px-6 z-10 py-12 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInDown delay={100}>
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary animate-pulse">
              Portfolio BTS SIO SLAM
            </span>
          </FadeInDown>
          
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
          
          <FadeIn delay={400}>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-8">
              Développeur d'applications et services informatiques
            </p>
          </FadeIn>
          
          <FadeInUp delay={600}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="glass-primary p-4 rounded-lg flex items-center gap-3 hover-3d">
                <Code className="text-primary" size={24} />
                <span className="font-medium">Développement web</span>
              </div>
              <div className="glass-primary p-4 rounded-lg flex items-center gap-3 hover-3d">
                <Database className="text-primary" size={24} />
                <span className="font-medium">Bases de données</span>
              </div>
              <div className="glass-primary p-4 rounded-lg flex items-center gap-3 hover-3d">
                <Server className="text-primary" size={24} />
                <span className="font-medium">Administration systèmes</span>
              </div>
            </div>
          </FadeInUp>
          
          <FadeIn delay={800}>
            <div className="flex justify-center gap-4">
              <a 
                href="#projects" 
                className="button-primary"
              >
                Voir mes projets
              </a>
              <a 
                href="#contact" 
                className="button-secondary"
              >
                Me contacter
              </a>
            </div>
          </FadeIn>
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
      
      {/* Animated gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 animated-gradient"></div>
    </section>
  );
};

export default Hero;
