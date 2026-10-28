import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'navy';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  withArrow = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 whitespace-nowrap shrink-0 active:scale-[0.98] select-none cursor-pointer";
  
  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs rounded-md gap-1.5",
    md: "px-5 py-2.5 text-sm rounded-lg gap-2",
    lg: "px-6 py-3 text-base rounded-lg gap-2.5"
  }[size];

  const variantStyles = {
    primary: "bg-[#0798F2] hover:bg-[#0584d4] text-white shadow-sm hover:shadow-md focus-visible:ring-[#0798F2] border border-transparent",
    secondary: "bg-white hover:bg-slate-50 text-[#062747] border border-[#E4EDF5] hover:border-[#0798F2]/40 shadow-sm focus-visible:ring-[#062747]",
    outline: "bg-transparent hover:bg-[#0798F2]/10 text-[#0798F2] border border-[#0798F2] focus-visible:ring-[#0798F2]",
    navy: "bg-[#062747] hover:bg-[#031A30] text-white shadow-sm hover:shadow-md focus-visible:ring-[#062747] border border-transparent",
    ghost: "bg-transparent hover:bg-slate-100 text-slate-700 focus-visible:ring-slate-400"
  }[variant];

  return (
    <button
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </button>
  );
};
