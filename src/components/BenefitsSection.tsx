
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Shield, 
  Clock, 
  Sparkles, 
  Star,
  Calendar,
  CreditCard,
  Users,
  TrendingUp,
  Award,
  Wallet,
  BarChart3,
  Headphones
} from "lucide-react";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation";
import mockupTelas from "@/assets/mockup-telas.png";
import FloatingShapes from "@/components/ui/floating-shapes";

const BenefitsSection = () => {
  const ref = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY1 = useTransform(scrollYProgress, [0, 1], [-50, 100]);
  const backgroundY2 = useTransform(scrollYProgress, [0, 1], [50, -100]);
  
  // Parallax for mockup image
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const imageRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -5]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.02]);
  const glowY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const userBenefits = [
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "Profissionais verificados com análise de antecedentes e seguro de serviço."
    },
    {
      icon: Clock,
      title: "Agendamento Flexível",
      description: "Marque serviços no horário que funciona melhor para você."
    },
    {
      icon: Sparkles,
      title: "Conexão Inteligente",
      description: "IA que conecta você ao profissional ideal para sua necessidade."
    },
    {
      icon: Star,
      title: "Avaliações Reais",
      description: "Sistema de avaliações para garantir qualidade."
    },
    {
      icon: CreditCard,
      title: "Pagamento Seguro",
      description: "Transações protegidas com garantia de satisfação.",
      comingSoon: true
    },
    {
      icon: Calendar,
      title: "Tudo em Um App",
      description: "Busque, contrate, pague e avalie sem sair da plataforma."
    }
  ];

  const providerBenefits = [
    {
      icon: Users,
      title: "Novos Clientes",
      description: "Receba propostas de clientes qualificados diretamente no seu perfil."
    },
    {
      icon: TrendingUp,
      title: "Maior Visibilidade",
      description: "Destaque seu perfil e alcance mais pessoas na sua região."
    },
    {
      icon: Award,
      title: "Construa Reputação",
      description: "Sistema de avaliações que valoriza seu trabalho."
    },
    {
      icon: Wallet,
      title: "Receba com Segurança",
      description: "Pagamentos garantidos direto na sua conta.",
      comingSoon: true
    },
    {
      icon: BarChart3,
      title: "Gestão Simplificada",
      description: "Dashboard completo para gerenciar agenda e recebíveis."
    },
    {
      icon: Headphones,
      title: "Suporte Dedicado",
      description: "Equipe pronta para ajudar você a crescer."
    }
  ];

  return (
    <section ref={ref} className="section-padding bg-background relative overflow-hidden" id="benefits">
      {/* Floating Shapes */}
      <FloatingShapes variant="coral" density="low" />
      
      {/* Parallax Background decorations */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <motion.div 
        style={{ y: backgroundY1 }}
        className="absolute -top-20 -right-20 w-96 h-96 bg-coral/5 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: backgroundY2 }}
        className="absolute -bottom-20 -left-20 w-80 h-80 bg-navy/5 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation className="text-center mb-16">
          <span className="inline-block text-coral font-semibold text-sm uppercase tracking-widest mb-4">
            Benefícios
          </span>
          <h2 className="section-heading text-navy">
            Como o Helpfy Ajuda Você?
          </h2>
          <p className="text-lg text-navy/60 max-w-2xl mx-auto">
            Seja você um cliente em busca de serviços ou um profissional querendo expandir seus negócios.
          </p>
        </ScrollAnimation>

        {/* For Users */}
        <div className="mb-20" id="benefits-users">
          <ScrollAnimation className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-coral/30"></div>
            <span className="text-coral font-semibold uppercase tracking-widest text-sm">Para Você</span>
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-coral/30"></div>
          </ScrollAnimation>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userBenefits.map((benefit, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="group p-6 bg-white rounded-2xl border border-navy/5 shadow-sm hover:shadow-xl hover:border-coral/20 transition-all duration-300 relative"
                >
                  {benefit.comingSoon && (
                    <span className="absolute top-4 right-4 text-xs font-semibold bg-coral/10 text-coral px-2 py-1 rounded-full">
                      Em Breve
                    </span>
                  )}
                  <div className="p-3 bg-coral/10 rounded-xl inline-block mb-4 group-hover:bg-coral group-hover:scale-110 transition-all duration-300">
                    <benefit.icon className="w-6 h-6 text-coral group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{benefit.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* For Providers */}
        <div id="benefits-providers">
          <ScrollAnimation className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-navy/30"></div>
            <span className="text-navy font-semibold uppercase tracking-widest text-sm">Para Profissionais</span>
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-navy/30"></div>
          </ScrollAnimation>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {providerBenefits.map((benefit, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="group p-6 bg-white rounded-2xl border border-navy/5 shadow-sm hover:shadow-xl hover:border-navy/20 transition-all duration-300 relative"
                >
                  {benefit.comingSoon && (
                    <span className="absolute top-4 right-4 text-xs font-semibold bg-coral/10 text-coral px-2 py-1 rounded-full">
                      Em Breve
                    </span>
                  )}
                  <div className="p-3 bg-navy/10 rounded-xl inline-block mb-4 group-hover:bg-navy group-hover:scale-110 transition-all duration-300">
                    <benefit.icon className="w-6 h-6 text-navy group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{benefit.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* App Showcase with Parallax */}
        <div className="mt-20" style={{ perspective: "1000px" }}>
          <motion.div 
            style={{ 
              y: imageY,
              rotateX: imageRotateX,
              scale: imageScale
            }}
            whileHover={{ scale: 1.01, y: -8, rotateX: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-5xl mx-auto"
          >
            <motion.div 
              style={{ y: glowY }}
              className="absolute -inset-8 bg-gradient-to-br from-coral/15 via-transparent to-navy/15 rounded-3xl blur-3xl"
            />
            <motion.img 
              src={mockupTelas} 
              alt="Helpfy App - Todas as Funcionalidades" 
              className="relative z-10 w-full h-auto object-contain rounded-2xl drop-shadow-xl"
              initial={{ filter: "blur(10px)", opacity: 0 }}
              whileInView={{ filter: "blur(0px)", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
