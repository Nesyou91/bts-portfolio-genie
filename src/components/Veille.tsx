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
      title: "Technologies du Métaverse",
      description: (
        <div className="space-y-4">
          <div>
            <h4 className="text-md font-medium mb-2">📌 Tendances actuelles</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Utilisation de la réalité virtuelle (VR) et de la réalité augmentée (AR) pour créer des mondes immersifs.</li>
              <li>Intégration de la blockchain pour sécuriser les transactions et la propriété des biens virtuels (NFT).</li>
              <li>Amélioration des avatars et des interactions grâce à l'intelligence artificielle.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-medium mb-2">🚀 Exemples concrets</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Meta (ex-Facebook) développe Horizon Worlds, un espace social en VR.</li>
              <li>Apple et Google investissent dans les lunettes AR pour le Metaverse.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-medium mb-2">⚠️ Enjeux et limites</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Matériel coûteux et manque de normes technologiques.</li>
              <li>Performances limitées à cause des infrastructures réseau actuelles.</li>
            </ul>
          </div>
        </div>
      ),
      date: "18 mai 2024",
      link: "https://example.com/metaverse-tech"
    },
    {
      title: "Économie et Monétisation dans le Métaverse",
      description: (
        <div className="space-y-4">
          <div>
            <h4 className="text-md font-medium mb-2">📌 Tendances actuelles</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Achat et vente de terrains virtuels sur des plateformes comme Decentraland et The Sandbox.</li>
              <li>Développement d'un nouveau marché du travail (événements, concerts, boutiques virtuelles).</li>
              <li>Croissance des NFT et cryptomonnaies pour échanger des biens virtuels.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-medium mb-2">🚀 Exemples concrets</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Des entreprises comme Nike et Gucci vendent des vêtements numériques pour avatars.</li>
              <li>Des artistes organisent des concerts virtuels dans Fortnite et Roblox.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-medium mb-2">⚠️ Enjeux et limites</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Risque de spéculation et de bulle économique.</li>
              <li>Sécurité des transactions et arnaques liées aux NFT.</li>
            </ul>
          </div>
        </div>
      ),
      date: "10 mai 2024",
      link: "https://example.com/metaverse-economy"
    },
    {
      title: "Impact Social et Éthique du Métaverse",
      description: (
        <div className="space-y-4">
          <div>
            <h4 className="text-md font-medium mb-2">📌 Tendances actuelles</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Transformation des interactions sociales avec des réunions et événements en VR.</li>
              <li>Question de l'identité numérique et de la confidentialité des données.</li>
              <li>Impact psychologique et risque d'addiction.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-medium mb-2">🚀 Exemples concrets</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Des entreprises testent des bureaux virtuels pour le travail à distance.</li>
              <li>Des associations alertent sur les risques d'isolement et de cyberharcèlement.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-medium mb-2">⚠️ Enjeux et limites</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Protection des mineurs face aux contenus inappropriés.</li>
              <li>Contrôle des données personnelles par les grandes entreprises du Métaverse.</li>
            </ul>
          </div>
        </div>
      ),
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
