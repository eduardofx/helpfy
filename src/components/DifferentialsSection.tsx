
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Sparkles, Smartphone, CheckCircle, Lock, Zap } from "lucide-react";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation";
import FloatingShapes from "@/components/ui/floating-shapes";

const DifferentialsSection = () => {
  const ref = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY1 = useTransform(scrollYProgress, [0, 1], [-80, 120]);
  const backgroundY2 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  const differentials = [
    {
      icon: Shield,
      title: "Segurança Inabalável",
      description: "Verificação rigorosa de antecedentes, sistema de avaliações e opção de seguro de serviço para sua total tranquilidade.",
      features: ["Verificação de documentos", "Análise de antecedentes", "Seguro opcional"]
    },
    {
      icon: Sparkles,
      title: "Inteligência que Conecta",
      description: "Algoritmos de IA e Machine Learning que conectam você ao profissional mais adequado baseado em localização, avaliações e necessidades específicas.",
      features: ["Match por IA", "Recomendações personalizadas", "Aprendizado contínuo"]
    },
    {
      icon: Smartphone,
      title: "Conveniência Total",
      description: "Chat integrado, agendamento flexível e pagamentos seguros. Tudo que você precisa em um só lugar, na palma da sua mão.",
      features: ["Chat em tempo real", "Agenda inteligente", "Pagamento direto"]
    }
  ];

  return (
    <section ref={ref} className="section-padding bg-navy text-white relative overflow-hidden" id="differentials">
      {/* Floating Shapes */}
      <FloatingShapes variant="white" density="medium" />
      
      {/* Parallax Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          style={{ y: backgroundY1, scale: backgroundScale }}
          className="absolute top-0 right-0 w-96 h-96 bg-coral/10 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: backgroundY2 }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: backgroundY1 }}
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-coral/5 rounded-full blur-3xl"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation className="text-center mb-16">
          <span className="inline-block text-coral font-semibold text-sm uppercase tracking-widest mb-4">
            Diferenciais
          </span>
          <h2 className="section-heading text-white">
            Por Que Escolher o Helpfy?
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Três pilares que nos tornam a escolha certa para você.
          </p>
        </ScrollAnimation>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8" staggerDelay={0.2}>
          {differentials.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div 
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 h-full"
              >
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="p-4 bg-coral/20 rounded-2xl inline-block mb-6 transition-transform"
                >
                  <item.icon className="w-8 h-8 text-coral" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/70 mb-6 leading-relaxed">{item.description}</p>
                <ul className="space-y-3">
                  {item.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className="flex items-center gap-3 text-sm text-white/80"
                    >
                      <CheckCircle className="w-4 h-4 text-coral flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollAnimation delay={0.6}>
          <div className="mt-16 flex flex-wrap justify-center gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 text-white/60"
            >
              <Lock className="w-5 h-5" />
              <span className="text-sm">Conformidade LGPD</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 text-white/60"
            >
              <Zap className="w-5 h-5" />
              <span className="text-sm">Suporte 24/7</span>
            </motion.div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default DifferentialsSection;
