
import { FadeInUp, StaggeredChildren } from './Transitions';
import { Code, Server, Database, Layout, Globe, Shield, FileCode, Settings, Laptop, UserCheck, BrainCircuit, Binary } from 'lucide-react';
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
  imageSrc,
  delay = 0
}: { 
  name: string;
  imageSrc?: string;
  delay?: number;
}) => {
  return (
    <FadeInUp delay={delay} className="h-full">
      <div className="h-full glass rounded-lg p-6 hover:shadow-glossy transition-all duration-300 hover:translate-y-[-5px] flex flex-col items-center">
        <div className="bg-primary/10 text-primary w-14 h-14 rounded-full flex items-center justify-center mb-4">
          {imageSrc && (
            <img src={imageSrc} alt={name} className="w-10 h-10 object-contain" />
          )}
        </div>
        <h3 className="text-lg font-display font-semibold">{name}</h3>
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
      description: "Conception et réalisation d'applications en utilisant les langages et frameworks modernes (Java, C#, PHP, JavaScript)."
    },
    {
      icon: Database,
      title: "Bases de données",
      description: "Modélisation, conception et administration de bases de données SQL (MySQL, PostgreSQL) et NoSQL. Création de requêtes complexes et optimisation."
    },
    {
      icon: Laptop,
      title: "Développement web avancé",
      description: "Maîtrise des frameworks front-end (React, Angular) et back-end (Laravel, Spring). Développement d'API RESTful et architectures MVC."
    },
    {
      icon: Settings,
      title: "Méthodes agiles",
      description: "Application des méthodologies agiles (Scrum, Kanban) dans le développement de logiciels. Gestion de versions avec Git et travail collaboratif."
    },
    {
      icon: UserCheck,
      title: "Interfaces utilisateur",
      description: "Conception d'interfaces ergonomiques et accessibles. Respect des normes d'UX/UI et adaptation aux besoins spécifiques des utilisateurs."
    },
    {
      icon: BrainCircuit,
      title: "Analyse et conception",
      description: "Analyse des besoins clients, modélisation UML, conception de solutions logicielles adaptées aux contraintes fonctionnelles et techniques."
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

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-white to-blue-50">
      <div className="absolute inset-0 bg-noise opacity-5 z-0" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <FadeInUp>
            <span className="chip bg-primary/10 text-primary mb-2">Expertises</span>
          </FadeInUp>
          <FadeInUp delay={100}>
            <h2 className="heading-lg mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Compétences professionnelles</h2>
          </FadeInUp>
          <FadeInUp delay={200}>
            <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
              Le BTS SIO option SLAM m'a permis d'acquérir des compétences avancées en développement d'applications 
              et en conception de solutions logicielles pour répondre aux besoins des entreprises.
            </p>
          </FadeInUp>
        </div>
        
        {/* Tabs Section */}
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
                <div className="glass p-6 rounded-lg max-w-3xl mx-auto mb-8 mt-6">
                  <p className="text-center text-foreground/70">
                    Ces compétences techniques ont été acquises durant ma formation en BTS SIO option SLAM,
                    par le biais de projets personnels et lors de mes stages en entreprise.
                    L'apprentissage continu et l'auto-formation font partie intégrante de ma démarche professionnelle.
                  </p>
                </div>
              </FadeInUp>
              
              <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {techSkills.map((skill, index) => (
                  <TechSkillCard
                    key={index}
                    name={skill.name}
                    imageSrc={skill.imageSrc}
                  />
                ))}
              </StaggeredChildren>
            </TabsContent>
          </Tabs>
        </FadeInUp>
      </div>
    </section>
  );
};

export default Skills;
