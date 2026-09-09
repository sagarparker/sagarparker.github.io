import React, { useEffect, useRef, useState } from 'react';

interface FadeProps {
  /** Stagger in seconds, applied as a CSS transition-delay. */
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'header' | 'footer' | 'li';
  children: React.ReactNode;
}

/**
 * Reveals its children with a blur + translate transition the first time it
 * scrolls into view. Falls back to visible when IntersectionObserver is
 * unavailable, and is disabled entirely under prefers-reduced-motion (CSS).
 */
const Fade: React.FC<FadeProps> = ({
  delay = 0,
  className = '',
  as: Tag = 'div',
  children,
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={`fade ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--fade-delay': `${delay}s` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
};

export default Fade;
