
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Star, Quote } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import FloatingShapes from "@/components/ui/floating-shapes";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax effects
  const backgroundY1 = useTransform(scrollYProgress, [0, 1], [-60, 80]);
  const backgroundY2 = useTransform(scrollYProgress, [0, 1], [40, -60]);
  const quoteY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const cardY = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -20]);
  
  const testimonials = [
    {
      name: "Maria Silva",
      profession: "Designer de Interiores",
      location: "São Paulo, SP",
      text: "O Helpfy mudou meu negócio completamente. Consigo encontrar novos clientes diariamente e gerenciar todos os meus projetos em um só lugar.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=200&q=80"
    },
    {
      name: "Carlos Mendes",
      profession: "Técnico de TI",
      location: "Rio de Janeiro, RJ",
      text: "Desde que comecei a usar o Helpfy, minha agenda está sempre cheia. A plataforma facilita o contato e o sistema de pagamento é muito seguro.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&q=80"
    },
    {
      name: "Ana Paula",
      profession: "Reformas Residenciais",
      location: "Belo Horizonte, MG",
      text: "Como profissional autônoma, o Helpfy me ajuda a encontrar clientes que valorizam meu trabalho. A verificação de perfil passa confiança.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section ref={ref} className="section-padding bg-background relative overflow-hidden" id="testimonials">
      {/* Floating Shapes */}
      <FloatingShapes variant="mixed" density="low" />
      
      {/* Parallax Background */}
      <motion.div 
        style={{ y: backgroundY1 }}
        className="absolute -top-20 -right-20 w-80 h-80 bg-coral/8 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: backgroundY2 }}
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-navy/5 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: backgroundY1 }}
        className="absolute top-1/2 left-1/4 w-64 h-64 bg-coral/5 rounded-full blur-3xl"
      />
      <div className="container mx-auto px-4">
        <ScrollAnimation className="text-center mb-16">
          <span className="inline-block text-coral font-semibold text-sm uppercase tracking-widest mb-4">
            Depoimentos
          </span>
          <h2 className="section-heading text-navy">
            O Que Dizem Nossos Usuários
          </h2>
        </ScrollAnimation>
        
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            style={{ y: quoteY }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Quote className="absolute -top-4 -left-4 w-16 h-16 text-coral/10" />
          </motion.div>
          
          <motion.div 
            style={{ y: cardY }}
            className="relative min-h-[350px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-navy/5"
              >
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    </motion.div>
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-navy/80 text-center mb-8 leading-relaxed">
                  "{testimonials[activeIndex].text}"
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <motion.img 
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    src={testimonials[activeIndex].avatar} 
                    alt={testimonials[activeIndex].name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-coral/20" 
                  />
                  <div className="text-left">
                    <p className="font-bold text-navy">{testimonials[activeIndex].name}</p>
                    <p className="text-sm text-navy/60">{testimonials[activeIndex].profession} • {testimonials[activeIndex].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? 'w-8 bg-coral' : 'w-2 bg-navy/20 hover:bg-navy/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
