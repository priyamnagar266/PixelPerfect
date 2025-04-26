import React from 'react';
import { motion } from 'framer-motion';

interface AnimateElementProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

const AnimateElement: React.FC<AnimateElementProps> = ({
  children,
  delay = 0,
  duration = 0.8,
  direction = 'up',
  className = '',
}) => {
  const getInitialAnimation = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 30 };
      case 'down':
        return { opacity: 0, y: -30 };
      case 'left':
        return { opacity: 0, x: 30 };
      case 'right':
        return { opacity: 0, x: -30 };
      case 'none':
        return { opacity: 0 };
      default:
        return { opacity: 0, y: 30 };
    }
  };

  const getAnimateAnimation = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 };
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 };
      case 'none':
        return { opacity: 1 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitialAnimation()}
      animate={getAnimateAnimation()}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateElement;
