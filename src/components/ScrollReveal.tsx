
import React, { useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  threshold = 0.1,
  delay = 0,
  direction = 'up'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              currentRef.classList.add('animate-in');
              currentRef.classList.remove('animate-out');
            }, delay);
          } else {
            currentRef.classList.add('animate-out');
            currentRef.classList.remove('animate-in');
          }
        });
      },
      { threshold }
    );
    
    observer.observe(currentRef);
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);
  
  const getDirectionClasses = () => {
    switch (direction) {
      case 'up':
        return 'translate-y-8 opacity-0';
      case 'down':
        return '-translate-y-8 opacity-0';
      case 'left':
        return 'translate-x-8 opacity-0';
      case 'right':
        return '-translate-x-8 opacity-0';
      case 'none':
        return 'opacity-0';
      default:
        return 'translate-y-8 opacity-0';
    }
  };
  
  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        getDirectionClasses(),
        className
      )}
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
