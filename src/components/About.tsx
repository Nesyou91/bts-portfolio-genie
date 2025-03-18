
import { FadeIn, FadeInUp } from './Transitions';
import { User, GraduationCap, Code, Server } from 'lucide-react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { useState } from 'react';

const About = () => {
  const [isSisrOpen, setIsSisrOpen] = useState(false);
  const [isSlamOpen, setIsSlamOpen] = useState(false);

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
            <div className="glass p-6 md:p-8 rounded-xl mb-8">
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

          <FadeInUp delay={200}>
            <div className="glass p-6 md:p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <GraduationCap size={24} className="text-primary mr-2" />
                <h3 className="text-xl font-display font-semibold">Qu'est ce que le BTS SIO 🎓 ?</h3>
              </div>
              
              <p className="text-lg leading-relaxed mb-6">
                Avant de commencer à parler de moi, je vous propose de présenter en premier lieu ma filière dont je suis affecté
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Le Brevet de Technicien Supérieur aux Services Informatiques aux Organisations (BTS SIO), s'adresse à ceux qui souhaitent se former en deux ans aux métiers d'administrateur réseau ou de développeur. Pour par la suite intégré directement le marché du travail ou continuer des études, dans le domaine de l'informatique.
              </p>
              
              <h4 className="text-lg font-semibold mb-4">Le BTS SIO propose deux spécialités :</h4>
              
              <div className="space-y-4">
                <Collapsible open={isSisrOpen} onOpenChange={setIsSisrOpen} className="border border-border rounded-lg overflow-hidden">
                  <CollapsibleTrigger className="flex items-center w-full p-4 text-left bg-secondary/30 hover:bg-secondary/50 transition-colors">
                    <Server size={20} className="text-primary mr-2" />
                    <span className="font-medium">Option SISR</span>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 bg-background/50">
                    <p className="mb-3">
                      L'option Solution d'infrastructure, systèmes et réseaux forme des professionnels des réseaux et équipements informatiques (installation, maintenance, sécurité). En sortant d'un BTS SIO SISR, vous serez capables de gérer et d'administrer le réseau d'une société et d'assurer sa sécurité et sa maintenance.
                    </p>
                    <p className="font-medium mb-2">Les techniciens supérieurs en informatique option SISR, peuvent accéder aux métiers de :</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Administrateur systèmes et réseaux</li>
                      <li>Informaticien support et déploiement</li>
                      <li>Pilote d'exploitation</li>
                      <li>Support systèmes et réseaux</li>
                      <li>Technicien d'infrastructure</li>
                      <li>Technicien de production</li>
                      <li>Technicien micro et réseaux</li>
                    </ul>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible open={isSlamOpen} onOpenChange={setIsSlamOpen} className="border border-border rounded-lg overflow-hidden">
                  <CollapsibleTrigger className="flex items-center w-full p-4 text-left bg-primary/10 hover:bg-primary/20 transition-colors">
                    <Code size={20} className="text-primary mr-2" />
                    <span className="font-medium">Option SLAM 👈<span className="text-primary ml-2 italic">(la filière que j'ai choisie)</span></span>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 bg-background/50">
                    <p className="mb-3">
                      L'option Solutions logicielles et applications métiers forme des spécialistes des logiciels (rédaction d'un cahier des charges, formulation des besoins et spécifications, développement, intégration au sein de la société).
                    </p>
                    <p className="font-medium mb-2">Les techniciens supérieurs en informatique option SLAM, sont préparés aux métiers de :</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Développeur d'applications informatiques</li>
                      <li>Développeur informatique</li>
                      <li>Analyste d'applications ou d'études</li>
                      <li>Analyste programmeur</li>
                      <li>Programmeur analyste</li>
                      <li>Programmeur d'applications</li>
                      <li>Responsable des services applicatifs</li>
                      <li>Technicien d'études informatiques</li>
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};

export default About;
