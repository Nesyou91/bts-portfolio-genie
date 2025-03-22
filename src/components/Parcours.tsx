
import { FadeInUp, FadeIn, StaggeredChildren } from './Transitions';
import { Briefcase, Calendar } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

const TimelineItem = ({ 
  icon: Icon, 
  title, 
  period, 
  institution, 
  description,
  delay = 0
}: { 
  icon: LucideIcon;
  title: string;
  period: string;
  institution: string;
  description: string;
  delay?: number;
}) => {
  return (
    <FadeInUp delay={delay} className="relative pl-10 pb-10">
      <div className="absolute left-0 top-0 flex items-center justify-center w-7 h-7 rounded-full bg-primary text-white z-10">
        <Icon size={16} />
      </div>
      
      <div className="absolute left-3.5 top-7 bottom-0 w-[1px] bg-primary/20"></div>
      
      <div className="mb-1 flex items-center text-sm text-foreground/50 gap-2">
        <Calendar size={14} />
        <span>{period}</span>
      </div>
      
      <h3 className="text-xl font-display font-semibold mb-1">{title}</h3>
      <div className="text-sm text-primary mb-3">{institution}</div>
      <p className="text-foreground/70">{description}</p>
    </FadeInUp>
  );
};

const Parcours = () => {
  const timelineItems = [
    {
      icon: Briefcase,
      title: "Stage – Refonte et mise en page d'un site web sous WordPress",
      period: "Janvier 2025 - Février 2025",
      institution: "Omac, Torcy",
      description: "Refonte du site d'une association : amélioration du design, mise en page des contenus, personnalisation du thème et optimisation de la navigation."
    },
    {
      icon: Briefcase,
      title: "Stage - Développeur Web",
      period: "Mai 2024 - Juin 2024",
      institution: "Linksi, Lens",
      description: "Création d'un site web pour un club de football avec formulaire d'inscription, présentation des équipes et calendrier des matchs. Développement d'une interface moderne, intuitive et responsive."
    },
    {
      icon: Briefcase,
      title: "Stage - Développeur Full Stack",
      period: "Jan 2024 - Fév 2024",
      institution: "Startup Innovante",
      description: "Développement d'une application web de gestion pour une startup innovante. Utilisation de React, Node.js et MongoDB."
    }
  ];

  return (
    <section id="parcours" className="section-padding bg-gradient-to-b from-white to-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <FadeInUp>
            <span className="chip bg-primary/10 text-primary mb-2">Expérience</span>
          </FadeInUp>
          <FadeInUp delay={100}>
            <h2 className="heading-lg mb-4">Parcours Professionnel</h2>
          </FadeInUp>
          <FadeInUp delay={200}>
            <p className="text-foreground/70 max-w-2xl mx-auto mb-10">
              Mes différentes expériences professionnelles m'ont permis de développer 
              des compétences techniques et relationnelles essentielles dans le domaine informatique.
            </p>
          </FadeInUp>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <StaggeredChildren>
              {timelineItems.map((item, index) => (
                <TimelineItem
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  period={item.period}
                  institution={item.institution}
                  description={item.description}
                />
              ))}
            </StaggeredChildren>
          </div>

          <div>
            <FadeInUp delay={300}>
              <div className="glass rounded-lg p-8 h-full">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 text-primary w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    <Briefcase size={20} />
                  </div>
                  <h3 className="text-2xl font-display font-semibold">Compétences Acquises</h3>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-medium mb-3">Développement Web</h4>
                  <ul className="space-y-2 text-foreground/70">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Création de sites responsifs et interfaces utilisateur modernes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Utilisation de CMS (WordPress) et personnalisation avancée de thèmes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Développement front-end avec JavaScript, HTML5 et CSS3</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-3">Compétences Professionnelles</h4>
                  <ul className="space-y-2">
                    {[
                      "Gestion de projets et respect des délais",
                      "Communication avec les clients et compréhension des besoins",
                      "Travail en équipe et collaboration multidisciplinaire",
                      "Résolution de problèmes techniques complexes"
                    ].map((skill, index) => (
                      <FadeIn key={index} delay={400 + (index * 100)}>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-foreground/70">{skill}</span>
                        </li>
                      </FadeIn>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parcours;
