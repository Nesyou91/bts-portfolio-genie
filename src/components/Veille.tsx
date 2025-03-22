
import { FadeInUp, StaggeredChildren } from './Transitions';
import { Rss, Monitor, ExternalLink, InfoIcon } from 'lucide-react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

interface VeilleItemProps {
  title: string;
  description: string;
  date: string;
  link?: string;
  delay?: number;
}

const VeilleItem = ({ title, description, date, link, delay = 0 }: VeilleItemProps) => {
  return (
    <FadeInUp delay={delay} className="mb-8 last:mb-0">
      <div className="rounded-lg border border-border/40 bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="text-sm text-foreground/50">{date}</div>
        </div>
        <p className="mb-4 text-foreground/70">{description}</p>
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <ExternalLink size={16} />
            <span>Lire plus</span>
          </a>
        )}
      </div>
    </FadeInUp>
  );
};

const Veille = () => {
  const technologiqueItems = [
    // All items removed as requested
  ];

  const juridiqueItems = [
    {
      title: "Les implications du RGPD sur le développement d'applications",
      description: "Analyse des obligations légales et des meilleures pratiques pour assurer la conformité RGPD lors du développement d'applications manipulant des données personnelles.",
      date: "10 janvier 2024",
      link: "#"
    },
    {
      title: "La propriété intellectuelle dans les projets open source",
      description: "Étude des licences open source et de leurs implications juridiques pour les entreprises et les développeurs.",
      date: "12 mars 2024",
      link: "#"
    }
  ];

  return (
    <section id="veille" className="section-padding bg-gradient-to-b from-secondary/30 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <FadeInUp>
            <span className="chip bg-primary/10 text-primary mb-2">Veille</span>
          </FadeInUp>
          <FadeInUp delay={100}>
            <h2 className="heading-lg mb-4">Veille informationnelle</h2>
          </FadeInUp>
          <FadeInUp delay={200}>
            <p className="text-foreground/70 max-w-2xl mx-auto mb-10">
              Je maintiens une veille informationnelle active sur les évolutions technologiques et juridiques 
              du secteur informatique pour anticiper les changements et adapter mes compétences.
            </p>
          </FadeInUp>
        </div>

        <FadeInUp delay={200} className="mb-8">
          <div className="max-w-3xl mx-auto mb-12 rounded-lg border border-primary/20 bg-primary/5 p-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 text-primary">
                <InfoIcon size={20} />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-primary">Qu'est-ce que la veille technologique ?</h3>
                <p className="text-foreground/80">
                  Une veille informatique est un processus de surveillance et de recherche d'informations sur les nouveautés 
                  et tendances du domaine informatique. Elle permet de se tenir au courant des évolutions technologiques, 
                  des nouvelles pratiques et des innovations dans le secteur.
                </p>
              </div>
            </div>
          </div>

          <Tabs defaultValue="technologique" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="technologique">
                <div className="flex items-center gap-2">
                  <Monitor size={16} />
                  <span>Veille Technologique</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="juridique">
                <div className="flex items-center gap-2">
                  <Rss size={16} />
                  <span>Veille Juridique</span>
                </div>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="technologique" className="mt-4">
              <StaggeredChildren>
                {technologiqueItems.map((item, index) => (
                  <VeilleItem
                    key={index}
                    title={item.title}
                    description={item.description}
                    date={item.date}
                    link={item.link}
                  />
                ))}
              </StaggeredChildren>
            </TabsContent>

            <TabsContent value="juridique" className="mt-4">
              <StaggeredChildren>
                {juridiqueItems.map((item, index) => (
                  <VeilleItem
                    key={index}
                    title={item.title}
                    description={item.description}
                    date={item.date}
                    link={item.link}
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

export default Veille;
