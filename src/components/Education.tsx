
import { FadeInUp, FadeIn, StaggeredChildren } from './Transitions';
import { Medal, GraduationCap, Calendar, Briefcase } from 'lucide-react';
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

const Education = () => {
  const academicItems = [
    {
      icon: GraduationCap,
      title: "BTS SIO OPTION SLAM",
      period: "septembre 2023 - juin 2025",
      institution: "Lycée Leonard vinci, Melun",
      description: "Diplôme de technicien supérieur en informatique spécialisé dans le développement d'applications. Formation aux méthodes et technologies modernes du développement logiciel et web."
    }
    // Removed the Baccalauréat Technologique STMG entry as requested
  ];

  const internshipItems = [
    {
      icon: Briefcase,
      title: "Stage – Refonte et mise en page d'un site web sous WordPress",
      period: "janvier 2025 - février 2025",
      institution: "Omac, Torcy",
      description: "Refonte du site d'une association : amélioration du design, mise en page des contenus, personnalisation du thème et optimisation de la navigation."
    },
    {
      icon: Briefcase,
      title: "Stage de 1er année BTS SIO",
      period: "mai 2024 - juin 2024",
      institution: "Linksi, Lens",
      description: "Développeur Web – Conception de site pour un club de football. Création d'un site web avec formulaire d'inscription, présentation des équipes et calendrier des matchs. Développement d'une interface moderne, intuitive et responsive."
    }
  ];

  const certifications = [
    "TOEIC - Score 900/990",
    "Certification ITIL Foundation",
    "Certificat Cisco CCNA Routing & Switching",
    "Certificat Microsoft Azure Fundamentals (AZ-900)"
  ];

  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <FadeInUp>
              <span className="chip bg-primary/10 text-primary mb-2">Parcours</span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h2 className="heading-lg mb-4">Formation Académique</h2>
            </FadeInUp>
            <FadeInUp delay={200}>
              <p className="text-foreground/70 mb-10">
                Mon parcours académique m'a permis d'acquérir les compétences 
                techniques et relationnelles nécessaires pour réussir dans le domaine des services
                informatiques aux organisations.
              </p>
            </FadeInUp>

            <StaggeredChildren>
              {academicItems.map((item, index) => (
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
            
            <FadeInUp delay={300}>
              <h2 className="heading-md mt-6 mb-6">Expériences Professionnelles</h2>
            </FadeInUp>
            
            <StaggeredChildren>
              {internshipItems.map((item, index) => (
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
                    <Medal size={20} />
                  </div>
                  <h3 className="text-2xl font-display font-semibold">BTS SIO - Option SLAM</h3>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-medium mb-3">À propos de la formation</h4>
                  <p className="text-foreground/70 mb-4">
                    Le BTS Services Informatiques aux Organisations est une formation de niveau Bac+2 qui propose deux spécialités :
                  </p>
                  <ul className="space-y-2 text-foreground/70">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>SLAM</strong> - Solutions Logicielles et Applications Métiers : développement d'applications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>SISR</strong> - Solutions d'Infrastructure, Systèmes et Réseaux : administration de réseaux</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-3">Certifications obtenues</h4>
                  <ul className="space-y-2">
                    {certifications.map((cert, index) => (
                      <FadeIn key={index} delay={400 + (index * 100)}>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-foreground/70">{cert}</span>
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

export default Education;
