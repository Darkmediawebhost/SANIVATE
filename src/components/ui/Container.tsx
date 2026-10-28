import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide' | 'full';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'default'
}) => {
  const sizeStyles = {
    narrow: 'max-w-4xl',
    default: 'max-w-7xl',
    wide: 'max-w-[1400px]',
    full: 'max-w-full'
  }[size];

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 w-full ${sizeStyles} ${className}`}>
      {children}
    </div>
  );
};
