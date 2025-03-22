import { FadeInUp, StaggeredChildren } from './Transitions';
import { Code, Server, Database, Layout, Globe, Shield, FileCode, Briefcase, Building, Calendar } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { useState } from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const SkillCard = ({ 
  icon: Icon, 
  title, 
  description,
  delay = 0
}: { 
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}) => {
  return (
    <FadeInUp delay={delay} className="h-full">
      <div className="h-full glass rounded-lg p-6 hover:shadow-glossy transition-all duration-300 hover:translate-y-[-5px]">
        <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
          <Icon size={24} className="text-primary" />
        </div>
        <h3 className="text-xl font-display font-semibold mb-3">{title}</h3>
        <p className="text-foreground/70">{description}</p>
      </div>
    </FadeInUp>
  );
};

const TechSkillCard = ({ 
  name,
  icon,
  techIcon,
  imageSrc,
  delay = 0
}: { 
  name: string;
  icon?: string;
  techIcon?: LucideIcon;
  imageSrc?: string;
  delay?: number;
}) => {
  return (
    <FadeInUp delay={delay} className="h-full">
      <div className="h-full glass rounded-lg p-6 hover:shadow-glossy transition-all duration-300 hover:translate-y-[-5px] flex flex-col items-center">
        <div className="bg-primary/10 text-primary w-14 h-14 rounded-full flex items-center justify-center mb-4">
          {imageSrc ? (
            <img src={imageSrc} alt={name} className="w-10 h-10 object-contain" />
          ) : (
            techIcon && <techIcon size={28} className="text-primary" />
          )}
        </div>
        <h3 className="text-lg font-display font-semibold">{name}</h3>
      </div>
    </FadeInUp>
  );
};

const ExperienceCard = ({
  role,
  company,
  period,
  description,
  delay = 0
}: {
  role: string;
  company: string;
  period: string;
  description: string;
  delay?: number;
}) => {
  return (
    <FadeInUp delay={delay} className="h-full">
      <div className="h-full glass rounded-lg p-6 hover:shadow-glossy transition-all duration-300 hover:translate-y-[-5px]">
        <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
          <Briefcase size={24} className="text-primary" />
        </div>
        <div className="flex items-center gap-2 mb-2">
          <Calendar size={14} className="text-primary" />
          <span className="text-sm text-foreground/70">{period}</span>
        </div>
        <h3 className="text-xl font-display font-semibold mb-1">{role}</h3>
        <div className="text-sm text-primary mb-3">{company}</div>
        <p className="text-foreground/70">{description}</p>
      </div>
    </FadeInUp>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("general");
  
  const skills = [
    {
      icon: Code,
      title: "Développement d'applications",
      description: "Conception et réalisation d'applications en utilisant les langages et frameworks modernes (Java, C#, PHP, JavaScript, React)."
    },
    {
      icon: Server,
      title: "Administration de systèmes",
      description: "Configuration et maintenance des serveurs, mise en place de solutions virtualisées, administration Windows/Linux."
    },
    {
      icon: Database,
      title: "Bases de données",
      description: "Conception, manipulation et administration de bases de données relationnelles (MySQL, PostgreSQL) et NoSQL."
    },
    {
      icon: Layout,
      title: "Expérience utilisateur",
      description: "Création d'interfaces intuitives et accessibles, respect des normes d'ergonomie et d'accessibilité web."
    },
    {
      icon: Globe,
      title: "Réseaux",
      description: "Configuration d'infrastructures réseau, mise en place de solutions de connectivité, sécurisation des échanges."
    },
    {
      icon: Shield,
      title: "Cybersécurité",
      description: "Identification des vulnérabilités, mise en place de bonnes pratiques, protection des données personnelles (RGPD)."
    }
  ];

  const techSkills = [
    {
      name: "HTML",
      imageSrc: "/lovable-uploads/4c89ece8-1baf-457b-9420-3f4a8303f77b.png"
    },
    {
      name: "CSS",
      imageSrc: "/lovable-uploads/5ac33d95-17d6-4d85-a7d2-e3e4d6e63907.png"
    },
    {
      name: "JavaScript",
      imageSrc: "/lovable-uploads/ceb8ad49-ffff-4595-bd07-9f5060a9208d.png"
    },
    {
      name: "PHP",
      imageSrc: "/lovable-uploads/f9199e8e-3434-466f-aed5-5366d0d90f0a.png"
    },
    {
      name: "Python",
      imageSrc: "/lovable-uploads/b011401b-9965-4e48-8a0c-1c4c159f70b4.png"
    },
    {
      name: "Java",
      imageSrc: "/lovable-uploads/40fb76ba-44d1-4151-99cf-d3cd0efb041f.png"
    }
  ];

  const experiences = [
    {
      role: "Développeur Web - Stage",
      company: "Agence Web Innovation",
      period: "Mars 2024 - Juin 2024",
      description: "Développement de sites web dynamiques avec WordPress et PHP. Intégration de designs responsive et optimisation SEO."
    },
    {
      role: "Assistant développeur - Stage",
      company: "PME Technologies",
      period: "Mai 2023 - Juin 2023",
      description: "Participation au développement d'applications internes. Maintenance d'une base de données client et support technique."
    },
    {
      role: "Support technique - Job étudiant",
      company: "Helpdesk Services",
      period: "Été 2022",
      description: "Assistance aux utilisateurs, dépannage informatique et résolution de problèmes techniques de premier niveau."
    }
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <FadeInUp>
            <span className="chip bg-primary/10 text-primary mb-2">Expertises</span>
          </FadeInUp>
          <FadeInUp delay={100}>
            <h2 className="heading-lg mb-4">Compétences professionnelles</h2>
          </FadeInUp>
          <FadeInUp delay={200}>
            <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
              Le BTS SIO m'a permis d'acquérir un large éventail de compétences techniques et organisationnelles, 
              essentielles pour répondre aux besoins informatiques des entreprises.
            </p>
          </FadeInUp>
          
          <FadeInUp delay={300}>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-md mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="general">Compétences générales</TabsTrigger>
                <TabsTrigger value="dev">
                  <FileCode className="mr-2" size={16} />
                  <span>Développement 👨‍💻</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="general">
                <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  {skills.map((skill, index) => (
                    <SkillCard
                      key={index}
                      icon={skill.icon}
                      title={skill.title}
                      description={skill.description}
                    />
                  ))}
                </StaggeredChildren>
              </TabsContent>
              
              <TabsContent value="dev">
                <FadeInUp delay={100}>
                  <div className="max-w-3xl mx-auto mb-8 mt-6">
                    <p className="text-center text-foreground/70">
                      Toutes ces connaissances ont été acquises de différentes façons. Elles ont été acquises durant mes études en BTS SIO et d'autres par ma propre initiative en essayant de mettre en place des solutions. J'ai également relevé les défis organisés, ce qui permet d'effectuer des recherches et aller encore plus loin.
                    </p>
                  </div>
                </FadeInUp>
                
                <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {techSkills.map((skill, index) => (
                    <TechSkillCard
                      key={index}
                      name={skill.name}
                      techIcon={skill.techIcon}
                      imageSrc={skill.imageSrc}
                    />
                  ))}
                </StaggeredChildren>
              </TabsContent>
            </Tabs>
          </FadeInUp>
        </div>
        
        <div className="mt-24">
          <div className="text-center mb-12">
            <FadeInUp>
              <span className="chip bg-primary/10 text-primary mb-2">Expérience</span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h2 className="heading-lg mb-4">Mon Parcours Professionnel</h2>
            </FadeInUp>
            <FadeInUp delay={200}>
              <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
                Mes expériences professionnelles m'ont permis de mettre en pratique mes compétences 
                et de développer mon adaptabilité dans différents environnements de travail.
              </p>
            </FadeInUp>
          </div>
          
          <StaggeredChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                role={exp.role}
                company={exp.company}
                period={exp.period}
                description={exp.description}
              />
            ))}
          </StaggeredChildren>
        </div>
        
        <div className="mt-24">
          <div className="text-center mb-12">
            <FadeInUp>
              <span className="chip bg-primary/10 text-primary mb-2">Formation</span>
            </FadeInUp>
            <FadeInUp delay={100}>
              <h2 className="heading-lg mb-4">Parcours</h2>
            </FadeInUp>
            <FadeInUp delay={200}>
              <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
                Mon chemin académique m'a permis d'acquérir les connaissances et compétences 
                nécessaires pour exercer dans le domaine de l'informatique.
              </p>
            </FadeInUp>
          </div>
          
          <div className="glass rounded-lg p-8 max-w-3xl mx-auto">
            <FadeInUp>
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center shrink-0 mt-1">
                  <Building size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-1">BTS SIO option SLAM</h3>
                  <div className="text-sm text-primary mb-2">Lycée Technologique, Paris - 2022/2024</div>
                  <p className="text-foreground/70">
                    Diplôme de technicien supérieur en informatique spécialisé dans le développement d'applications.
                    Formation aux méthodes et technologies modernes du développement logiciel et web.
                  </p>
                </div>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center shrink-0 mt-1">
                  <Building size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-1">Baccalauréat Général</h3>
                  <div className="text-sm text-primary mb-2">Lycée Général, Paris - 2019/2022</div>
                  <p className="text-foreground/70">
                    Spécialités Mathématiques et Numérique et Sciences Informatiques (NSI).
                    Options Mathématiques Expertes. Obtention avec mention Bien.
                  </p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
