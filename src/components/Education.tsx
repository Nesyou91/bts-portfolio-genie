
import { FadeInUp, FadeIn, StaggeredChildren } from './Transitions';
import { Medal, GraduationCap, Calendar } from 'lucide-react';
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
  const timelineItems = [
    {
      icon: GraduationCap,
      title: "BTS SIO option SLAM",
      period: "2022 - 2024",
      institution: "Lycée Technologique, Paris",
      description: "Formation aux méthodes et technologies de développement d'applications et de services. Spécialisation en Solutions Logicielles et Applications Métiers (SLAM)."
    },
    {
      icon: GraduationCap,
      title: "Baccalauréat Général",
      period: "2019 - 2022",
      institution: "Lycée Général, Paris",
      description: "Spécialité Mathématiques et Numérique et Sciences Informatiques (NSI). Option Mathématiques Expertes."
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
