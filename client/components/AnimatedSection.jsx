'use client';
import { useState, useEffect, useRef } from 'react';

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.12 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  let initialTransform = 'translate-y-12 scale-[0.96]';
  if (direction === 'down') initialTransform = '-translate-y-12 scale-[0.96]';
  if (direction === 'left') initialTransform = 'translate-x-12 scale-[0.96]';
  if (direction === 'right') initialTransform = '-translate-x-12 scale-[0.96]';
  if (direction === 'scale') initialTransform = 'scale-90';

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${className} transition-all duration-700 ease-out transform ${
        isVisible
          ? 'opacity-100 translate-y-0 translate-x-0 scale-100'
          : `opacity-0 ${initialTransform} pointer-events-none`
      }`}
    >
      {children}
    </div>
  );
}
