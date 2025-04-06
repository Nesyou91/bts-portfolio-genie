
import { Rocket, Award, BookOpen, Users } from 'lucide-react';
import { FadeInUp } from './Transitions';
import CVDialog from './CVDialog';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <FadeInUp>
              <div className="rounded-lg overflow-hidden relative z-10">
                <img 
                  src="/lovable-uploads/ceb8ad49-ffff-4595-bd07-9f5060a9208d.png" 
                  alt="Younes El Mourabit" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Background elements */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-primary rounded-lg z-0"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-full"></div>
            </FadeInUp>
          </div>
          
          {/* Right Side - Content */}
          <div>
            <FadeInUp className="space-y-6">
              <p className="text-primary font-semibold">À propos de moi</p>
              <h2 className="text-3xl md:text-4xl font-bold">Étudiant en BTS SIO passionné par le développement web et logiciel</h2>
              <p className="text-muted-foreground">
                Je suis un étudiant en BTS Services Informatiques aux Organisations, 
                option SLAM (Solutions Logicielles et Applications Métier). 
                Passionné par le développement web et la création d'applications, 
                je me forme constamment pour maîtriser les dernières technologies 
                et méthodologies du secteur.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Rocket className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Expérience</h3>
                    <p className="text-sm text-muted-foreground">Projets académiques et personnels</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Award className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Formation</h3>
                    <p className="text-sm text-muted-foreground">BTS SIO option SLAM</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <BookOpen className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Compétences</h3>
                    <p className="text-sm text-muted-foreground">Développement web et logiciel</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Users className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Collaboration</h3>
                    <p className="text-sm text-muted-foreground">Travail en équipe et communication</p>
                  </div>
                </div>
              </div>
              
              {/* CV Button */}
              <div className="mt-8">
                <CVDialog />
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
