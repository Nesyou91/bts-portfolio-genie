
import { FadeIn } from './Transitions';
import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <FadeIn>
            <div className="flex items-center justify-center mb-8">
              <button 
                onClick={scrollToTop}
                className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
                aria-label="Retour en haut"
              >
                <ArrowUp size={20} />
              </button>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h2 className="font-display text-2xl font-bold mb-6">
              <span className="text-primary">BTS</span> SIO Portfolio
            </h2>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Github"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="text-center text-foreground/50 text-sm">
              <p>© {currentYear} BTS SIO Portfolio. Tous droits réservés.</p>
              <p className="mt-2">
                Conçu et développé avec passion par un étudiant en BTS SIO.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
