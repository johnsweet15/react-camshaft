import React from 'react';
import { motion } from 'framer-motion';
import { BaseProps } from '../interfaces';
import theme from '../../theme';
import './Button.module.scss';

/** Extend all standard React button props */
export interface ButtonProps extends BaseProps<HTMLButtonElement> {
  /** Button text, else uses children */
  label?: string;
}

const Button = ({ label, children, style, className, ...props }: ButtonProps) => {
  return (
    <motion.button
      className={`button ${className}`}
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
      style={{ ...theme?.components?.Button, ...style }}
      {...props}
    >
      {label || children}
    </motion.button>
  );
};

export default Button;
