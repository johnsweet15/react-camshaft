import React from 'react';
import { motion } from 'framer-motion';
import { BaseProps } from '../interfaces';
import { theme } from '../Theme/Theme';
import './Button.scss';

export interface ButtonProps extends BaseProps<HTMLButtonElement> {
  /** Button text, else uses children */
  label?: string;
}

const Button = ({ label, children, ...props }: ButtonProps) => {
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
      style={{ ...theme?.components?.Button, ...props.style }}
      {...props}
    >
      {label || children}
    </motion.button>
  );
};

export default Button;
