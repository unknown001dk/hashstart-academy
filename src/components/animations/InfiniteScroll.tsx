import React from 'react';

interface InfiniteScrollProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
}

const speeds = {
  slow: '40s',
  normal: '30s',
  fast: '20s'
};

const InfiniteScroll = ({ 
  children, 
  direction = 'left', 
  speed = 'normal',
  className = '' 
}: InfiniteScrollProps) => {
  return (
    <div className="overflow-hidden">
      <div 
        className={`flex animate-infinite-scroll ${className}`}
        style={{
          animationDirection: direction === 'left' ? 'normal' : 'reverse',
          animationDuration: speeds[speed]
        }}
      >
        {children}
        {children} {/* Duplicate for seamless loop */}
      </div>
    </div>
  );
};

export default InfiniteScroll;