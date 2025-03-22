
import { FadeInUp, StaggeredChildren } from './Transitions';
import { Code, Server, Database, Layout, Globe, Shield, FileCode, Paintbrush, Braces, FileBadge, Hash, PanelLeft, Coffee } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { useState } from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';

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
  techIcon: TechIcon,
  imageSrc,
  delay = 0
}: { 
  name: string;
  icon: string;
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
            TechIcon && <TechIcon size={28} className="text-primary" />
          )}
        </div>
        <div className="bg-code-bg rounded-lg p-4 mb-4 w-full overflow-hidden">
          <pre className="text-sm text-code-text font-mono">
            <code>{icon}</code>
          </pre>
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
      icon: `<!DOCTYPE html>
<html>
  <head>
    <title>Hello</title>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>`,
      techIcon: FileCode
    },
    {
      name: "CSS",
      icon: `.container {
  display: flex;
  justify-content: center;
  background: linear-gradient(
    45deg, #ff8a00, #e52e71
  );
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}`,
      techIcon: Paintbrush
    },
    {
      name: "JavaScript",
      icon: `function animate() {
  const element = document.querySelector('.box');
  element.classList.add('animated');
  
  setTimeout(() => {
    element.classList.remove('animated');
  }, 1000);
}`,
      techIcon: Braces
    },
    {
      name: "React",
      icon: `function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`,
      techIcon: Code
    },
    {
      name: "PHP",
      icon: `<?php
function connect() {
  $host = "localhost";
  $user = "admin";
  $pass = "password";
  $db = "my_database";
  
  $conn = new mysqli($host, $user, $pass, $db);
  return $conn;
}
?>`,
      techIcon: FileBadge
    },
    {
      name: "Python",
      icon: `def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n-1)
        
# Calculate factorial of 5
result = factorial(5)
print(f"Factorial: {result}")`,
      imageSrc: "/lovable-uploads/b011401b-9965-4e48-8a0c-1c4c159f70b4.png"
    },
    {
      name: "Java",
      icon: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        
        for (int i = 0; i < 5; i++) {
            System.out.println(i);
        }
    }
}`,
      techIcon: Coffee
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
                      icon={skill.icon}
                      techIcon={skill.techIcon}
                      imageSrc={skill.imageSrc}
                    />
                  ))}
                </StaggeredChildren>
              </TabsContent>
            </Tabs>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};

export default Skills;
