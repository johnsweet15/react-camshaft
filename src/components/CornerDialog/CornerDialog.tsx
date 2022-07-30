import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BaseProps } from '../interfaces';
import theme from '../../theme';
import './CornerDialog.scss';

export interface CornerDialogProps extends BaseProps<HTMLDivElement> {
  title?: string;
  description?: string;
  show?: boolean;
  close?: () => void;
}

const variants = {
  hidden: {
    x: '100vw',
    opacity: 0,
  },
  visible: {
    x: '0vw',
    right: 0,
    bottom: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: 'spring',
      damping: 25,
      stiffness: 250,
    },
  },
  exit: {
    opacity: 0,
    x: '100vw',
    transition: {
      duration: 0.5,
    },
  },
};

const CornerDialog = ({ children, title, description, show = true, style, ...props }: CornerDialogProps) => {
  return (
    <AnimatePresence initial={true} exitBeforeEnter={true}>
      {show && (
        <motion.div
          className='corner-dialog-container'
          variants={variants}
          initial='hidden'
          animate='visible'
          exit='exit'
          style={{ ...theme?.components?.CornerDialog, ...style }}
          {...props}
        >
          <h1>{title}</h1>
          <p>{description}</p>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CornerDialog;
