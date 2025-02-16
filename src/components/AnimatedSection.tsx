import React, { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

export const AnimatedSection = ({ children, className = '' }: AnimatedSectionProps) => {
  const ref = useScrollAnimation();

  return (
    <div ref={ref} className={`scroll-animate ${className}`}>
      {children}
    </div>
  );
};