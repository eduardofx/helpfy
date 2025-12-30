
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Shield, Sparkles, ArrowRight, Search, Briefcase } from "lucide-react";
import mockupTelefoneMao from "@/assets/mockup-telefone-mao.png";
import FloatingShapes from "@/components/ui/floating-shapes";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const backgroundY2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  // Parallax for phone mockup
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const phoneRotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const phoneScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-white" id="hero">
      {/* Floating Shapes */}
      <FloatingShapes variant="mixed" density="medium" />
      
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-bl from-coral/10 via-coral/5 to-transparent"
        />
        <motion.div 
          style={{ y: backgroundY2 }}
          className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-gradient-to-tr from-navy/5 to-transparent"
        />
        <motion.div 
          style={{ y: backgroundY }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-coral/10 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: backgroundY2 }}
          className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-navy/5 rounded-full blur-3xl"
        />
      </div>
      
      <motion.div 
        style={{ y: textY, opacity }}
        className="container mx-auto px-4 pt-28 pb-16 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="max-w-2xl">
          {/* Trust Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-navy/5 backdrop-blur-sm px-4 py-2 rounded-full border border-navy/10">
              <Shield className="w-4 h-4 text-coral" />
              <span className="text-sm font-medium text-navy">Profissionais Verificados</span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy mb-6 leading-tight text-balance">
              Conectando Você aos{' '}
              <span className="text-coral relative">
                Melhores Profissionais
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    d="M2 10C50 4 150 2 298 8" 
                    stroke="hsl(var(--coral))" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    opacity="0.3"
                  />
                </svg>
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-navy/70 max-w-3xl mx-auto leading-relaxed text-balance">
              Sua busca por serviços de confiança termina aqui. Sua oportunidade de negócio começa agora.
            </p>
          </motion.div>

          {/* Dual CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          >
            <a href="#benefits-users">
              <Button className="btn-coral group flex items-center gap-3 text-lg py-6 px-8 rounded-xl">
                <Search className="w-5 h-5" />
                <span>Para Você</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#benefits-providers">
              <Button className="btn-outline-navy group flex items-center gap-3 text-lg py-6 px-8 rounded-xl">
                <Briefcase className="w-5 h-5" />
                <span>Para Profissionais</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-navy/5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-2 bg-coral/10 rounded-lg">
                <Shield className="w-5 h-5 text-coral" />
              </div>
              <div>
                <h3 className="font-semibold text-navy text-sm">Segurança</h3>
                <p className="text-xs text-navy/60">Verificação rigorosa</p>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-navy/5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-2 bg-coral/10 rounded-lg">
                <Sparkles className="w-5 h-5 text-coral" />
              </div>
              <div>
                <h3 className="font-semibold text-navy text-sm">IA Inteligente</h3>
                <p className="text-xs text-navy/60">Conexão via IA</p>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-navy/5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-2 bg-coral/10 rounded-lg">
                <svg className="w-5 h-5 text-coral" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-navy text-sm">Conveniência</h3>
                <p className="text-xs text-navy/60">Tudo em um lugar</p>
              </div>
            </motion.div>
          </motion.div>
          </div>

          {/* Phone Mockup with Parallax */}
          <motion.div
            style={{ 
              y: phoneY,
              rotate: phoneRotate,
              scale: phoneScale
            }}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="hidden lg:flex justify-center items-center relative"
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 1, 0, -1, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut"
              }}
              className="relative"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
                className="absolute -inset-8 bg-gradient-to-br from-coral/30 via-coral/10 to-navy/10 rounded-full blur-3xl"
              />
              <motion.img 
                src={mockupTelefoneMao} 
                alt="Helpfy App - Tela de Login" 
                className="relative z-10 max-h-[600px] w-auto object-contain drop-shadow-2xl"
                initial={{ filter: "blur(10px)" }}
                animate={{ filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#benefits" className="flex flex-col items-center text-navy/40 hover:text-coral transition-colors">
          <span className="text-xs mb-2 uppercase tracking-widest">Saiba mais</span>
          <motion.svg 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </motion.svg>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
