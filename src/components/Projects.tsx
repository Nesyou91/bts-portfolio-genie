
import { FadeInUp, SlideInRight, SlideInLeft, StaggeredChildren } from './Transitions';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const ProjectCard = ({ 
  title,
  description, 
  tags,
  image,
  repoUrl,
  liveUrl,
  reverse = false,
  delay = 0
}: { 
  title: string;
  description: string;
  tags: string[];
  image: string;
  repoUrl?: string;
  liveUrl?: string;
  reverse?: boolean;
  delay?: number;
}) => {
  const AnimatedContainer = reverse ? SlideInLeft : SlideInRight;
  
  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center mb-24 last:mb-0">
      <div className={`order-2 ${reverse ? 'md:order-2' : 'md:order-1'}`}>
        <FadeInUp delay={delay}>
          <h3 className="heading-md mb-4">{title}</h3>
          <p className="text-foreground/70 mb-6">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, index) => (
              <span key={index} className="chip bg-secondary text-foreground/70">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {repoUrl && (
              <a 
                href={repoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                <Github size={16} />
                <span>Code source</span>
              </a>
            )}
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                <ExternalLink size={16} />
                <span>Voir le projet</span>
              </a>
            )}
          </div>
        </FadeInUp>
      </div>
      
      <div className={`order-1 ${reverse ? 'md:order-1' : 'md:order-2'}`}>
        <AnimatedContainer delay={delay + 200}>
          <div className="overflow-hidden rounded-lg shadow-glossy">
            <div className="relative bg-primary/5 aspect-[16/9] overflow-hidden rounded-lg">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
                style={{ backgroundImage: `url(${image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-50" />
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Savon App",
      description: "Application e-commerce spécialisée dans la vente de savons artisanaux et produits cosmétiques naturels. Développée avec React et intégrant un système de paiement sécurisé, gestion des stocks et suivi des commandes.",
      tags: ["React", "Node.js", "MongoDB", "API REST", "Stripe"],
      image: "https://images.unsplash.com/photo-1607006344380-b6775a0824ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      repoUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <FadeInUp>
            <span className="chip bg-primary/10 text-primary mb-2">Portfolio</span>
          </FadeInUp>
          <FadeInUp delay={100}>
            <h2 className="heading-lg mb-4">Projets réalisés</h2>
          </FadeInUp>
          <FadeInUp delay={200}>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Découvrez une sélection de projets développés dans le cadre de ma formation BTS SIO 
              et de mes expériences professionnelles.
            </p>
          </FadeInUp>
        </div>

        <StaggeredChildren staggerDelay={300} className="mt-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              repoUrl={project.repoUrl}
              liveUrl={project.liveUrl}
              reverse={index % 2 !== 0}
            />
          ))}
        </StaggeredChildren>

        <FadeInUp delay={500} className="text-center mt-12">
          <a href="#contact" className="inline-flex items-center gap-2 text-primary hover:underline">
            <span>Discutons de votre projet</span>
            <ArrowRight size={16} />
          </a>
        </FadeInUp>
      </div>
    </section>
  );
};

export default Projects;
