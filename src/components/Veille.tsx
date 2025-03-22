
import { FadeInUp, StaggeredChildren } from './Transitions';
import { Monitor, ExternalLink, InfoIcon } from 'lucide-react';
import { Button } from './ui/button';
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
          <Button 
            variant="link" 
            className="p-0 h-auto flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            onClick={() => window.open(link, '_blank')}
          >
            <ExternalLink size={16} />
            <span>Lire plus</span>
          </Button>
        )}
      </div>
    </FadeInUp>
  );
};

const Veille = () => {
  const technologiqueItems: VeilleItemProps[] = [
    {
      title: "Technologies du Métaverse",
      description: "Analyse des tendances actuelles: réalité virtuelle (VR), réalité augmentée (AR), blockchain pour les NFT, et intelligence artificielle pour améliorer les avatars et interactions dans les mondes virtuels.",
      date: "18 mai 2024",
      link: "https://example.com/metaverse-tech"
    },
    {
      title: "Économie et Monétisation dans le Métaverse",
      description: "Étude des nouveaux modèles économiques: terrains virtuels, NFT, cryptomonnaies et marchés du travail émergents dans des plateformes comme Decentraland et The Sandbox.",
      date: "10 mai 2024",
      link: "https://example.com/metaverse-economy"
    },
    {
      title: "Impact Social et Éthique du Métaverse",
      description: "Exploration des transformations sociales, enjeux d'identité numérique, confidentialité des données et risques psychologiques liés à l'adoption massive des environnements virtuels.",
      date: "1 mai 2024",
      link: "https://example.com/metaverse-ethics"
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
              Je maintiens une veille informationnelle active sur les évolutions technologiques
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

          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Monitor size={20} className="text-primary" />
              <h3 className="text-xl font-medium">Veille Technologique</h3>
            </div>
            
            {technologiqueItems.length > 0 ? (
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
            ) : (
              <div className="text-center py-12 border border-dashed border-border/40 rounded-lg">
                <p className="text-foreground/70">
                  Pas d'articles de veille technologique pour le moment.
                </p>
              </div>
            )}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};

export default Veille;
