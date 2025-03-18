
import { FadeIn, FadeInUp } from './Transitions';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-background/50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="flex items-center justify-center mb-8">
              <User size={24} className="text-primary mr-2" />
              <h2 className="heading-md">À propos</h2>
            </div>
          </FadeIn>
          
          <FadeInUp delay={100}>
            <div className="glass p-6 md:p-8 rounded-xl">
              <p className="text-lg leading-relaxed mb-4">
                👋 Salut, moi c'est Younes
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Je suis actuellement étudiant au lycée Léonard de Vinci 🗺️ en deuxième année de BTS SIO (Services Informatiques aux Organisations) dans l'option SLAM (Solutions Logicielles et Applications Métier), qui en gros est une option spécialisée pour le développement 💻
              </p>
              <p className="text-lg leading-relaxed">
                Toujours en cours d'étude 🎓, je vous propose sur ce portfolio de découvrir les différentes études et projets professionnels que j'ai entrepris au cours de ma carrière.
              </p>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};

export default About;
