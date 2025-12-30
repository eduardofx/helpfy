
import React from 'react';
import { motion } from 'framer-motion';

interface FloatingShapesProps {
  variant?: 'coral' | 'navy' | 'white' | 'mixed';
  density?: 'low' | 'medium' | 'high';
  className?: string;
}

const FloatingShapes = ({ 
  variant = 'coral', 
  density = 'medium',
  className = '' 
}: FloatingShapesProps) => {
  
  const getShapeCount = () => {
    switch (density) {
      case 'low': return 4;
      case 'medium': return 8;
      case 'high': return 12;
      default: return 8;
    }
  };

  const getColors = () => {
    switch (variant) {
      case 'coral':
        return ['hsl(var(--coral))', 'hsl(var(--coral) / 0.6)', 'hsl(var(--coral) / 0.3)'];
      case 'navy':
        return ['hsl(var(--navy))', 'hsl(var(--navy) / 0.6)', 'hsl(var(--navy) / 0.3)'];
      case 'white':
        return ['rgba(255,255,255,0.8)', 'rgba(255,255,255,0.5)', 'rgba(255,255,255,0.2)'];
      case 'mixed':
        return ['hsl(var(--coral) / 0.5)', 'hsl(var(--navy) / 0.3)', 'hsl(var(--coral) / 0.2)'];
      default:
        return ['hsl(var(--coral))', 'hsl(var(--coral) / 0.6)', 'hsl(var(--coral) / 0.3)'];
    }
  };

  const shapes = Array.from({ length: getShapeCount() }, (_, i) => {
    const colors = getColors();
    const shapeTypes = ['circle', 'triangle', 'square', 'hexagon', 'diamond'];
    const shapeType = shapeTypes[i % shapeTypes.length];
    const size = 8 + Math.random() * 24;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = 15 + Math.random() * 20;
    const color = colors[i % colors.length];
    const opacity = 0.1 + Math.random() * 0.2;

    return { id: i, shapeType, size, x, y, delay, duration, color, opacity };
  });

  const renderShape = (shape: typeof shapes[0]) => {
    const baseClasses = "absolute pointer-events-none";
    
    switch (shape.shapeType) {
      case 'circle':
        return (
          <div
            className={baseClasses}
            style={{
              width: shape.size,
              height: shape.size,
              borderRadius: '50%',
              backgroundColor: shape.color,
              opacity: shape.opacity,
            }}
          />
        );
      case 'triangle':
        return (
          <div
            className={baseClasses}
            style={{
              width: 0,
              height: 0,
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid ${shape.color}`,
              opacity: shape.opacity,
            }}
          />
        );
      case 'square':
        return (
          <div
            className={baseClasses}
            style={{
              width: shape.size,
              height: shape.size,
              backgroundColor: shape.color,
              opacity: shape.opacity,
              borderRadius: 2,
            }}
          />
        );
      case 'hexagon':
        return (
          <div
            className={baseClasses}
            style={{
              width: shape.size,
              height: shape.size * 0.866,
              backgroundColor: shape.color,
              opacity: shape.opacity,
              clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
            }}
          />
        );
      case 'diamond':
        return (
          <div
            className={baseClasses}
            style={{
              width: shape.size,
              height: shape.size,
              backgroundColor: shape.color,
              opacity: shape.opacity,
              transform: 'rotate(45deg)',
              borderRadius: 2,
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          initial={{ 
            x: `${shape.x}vw`, 
            y: `${shape.y}%`,
            rotate: 0,
            scale: 0.8
          }}
          animate={{ 
            x: [`${shape.x}vw`, `${shape.x + (Math.random() - 0.5) * 20}vw`, `${shape.x}vw`],
            y: [`${shape.y}%`, `${shape.y + (Math.random() - 0.5) * 30}%`, `${shape.y}%`],
            rotate: [0, 180, 360],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute"
        >
          {renderShape(shape)}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingShapes;
