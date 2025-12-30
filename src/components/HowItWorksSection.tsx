
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, MessageSquare, CreditCard, Star, UserPlus, Bell, CheckCircle, Wallet } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import helpfyTelasMockup from "@/assets/helpfy-telas-mockup.png";

const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax for mockup image
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-3, 0, 3]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98]);
  const glowY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const userSteps = [
    {
      icon: Search,
      step: "01",
      title: "Busque",
      description: "Encontre profissionais qualificados para o serviço que você precisa."
    },
    {
      icon: MessageSquare,
      step: "02",
      title: "Conecte-se e Negocie",
      description: "Converse diretamente, alinhe expectativas e feche o acordo."
    },
    {
      icon: CreditCard,
      step: "03",
      title: "Pague com Segurança",
      description: "Realize o pagamento diretamente para o profissional."
    },
    {
      icon: Star,
      step: "04",
      title: "Avalie o Serviço",
      description: "Compartilhe sua experiência e ajude outros usuários."
    }
  ];

  const providerSteps = [
    {
      icon: UserPlus,
      step: "01",
      title: "Crie seu Perfil",
      description: "Cadastre-se, adicione suas habilidades e portfólio."
    },
    {
      icon: Bell,
      step: "02",
      title: "Receba Oportunidades",
      description: "A IA conecta você a clientes que precisam do seu serviço."
    },
    {
      icon: CheckCircle,
      step: "03",
      title: "Realize o Serviço",
      description: "Entregue qualidade e construa sua reputação."
    },
    {
      icon: Wallet,
      step: "04",
      title: "Receba seu Pagamento",
      description: "Dinheiro seguro direto do seu cliente."
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-white relative overflow-hidden" id="how-it-works">
      <div className="container mx-auto px-4">
        <ScrollAnimation className="text-center mb-12">
          <span className="inline-block text-coral font-semibold text-sm uppercase tracking-widest mb-4">
            Passo a Passo
          </span>
          <h2 className="section-heading text-navy">
            Como Funciona
          </h2>
          <p className="text-lg text-navy/60 max-w-2xl mx-auto">
            Simples, rápido e seguro. Veja como é fácil usar o Helpfy.
          </p>
        </ScrollAnimation>

        {/* App Screens Showcase with Parallax */}
        <div className="mb-16">
          <motion.div 
            style={{ 
              y: imageY,
              rotate: imageRotate,
              scale: imageScale
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative max-w-4xl mx-auto"
          >
            <motion.div 
              style={{ y: glowY }}
              className="absolute -inset-4 bg-gradient-to-r from-coral/15 via-navy/10 to-coral/15 rounded-3xl blur-2xl"
            />
            <motion.img 
              src={helpfyTelasMockup} 
              alt="Helpfy App - Múltiplas Telas" 
              className="relative z-10 w-full h-auto object-contain drop-shadow-xl"
              initial={{ filter: "blur(8px)" }}
              whileInView={{ filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* For Users */}
          <ScrollAnimation direction="left">
            <div className="relative">
              <div className="text-center mb-10">
                <span className="inline-flex items-center gap-2 bg-coral/10 text-coral font-semibold px-4 py-2 rounded-full text-sm">
                  <Search className="w-4 h-4" />
                  Para Quem Busca Serviços
                </span>
              </div>
              
              <div className="relative">
                {/* Connection Line */}
                <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-coral via-coral/50 to-coral/20 hidden md:block"></div>
                
                <div className="space-y-8">
                  {userSteps.map((step, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      className="flex gap-6 group"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="relative flex-shrink-0"
                      >
                        <div className="w-16 h-16 rounded-2xl bg-coral/10 flex items-center justify-center group-hover:bg-coral transition-all duration-300 relative z-10">
                          <step.icon className="w-7 h-7 text-coral group-hover:text-white transition-colors" />
                        </div>
                        <span className="absolute -top-2 -right-2 bg-coral text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                          {step.step.replace('0', '')}
                        </span>
                      </motion.div>
                      <div className="pt-2">
                        <h3 className="text-lg font-bold text-navy mb-1">{step.title}</h3>
                        <p className="text-navy/60 text-sm">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* For Providers */}
          <ScrollAnimation direction="right">
            <div className="relative">
              <div className="text-center mb-10">
                <span className="inline-flex items-center gap-2 bg-navy/10 text-navy font-semibold px-4 py-2 rounded-full text-sm">
                  <UserPlus className="w-4 h-4" />
                  Para Profissionais
                </span>
              </div>
              
              <div className="relative">
                {/* Connection Line */}
                <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-navy via-navy/50 to-navy/20 hidden md:block"></div>
                
                <div className="space-y-8">
                  {providerSteps.map((step, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      className="flex gap-6 group"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        className="relative flex-shrink-0"
                      >
                        <div className="w-16 h-16 rounded-2xl bg-navy/10 flex items-center justify-center group-hover:bg-navy transition-all duration-300 relative z-10">
                          <step.icon className="w-7 h-7 text-navy group-hover:text-white transition-colors" />
                        </div>
                        <span className="absolute -top-2 -right-2 bg-navy text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                          {step.step.replace('0', '')}
                        </span>
                      </motion.div>
                      <div className="pt-2">
                        <h3 className="text-lg font-bold text-navy mb-1">{step.title}</h3>
                        <p className="text-navy/60 text-sm">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
