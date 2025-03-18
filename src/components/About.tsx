
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
                Bienvenue sur mon portfolio ! Je suis Younes El Mourabit, développeur passionné par la création de solutions numériques innovantes et adaptées aux besoins des utilisateurs.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Mon parcours m'a permis d'acquérir une expertise en développement d'applications web et mobiles, en utilisant des technologies modernes pour créer des expériences utilisateur intuitives et performantes.
              </p>
              <p className="text-lg leading-relaxed">
                Je m'efforce constamment d'améliorer mes compétences techniques et de me tenir au courant des dernières tendances en matière de développement, afin de proposer les meilleures solutions possibles.
              </p>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};

export default About;
