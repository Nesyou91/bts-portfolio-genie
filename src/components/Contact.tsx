
import { useState } from 'react';
import { FadeInUp } from './Transitions';
import { Mail, Phone, MapPin, Send, LucideIcon } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactCard = ({ 
  icon: Icon, 
  title, 
  info, 
  link,
  delay = 0
}: { 
  icon: LucideIcon;
  title: string;
  info: string;
  link?: string;
  delay?: number;
}) => {
  return (
    <FadeInUp delay={delay}>
      <div className="glass rounded-lg p-6 flex flex-col items-center text-center hover:shadow-glossy transition-all duration-300 hover:translate-y-[-5px]">
        <div className="bg-primary/10 text-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
          <Icon size={24} />
        </div>
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        {link ? (
          <a 
            href={link} 
            className="text-foreground/70 hover:text-primary transition-colors"
          >
            {info}
          </a>
        ) : (
          <p className="text-foreground/70">{info}</p>
        )}
      </div>
    </FadeInUp>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message envoyé",
        description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "contact@btssio-portfolio.fr",
      link: "mailto:contact@btssio-portfolio.fr"
    },
    {
      icon: Phone,
      title: "Téléphone",
      info: "+33 6 12 34 56 78",
      link: "tel:+33612345678"
    },
    {
      icon: MapPin,
      title: "Localisation",
      info: "Paris, France"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <FadeInUp>
            <span className="chip bg-primary/10 text-primary mb-2">Contact</span>
          </FadeInUp>
          <FadeInUp delay={100}>
            <h2 className="heading-lg mb-4">Parlons de votre projet</h2>
          </FadeInUp>
          <FadeInUp delay={200}>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Vous avez un projet en tête ou souhaitez discuter d'une opportunité professionnelle ? 
              N'hésitez pas à me contacter, je vous répondrai dans les meilleurs délais.
            </p>
          </FadeInUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <ContactCard
              key={index}
              icon={info.icon}
              title={info.title}
              info={info.info}
              link={info.link}
              delay={300 + (index * 100)}
            />
          ))}
        </div>

        <FadeInUp delay={600}>
          <div className="glass rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-display font-semibold mb-6 text-center">Envoyez-moi un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground/70 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Sujet de votre message"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Votre message"
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button-primary inline-flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Envoyer le message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};

export default Contact;
