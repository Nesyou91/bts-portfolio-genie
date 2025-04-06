
import { Button } from "./ui/button";
import { FadeIn } from "./Transitions";
import SectionTitle from "./SectionTitle";
import { Calendar, Code, BookOpen, FileText } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          subtitle="À PROPOS"
          title="Qui suis-je ?"
          description="Étudiant passionné en BTS SIO option SLAM, je me spécialise dans le développement d'applications et la création de solutions digitales."
          icon={<BookOpen className="h-5 w-5" />}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-12">
          {/* Left column - About me text */}
          <FadeIn>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h3 className="text-2xl font-bold mb-4">Mon parcours</h3>
              <p>
                Je suis actuellement étudiant en BTS SIO (Services Informatiques aux Organisations) option SLAM 
                (Solutions Logicielles et Applications Métiers) au lycée Léonard de Vinci à Melun.
              </p>
              <p>
                Passionné par le développement web et la programmation, je me forme continuellement aux dernières technologies 
                pour créer des applications modernes et performantes.
              </p>
              <p>
                Mon objectif est de poursuivre mes études en alternance dans le domaine du développement web après 
                l'obtention de mon BTS, afin d'approfondir mes connaissances et de gagner en expérience professionnelle.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                <Button variant="outline" className="gap-2">
                  <Code className="h-4 w-4" /> Portfolio
                </Button>
                <Button variant="outline" className="gap-2">
                  <Calendar className="h-4 w-4" /> Parcours
                </Button>
              </div>
            </div>
          </FadeIn>

          {/* Right column - CV Details */}
          <FadeIn delay={100}>
            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold mb-6 border-b pb-3">YOUNÈS EL MOURABIT</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold flex items-center mb-3">
                    <FileText className="h-4 w-4 mr-2 text-primary" /> Informations personnelles
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>nesyouelmou@gmail.com</li>
                    <li>19 boulevard aguado, Evry</li>
                    <li>07 83 22 24 12</li>
                    <li>Né le 11/11/2004</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold flex items-center mb-3">
                    <Code className="h-4 w-4 mr-2 text-primary" /> Languages
                  </h4>
                  <ul className="grid grid-cols-2 gap-2 text-sm">
                    <li className="flex items-center"><span className="w-1 h-1 rounded-full bg-primary mr-2"></span>PHP</li>
                    <li className="flex items-center"><span className="w-1 h-1 rounded-full bg-primary mr-2"></span>Kotlin</li>
                    <li className="flex items-center"><span className="w-1 h-1 rounded-full bg-primary mr-2"></span>Python</li>
                    <li className="flex items-center"><span className="w-1 h-1 rounded-full bg-primary mr-2"></span>Java</li>
                    <li className="flex items-center"><span className="w-1 h-1 rounded-full bg-primary mr-2"></span>Javascript</li>
                    <li className="flex items-center"><span className="w-1 h-1 rounded-full bg-primary mr-2"></span>HTML</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold flex items-center mb-3">
                    <Calendar className="h-4 w-4 mr-2 text-primary" /> Diplômes et formations
                  </h4>
                  <ul className="space-y-4 text-sm">
                    <li>
                      <div className="font-medium">BTS SIO OPTION SLAM</div>
                      <div className="text-xs text-muted-foreground">De septembre 2023 à juin 2025</div>
                      <div>Lycée Leonard vinci - Melun</div>
                    </li>
                    <li>
                      <div className="font-medium">Baccalauréat Technologique STMG</div>
                      <div className="text-xs text-muted-foreground">De septembre 2021 à juillet 2022</div>
                      <div>Lycée Parc des loges - Évry</div>
                      <div className="text-xs">Option SIG</div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold flex items-center mb-3">
                    <Calendar className="h-4 w-4 mr-2 text-primary" /> Expériences professionnelles
                  </h4>
                  <ul className="space-y-4 text-sm">
                    <li>
                      <div className="font-medium">Stage – Refonte et mise en page d'un site web sous WordPress</div>
                      <div className="text-xs text-muted-foreground">De janvier 2025 à février 2025</div>
                      <div className="font-medium">Omac - Torcy</div>
                      <div className="text-xs">Refonte du site d'une association : amélioration du design, mise en page des contenus, personnalisation du thème et optimisation de la navigation.</div>
                    </li>
                    <li>
                      <div className="font-medium">Stage de 1er année BTS SIO</div>
                      <div className="text-xs text-muted-foreground">De mai 2024 à juin 2024</div>
                      <div className="font-medium">Linksi - Lens</div>
                      <div className="text-xs">Développeur Web – Conception de site pour un club de football. Création d'un site web avec formulaire d'inscription, présentation des équipes et calendrier des matchs. Développement d'une interface moderne, intuitive et responsive.</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;
