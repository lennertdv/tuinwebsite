
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button', variant = 'primary', className = '' }) => {
  const primaryStyles = 'bg-olive-green text-white hover:bg-dark-green';
  const secondaryStyles = 'bg-transparent text-olive-green border-2 border-olive-green hover:bg-olive-green hover:text-white';

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type={type}
      onClick={onClick}
      className={`
        px-6 py-3 rounded-full font-semibold tracking-wide
        transition-all duration-300 ease-in-out shadow-sm
        ${variant === 'primary' ? primaryStyles : secondaryStyles}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
};

export default Button;
