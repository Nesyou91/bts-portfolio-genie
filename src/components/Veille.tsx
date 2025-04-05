
import { FadeInUp, StaggeredChildren } from './Transitions';
import { Monitor, InfoIcon } from 'lucide-react';
import { Button } from './ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

interface VeilleItemProps {
  title: string;
  description: React.ReactNode;
  date?: string;
  link?: string;
  delay?: number;
}

const VeilleItem = ({ title, description, link, delay = 0 }: VeilleItemProps) => {
  return (
    <FadeInUp delay={delay} className="mb-8 last:mb-0">
      <div className="rounded-lg border border-border/40 bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <div className="text-foreground/70">{description}</div>
      </div>
    </FadeInUp>
  );
};

const Veille = () => {
  const technologiqueItems: VeilleItemProps[] = [
    {
      title: "Le Métaverse : L'avenir des mondes virtuels",
      description: (
        <div className="space-y-4">
          <div>
            <h4 className="text-md font-medium mb-2">📌 Étape 1 : Fondations technologiques</h4>
            <p className="mb-2">
              Le Métaverse repose sur la convergence de technologies immersives comme la réalité virtuelle (environnements 3D complets) 
              et la réalité augmentée (superposition d'éléments virtuels sur le réel). La blockchain sécurise les transactions et établit 
              la propriété des biens numériques via des NFT (certificats numériques uniques). Les infrastructures réseaux et l'IA complètent 
              cet écosystème en permettant des interactions fluides entre utilisateurs.
            </p>
          </div>
          <div>
            <h4 className="text-md font-medium mb-2">🚀 Étape 2 : Modèle économique émergent</h4>
            <p className="mb-2">
              Une économie parallèle se développe dans ces espaces numériques avec l'achat de terrains virtuels, la création de biens numériques 
              et l'organisation d'événements payants. Des marques comme Nike ou Gucci y commercialisent déjà des produits virtuels, tandis que de 
              nouveaux métiers apparaissent (architectes 3D, organisateurs d'événements virtuels). Les NFT et cryptomonnaies servent de base à ces 
              échanges de valeur.
            </p>
          </div>
          <div>
            <h4 className="text-md font-medium mb-2">⚠️ Étape 3 : Impacts sociétaux et perspectives</h4>
            <p className="mb-2">
              Le Métaverse transforme nos interactions sociales en créant des espaces communautaires virtuels où le travail, le divertissement et la 
              socialisation se réinventent. Des défis importants subsistants : fracture numérique, questions de confidentialité, risques psychologiques 
              d'addiction. L'avenir du Métaverse dépendra de l'interopérabilité entre les plateformes et de la création d'un cadre éthique et juridique 
              adapté à ces nouveaux territoires numériques.
            </p>
          </div>
        </div>
      ),
      date: "5 avril 2025",
      link: "https://example.com/metaverse"
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
