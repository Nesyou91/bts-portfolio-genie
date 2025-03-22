
import { FadeIn, FadeInUp } from './Transitions';
import { User, GraduationCap, Code, Server, FileText } from 'lucide-react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const About = () => {
  const [isSisrOpen, setIsSisrOpen] = useState(false);
  const [isSlamOpen, setIsSlamOpen] = useState(false);
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background/90 to-primary/5 relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-noise opacity-10 z-0" />
      <div className="bubble opacity-20 top-[20%] left-[15%]" style={{ animationDelay: '0s', width: '350px', height: '350px' }} />
      <div className="bubble opacity-15 bottom-[30%] right-[10%]" style={{ animationDelay: '4s', width: '300px', height: '300px' }} />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="flex items-center justify-center mb-8">
              <div className="bg-primary/10 p-3 rounded-full animate-pulse-slow">
                <User size={28} className="text-primary" />
              </div>
              <h2 className="heading-md ml-3 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">À propos</h2>
            </div>
          </FadeIn>
          
          <FadeInUp delay={100}>
            <div className="glass-card p-6 md:p-8 rounded-xl mb-8 shadow-soft hover-3d transform transition-all duration-300">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="text-lg leading-relaxed mb-4">
                    👋 Salut, moi c'est Younes
                  </p>
                  <p className="text-lg leading-relaxed mb-4">
                    Je suis actuellement étudiant au lycée Léonard de Vinci 🗺️ en deuxième année de BTS SIO (Services Informatiques aux Organisations) dans l'option SLAM (Solutions Logicielles et Applications Métier), qui en gros est une option spécialisée pour le développement 💻
                  </p>
                  <p className="text-lg leading-relaxed">
                    Toujours en cours d'étude 🎓, je vous propose sur ce portfolio de découvrir les différentes études et projets professionnels que j'ai entrepris au cours de ma carrière.
                  </p>
                </div>
                <div className="ml-4">
                  <Button 
                    className="group glass-button overflow-hidden relative" 
                    variant="secondary"
                    onClick={() => setIsCVOpen(true)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <FileText className="mr-2 text-primary group-hover:animate-bounce" />
                    <span>Voir mon CV</span>
                  </Button>
                  
                  <Dialog open={isCVOpen} onOpenChange={setIsCVOpen}>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-center text-2xl mb-4">CV - Younès EL MOURABIT</DialogTitle>
                      </DialogHeader>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-6">
                          <Card>
                            <CardHeader>
                              <CardTitle className="text-primary">À PROPOS</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                              <div className="flex items-center">
                                <span className="w-6">📧</span>
                                <span>nesyouelmou@gmail.com</span>
                              </div>
                              <div className="flex items-center">
                                <span className="w-6">🏠</span>
                                <span>19 boulevard aguado</span>
                              </div>
                              <div className="flex items-center">
                                <span className="w-6">🎂</span>
                                <span>Né le 11/11/2004</span>
                              </div>
                              <div className="flex items-center">
                                <span className="w-6">📍</span>
                                <span>Évry</span>
                              </div>
                              <div className="flex items-center">
                                <span className="w-6">📞</span>
                                <span>07 83 22 24 12</span>
                              </div>
                            </CardContent>
                          </Card>
                          
                          <Card>
                            <CardHeader>
                              <CardTitle className="text-primary">CENTRES D'INTÉRÊT</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="mb-4">
                                <h3 className="font-semibold mb-2">Languages</h3>
                                <ul className="list-inside space-y-1">
                                  <li>• Php</li>
                                  <li>• Kotlin</li>
                                  <li>• Python</li>
                                  <li>• Java</li>
                                  <li>• Javascript</li>
                                  <li>• Html</li>
                                </ul>
                              </div>
                              
                              <div>
                                <h3 className="font-semibold mb-2">Sport</h3>
                                <ul className="list-inside space-y-1">
                                  <li>• Football</li>
                                  <li>• Basket-ball</li>
                                  <li>• Tennis</li>
                                  <li>• Natation</li>
                                </ul>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                        
                        <div className="space-y-6">
                          <Card>
                            <CardHeader>
                              <CardTitle className="text-primary">DIPLÔMES ET FORMATIONS</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <div>
                                <div className="font-semibold">BTS SIO OPTION SLAM</div>
                                <div className="text-sm text-muted-foreground">De septembre 2023 à juin 2025</div>
                                <div className="text-sm">Lycée Leonard vinci Melun</div>
                              </div>
                              
                              <div>
                                <div className="font-semibold">Baccalauréat Technologique STMG</div>
                                <div className="text-sm text-muted-foreground">De septembre 2021 à juillet 2022</div>
                                <div className="text-sm">Lycée Parc des loges Évry</div>
                                <div className="text-sm">Option SIG</div>
                              </div>
                            </CardContent>
                          </Card>
                          
                          <Card>
                            <CardHeader>
                              <CardTitle className="text-primary">EXPÉRIENCES PROFESSIONNELLES</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <div>
                                <div className="font-semibold">Stage – Refonte et mise en page d'un site web sous WordPress</div>
                                <div className="text-sm text-muted-foreground">De janvier 2025 à février 2025</div>
                                <div className="text-sm">Omac Torcy</div>
                                <div className="text-sm mt-1">
                                  Refonte du site d'une association : amélioration du design, mise en page des contenus, personnalisation du thème et optimisation de la navigation.
                                </div>
                              </div>
                              
                              <div>
                                <div className="font-semibold">Stage de 1er année BTS SIO</div>
                                <div className="text-sm text-muted-foreground">De mai 2024 à juin 2024</div>
                                <div className="text-sm">Linksi Lens</div>
                                <div className="font-medium mt-1">Développeur Web – Conception de site pour un club de football</div>
                                <div className="text-sm mt-1">
                                  Création d'un site web avec formulaire d'inscription, présentation des équipes et calendrier des matchs. Développement d'une interface moderne, intuitive et responsive.
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={200}>
            <div className="glass-card p-6 md:p-8 rounded-xl relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -left-20 -top-20 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
              
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-2 rounded-full animate-float">
                  <GraduationCap size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold ml-3">Qu'est ce que le BTS SIO 🎓 ?</h3>
              </div>
              
              <p className="text-lg leading-relaxed mb-6">
                Avant de commencer à parler de moi, je vous propose de présenter en premier lieu ma filière dont je suis affecté
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Le Brevet de Technicien Supérieur aux Services Informatiques aux Organisations (BTS SIO), s'adresse à ceux qui souhaitent se former en deux ans aux métiers d'administrateur réseau ou de développeur. Pour par la suite intégré directement le marché du travail ou continuer des études, dans le domaine de l'informatique.
              </p>
              
              <h4 className="text-lg font-semibold mb-4">Le BTS SIO propose deux spécialités :</h4>
              
              <div className="space-y-4">
                <Collapsible open={isSisrOpen} onOpenChange={setIsSisrOpen} className="border border-border rounded-lg overflow-hidden">
                  <CollapsibleTrigger className="flex items-center w-full p-4 text-left bg-secondary/30 hover:bg-secondary/50 transition-colors">
                    <Server size={20} className="text-primary mr-2" />
                    <span className="font-medium">Option SISR</span>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 bg-background/50 animate-accordion-down">
                    <p className="mb-3">
                      L'option Solution d'infrastructure, systèmes et réseaux forme des professionnels des réseaux et équipements informatiques (installation, maintenance, sécurité). En sortant d'un BTS SIO SISR, vous serez capables de gérer et d'administrer le réseau d'une société et d'assurer sa sécurité et sa maintenance.
                    </p>
                    <p className="font-medium mb-2">Les techniciens supérieurs en informatique option SISR, peuvent accéder aux métiers de :</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Administrateur systèmes et réseaux</li>
                      <li>Informaticien support et déploiement</li>
                      <li>Pilote d'exploitation</li>
                      <li>Support systèmes et réseaux</li>
                      <li>Technicien d'infrastructure</li>
                      <li>Technicien de production</li>
                      <li>Technicien micro et réseaux</li>
                    </ul>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible open={isSlamOpen} onOpenChange={setIsSlamOpen} className="border border-primary/20 rounded-lg overflow-hidden shadow-soft">
                  <CollapsibleTrigger className="flex items-center w-full p-4 text-left bg-primary/10 hover:bg-primary/20 transition-colors">
                    <Code size={20} className="text-primary mr-2" />
                    <span className="font-medium">Option SLAM 👈<span className="text-primary ml-2 italic">(la filière que j'ai choisie)</span></span>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 bg-background/50 animate-accordion-down">
                    <p className="mb-3">
                      L'option Solutions logicielles et applications métiers forme des spécialistes des logiciels (rédaction d'un cahier des charges, formulation des besoins et spécifications, développement, intégration au sein de la société).
                    </p>
                    <p className="font-medium mb-2">Les techniciens supérieurs en informatique option SLAM, sont préparés aux métiers de :</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Développeur d'applications informatiques</li>
                      <li>Développeur informatique</li>
                      <li>Analyste d'applications ou d'études</li>
                      <li>Analyste programmeur</li>
                      <li>Programmeur analyste</li>
                      <li>Programmeur d'applications</li>
                      <li>Responsable des services applicatifs</li>
                      <li>Technicien d'études informatiques</li>
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};

export default About;
