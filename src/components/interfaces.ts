import React from 'react';

/** Override these react props so framer motion doesnt complain they are incompatible */
export interface BaseProps<T> extends React.ButtonHTMLAttributes<T> {
  onAnimationStart?: () => void;
  onDragStart?: () => void;
  onDragEnd?: () => void;
  onDrag?: () => void;
}
