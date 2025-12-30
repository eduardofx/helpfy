
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Apple, Smartphone } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import mockupPhone from "@/assets/mockup-phone.png";

const DownloadSection = () => {
  const ref = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY1 = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const backgroundY2 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const cardScale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  
  // Parallax for phone mockup
  const phoneY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const phoneRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-8, 0, 8]);
  const phoneScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.05]);
  const phoneGlowY = useTransform(scrollYProgress, [0, 1], [15, -15]);

  return (
    <section id="download" ref={ref} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <motion.div 
            style={{ scale: cardScale }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-coral to-coral-dark rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Parallax background elements */}
            <motion.div 
              style={{ y: backgroundY1 }}
              className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"
            />
            <motion.div 
              style={{ y: backgroundY2 }}
              className="absolute bottom-0 left-0 w-48 h-48 bg-navy/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"
            />
            <motion.div 
              style={{ y: backgroundY1 }}
              className="absolute top-1/2 left-1/2 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"
            />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Phone Mockup with Parallax */}
              <motion.div
                style={{
                  y: phoneY,
                  rotate: phoneRotate,
                  scale: phoneScale
                }}
                className="order-2 lg:order-1 flex justify-center"
              >
                <motion.div
                  animate={{ 
                    y: [0, -12, 0],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  <motion.div
                    style={{ y: phoneGlowY }}
                    className="absolute -inset-4 bg-white/20 rounded-3xl blur-2xl"
                  />
                  <motion.img 
                    src={mockupPhone} 
                    alt="Helpfy App Icon na Home do iPhone" 
                    className="max-w-sm w-full h-auto object-contain drop-shadow-2xl rounded-2xl relative z-10"
                    initial={{ filter: "blur(8px)", opacity: 0 }}
                    whileInView={{ filter: "blur(0px)", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  />
                </motion.div>
              </motion.div>

              {/* Text Content */}
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
                >
                  Pronto para Começar?
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-white/80 text-lg mb-8"
                >
                  Baixe o Helpfy agora e conecte-se aos melhores profissionais ou expanda seus negócios.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }}>
                    <Button className="bg-white text-navy hover:bg-white/90 group flex items-center gap-3 py-6 px-8 rounded-xl shadow-lg w-full sm:w-auto">
                      <Apple className="w-6 h-6" />
                      <div className="text-left">
                        <div className="text-xs opacity-70">Baixar na</div>
                        <div className="font-bold">App Store</div>
                      </div>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }}>
                    <Button className="bg-navy text-white hover:bg-navy-light group flex items-center gap-3 py-6 px-8 rounded-xl shadow-lg w-full sm:w-auto">
                      <Smartphone className="w-6 h-6" />
                      <div className="text-left">
                        <div className="text-xs opacity-70">Baixar no</div>
                        <div className="font-bold">Google Play</div>
                      </div>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default DownloadSection;
