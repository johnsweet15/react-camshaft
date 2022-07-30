import React from 'react';
import { motion } from 'framer-motion';
import './Button.scss';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  onAnimationStart?: () => null;
  onDragStart?: () => null;
  onDragEnd?: () => null;
  onDrag?: () => null;
}

const Button = ({ label, children, style, onClick, ...props }: ButtonProps) => {
  return (
    <motion.button
      whileHover={{
        cursor: 'pointer',
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        opacity: 0.8,
        transition: { duration: 0.1 },
        scale: 1,
      }}
      style={style}
      onClick={onClick}
      {...props}
    >
      {label || children}
    </motion.button>
  );
};

export default Button;
