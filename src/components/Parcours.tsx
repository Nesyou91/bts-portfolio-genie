
import { FadeInUp, FadeIn, StaggeredChildren } from './Transitions';
import { Briefcase, Calendar, GraduationCap } from 'lucide-react';
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
      icon: GraduationCap,
      title: "BTS SIO OPTION SLAM",
      period: "septembre 2023 - juin 2025",
      institution: "Lycée Leonard vinci, Melun",
      description: "Diplôme de technicien supérieur en informatique spécialisé dans le développement d'applications. Formation aux méthodes et technologies modernes du développement logiciel et web."
    },
    {
      icon: GraduationCap,
      title: "Baccalauréat Technologique STMG",
      period: "septembre 2021 - juillet 2022",
      institution: "Lycée Parc des loges, Évry",
      description: "Option SIG (Systèmes d'Information de Gestion). Formation aux principes fondamentaux des systèmes d'information et de la gestion d'entreprise."
    },
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
            <h2 className="heading-lg mb-4">Parcours</h2>
          </FadeInUp>
          <FadeInUp delay={200}>
            <p className="text-foreground/70 max-w-2xl mx-auto mb-10">
              Mon parcours académique et professionnel m'a permis de développer 
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
        </div>
      </div>
    </section>
  );
};

export default Parcours;
