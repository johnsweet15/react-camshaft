import React from 'react';
import { motion } from 'framer-motion';
import './Button.scss';

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
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
    >
      {props.label}
    </motion.button>
  );
};

export default Button;
