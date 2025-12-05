import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative font-bold rounded-lg transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 tracking-wide";
  
  const variants = {
    // Laranja/Vermelho Intenso com Glow - Updated shadow RGB to match brand-600 (#dc2626 -> 220,38,38)
    primary: "bg-gradient-to-r from-brand-600 to-orange-600 hover:from-brand-500 hover:to-orange-500 text-white shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] border border-white/10",
    
    // Branco Tech
    secondary: "bg-white text-slate-900 hover:bg-slate-100 shadow-lg hover:shadow-white/20",
    
    // Borda Fina Futurista
    outline: "bg-transparent border border-slate-600 text-slate-300 hover:text-white hover:border-brand-500 hover:bg-brand-500/10",
    
    // Botão Neon Ciano
    glow: "bg-cyan-950/50 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-900/50 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs uppercase tracking-wider",
    md: "px-6 py-3 text-sm font-bold uppercase tracking-widest",
    lg: "px-8 py-4 text-base font-bold uppercase tracking-widest"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default Button;