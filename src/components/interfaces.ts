import React from 'react';

/** Override these react props so framer motion doesnt complain they are incompatible */
export interface BaseProps<T> extends React.ButtonHTMLAttributes<T> {
  onAnimationStart?: () => null;
  onDragStart?: () => null;
  onDragEnd?: () => null;
  onDrag?: () => null;
}
