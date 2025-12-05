import React, { useState, useEffect } from 'react';
import { ChefHat } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const phoneNumber = "5527999592488";
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre o Chefe Mind.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-slate-800 py-3' : 'bg-transparent border-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <div className="absolute inset-0 bg-brand-600 blur-lg opacity-50 group-hover:opacity-100 transition-opacity rounded-full"></div>
            <div className="relative bg-slate-900 border border-slate-700 p-2 rounded-xl">
              <ChefHat className="text-brand-500 w-6 h-6" strokeWidth={2} />
            </div>
          </div>
          <span className="text-xl md:text-2xl font-display font-bold tracking-tight text-white">
            CHEFE<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-orange-500">MIND</span>
            <span className="text-[10px] ml-1 px-1.5 py-0.5 rounded border border-brand-900 bg-brand-950 text-brand-400 font-mono align-top hidden sm:inline-block">PRO</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-slate-400 hover:text-white text-sm font-medium transition-colors uppercase tracking-wide">Recursos</a>
          <a href="#results" className="text-slate-400 hover:text-white text-sm font-medium transition-colors uppercase tracking-wide">Resultados</a>
          <a href="#pricing" className="text-slate-400 hover:text-white text-sm font-medium transition-colors uppercase tracking-wide">Planos</a>
          <Button onClick={handleWhatsApp} size="sm" variant="primary" className="shadow-none hover:shadow-lg">
             Falar no WhatsApp
          </Button>
        </nav>

        <div className="md:hidden">
           <Button onClick={handleWhatsApp} size="sm" variant="primary">Contratar</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;