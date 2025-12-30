
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down';
}

export const Parallax = ({ 
  children, 
  className = '', 
  speed = 0.5,
  direction = 'up'
}: ParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const multiplier = direction === 'up' ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], [0, 200 * speed * multiplier]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

interface ParallaxBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export const ParallaxBackground = ({ className = '', children }: ParallaxBackgroundProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden ${className}`}>
      {children}
      <motion.div 
        style={{ y: y1, scale, opacity }}
        className="absolute -top-20 -right-20 w-96 h-96 bg-coral/10 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: y2, scale }}
        className="absolute -bottom-20 -left-20 w-80 h-80 bg-navy/5 rounded-full blur-3xl"
      />
    </div>
  );
};

interface ParallaxLayerProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  scale?: boolean;
}

export const ParallaxLayer = ({ 
  children, 
  className = '', 
  speed = 0.3,
  scale: enableScale = false 
}: ParallaxLayerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, enableScale ? 1.15 : 1, 1]);

  return (
    <motion.div 
      ref={ref} 
      style={{ y, scale }} 
      className={className}
    >
      {children}
    </motion.div>
  );
};
